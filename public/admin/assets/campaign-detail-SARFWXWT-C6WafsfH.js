import{a as K,u as Q,b as F}from"./chunk-6KEI7WC2-DlA_06Df.js";import{D as G}from"./chunk-QV6CTQOZ-ClG0reTC.js";import{r as l,bO as h,dB as A,j as t,d as J,R as V,a as W,S as U,q as Y,b as m,H as u,A as j,T as c,u as Z,dA as X,Y as ee,dl as te,dC as k,L as se,B as re,av as ae,dD as ie,s as oe,t as N}from"./index-fE89mBva.js";import{c as ne}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{T as v}from"./chunk-2RQLKDBF-B1AkGkPQ.js";import{u as le,D as ce}from"./chunk-OYHBAUAW-CPgYWdrY.js";import"./lodash-DBgPiN7n.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{P as y}from"./pencil-square-8iUWMlJq.js";import{T as z}from"./Trans-Czq-VtGf.js";import{T as E}from"./trash-BTD-6R7m.js";import{u as _}from"./use-prompt-nhMyC5Lc.js";import{C as p}from"./container-CHdCxSh5.js";import{S as de}from"./status-badge-D43AN_fM.js";import{C as P}from"./checkbox-BCpsOPOQ.js";import{c as me}from"./index-DHv7ff5R.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-MSDRGCRR-CLonS6em.js";import"./chunk-P3UUX2T6-BxvQ0bMk.js";import"./chunk-ADOCJB6L-gP9dLlwt.js";import"./chunk-C76H5USB-CJQLQ64d.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./x-mark-mini-B1ygkDAu.js";import"./check-DFBa8ZCX.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./plus-mini-hzxuGXul.js";import"./command-bar-BhgjXTR-.js";import"./index-UYBB-XCw.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./triangle-left-mini-KkIu55fj.js";import"./prompt-DKNQ8d-z.js";var ue=Object.defineProperty,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,T=(e,s,r)=>s in e?ue(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,pe=(e,s)=>{for(var r in s||(s={}))O.call(s,r)&&T(e,r,s[r]);if(b)for(var r of b(s))R.call(s,r)&&T(e,r,s[r]);return e},xe=(e,s)=>{var r={};for(var a in e)O.call(e,a)&&s.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&b)for(var a of b(e))s.indexOf(a)<0&&R.call(e,a)&&(r[a]=e[a]);return r};const B=l.forwardRef((e,s)=>{var r=e,{color:a="currentColor"}=r,i=xe(r,["color"]);return l.createElement("svg",pe({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:s},i),l.createElement("g",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},l.createElement("path",{d:"M13.368 10.167a6.446 6.446 0 1 1-8.535-8.535"}),l.createElement("path",{d:"M13.944 7.5A6.444 6.444 0 0 0 7.5 1.056V7.5z"})),l.createElement("defs",null,l.createElement("clipPath",{id:"a"},l.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});B.displayName="ChartPie";function fe(e,s){const r=h(e),a=h(s);return r.getTime()>a.getTime()}function ge(e,s){const r=h(e),a=h(s);return+r<+a}var C="+promotions.id",mt=e=>{const{id:s}=e.params||{},{campaign:r}=A(s,{fields:C},{initialData:e.data,enabled:!!s});return r?t.jsx("span",{children:r.name}):null},he=({campaign:e})=>{var r,a,i;const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4 px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsxs("div",{className:"flex-grow",children:[t.jsx("div",{className:"bg-ui-bg-base shadow-borders-base float-left flex size-7 items-center justify-center rounded-md",children:t.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:t.jsx(B,{className:"text-ui-fg-subtle"})})}),t.jsx(u,{className:"text-ui-fg-subtle ml-10 mt-[1.5px] font-normal",level:"h3",children:s("campaigns.fields.budget_limit")})]}),t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:s("actions.edit"),to:"edit-budget"}]}]})]}),t.jsx("div",{children:t.jsx(c,{className:"text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",size:"small",leading:"compact",children:t.jsx(z,{i18nKey:"campaigns.totalSpend",values:{amount:((r=e==null?void 0:e.budget)==null?void 0:r.limit)||"no limit",currency:((a=e==null?void 0:e.budget)==null?void 0:a.type)==="spend"&&(e!=null&&e.budget.limit)?(i=e.budget)==null?void 0:i.currency_code:""},components:[t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"amount"),t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"currency")]})})})]})};function be(e){return e.ends_at&&ge(new Date(e.ends_at),new Date)?"expired":e.starts_at&&fe(new Date(e.starts_at),new Date)?"scheduled":"active"}var je=e=>{switch(e){case"expired":return"red";case"scheduled":return"orange";case"active":return"green";default:return"grey"}},ye=({campaign:e})=>{var x,f;const{t:s}=m(),r=_(),a=Z(),{mutateAsync:i}=X(e.id),o=async()=>{await r({title:s("campaigns.delete.title"),description:s("campaigns.delete.description",{name:e.name}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await i(void 0,{onSuccess:()=>{N.success(s("campaigns.delete.successToast",{name:e.name})),a("/campaigns",{replace:!0})},onError:g=>{N.error(g.message)}})},n=be(e);return t.jsxs(p,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(u,{children:e.name}),t.jsxs("div",{className:"flex items-center gap-x-4",children:[t.jsx(de,{color:je(n),children:s(`campaigns.status.${n}`)}),t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:s("actions.edit"),to:`/campaigns/${e.id}/edit`}]},{actions:[{icon:t.jsx(E,{}),label:s("actions.delete"),onClick:o}]}]})]})]}),t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("campaigns.fields.identifier")}),t.jsx(c,{size:"small",leading:"compact",children:e.campaign_identifier})]}),t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("fields.description")}),t.jsx(c,{size:"small",leading:"compact",children:e.description||"-"})]}),(e==null?void 0:e.budget)&&e.budget.type==="spend"&&t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("fields.currency")}),t.jsxs("div",{children:[t.jsx(ee,{size:"xsmall",children:e==null?void 0:e.budget.currency_code}),t.jsx(c,{className:"inline pl-3",size:"small",leading:"compact",children:(f=ne[(x=e==null?void 0:e.budget.currency_code)==null?void 0:x.toUpperCase()])==null?void 0:f.name})]})]})]})},w=10,ve=({campaign:e})=>{const[s,r]=l.useState({}),{t:a}=m(),i=_(),o=_e(),n=K(),{searchParams:x,raw:f}=Q({pageSize:w}),{promotions:S,count:g,isLoading:I,isError:L,error:M}=te({...x,campaign_id:e.id}),{table:q}=le({data:S??[],columns:o,count:g,getRowId:d=>d.id,enablePagination:!0,enableRowSelection:!0,pageSize:w,rowSelection:{state:s,updater:r},meta:{campaignId:e.id}});if(L)throw M;const{mutateAsync:H}=k(e.id),$=async()=>{const d=Object.keys(s);await i({title:a("campaigns.promotions.remove.title",{count:d.length}),description:a("campaigns.promotions.remove.description",{count:d.length}),confirmText:a("actions.continue"),cancelText:a("actions.cancel")})&&await H({remove:d},{onSuccess:()=>r({})})};return t.jsxs(p,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(u,{level:"h2",children:a("promotions.domain")}),t.jsx(se,{to:`/campaigns/${e.id}/add-promotions`,children:t.jsx(re,{variant:"secondary",size:"small",children:a("general.add")})})]}),t.jsx(ce,{table:q,columns:o,pageSize:w,isLoading:I,count:g,navigateTo:d=>`/promotions/${d.id}`,filters:n,search:!0,pagination:!0,orderBy:[{key:"code",label:a("fields.code")},{key:"type",label:a("fields.type")},{key:"created_at",label:a("fields.createdAt")},{key:"updated_at",label:a("fields.updatedAt")}],queryObject:f,commands:[{action:$,label:a("actions.remove"),shortcut:"r"}],noRecords:{message:a("campaigns.promotions.list.noRecordsMessage")}})]})},we=({promotion:e,campaignId:s})=>{const{t:r}=m(),{mutateAsync:a}=k(s),i=_(),o=async()=>{await i({title:r("campaigns.promotions.remove.title",{count:1}),description:r("campaigns.promotions.remove.description",{count:1}),confirmText:r("actions.continue"),cancelText:r("actions.cancel")})&&await a({remove:[e.id]})};return t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:r("actions.edit"),to:`/promotions/${e.id}/edit`}]},{actions:[{icon:t.jsx(E,{}),label:r("actions.remove"),onClick:o}]}]})},D=me(),_e=()=>{const e=F();return l.useMemo(()=>[D.display({id:"select",header:({table:s})=>t.jsx(P,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:r=>s.toggleAllPageRowsSelected(!!r)}),cell:({row:s})=>t.jsx(P,{checked:s.getIsSelected(),onCheckedChange:r=>s.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...e,D.display({id:"actions",cell:({row:s,table:r})=>{const{campaignId:a}=r.options.meta;return t.jsx(we,{promotion:s.original,campaignId:a})}})],[e])},Ce=({campaign:e})=>{var r,a,i,o;const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4 px-6 py-4",children:[t.jsxs("div",{className:"mb-2 grid grid-cols-[28px_1fr] items-center gap-x-3",children:[t.jsx("div",{className:"bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md",children:t.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:t.jsx(ae,{className:"text-ui-fg-subtle"})})}),t.jsx(u,{level:"h3",className:"text-ui-fg-subtle font-normal",children:((r=e.budget)==null?void 0:r.type)==="spend"?s("campaigns.fields.total_spend"):s("campaigns.fields.total_used")})]}),t.jsx("div",{children:t.jsx(c,{className:"text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",size:"small",leading:"compact",children:t.jsx(z,{i18nKey:"campaigns.totalSpend",values:{amount:((a=e==null?void 0:e.budget)==null?void 0:a.used)||0,currency:((i=e==null?void 0:e.budget)==null?void 0:i.type)==="spend"?(o=e==null?void 0:e.budget)==null?void 0:o.currency_code:""},components:[t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"amount"),t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"currency")]})})})]})},Se=({campaign:e})=>{const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx(u,{level:"h2",children:s("campaigns.configuration.header")}),t.jsx(j,{groups:[{actions:[{label:s("actions.edit"),icon:t.jsx(y,{}),to:"configuration"}]}]})]}),t.jsx(G,{startsAt:e.starts_at,endsAt:e.ends_at,showTime:!0})]})},ut=()=>{const e=J(),{id:s}=V(),{campaign:r,isLoading:a,isError:i,error:o}=A(s,{fields:C},{initialData:e}),{getWidgets:n}=W();if(a||!r)return t.jsx(U,{mainSections:2,sidebarSections:3,showJSON:!0,showMetadata:!0});if(i)throw o;return t.jsxs(v,{widgets:{after:n("campaign.details.after"),before:n("campaign.details.before"),sideAfter:n("campaign.details.side.after"),sideBefore:n("campaign.details.side.before")},hasOutlet:!0,showJSON:!0,showMetadata:!0,data:r,children:[t.jsxs(v.Main,{children:[t.jsx(ye,{campaign:r}),t.jsx(ve,{campaign:r})]}),t.jsxs(v.Sidebar,{children:[t.jsx(Se,{campaign:r}),t.jsx(Ce,{campaign:r}),t.jsx(he,{campaign:r})]})]})},Ne=e=>({queryKey:ie.detail(e),queryFn:async()=>oe.admin.campaign.retrieve(e,{fields:C})}),pt=async({params:e})=>{const s=e.id,r=Ne(s);return Y.ensureQueryData(r)};export{mt as Breadcrumb,ut as Component,pt as loader};