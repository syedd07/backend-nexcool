import{u as I}from"./chunk-RJSD5KRU-DmU70GP0.js";import{a5 as u,R as A,aE as B,j as t,b as P,r as S,a8 as D,a9 as H,e as M,aG as N,t as f,E as V,B as x,V as G}from"./index-fE89mBva.js";import{u as K,a as L}from"./chunk-ZE4FSVPB-Dsmc0qrq.js";import{u as O,D as q}from"./chunk-OYHBAUAW-CPgYWdrY.js";import"./lodash-DBgPiN7n.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{K as Q}from"./chunk-6HTZNHPT-BFE0fN1-.js";import{R as l,u as U}from"./chunk-6DAFMWMA-BcdKHg4p.js";import{C as y}from"./checkbox-BCpsOPOQ.js";import{c as X}from"./index-DHv7ff5R.js";import"./chunk-RERSP5B2-VUQt83Ct.js";import"./chunk-ADOCJB6L-gP9dLlwt.js";import"./chunk-P3UUX2T6-BxvQ0bMk.js";import"./chunk-C76H5USB-CJQLQ64d.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./plus-mini-hzxuGXul.js";import"./command-bar-BhgjXTR-.js";import"./index-UYBB-XCw.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./x-mark-mini-B1ygkDAu.js";import"./triangle-left-mini-KkIu55fj.js";import"./prompt-DKNQ8d-z.js";var Z=u.object({product_ids:u.array(u.string())}),m=50,p="p",$=({categoryId:c,products:o=[]})=>{const{t:e}=P(),{handleSuccess:a}=U(),[d,n]=S.useState(o.reduce((r,i)=>(r[i.id]=!0,r),{})),s=D({defaultValues:{product_ids:[]},resolver:H(Z)}),b=r=>{const i=typeof r=="function"?r(d):r;s.setValue("product_ids",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),n(i)},{searchParams:j,raw:C}=K({pageSize:m,prefix:p}),{products:v,count:g,isPending:E,isError:R,error:_}=M({...j}),h=W(),k=L(["categories"]),{table:T}=O({data:v,columns:h,getRowId:r=>r.id,count:g,pageSize:m,prefix:p,enableRowSelection:r=>!o.some(i=>i.id===r.original.id),enablePagination:!0,rowSelection:{state:d,updater:b}}),{mutateAsync:w,isPending:F}=N(c),z=s.handleSubmit(async r=>{await w({add:r.product_ids},{onSuccess:()=>{f.success(e("categories.products.add.successToast",{count:r.product_ids.length-o.length})),a()},onError:i=>{f.error(i.message)}})});if(R)throw _;return t.jsx(l.Form,{form:s,children:t.jsxs(Q,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(l.Header,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.product_ids&&t.jsx(V,{variant:"error",children:s.formState.errors.product_ids.message}),t.jsx(l.Close,{asChild:!0,children:t.jsx(x,{size:"small",variant:"secondary",children:e("actions.cancel")})}),t.jsx(x,{size:"small",type:"submit",isLoading:F,children:e("actions.save")})]})}),t.jsx(l.Body,{className:"size-full overflow-hidden",children:t.jsx(q,{table:T,columns:h,pageSize:m,count:g,queryObject:C,filters:k,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],prefix:p,isLoading:E,layout:"fill",pagination:!0,search:"autofocus"})})]})})},J=X(),W=()=>{const{t:c}=P(),o=I();return S.useMemo(()=>[J.display({id:"select",header:({table:e})=>t.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect(),d=e.getIsSelected()||a,n=t.jsx(y,{checked:d,disabled:a,onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}});return a?t.jsx(G,{content:c("categories.products.add.disabledTooltip"),side:"right",children:n}):n}}),...o],[c,o])},ke=()=>{const{id:c}=A(),{product_category:o,isPending:e,isFetching:a,isError:d,error:n}=B(c,{fields:"products.id"}),s=!e&&!a&&!!o;if(d)throw n;return t.jsx(l,{children:s&&t.jsx($,{categoryId:o.id,products:o.products})})};export{ke as Component};
