import{u as z}from"./chunk-Q4WL2IOD-D-6pWMPM.js";import{g as P,a as N,b as w}from"./chunk-54IEHX46-DWMq7yL7.js";import{T as c,a as E}from"./chunk-MSDRGCRR-CLonS6em.js";import{S as x}from"./chunk-ADOCJB6L-gP9dLlwt.js";import{S}from"./chunk-2RQLKDBF-B1AkGkPQ.js";import{a as D,j as e,b as p,ag as H,k as I,H as q,T as u,B as h,L as f,r as v,m as j,I as A,aj as R,A as k}from"./index-fE89mBva.js";import{u as L,D as M}from"./chunk-OYHBAUAW-CPgYWdrY.js";import"./lodash-DBgPiN7n.js";import{u as B}from"./chunk-C76H5USB-CJQLQ64d.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{P as O}from"./pencil-square-8iUWMlJq.js";import{T as Q}from"./trash-BTD-6R7m.js";import{C as $}from"./container-CHdCxSh5.js";import{c as b}from"./index-DHv7ff5R.js";import"./use-prompt-nhMyC5Lc.js";import"./prompt-DKNQ8d-z.js";import"./chunk-P3UUX2T6-BxvQ0bMk.js";import"./Trans-Czq-VtGf.js";import"./x-mark-mini-B1ygkDAu.js";import"./check-DFBa8ZCX.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./plus-mini-hzxuGXul.js";import"./command-bar-BhgjXTR-.js";import"./index-UYBB-XCw.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./triangle-left-mini-KkIu55fj.js";var d=b(),G=()=>{const{t}=p();return v.useMemo(()=>[d.accessor("name",{header:()=>e.jsx(c,{text:t("fields.name")}),cell:({getValue:s,row:a})=>{const i=a.getToggleExpandedHandler();if(a.original.parent_category!==void 0){const r=P(a.original);return e.jsx("div",{className:"flex size-full items-center gap-1 overflow-hidden",children:r.map((o,l)=>e.jsxs("div",{className:j("overflow-hidden",{"text-ui-fg-muted flex items-center gap-x-1":l!==r.length-1}),children:[e.jsx(u,{size:"small",leading:"compact",className:"truncate",children:o.name}),l!==r.length-1&&e.jsx(u,{size:"small",leading:"compact",children:"/"})]},o.id))})}return e.jsxs("div",{className:"flex size-full items-center gap-x-3 overflow-hidden",children:[e.jsx("div",{className:"flex size-7 items-center justify-center",children:a.getCanExpand()?e.jsx(A,{type:"button",onClick:r=>{r.stopPropagation(),r.preventDefault(),i()},size:"small",variant:"transparent",className:"text-ui-fg-subtle",children:e.jsx(R,{className:j({"rotate-90 transition-transform will-change-transform":a.getIsExpanded()})})}):null}),e.jsx("span",{className:"truncate",children:s()})]})}}),d.accessor("handle",{header:()=>e.jsx(c,{text:t("fields.handle")}),cell:({getValue:s})=>e.jsx(E,{text:`/${s()}`})}),d.accessor("is_active",{header:()=>e.jsx(c,{text:t("fields.status")}),cell:({getValue:s})=>{const{color:a,label:i}=N(s(),t);return e.jsx(x,{color:a,children:i})}}),d.accessor("is_internal",{header:()=>e.jsx(c,{text:t("categories.fields.visibility.label")}),cell:({getValue:s})=>{const{color:a,label:i}=w(s(),t);return e.jsx(x,{color:a,children:i})}})],[t])},W=({pageSize:t=20,prefix:s})=>{const a=B(["q","offset","order"],s),i={q:a.q,limit:t,offset:a.offset?Number(a.offset):0,order:a.order};return{raw:a,searchParams:i}},m=20,Z=()=>{const{t}=p(),{raw:s,searchParams:a}=W({pageSize:m}),i=s.q?{include_ancestors_tree:!0,fields:"id,name,handle,is_active,is_internal,parent_category",...a}:{include_descendants_tree:!0,parent_category_id:"null",fields:"id,name,category_children,handle,is_internal,is_active",...a},{product_categories:r,count:o,isLoading:l,isError:y,error:C}=H({...i},{placeholderData:I}),g=K(),{table:_}=L({data:r||[],columns:g,count:o,getRowId:n=>n.id,getSubRows:n=>n.category_children,enableExpandableRows:!0,pageSize:m}),T=!!r&&r.length>0;if(y)throw C;return e.jsxs($,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(q,{children:t("categories.domain")}),e.jsx(u,{className:"text-ui-fg-subtle",size:"small",children:t("categories.subtitle")})]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[T&&e.jsx(h,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(f,{to:"organize",children:t("categories.organize.action")})}),e.jsx(h,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(f,{to:"create",children:t("actions.create")})})]})]}),e.jsx(M,{table:_,columns:g,count:o,pageSize:m,isLoading:l,navigateTo:n=>n.id,queryObject:s,search:!0,pagination:!0})]})},F=({category:t})=>{const{t:s}=p(),a=z(t);return e.jsx(k,{groups:[{actions:[{label:s("actions.edit"),icon:e.jsx(O,{}),to:`${t.id}/edit`}]},{actions:[{label:s("actions.delete"),icon:e.jsx(Q,{}),onClick:a}]}]})},J=b(),K=()=>{const t=G();return v.useMemo(()=>[...t,J.display({id:"actions",cell:({row:s})=>e.jsx(F,{category:s.original})})],[t])},Ee=()=>{const{getWidgets:t}=D();return e.jsx(S,{widgets:{after:t("product_category.list.after"),before:t("product_category.list.before")},hasOutlet:!0,children:e.jsx(Z,{})})};export{Ee as Component};
