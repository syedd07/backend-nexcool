import{L as M}from"./chunk-6WKBBTKM-DV8IaysF.js";import{u as I}from"./chunk-Q4WL2IOD-D-6pWMPM.js";import{a as q,b as O,g as F,c as H}from"./chunk-54IEHX46-DWMq7yL7.js";import{u as Q}from"./chunk-RJSD5KRU-DmU70GP0.js";import{aE as x,j as e,R as G,d as $,a as J,S as K,q as V,b as h,H as b,A as w,T as l,r as g,aF as z,V as Y,aj as f,Y as U,L as W,e as Z,k as X,aG as ee,aB as se,s as te,t as P}from"./index-fE89mBva.js";import{u as ae,a as re}from"./chunk-ZE4FSVPB-Dsmc0qrq.js";import{T as y}from"./chunk-2RQLKDBF-B1AkGkPQ.js";import{u as ie,D as oe}from"./chunk-OYHBAUAW-CPgYWdrY.js";import"./lodash-DBgPiN7n.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{P as T}from"./pencil-square-8iUWMlJq.js";import{T as le}from"./trash-BTD-6R7m.js";import{F as N}from"./folder-illustration-BzkuGbLJ.js";import{P as ne}from"./plus-mini-hzxuGXul.js";import{u as ce}from"./use-prompt-nhMyC5Lc.js";import{C}from"./container-CHdCxSh5.js";import{S as k}from"./status-badge-D43AN_fM.js";import{C as p}from"./command-bar-BhgjXTR-.js";import{C as _}from"./checkbox-BCpsOPOQ.js";import{c as de}from"./index-DHv7ff5R.js";import"./chunk-RERSP5B2-VUQt83Ct.js";import"./chunk-ADOCJB6L-gP9dLlwt.js";import"./chunk-P3UUX2T6-BxvQ0bMk.js";import"./chunk-C76H5USB-CJQLQ64d.js";import"./Trans-Czq-VtGf.js";import"./x-mark-mini-B1ygkDAu.js";import"./check-DFBa8ZCX.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./index-UYBB-XCw.js";import"./triangle-left-mini-KkIu55fj.js";import"./prompt-DKNQ8d-z.js";var is=t=>{const{id:s}=t.params||{},{product_category:a}=x(s,{fields:"name"},{initialData:t.data,enabled:!!s});return a?e.jsx("span",{children:a.name}):null},me=({category:t})=>{const{t:s}=h(),a=q(t.is_active,s),r=O(t.is_internal,s),o=I(t);return e.jsxs(C,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{children:t.name}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(k,{color:a.color,children:a.label}),e.jsx(k,{color:r.color,children:r.label})]}),e.jsx(w,{groups:[{actions:[{label:s("actions.edit"),icon:e.jsx(T,{}),to:"edit"}]},{actions:[{label:s("actions.delete"),icon:e.jsx(le,{}),onClick:o}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:s("fields.description")}),e.jsx(l,{size:"small",leading:"compact",children:t.description||"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:s("fields.handle")}),e.jsxs(l,{size:"small",leading:"compact",children:["/",t.handle]})]})]})},ue=({category:t})=>{const{t:s}=h();return e.jsxs(C,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{level:"h2",children:s("categories.organize.header")}),e.jsx(w,{groups:[{actions:[{label:s("categories.organize.action"),icon:e.jsx(T,{}),to:"organize"}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:s("categories.fields.path.label")}),e.jsx(pe,{category:t})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:s("categories.fields.children.label")}),e.jsx(ge,{category:t})]})]})},pe=({category:t})=>{const[s,a]=g.useState(!1),{t:r}=h(),{product_category:o,isLoading:d,isError:n,error:j}=x(t.id,{include_ancestors_tree:!0,fields:"id,name,*parent_category"}),i=g.useMemo(()=>F(o),[o]);if(d||!o)return e.jsx(z,{className:"h-5 w-16"});if(n)throw j;return i.length?i.length>1&&!s?e.jsxs("div",{className:"grid grid-cols-[20px_1fr] items-start gap-x-2",children:[e.jsx(N,{}),e.jsxs("div",{className:"flex w-full items-center gap-x-0.5 overflow-hidden",children:[e.jsx(Y,{content:r("categories.fields.path.tooltip"),children:e.jsx("button",{className:"outline-none",type:"button",onClick:()=>a(!0),children:e.jsx(l,{size:"xsmall",leading:"compact",weight:"plus",children:"..."})})}),e.jsx("div",{className:"flex size-[15px] shrink-0 items-center justify-center",children:e.jsx(f,{})}),e.jsx(l,{size:"xsmall",leading:"compact",weight:"plus",className:"truncate",children:i[i.length-1].name})]})]}):i.length>1&&s?e.jsxs("div",{className:"grid grid-cols-[20px_1fr] items-start gap-x-2",children:[e.jsx(N,{}),e.jsx("div",{className:"gap- flex flex-wrap items-center gap-x-0.5 gap-y-1",children:i.map((c,u)=>e.jsxs("div",{className:"flex items-center gap-x-0.5",children:[u===i.length-1?e.jsx(l,{size:"xsmall",leading:"compact",weight:"plus",children:c.name}):e.jsx(M,{to:`/categories/${c.id}`,className:"txt-compact-xsmall-plus text-ui-fg-subtle hover:text-ui-fg-base focus-visible:text-ui-fg-base",children:c.name}),u<i.length-1&&e.jsx(f,{})]},c.id))})]}):e.jsx("div",{className:"grid grid-cols-1 items-start gap-x-2",children:i.map((c,u)=>e.jsxs("div",{className:"flex items-center gap-x-0.5",children:[e.jsx(l,{size:"xsmall",leading:"compact",weight:"plus",children:c.name}),u<i.length-1&&e.jsx(f,{})]},c.id))}):e.jsx(l,{size:"small",leading:"compact",children:"-"})},ge=({category:t})=>{const{product_category:s,isLoading:a,isError:r,error:o}=x(t.id,{include_descendants_tree:!0,fields:"id,name,category_children"}),d=g.useMemo(()=>H(s),[s]);if(a||!s)return e.jsx(z,{className:"h-5 w-16"});if(r)throw o;return d.length?e.jsx("div",{className:"flex w-full flex-wrap gap-1",children:d.map(n=>e.jsx(U,{size:"2xsmall",className:"max-w-full",asChild:!0,children:e.jsx(W,{to:`/categories/${n.id}`,children:e.jsx("span",{className:"truncate",children:n.name})})},n.id))}):e.jsx(l,{size:"small",leading:"compact",children:"-"})},v=10,xe=({category:t})=>{const{t:s}=h(),a=ce(),[r,o]=g.useState({}),{raw:d,searchParams:n}=ae({pageSize:v}),{products:j,count:i,isLoading:c,isError:u,error:D}=Z({...n,category_id:[t.id]},{placeholderData:X}),S=je(),E=re(["categories"]),{table:A}=ie({data:j||[],columns:S,count:i,getRowId:m=>m.id,pageSize:v,enableRowSelection:!0,enablePagination:!0,rowSelection:{state:r,updater:o}}),{mutateAsync:B}=ee(t.id),R=async()=>{const m=Object.keys(r);await a({title:s("general.areYouSure"),description:s("categories.products.remove.confirmation",{count:m.length}),confirmText:s("actions.remove"),cancelText:s("actions.cancel")})&&await B({remove:m},{onSuccess:()=>{P.success(s("categories.products.remove.successToast",{count:m.length})),o({})},onError:L=>{P.error(L.message)}})};if(u)throw D;return e.jsxs(C,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(b,{level:"h2",children:s("products.domain")}),e.jsx(w,{groups:[{actions:[{label:s("actions.add"),icon:e.jsx(ne,{}),to:"products"}]}]})]}),e.jsx(oe,{table:A,filters:E,columns:S,orderBy:[{key:"title",label:s("fields.title")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],pageSize:v,count:i,navigateTo:m=>`/products/${m.id}`,isLoading:c,queryObject:d,noRecords:{message:s("categories.products.list.noRecordsMessage")}}),e.jsx(p,{open:!!Object.keys(r).length,children:e.jsxs(p.Bar,{children:[e.jsx(p.Value,{children:s("general.countSelected",{count:Object.keys(r).length})}),e.jsx(p.Seperator,{}),e.jsx(p.Command,{action:R,label:s("actions.remove"),shortcut:"r"})]})})]})},he=de(),je=()=>{const t=Q();return g.useMemo(()=>[he.display({id:"select",header:({table:s})=>e.jsx(_,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a)}),cell:({row:s})=>e.jsx(_,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...t],[t])},os=()=>{const{id:t}=G(),s=$(),{getWidgets:a}=J(),{product_category:r,isLoading:o,isError:d,error:n}=x(t,void 0,{initialData:s});if(o||!r)return e.jsx(K,{mainSections:2,sidebarSections:1,showJSON:!0,showMetadata:!0});if(d)throw n;return e.jsxs(y,{widgets:{after:a("product_category.details.after"),before:a("product_category.details.before"),sideAfter:a("product_category.details.side.after"),sideBefore:a("product_category.details.side.before")},showJSON:!0,showMetadata:!0,data:r,children:[e.jsxs(y.Main,{children:[e.jsx(me,{category:r}),e.jsx(xe,{category:r})]}),e.jsx(y.Sidebar,{children:e.jsx(ue,{category:r})})]})},fe=t=>({queryKey:se.detail(t),queryFn:async()=>te.admin.productCategory.retrieve(t)}),ls=async({params:t})=>{const s=t.id,a=fe(s);return V.ensureQueryData(a)};export{is as Breadcrumb,os as Component,ls as loader};