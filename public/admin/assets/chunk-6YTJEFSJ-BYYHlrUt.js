import{ct as l,s as u,d8 as v,az as y,q as s,fe as d}from"./index-fE89mBva.js";var o="tax_rates",r=v(o),c=(e,a,t)=>{const{data:i,...n}=l({queryKey:r.detail(e),queryFn:async()=>u.admin.taxRate.retrieve(e,a),...t});return{...i,...n}},q=(e,a)=>{const{data:t,...i}=l({queryFn:()=>u.admin.taxRate.list(e),queryKey:r.list(e),...a});return{...t,...i}},K=(e,a)=>y({mutationFn:t=>u.admin.taxRate.update(e,t),onSuccess:(t,i,n)=>{s.invalidateQueries({queryKey:r.lists()}),s.invalidateQueries({queryKey:r.detail(e)}),s.invalidateQueries({queryKey:d.details()})},...a}),R=e=>y({mutationFn:a=>u.admin.taxRate.create(a),onSuccess:(a,t,i)=>{s.invalidateQueries({queryKey:r.lists()}),s.invalidateQueries({queryKey:d.details()})},...e}),Q=(e,a)=>y({mutationFn:()=>u.admin.taxRate.delete(e),onSuccess:(t,i,n)=>{s.invalidateQueries({queryKey:r.lists()}),s.invalidateQueries({queryKey:r.detail(e)}),s.invalidateQueries({queryKey:d.details()})},...a});export{q as a,R as b,c,K as d,Q as u};
