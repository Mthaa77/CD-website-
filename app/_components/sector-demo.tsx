'use client';
import {useState} from 'react';
import {Check} from 'lucide-react';
import {sectors} from '../_lib/catalogue';
import {stories} from '../_lib/sector-stories';
import {SectorArt} from './sector-art';

export function SectorDemo({sector:s}:{sector:typeof sectors[number]}) {
 const story=stories[s.slug],school=s.slug==='schools';
 const [index,setIndex]=useState(0);
 const [option,setOption]=useState(story.options[0]);
 const [checked,setChecked]=useState<string[]>([]);
 const [ready,setReady]=useState(false);
 const detail=school?checked.length+' of '+story.options.length+' items reviewed':option;
 function changeTopic(i:number){setIndex(i);setReady(false);setChecked([])}
 const brief=[s.name,s.choices[index],detail].join(' · ');
 return <section className={'cd-workroom tone-'+s.slug} id="experience">
 <header><small>Interactive service example</small><h2>{story.label}</h2><p>{story.description}</p></header>
 <div className="cd-console"><div className="cd-controls"><fieldset><legend>{s.prompt}</legend><div className="cd-options">{s.choices.map((v,i)=><button key={v} aria-pressed={i===index} onClick={()=>changeTopic(i)}>{v}</button>)}</div></fieldset>
 <fieldset><legend>{story.secondary}</legend>{school?<div className="cd-checklist">{story.options.map(v=><label key={v}><input type="checkbox" checked={checked.includes(v)} onChange={e=>{setChecked(e.target.checked?[...checked,v]:checked.filter(c=>c!==v));setReady(false)}}/>{v}</label>)}</div>:<div className="cd-options">{story.options.map(v=><button key={v} aria-pressed={v===option} onClick={()=>{setOption(v);setReady(false)}}>{v}</button>)}</div>}</fieldset>
 <button className="cd-button" onClick={()=>setReady(true)}>{school?'Review checklist':s.action}</button></div>
 <div className="cd-receipt" aria-live="polite"><SectorArt key={index} slug={s.slug}/><small>{ready?'Example ready':s.result}</small><h3>{story.details[index]}</h3><p>{s.choices[index]} · {detail}</p>{ready&&<p className="cd-confirm"><Check size={18}/> {school?'Checklist summary ready to review.':'Example brief prepared.'}</p>}</div></div>
 <a className="cd-text" href={'https://wa.me/27724026893?text='+encodeURIComponent('Hi Kabelo, I tried your '+story.label.toLowerCase()+' example ('+brief+'). Can we discuss a website with this feature?')}>Discuss this feature with Kabelo</a></section>;
}
