import{p as m,bf as k,w as V,E as b,G as a,K as n,bj as f,be as A,bx as C,by as h,I as c,e as O,c as x,ab as U,bh as F,bi as p,W as N,bz as _,bA as j}from"./index.c84b6c90.js";const w=m({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),L=V()({name:"VRadio",props:w(),setup(e,o){let{slots:s}=o;return b(()=>a(f,n(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const z=m({height:{type:[Number,String],default:"auto"},...A(),...C(h(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),M=V()({name:"VRadioGroup",inheritAttrs:!1,props:z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:t}=o;const y=O(),i=x(()=>e.id||`radio-group-${y}`),l=U(e,"modelValue");return b(()=>{const[v,I]=F(s),[R,D]=p.filterProps(e),[g,E]=f.filterProps(e),r=t.label?t.label({label:e.label,props:{for:i.value}}):e.label;return a(p,n({class:["v-radio-group",e.class],style:e.style},v,R,{modelValue:l.value,"onUpdate:modelValue":u=>l.value=u,id:i.value}),{...t,default:u=>{let{id:d,messagesId:P,isDisabled:G,isReadonly:S}=u;return a(N,null,[r&&a(_,{id:d.value},{default:()=>[r]}),a(j,n(g,{id:d.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:l.value,"onUpdate:modelValue":$=>l.value=$}),t)])}})}),{}}});export{M as V,L as a};
