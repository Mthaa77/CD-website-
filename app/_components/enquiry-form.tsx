"use client";
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Phone, MessageCircle } from 'lucide-react';
import { contactError } from '../_lib/contact-validation';
import { ENQUIRY_SERVICES, normaliseContext, readContext, rememberContext, resolveContext, type EnquiryContext } from '../_lib/enquiry-context';
import { websitePackages } from '../_lib/website-packages';
import { PROJECT_GOALS, GOAL_KEYS } from '../_lib/project-goals';
import { measure } from '../_lib/measurement';
import './phase-three.css';

function newKey() {
  const bytes=crypto.getRandomValues(new Uint8Array(16)); bytes[6]=(bytes[6]&15)|64; bytes[8]=(bytes[8]&63)|128;
  const hex=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}
export function EnquiryForm({ source = 'contact', initialContext }: { source?: 'homepage' | 'contact'; initialContext?: EnquiryContext }) {
  const Heading=source==='contact' ? 'h1' : 'h2';
  const [context,setContext] = useState<EnquiryContext>({});
  const [form,setForm] = useState({name:'',email:'',phone:'',business:'',message:'',website:'',preferredChannel:'whatsapp'});
  const [status,setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message,setMessage] = useState('');
  const [reference,setReference] = useState('');
  const key = useRef(''); const lastBody = useRef(''); const busy=useRef(false);
  useEffect(()=>{
    const params=new URLSearchParams(location.search);
    setContext(resolveContext(params,readContext()));
    const brief=params.get('brief');
    if(brief) setForm(current=>({...current,message:'I would like to discuss '+brief.slice(0,100)+'.'}));
    const load=()=>setContext(readContext()); addEventListener('carter-context',load); return ()=>removeEventListener('carter-context',load);
  },[]);
  useEffect(()=>{ if(initialContext) setContext(current=>normaliseContext({...current,...initialContext})); },[initialContext?.service,initialContext?.goal]);
  const changeContext = (next: EnquiryContext) => { const clean=normaliseContext(next); setContext(clean); rememberContext(clean); };
  const pkg=websitePackages.find(p=>p.id===context.package);
  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault(); if(busy.current || status==='success')return;
    const error=!form.name.trim() ? 'Please add your name.' : contactError(form.preferredChannel==='email' ? form.email : '',form.preferredChannel==='email' ? '' : form.phone,form.preferredChannel);
    if(error){setStatus('error');setMessage(error);return;}
    const payload={...form,email:form.preferredChannel==='email' ? form.email : '',phone:form.preferredChannel==='email' ? '' : form.phone,project:ENQUIRY_SERVICES[context.service || 'help'],startingPoint:context.goal ? PROJECT_GOALS[context.goal].label : 'Help me choose',context,source,budget:pkg?.price || 'Discuss with me',consent:false};
    const body=JSON.stringify(payload);
    if(!key.current || lastBody.current!==body){key.current=newKey();lastBody.current=body;}
    busy.current=true;setStatus('sending');setMessage('');measure('enquiry_attempt');
    try {
      const response=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,submissionKey:key.current}),signal:AbortSignal.timeout(15000)});
      const result=await response.json() as {persisted?:boolean;leadId?:string;error?:string};
      if(!response.ok || result.persisted!==true)throw new Error(result.error || 'We could not confirm your enquiry. Please retry.');
      setStatus('success');setReference(result.leadId || '');setMessage('Your enquiry is saved. Kabelo will respond through your chosen channel.');
    } catch(error){setStatus('error');setMessage(error instanceof Error && error.name==='TimeoutError' ? 'The connection took too long. Retry with the same details; duplicate protection is in place.' : error instanceof Error ? error.message : 'Please retry. Your details are still here.');measure('enquiry_error');}
    finally{busy.current=false;}
  };
  return <section className="enquiry-studio" id="enquiry" aria-labelledby="enquiry-title"><span id="brief"/><span id="project-route"/><div className="enquiry-intro"><p className="phase-eyebrow">YOUR NEXT CHAPTER</p><Heading id="enquiry-title">Tell me what<br/><em>you need to build.</em></Heading><p>Share what your customers or team need to do. I’ll help you identify the first useful version and what it could cost.</p><div className="enquiry-direct"><a href="tel:+27724026893"><Phone size={18}/>Call Kabelo <span>072 402 6893</span></a><a href="https://wa.me/27724026893" target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp Kabelo <ArrowUpRight size={17}/></a></div><p className="enquiry-note">Your selections are editable. Sending an enquiry does not commit you to a package.</p></div>
    <form action="/api/leads" method="post" onSubmit={submit} className="enquiry-sheet" noValidate>
      {status==='success' ? <div className="enquiry-receipt" role="status"><Check size={38}/><h3>A good place to begin.</h3><p>{message}</p><small>Reference: {reference}</small><button type="button" onClick={()=>{setStatus('idle');setForm({name:'',email:'',phone:'',business:'',message:'',website:'',preferredChannel:'whatsapp'});key.current='';lastBody.current='';}}>Start a separate enquiry</button></div> : <>
      <div className="enquiry-sheet-head"><span>YOUR PROJECT SUMMARY</span><span>EDIT ANY TIME</span></div>
      <fieldset disabled={status==='sending'}><legend className="sr-only">Your project and contact details</legend><div className="enquiry-context-grid"><label>What do you need?<select value={context.service || 'help'} onChange={e=>changeContext({...context,service:e.target.value as EnquiryContext['service']})}>{Object.entries(ENQUIRY_SERVICES).map(([id,label])=><option value={id} key={id}>{label}</option>)}</select></label><label>Your priority<select value={context.goal || ''} onChange={e=>changeContext({...context,goal:e.target.value as EnquiryContext['goal']})}><option value="">Help me decide</option>{GOAL_KEYS.map(id=><option key={id} value={id}>{PROJECT_GOALS[id].label}</option>)}</select></label></div>
      {context.service==='websites' && <label className="enquiry-package">Website package<select value={context.package || ''} onChange={e=>changeContext({...context,package:e.target.value})}><option value="">Recommend a suitable scope</option>{websitePackages.map(p=><option value={p.id} key={p.id}>{p.shorthand} · {p.price}</option>)}</select>{pkg && <small>{pkg.scope} · {pkg.timeline}</small>}</label>}
      <label>Your name<input name="name" autoComplete="name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><div className="enquiry-contact-grid"><label>How should we reply?<select name="preferredChannel" value={form.preferredChannel} onChange={e=>setForm({...form,preferredChannel:e.target.value})}><option value="whatsapp">WhatsApp</option><option value="call">Phone call</option><option value="email">Email</option></select></label>{form.preferredChannel==='email' ? <label>Email address<input name="email" type="email" autoComplete="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label> : <label>Phone / WhatsApp number<input name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label>}</div>
      <details className="enquiry-extra" open={form.message ? true : undefined}><summary>Add business details or a note <span>OPTIONAL</span></summary><label>Business or organisation<input name="business" autoComplete="organization" value={form.business} onChange={e=>setForm({...form,business:e.target.value})}/></label><label>What would you like to change?<textarea name="message" rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label></details>
      <label className="enquiry-honey" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={e=>setForm({...form,website:e.target.value})}/></label>
      {status==='error' && <p className="enquiry-error" role="alert">{message}</p>}<button className="enquiry-submit" type="submit">{status==='sending' ? 'Saving your enquiry…' : 'Send my enquiry'}<ArrowUpRight size={19}/></button><p className="enquiry-privacy">We use these details to respond to this enquiry. <a href="/privacy">Privacy policy</a></p></fieldset></>}
      <noscript><p>This form needs JavaScript to save your enquiry. Please <a href="tel:+27724026893">call Kabelo</a> or <a href="https://wa.me/27724026893">contact us on WhatsApp</a>.</p><style>{`.enquiry-sheet fieldset{display:none}`}</style></noscript>
    </form></section>;
}
