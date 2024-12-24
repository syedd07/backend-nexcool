import{r as t,ci as re,cj as se,m as v,cl as oe,cp as S,I as ne,X as de,bc as ce,cn as le,cr as ie,cR as ue,co as pe,bb as l,j as d,u as F,b as me,cS as ve,w as fe}from"./index-fE89mBva.js";import{P as g}from"./prompt-DKNQ8d-z.js";const N=e=>t.createElement(ie,{...e});N.displayName="FocusModal";const b=t.forwardRef((e,a)=>t.createElement(re,{ref:a,...e}));b.displayName="FocusModal.Trigger";const j=S;j.displayName="FocusModal.Close";const C=e=>t.createElement(ue,{...e});C.displayName="FocusModal.Portal";const D=t.forwardRef(({className:e,...a},s)=>t.createElement(se,{ref:s,className:v("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a}));D.displayName="FocusModal.Overlay";const w=t.forwardRef(({className:e,overlayProps:a,portalProps:s,...r},o)=>t.createElement(C,{...s},t.createElement(D,{...a}),t.createElement(oe,{ref:o,className:v("bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",e),...r})));w.displayName="FocusModal.Content";const T=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:v("border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",a),...s},t.createElement("div",{className:"flex items-center gap-x-2"},t.createElement(S,{asChild:!0},t.createElement(ne,{size:"small",type:"button",variant:"transparent"},t.createElement(de,null))),t.createElement(ce,null,"esc")),e));T.displayName="FocusModal.Header";const E=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:v("border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",a),...s},e));E.displayName="FocusModal.Footer";const O=t.forwardRef(({className:e,...a},s)=>t.createElement(le,{ref:s,...a}));O.displayName="FocusModal.Title";const R=pe;R.displayName="FocusModal.Description";const k=t.forwardRef(({className:e,...a},s)=>t.createElement("div",{ref:s,className:v("flex-1",e),...a}));k.displayName="FocusModal.Body";const i=Object.assign(N,{Trigger:b,Title:O,Description:R,Content:w,Header:T,Body:k,Close:j,Footer:E});var B=({form:e,blockSearchParams:a=!1,children:s,onClose:r})=>{const{t:o}=me(),{formState:{isDirty:u}}=e,n=ve(({currentLocation:p,nextLocation:f})=>{const{isSubmitSuccessful:y}=f.state||{};if(y)return r==null||r(!0),!1;const M=p.pathname!==f.pathname,ae=p.search!==f.search;if(a){const h=u&&(M||ae);return h||r==null||r(y),h}const x=u&&M;return x||r==null||r(y),x}),m=()=>{var p;(p=n==null?void 0:n.reset)==null||p.call(n)},c=()=>{var p;(p=n==null?void 0:n.proceed)==null||p.call(n),r==null||r(!1)};return d.jsxs(fe,{...e,children:[s,d.jsx(g,{open:n.state==="blocked",variant:"confirmation",children:d.jsxs(g.Content,{children:[d.jsxs(g.Header,{children:[d.jsx(g.Title,{children:o("general.unsavedChangesTitle")}),d.jsx(g.Description,{children:o("general.unsavedChangesDescription")})]}),d.jsxs(g.Footer,{children:[d.jsx(g.Cancel,{onClick:m,type:"button",children:o("actions.cancel")}),d.jsx(g.Action,{onClick:c,type:"button",children:o("actions.continue")})]})]})})]})},H=t.createContext(null),P=({prev:e,children:a})=>{const s=F(),[r,o]=t.useState(!0),u=t.useCallback(m=>{s(m||e,{replace:!0,state:{isSubmitSuccessful:!0}})},[s,e]),n=t.useMemo(()=>({handleSuccess:u,setCloseOnEscape:o,__internal:{closeOnEscape:r}}),[u,o,r]);return d.jsx(H.Provider,{value:n,children:a})},I=t.createContext(null),$=({children:e,onOpenChange:a})=>{const[s,r]=t.useState({}),o=c=>s[c]||!1,u=(c,p)=>{r(f=>({...f,[c]:p})),a(p)},n=c=>{r(p=>({...p,[c]:!1}))},m=c=>{r(p=>{const f={...p};return delete f[c],f})};return d.jsx(I.Provider,{value:{getIsOpen:o,setIsOpen:u,register:n,unregister:m},children:e})},_=()=>{const e=t.useContext(I);if(!e)throw new Error("useStackedModal must be used within a StackedModalProvider");return e},ge=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[u,n]=t.useState(!1);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=c=>{if(!c){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(c)};return d.jsx(l,{open:r,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(l.Content,{"aria-describedby":void 0,className:v({"!bg-ui-bg-disabled !inset-y-5 !right-5":u}),children:a})})})})},ye=l.Header,Fe=l.Title,Me=l.Description,xe=l.Body,he=l.Footer,Se=l.Close,Ne=B,$e=Object.assign(ge,{Header:ye,Title:Fe,Body:xe,Description:Me,Footer:he,Close:Se,Form:Ne}),be=()=>{const e=t.useContext(H);if(!e)throw new Error("useRouteModal must be used within a RouteModalProvider");return e},je=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[u,n]=t.useState(!1);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=c=>{if(!c){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(c)};return d.jsx(i,{open:r,onOpenChange:m,children:d.jsx(P,{prev:e,children:d.jsx($,{onOpenChange:n,children:d.jsx(Ce,{stackedModalOpen:u,children:a})})})})},Ce=({stackedModalOpen:e,children:a})=>{const{__internal:s}=be(),r=!s.closeOnEscape;return d.jsx(i.Content,{onEscapeKeyDown:r?o=>{o.preventDefault()}:void 0,className:v({"!bg-ui-bg-disabled !inset-x-5 !inset-y-3":e}),children:a})},De=i.Header,we=i.Title,Te=i.Description,Ee=i.Footer,Oe=i.Body,Re=i.Close,ke=B,_e=Object.assign(je,{Header:De,Title:we,Body:Oe,Description:Te,Footer:Ee,Close:Re,Form:ke}),Be=({id:e,children:a})=>{const{register:s,unregister:r,getIsOpen:o,setIsOpen:u}=_();return t.useEffect(()=>(s(e),()=>r(e)),[]),d.jsx(l,{open:o(e),onOpenChange:n=>u(e,n),children:a})},K=l.Close;K.displayName="StackedDrawer.Close";var X=l.Header;X.displayName="StackedDrawer.Header";var z=l.Body;z.displayName="StackedDrawer.Body";var A=l.Trigger;A.displayName="StackedDrawer.Trigger";var q=l.Footer;q.displayName="StackedDrawer.Footer";var G=l.Title;G.displayName="StackedDrawer.Title";var J=l.Description;J.displayName="StackedDrawer.Description";var Q=t.forwardRef(({className:e,...a},s)=>d.jsx(l.Content,{ref:s,className:v(e),overlayProps:{className:"bg-transparent"},...a}));Q.displayName="StackedDrawer.Content";var Ke=Object.assign(Be,{Close:K,Header:X,Body:z,Content:Q,Trigger:A,Footer:q,Description:J,Title:G}),He=({id:e,onOpenChangeCallback:a,children:s})=>{const{register:r,unregister:o,getIsOpen:u,setIsOpen:n}=_();t.useEffect(()=>(r(e),()=>o(e)),[]);const m=c=>{n(e,c),a==null||a(c)};return d.jsx(i,{open:u(e),onOpenChange:m,children:s})},U=i.Close;U.displayName="StackedFocusModal.Close";var V=i.Header;V.displayName="StackedFocusModal.Header";var W=i.Body;W.displayName="StackedFocusModal.Body";var Y=i.Trigger;Y.displayName="StackedFocusModal.Trigger";var Z=i.Footer;Z.displayName="StackedFocusModal.Footer";var L=i.Title;L.displayName="StackedFocusModal.Title";var ee=i.Description;ee.displayName="StackedFocusModal.Description";var te=t.forwardRef(({className:e,...a},s)=>d.jsx(i.Content,{ref:s,className:v("!top-6",e),overlayProps:{className:"bg-transparent"},...a}));te.displayName="StackedFocusModal.Content";var Xe=Object.assign(He,{Close:U,Header:V,Body:W,Content:te,Trigger:Y,Footer:Z,Description:ee,Title:L});export{_e as R,Xe as S,_ as a,$e as b,Ke as c,be as u};
