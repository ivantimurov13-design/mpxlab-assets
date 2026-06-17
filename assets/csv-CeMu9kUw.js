import{c as d}from"./index-CCsU-cyA.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);function y(c,a,r){const s=o=>{const t=o==null?"":String(o);return/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t},l=[a,...r].map(o=>o.map(s).join(";")).join(`\r
`),i=new Blob(["\uFEFF"+l],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i),e=document.createElement("a");e.href=n,e.download=c,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}export{u as D,y as e};
