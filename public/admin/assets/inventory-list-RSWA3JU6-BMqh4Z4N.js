import{S as v}from"./chunk-2RQLKDBF-B1AkGkPQ.js";import{P as m}from"./chunk-P3UUX2T6-BxvQ0bMk.js";import{u as g,D as b}from"./chunk-OYHBAUAW-CPgYWdrY.js";import{a as x,j as s,b as p,e6 as k,H as j,T as _,B as w,L as N,r as S,b7 as q,ea as T,A as I}from"./index-fE89mBva.js";import"./lodash-DBgPiN7n.js";import{u as P}from"./chunk-C76H5USB-CJQLQ64d.js";import"./chunk-FZFMTVUS-CWPjZ8Qc.js";import"./chunk-BNLHRJ2A-DHzKpMTe.js";import"./chunk-KHOKHZC6-DUvOWu6V.js";import{P as C}from"./pencil-square-8iUWMlJq.js";import{T as z}from"./trash-BTD-6R7m.js";import{u as L}from"./use-prompt-nhMyC5Lc.js";import{C as D}from"./container-CHdCxSh5.js";import{c as E}from"./index-DHv7ff5R.js";import"./Trans-Czq-VtGf.js";import"./x-mark-mini-B1ygkDAu.js";import"./check-DFBa8ZCX.js";import"./chunk-YEDAFXMB-CtNIODQJ.js";import"./chunk-AOFGTNG6-CF5QRbJq.js";import"./chunk-WX2SMNCD-ga1yq9Gg.js";import"./plus-mini-hzxuGXul.js";import"./command-bar-BhgjXTR-.js";import"./index-UYBB-XCw.js";import"./chunk-IVEEMMLZ-CmBH_s-X.js";import"./format-CReAYMUr.js";import"./date-picker-ZrjUNlMH.js";import"./popover-BKcPfgea.js";import"./triangle-left-mini-KkIu55fj.js";import"./prompt-DKNQ8d-z.js";var O=({item:e})=>{const{t:i}=p(),t=L(),{mutateAsync:n}=T(e.id),a=async()=>{await t({title:i("general.areYouSure"),description:i("inventory.deleteWarning"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await n()};return s.jsx(I,{groups:[{actions:[{icon:s.jsx(C,{}),label:i("actions.edit"),to:`${e.id}/edit`}]},{actions:[{icon:s.jsx(z,{}),label:i("actions.delete"),onClick:a}]}]})},l=E(),A=()=>{const{t:e}=p();return S.useMemo(()=>[l.accessor("title",{header:e("fields.title"),cell:({getValue:i})=>{const t=i();return t?s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})}):s.jsx(m,{})}}),l.accessor("sku",{header:e("fields.sku"),cell:({getValue:i})=>{const t=i();return t?s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})}):s.jsx(m,{})}}),l.accessor("reserved_quantity",{header:e("inventory.reserved"),cell:({getValue:i})=>{const t=i();return Number.isNaN(t)?s.jsx(m,{}):s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})})}}),l.accessor("stocked_quantity",{header:e("fields.inStock"),cell:({getValue:i})=>{const t=i();return Number.isNaN(t)?s.jsx(m,{}):s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})})}}),l.display({id:"actions",cell:({row:i})=>s.jsx(O,{item:i.original})})],[e])},J=()=>{const{t:e}=p(),{stock_locations:i}=q({limit:1e3}),t=[];if(i){const n={type:"select",options:i.map(a=>({label:a.name,value:a.id})),key:"location_id",searchable:!0,label:e("fields.location")};t.push(n)}return t.push({type:"string",key:"material",label:e("fields.material")}),t.push({type:"string",key:"sku",label:e("fields.sku")}),t.push({type:"string",key:"mid_code",label:e("fields.midCode")}),t.push({type:"number",key:"height",label:e("fields.height")}),t.push({type:"number",key:"width",label:e("fields.width")}),t.push({type:"number",key:"length",label:e("fields.length")}),t.push({type:"number",key:"weight",label:e("fields.weight")}),t.push({type:"select",options:[{label:e("fields.true"),value:"true"},{label:e("fields.false"),value:"false"}],key:"requires_shipping",multiple:!1,label:e("fields.requiresShipping")}),t},H=({pageSize:e=20,prefix:i})=>{const t=P(["id","location_id","q","order","requires_shipping","offset","sku","origin_country","material","mid_code","hs_code","order","weight","width","length","height"],i),{offset:n,weight:a,width:o,length:c,height:d,requires_shipping:u,...r}=t;return{searchParams:{limit:e,offset:n?parseInt(n):void 0,weight:a?JSON.parse(a):void 0,width:o?JSON.parse(o):void 0,length:c?JSON.parse(c):void 0,height:d?JSON.parse(d):void 0,requires_shipping:u?JSON.parse(u):void 0,q:r.q,sku:r.sku,order:r.order,mid_code:r.mid_code,hs_code:r.hs_code,material:r.material,location_levels:{location_id:r.location_id||[]},id:r.id?r.id.split(","):void 0},raw:t}},f=20,B=()=>{const{t:e}=p(),{searchParams:i,raw:t}=H({pageSize:f}),{inventory_items:n,count:a,isPending:o,isError:c,error:d}=k({...i}),u=J(),r=A(),{table:y}=g({data:n??[],columns:r,count:a,enablePagination:!0,getRowId:h=>h.id,pageSize:f});if(c)throw d;return s.jsxs(D,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(j,{children:e("inventory.domain")}),s.jsx(_,{className:"text-ui-fg-subtle",size:"small",children:e("inventory.subtitle")})]}),s.jsx(w,{size:"small",variant:"secondary",asChild:!0,children:s.jsx(N,{to:"create",children:e("actions.create")})})]}),s.jsx(b,{table:y,columns:r,pageSize:f,count:a,isLoading:o,pagination:!0,search:!0,filters:u,queryObject:t,orderBy:[{key:"title",label:e("fields.title")},{key:"sku",label:e("fields.sku")},{key:"stocked_quantity",label:e("fields.inStock")},{key:"reserved_quantity",label:e("inventory.reserved")}],navigateTo:h=>`${h.id}`})]})},ye=()=>{const{getWidgets:e}=x();return s.jsx(v,{widgets:{after:e("inventory_item.list.after"),before:e("inventory_item.list.before")},children:s.jsx(B,{})})};export{ye as Component};
