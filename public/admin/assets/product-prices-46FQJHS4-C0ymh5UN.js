import{D as M,c as W,a as z}from"./chunk-ZF4OL2GU-CxScb7zO.js";import{a1 as E,ad as K,ao as L,a3 as T,af as U,R as k,Q as q,j as e,b as V,ap as A,i as $,r as B,a8 as Q,a9 as J,B as D,g as O,l as X,v as Y}from"./index-fE89mBva.js";import{c as Z}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as I}from"./chunk-6HTZNHPT-BFE0fN1-.js";import{R as p,u as G}from"./chunk-6DAFMWMA-BcdKHg4p.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./index.esm-K2z-sRmY.js";import"./index-DHv7ff5R.js";import"./checkbox-BCpsOPOQ.js";import"./prompt-DKNQ8d-z.js";var ee=({form:s})=>{const{store:t}=O(),{regions:i}=$({limit:9999}),{price_preferences:a}=X({}),{setCloseOnEscape:r}=G(),n=se({currencies:t==null?void 0:t.supported_currencies,regions:i,pricePreferences:a}),o=Y({control:s.control,name:"variants"});return e.jsx(M,{columns:n,data:o,state:s,onEditingChange:j=>r(!j)})},re=z(),se=({currencies:s=[],regions:t=[],pricePreferences:i=[]})=>{const{t:a}=V();return B.useMemo(()=>[re.column({id:a("fields.title"),header:a("fields.title"),cell:r=>{const n=r.row.original;return e.jsx(M.ReadonlyCell,{context:r,children:e.jsx("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:e.jsx("span",{className:"truncate",children:n.title})})})},disableHiding:!0}),...W({currencies:s.map(r=>r.currency_code),regions:t,pricePreferences:i,getFieldName:(r,n)=>{var o;return(o=r.column.id)!=null&&o.startsWith("currency_prices")?`variants.${r.row.index}.prices.${n}`:`variants.${r.row.index}.prices.${n}`},t:a})],[a,s,t,i])},te=E({variants:K(E({prices:L(T(),T().or(U()).optional()).optional()}))}),ie=({product:s,variantId:t})=>{var _;const{t:i}=V(),{handleSuccess:a}=G(),{mutateAsync:r,isPending:n}=A(s.id),{regions:o}=$({limit:9999}),j=B.useMemo(()=>o!=null&&o.length?o.reduce((l,d)=>(l[d.id]=d.currency_code,l),{}):{},[o]),c=t?(_=s.variants)==null?void 0:_.filter(l=>l.id===t):s.variants,g=Q({defaultValues:{variants:c==null?void 0:c.map(l=>({title:l.title,prices:l.prices.reduce((d,u)=>{var m;return(m=u.rules)!=null&&m.region_id?d[u.rules.region_id]=u.amount:d[u.currency_code]=u.amount,d},{})}))},resolver:J(te,{})}),H=g.handleSubmit(async l=>{const d=l.variants.map((u,m)=>({id:c[m].id,prices:Object.entries(u.prices||{}).filter(([f,x])=>x!==""&&typeof x<"u").map(([f,x])=>{var b,w,C,F,N,S;const h=f.startsWith("reg_")?f:void 0,P=f.startsWith("reg_")?j[h]:f;let v;h?v=(C=(w=(b=c==null?void 0:c[m])==null?void 0:b.prices)==null?void 0:w.find(y=>y.rules.region_id===h))==null?void 0:C.id:v=(S=(N=(F=c==null?void 0:c[m])==null?void 0:F.prices)==null?void 0:N.find(y=>y.currency_code===P&&Object.keys(y.rules??{}).length===0))==null?void 0:S.id;const R=Z(x);return{id:v,currency_code:P,amount:R,...h?{rules:{region_id:h}}:{}}})}));await r(d,{onSuccess:()=>{a("..")}})});return e.jsx(p.Form,{form:g,children:e.jsxs(I,{onSubmit:H,className:"flex size-full flex-col",children:[e.jsx(p.Header,{}),e.jsx(p.Body,{className:"flex flex-col overflow-hidden",children:e.jsx(ee,{form:g})}),e.jsx(p.Footer,{children:e.jsxs("div",{className:"flex w-full items-center justify-end gap-x-2",children:[e.jsx(p.Close,{asChild:!0,children:e.jsx(D,{variant:"secondary",size:"small",children:i("actions.cancel")})}),e.jsx(D,{type:"submit",variant:"primary",size:"small",isLoading:n,children:i("actions.save")})]})})]})})},he=()=>{const{id:s,variant_id:t}=k(),{product:i,isLoading:a,isError:r,error:n}=q(s,{fields:"+variants,+variants.prices"});if(r)throw n;return e.jsx(p,{children:!a&&i&&e.jsx(ie,{product:i,variantId:t})})};export{he as Component};
