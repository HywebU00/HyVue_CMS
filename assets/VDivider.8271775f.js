import{m as c,f as u,h as m}from"./VImg.7174440c.js";import{p as h,m as f,l as g,M as y,t as _,c as k,w as r,k as s}from"./index.30c02eab.js";const C=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...f()},"VDivider"),S=g()({name:"VDivider",props:C(),setup(e,o){let{attrs:i,slots:a}=o;const{themeClasses:l}=y(e),{textColorClasses:n,textColorStyles:d}=u(_(e,"color")),v=k(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return m(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[v.value,d.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{S as V};