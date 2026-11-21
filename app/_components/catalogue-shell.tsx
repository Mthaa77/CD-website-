import type {ReactNode} from 'react';
import {StudioNavigation} from './studio-navigation';
import {CarterSiteFooter} from './carter-site-footer';
import {sectors} from '../_lib/catalogue';
import './catalogue.css';
import './studio-redesign.css';
export function Shell({children}:{children:ReactNode}){return <><StudioNavigation/><main id="top" className="cd-site">{children}</main><CarterSiteFooter/></>}
export function SectorLinks(){return <nav aria-label="Choose your sector" className="cd-options">{sectors.map(s=><a key={s.slug} href={'/sectors/'+s.slug}>{s.name}</a>)}<a href="/services">Other sectors</a></nav>}
