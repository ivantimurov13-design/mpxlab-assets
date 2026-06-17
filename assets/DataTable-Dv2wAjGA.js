import{c as x,j as t,v as r}from"./index-BM_gcGAf.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=x("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=x("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function y({columns:n,rows:d,getRowKey:p,onRowClick:l,rowClassName:i,sort:m,order:c,onSort:o,empty:b,stickyHeader:g=!0}){const h=e=>e==="right"?"text-right":e==="center"?"text-center":"text-left";return t.jsx("div",{className:"w-full overflow-x-auto",children:t.jsxs("table",{className:"w-full border-collapse text-sm",children:[t.jsx("thead",{className:r("bg-surface",g&&"sticky top-0 z-10"),children:t.jsx("tr",{className:"border-b border-border-2",children:n.map(e=>{const a=!!e.sortKey&&!!o,s=e.sortKey&&m===e.sortKey;return t.jsx("th",{style:e.width?{width:e.width}:void 0,className:r("select-none px-3 py-2.5 text-2xs font-semibold uppercase tracking-wide text-fg-muted",h(e.align),a&&"cursor-pointer hover:text-fg",e.headerClassName),onClick:a?()=>o(e.sortKey):void 0,"aria-sort":s?c==="asc"?"ascending":"descending":void 0,children:t.jsxs("span",{className:r("inline-flex items-center gap-1",e.align==="right"&&"flex-row-reverse"),children:[e.header,s&&(c==="asc"?t.jsx(j,{className:"h-3 w-3 text-brand-2"}):t.jsx(f,{className:"h-3 w-3 text-brand-2"}))]})},e.key)})})}),t.jsx("tbody",{children:d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:n.length,className:"p-0",children:b})}):d.map((e,a)=>t.jsx("tr",{onClick:l?()=>l(e):void 0,className:r("border-b border-border/70 transition-colors",l&&"cursor-pointer","hover:bg-surface-2/60",i==null?void 0:i(e)),children:n.map(s=>{const u=typeof s.cellClassName=="function"?s.cellClassName(e):s.cellClassName;return t.jsx("td",{className:r("px-3 py-2.5 align-middle",h(s.align),u),children:s.render(e)},s.key)})},p(e,a)))})]})})}export{y as D};
