import{x as d,ac as p}from"./index-CFCd031F.js";import{a as m,j as i}from"./react-vendor-DnBarn1j.js";import{b as x}from"./viewUrl-Mmzl1OlO.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=d("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);function k({getParams:a}){const[t,o]=m.useState(!1),r=async()=>{const s=window.location.origin+window.location.pathname+x(a());try{await navigator.clipboard.writeText(s)}catch{}o(!0),window.setTimeout(()=>o(!1),1800)};return i.jsxs("button",{onClick:r,title:"Скопировать ссылку на этот вид (колонки, сортировка, фильтры, период)",className:"flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-border-2 hover:text-fg",children:[t?i.jsx(p,{className:"h-3.5 w-3.5 text-pos"}):i.jsx(y,{className:"h-3.5 w-3.5"}),t?"Скопировано":"Ссылка"]})}function g(a,t,o){const r=n=>{const c=n==null?"":String(n);return/[";\n\r]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},s=[t,...o].map(n=>n.map(r).join(";")).join(`\r
`),u=new Blob(["\uFEFF"+s],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(u),e=document.createElement("a");e.href=l,e.download=a,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}export{k as C,f as D,g as e};
