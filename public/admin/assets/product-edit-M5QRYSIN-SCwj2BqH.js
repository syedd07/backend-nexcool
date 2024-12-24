import{t as I}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{S as L}from"./chunk-JLD5AXG6-BRYG_LIq.js";import{K as w}from"./chunk-6HTZNHPT-BFE0fN1-.js";import{b as a,u as P}from"./chunk-6DAFMWMA-BcdKHg4p.js";import{P as D}from"./chunk-UF3RZ3OU-CURQ3aF0.js";import{a1 as M,a2 as R,a3 as n,a4 as z,R as B,b as F,Q as H,j as e,H as U,a as V,n as A,U as K,t as b,w as s,x,T as _,F as O,B as g}from"./index-fE89mBva.js";import{S as d}from"./select-sTRQe44H.js";import{T as Q}from"./textarea-DrERgnpJ.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-DKNQ8d-z.js";import"./triangles-mini-68SZRIfJ.js";import"./check-DFBa8ZCX.js";var Z=M({status:R(["draft","published","proposed","rejected"]),title:n().min(1),subtitle:n().optional(),handle:n().min(1),material:n().optional(),description:n().optional(),discountable:z()}),$=({product:l})=>{const{t}=F(),{handleSuccess:c}=P(),{getFormFields:m,getFormConfigs:u}=V(),j=m("product","edit"),y=u("product","edit"),o=A({defaultValues:{status:l.status,title:l.title,material:l.material||"",subtitle:l.subtitle||"",handle:l.handle||"",description:l.description||"",discountable:l.discountable},schema:Z,configs:y,data:l}),{mutateAsync:E,isPending:v}=K(l.id),C=o.handleSubmit(async r=>{const{title:h,discountable:p,handle:i,status:T,...S}=r,N=I(S);await E({title:h,discountable:p,handle:i,status:T,...N},{onSuccess:({product:f})=>{b.success(t("products.edit.successToast",{title:f.title})),c()},onError:f=>{b.error(f.message)}})});return e.jsx(a.Form,{form:o,children:e.jsxs(w,{onSubmit:C,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(a.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:o.control,name:"status",render:({field:{onChange:r,ref:h,...p}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.status")}),e.jsx(s.Control,{children:e.jsxs(d,{...p,onValueChange:r,children:[e.jsx(d.Trigger,{ref:h,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:["draft","published","proposed","rejected"].map(i=>e.jsx(d.Item,{value:i,children:t(`products.productStatus.${i}`)},i))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"title",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.title")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"subtitle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.subtitle")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(_,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(x,{...r,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"material",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.material")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"description",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.description")}),e.jsx(s.Control,{children:e.jsx(Q,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(L,{control:o.control,name:"discountable",label:t("fields.discountable"),description:t("products.discountableHint")}),e.jsx(O,{fields:j,form:o})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(g,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(g,{size:"small",type:"submit",isLoading:v,children:t("actions.save")})]})})]})})},oe=()=>{const{id:l}=B(),{t}=F(),{product:c,isLoading:m,isError:u,error:j}=H(l,{fields:D});if(u)throw j;return e.jsxs(a,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{asChild:!0,children:e.jsx(U,{children:t("products.edit.header")})}),e.jsx(a.Description,{className:"sr-only",children:t("products.edit.description")})]}),!m&&c&&e.jsx($,{product:c})]})};export{oe as Component};