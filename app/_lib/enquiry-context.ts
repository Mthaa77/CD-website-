import { websitePackages } from './website-packages';
import { isProjectGoal, type ProjectGoal } from './project-goals';
export const ENQUIRY_SERVICES = { websites:'Website design', apps:'Web application', systems:'Business system', stores:'Online store', care:'Ongoing care', help:'Help me choose' } as const;
export type EnquiryService = keyof typeof ENQUIRY_SERVICES;
export type EnquiryContext = { service?: EnquiryService; goal?: ProjectGoal; package?: string };
export function normaliseContext(value: {service?: unknown; goal?: unknown; package?: unknown}): EnquiryContext {
  const service = typeof value.service === 'string' && Object.hasOwn(ENQUIRY_SERVICES,value.service) ? value.service as EnquiryService : undefined;
  const pkg = websitePackages.find(p=>p.id === value.package)?.id;
  return { service: service || (pkg ? 'websites' : undefined), goal:isProjectGoal(value.goal) ? value.goal : undefined, package:(!service || service === 'websites') ? pkg : undefined };
}
export function enquiryHref(value: {service?: unknown; goal?: unknown; package?: unknown} = {}) {
  const context=normaliseContext(value), params=new URLSearchParams();
  for (const [key,val] of Object.entries(context)) if (val) params.set(key,val);
  return '/contact'+(params.size ? '?'+params.toString() : '')+'#enquiry';
}
export function resolveContext(params: URLSearchParams, stored: EnquiryContext = {}): EnquiryContext {
  const explicit=normaliseContext({service:params.get('service'),goal:params.get('goal'),package:params.get('package')});
  const merged=normaliseContext({...stored,...Object.fromEntries(Object.entries(explicit).filter(([,v])=>v !== undefined))});
  return merged;
}
export function rememberContext(context: EnquiryContext) {
  try { sessionStorage.setItem('carter_enquiry_context',JSON.stringify(normaliseContext(context))); if(context.goal) sessionStorage.setItem('carter_project_goal',context.goal); else sessionStorage.removeItem('carter_project_goal'); dispatchEvent(new Event('carter-context')); } catch {}
}
export function readContext(): EnquiryContext {
  try { const raw=JSON.parse(sessionStorage.getItem('carter_enquiry_context') || '{}'); return normaliseContext({...raw,goal:raw.goal || sessionStorage.getItem('carter_project_goal')}); } catch { return {}; }
}
