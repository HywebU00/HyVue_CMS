import{m as p,h as v}from"./VImg.7174440c.js";import{c as b,d as F}from"./VSelectionControl.531b4c11.js";import{f as V}from"./forwardRefs.74a345f5.js";import{p as h,l as y,r as R,w as P}from"./index.30c02eab.js";const k=h({...p(),...b()},"VForm"),g=y()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),m=R();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,m)}});export{g as V};