'use client';
import {useState} from 'react';
import Link from 'next/link';
import {sectors} from '../_lib/catalogue';
import {stories} from '../_lib/sector-stories';
import SpotlightCard from './react-bits/spotlight-card';
import {SectorArt} from './sector-art';
export function SectorSelector(){
 const [active,select]=useState('construction');
 const story=stories[active];
 return <section id="sectors" className="cd-selector"><header><small>Industry demos</small><h2>See what fits <em>your business.</em></h2></header>
 <div className="cd-selector-layout"><div className="cd-sector-list">{sectors.map(s=><div className="cd-sector-row" key={s.slug}><button aria-controls="sector-preview" aria-pressed={active===s.slug} onClick={()=>select(s.slug)}>{s.name}<span aria-hidden="true">{active===s.slug?'−':'+'}</span></button><Link aria-label={"Open "+s.name+" experience"} href={"/sectors/"+s.slug}>Open</Link></div>)}<a href="/services">Explore all services</a></div>
 <div id="sector-preview" aria-live="polite"><SpotlightCard key={active} className={'cd-sector-preview tone-'+active} spotlightColor="rgba(173, 199, 255, 0.20)"><SectorArt slug={active}/><div><small>{story.label}</small><h3>{story.title}</h3><p>{story.description}</p><Link className="cd-button" href={'/sectors/'+active}>Try the {story.label.toLowerCase()}</Link></div></SpotlightCard></div></div></section>;
}
