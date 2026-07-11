import{y as u}from"./index-CVufLJSI.js";import{a as m,j as l}from"./react-vendor-xK5fHKdQ.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=u("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=u("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=u("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);function y(e){return e.mode==="preset"?`p:${e.weeks}`:e.mode==="months"?`m:${e.months}`:`r:${e.start}:${e.end}`}const f=/^\d{4}-\d{2}-\d{2}$/;function b(e){if(!e)return;const[t,n,r]=e.split(":"),o=Number(n);if(t==="p"&&Number.isFinite(o)&&o>0)return{mode:"preset",weeks:o};if(t==="m"&&Number.isFinite(o)&&o>0)return{mode:"months",months:o};if(t==="r"&&f.test(n??"")&&f.test(r??""))return{mode:"range",start:n,end:r}}function j(e){const t=o=>{const s=e.get(o);return s?s.split(",").filter(Boolean):void 0};let n;try{const o=e.get("f");o&&(n=JSON.parse(o))}catch{}const r=e.get("order");return{cols:t("cols"),pinned:t("pin"),sort:e.get("sort")||void 0,order:r==="asc"||r==="desc"?r:void 0,filters:n,period:b(e.get("p"))}}function g(e){var r,o;const t=new URLSearchParams;if((r=e.cols)!=null&&r.length&&t.set("cols",e.cols.join(",")),(o=e.pinned)!=null&&o.length&&t.set("pin",e.pinned.join(",")),e.sort&&t.set("sort",e.sort),e.order&&t.set("order",e.order),e.filters&&Object.keys(e.filters).length&&t.set("f",JSON.stringify(e.filters)),e.period&&t.set("p",y(e.period)),e.extra)for(const[s,i]of Object.entries(e.extra))i&&t.set(s,i);const n=t.toString();return n?`?${n}`:""}function L({getParams:e}){const[t,n]=m.useState(!1),r=async()=>{const o=window.location.origin+window.location.pathname+g(e());try{await navigator.clipboard.writeText(o)}catch{}n(!0),window.setTimeout(()=>n(!1),1800)};return l.jsxs("button",{onClick:r,title:"Скопировать ссылку на этот вид (колонки, сортировка, фильтры, период)",className:"flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-border-2 hover:text-fg",children:[t?l.jsx(p,{className:"h-3.5 w-3.5 text-pos"}):l.jsx(h,{className:"h-3.5 w-3.5"}),t?"Скопировано":"Ссылка"]})}function N(e,t,n){const r=a=>{const d=a==null?"":String(a);return/[";\n\r]/.test(d)?`"${d.replace(/"/g,'""')}"`:d},o=[t,...n].map(a=>a.map(r).join(";")).join(`\r
`),s=new Blob(["\uFEFF"+o],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),c=document.createElement("a");c.href=i,c.download=e,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}export{L as C,w as D,N as e,j as p};
