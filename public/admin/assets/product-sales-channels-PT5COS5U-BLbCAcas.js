import{u as F,a as z,b as I}from"./chunk-VELNOPU6-DXqD0CzC.js";import{a1 as B,ad as M,a3 as H,R as L,Q as N,j as s,b as O,a8 as Q,a9 as U,r as d,J as V,U as q,B as f,k as G}from"./index-fE89mBva.js";import{u as J,D as Z}from"./chunk-OYHBAUAW-CPgYWdrY.js";import"./lodash-DBgPiN7n.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{R as r,u as $}from"./chunk-6DAFMWMA-BcdKHg4p.js";import{C as g}from"./checkbox-BCpsOPOQ.js";import{c as K}from"./index-DHv7ff5R.js";import"./chunk-GA34GXNI-jGYhYclN.js";import"./chunk-P3UUX2T6-BxvQ0bMk.js";import"./chunk-MSDRGCRR-CLonS6em.js";import"./chunk-ADOCJB6L-gP9dLlwt.js";import"./chunk-C76H5USB-CJQLQ64d.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./plus-mini-hzxuGXul.js";import"./command-bar-BhgjXTR-.js";import"./index-UYBB-XCw.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./x-mark-mini-B1ygkDAu.js";import"./triangle-left-mini-KkIu55fj.js";import"./prompt-DKNQ8d-z.js";var W=B({sales_channels:M(H()).optional()}),c=50,X=({product:o})=>{var p,h;const{t:e}=O(),{handleSuccess:t}=$(),l=Q({defaultValues:{sales_channels:((p=o.sales_channels)==null?void 0:p.map(a=>a.id))??[]},resolver:U(W)}),{setValue:n}=l,x=((h=o.sales_channels)==null?void 0:h.reduce((a,S)=>(a[S.id]=!0,a),{}))??{},[i,C]=d.useState(x);d.useEffect(()=>{const a=Object.keys(i);n("sales_channels",a,{shouldDirty:!0,shouldTouch:!0})},[i,n]);const{searchParams:j,raw:y}=F({pageSize:c}),{sales_channels:b,count:u,isLoading:v,isError:k,error:w}=V({...j},{placeholderData:G}),P=z(),m=ee(),{table:_}=J({data:b??[],columns:m,count:u,enablePagination:!0,enableRowSelection:!0,rowSelection:{state:i,updater:C},getRowId:a=>a.id,pageSize:c}),{mutateAsync:R,isPending:T}=q(o.id),E=l.handleSubmit(async a=>{const A=(a.sales_channels??[]).map(D=>({id:D}));await R({sales_channels:A},{onSuccess:()=>{t()}})});if(k)throw w;return s.jsx(r.Form,{form:l,children:s.jsxs("div",{className:"flex h-full flex-col overflow-hidden",children:[s.jsx(r.Header,{}),s.jsx(r.Body,{className:"flex-1 overflow-hidden",children:s.jsx(Z,{table:_,columns:m,pageSize:c,isLoading:v,count:u,filters:P,search:"autofocus",pagination:!0,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:y,layout:"fill"})}),s.jsx(r.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(r.Close,{asChild:!0,children:s.jsx(f,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(f,{size:"small",isLoading:T,onClick:E,children:e("actions.save")})]})})]})})},Y=K(),ee=()=>{const o=I();return d.useMemo(()=>[Y.display({id:"select",header:({table:e})=>s.jsx(g,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>s.jsx(g,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...o],[o])},Te=()=>{const{id:o}=L(),{product:e,isLoading:t,isError:l,error:n}=N(o);if(l)throw n;return s.jsx(r,{children:!t&&e&&s.jsx(X,{product:e})})};export{Te as Component};