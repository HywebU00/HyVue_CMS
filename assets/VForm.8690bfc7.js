import{p,m as b,bt as v,w as F,bu as V,r as y,E as h,G as R,bp as P}from"./index.e9d56fdf.js";const k=p({...b(),...v()},"VForm"),C=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:u}=i;const r=V(o),s=y();function f(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return R("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:f,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{C as V};
