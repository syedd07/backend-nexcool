import{u as N}from"./chunk-C76H5USB-CJQLQ64d.js";import{T as R,L as w}from"./chunk-L72F5JVQ-LfkafXnV.js";import{D as b}from"./chunk-AOFGTNG6-CF5QRbJq.js";import{a as S,N as T}from"./chunk-WX2SMNCD-ga1yq9Gg.js";import{j as e,fc as C,L as M,B as _,a6 as I,r as j}from"./index-fE89mBva.js";import{u as z,g as L,a as O}from"./index-DHv7ff5R.js";var D=({prefix:g,pageSize:n=20})=>{const t=N(["offset","q","order","created_at","updated_at"],g),{offset:r,q:a,order:x,created_at:o,updated_at:s}=t;return{searchParams:{limit:n,offset:r?Number(r):0,order:x,created_at:o?JSON.parse(o):void 0,updated_at:s?JSON.parse(s):void 0,q:a},raw:t}},J=({variant:g="country",isPending:n,action:t,count:r=0,table:a,queryObject:x,prefix:o,children:s})=>{if(n)return e.jsxs("div",{className:"flex flex-col divide-y",children:[Array.from({length:3}).map((l,c)=>e.jsx("div",{className:"bg-ui-bg-field-component h-[52px] w-full animate-pulse"},c)),e.jsx(C,{layout:"fit"})]});const i=Object.values(x).filter(l=>!!l).length===0,u=!n&&r===0&&!i,d=!n&&r===0&&i,{pageIndex:f,pageSize:p}=a.getState().pagination;return e.jsxs("div",{className:"flex flex-col divide-y",children:[e.jsxs("div",{className:"flex flex-col justify-between gap-x-4 gap-y-3 px-6 py-4 md:flex-row md:items-center",children:[e.jsx("div",{children:s}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[!d&&e.jsx("div",{className:"flex w-full items-center gap-x-2 md:w-fit",children:e.jsx(b,{keys:["updated_at","created_at"],prefix:o})}),e.jsx(M,{to:t.to,children:e.jsx(_,{size:"small",variant:"secondary",children:t.label})})]})]}),u&&e.jsx(S,{}),d&&e.jsx(T,{}),!d&&!u?n?Array.from({length:3}).map((l,c)=>e.jsx("div",{className:"bg-ui-bg-field-component h-[60px] w-full animate-pulse"},c)):a.getRowModel().rows.map(l=>e.jsx(R,{variant:g,taxRegion:l.original,role:"row","aria-rowindex":l.index},l.id)):null,!d&&e.jsx(w,{prefix:o,canNextPage:a.getCanNextPage(),canPreviousPage:a.getCanPreviousPage(),count:r,nextPage:a.nextPage,previousPage:a.previousPage,pageCount:a.getPageCount(),pageIndex:f,pageSize:p})]})},$=({data:g=[],count:n=0,pageSize:t=10,prefix:r})=>{const[a,x]=I(),o=`${r?`${r}_`:""}offset`,s=a.get(o),[{pageIndex:i,pageSize:u},d]=j.useState({pageIndex:s?Math.ceil(Number(s)/t):0,pageSize:t}),f=j.useMemo(()=>({pageIndex:i,pageSize:u}),[i,u]);j.useEffect(()=>{const c=s?Math.ceil(Number(s)/t):0;c!==i&&d(m=>({...m,pageIndex:c}))},[s,t,i]);const p=c=>{const m=c(f),{pageIndex:P,pageSize:y}=m;return x(h=>{if(!P)return h.delete(o),h;const v=new URLSearchParams(h);return v.set(o,String(P*y)),v}),d(m),m};return{table:z({data:g,columns:[],pageCount:Math.ceil(n/u),state:{pagination:f},getCoreRowModel:L(),onPaginationChange:p,getPaginationRowModel:O(),manualPagination:!0})}};export{J as T,$ as a,D as u};