import{p as g,aZ as A,bg as F,bk as I,w as B,ab as U,a$ as $,e as R,c as _,E as w,b0 as D,b1 as t,bl as l,G as u,K as c}from"./index.ff7927a5.js";const E=g({...A(),...F(I(),["inline"])},"VCheckbox"),N=B()({name:"VCheckbox",inheritAttrs:!1,props:E(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:r,slots:o}=d;const s=U(e,"modelValue"),{isFocused:n,focus:i,blur:b}=$(e),m=R(),V=_(()=>e.id||`checkbox-${m}`);return w(()=>{const[p,k]=D(r),[v,G]=t.filterProps(e),[x,K]=l.filterProps(e);return u(t,c({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:V.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:h,messagesId:f,isDisabled:P,isReadonly:C}=a;return u(l,c(x,{id:h.value,"aria-describedby":f.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:b}),o)}})}),{}}});export{N as V};