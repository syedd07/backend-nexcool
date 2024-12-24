import{a1 as u,a3 as t,j as e,b as f,a8 as j,a9 as g,eF as y,t as o,H as v,T as b,w as s,x as c,B as d}from"./index-fE89mBva.js";import{K as F}from"./chunk-6HTZNHPT-BFE0fN1-.js";import{R as r,u as S}from"./chunk-6DAFMWMA-BcdKHg4p.js";import"./prompt-DKNQ8d-z.js";var C=u({name:t().min(1),type:t().min(1)});function N(){const{t:a}=f(),{handleSuccess:m}=S(),n=j({defaultValues:{name:"",type:""},resolver:g(C)}),{mutateAsync:x,isPending:p}=y(),h=n.handleSubmit(async i=>{await x({name:i.name,type:i.type},{onSuccess:({shipping_profile:l})=>{o.success(a("shippingProfile.create.successToast",{name:l.name})),m(`/settings/locations/shipping-profiles/${l.id}`)},onError:l=>{o.error(l.message)}})});return e.jsx(r.Form,{form:n,children:e.jsxs(F,{onSubmit:h,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(r.Header,{}),e.jsx(r.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(v,{className:"capitalize",children:a("shippingProfile.create.header")}),e.jsx(b,{size:"small",className:"text-ui-fg-subtle",children:a("shippingProfile.create.hint")})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Field,{control:n.control,name:"name",render:({field:i})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.name")}),e.jsx(s.Control,{children:e.jsx(c,{...i})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"type",render:({field:i})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:a("shippingProfile.tooltip.type"),children:a("fields.type")}),e.jsx(s.Control,{children:e.jsx(c,{...i})}),e.jsx(s.ErrorMessage,{})]})})]})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(d,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(d,{type:"submit",size:"small",isLoading:p,children:a("actions.save")})]})})]})})}function E(){return e.jsx(r,{children:e.jsx(N,{})})}export{E as Component};
