import{g as v,V as w}from"./VSheet.87e6348b.js";import{p as B,l as k}from"./lineAndBarChart.537da22d.js";import{_ as N,Y as x,L as n,Z as C,P as e,G as s,as as l,N as h,X as _,W as f,Q as t,aP as g,R as i,T}from"./index.48ba7ed4.js";import{V as m,a as $,b as c,c as S}from"./VRow.dc9b37dc.js";import{V as r}from"./VCard.bc042a1a.js";const A={data:()=>({functionGroupToggle:0,page:1,panel:1,selection:1,countCards:[{title:"\u4ECA\u65E5\u8A2A\u5BA2\u4EBA\u6578",bgColor:"#ec8a87",num:500},{title:"\u5F85\u5BE9\u8CC7\u6599",bgColor:"#f0bf4c",num:320},{title:"\u4ECA\u65E5\u65B0\u589E\u8CC7\u6599",bgColor:"#b3cb20",num:1370},{title:"\u4ECA\u65E5\u8A2A\u5BA2\u4EBA\u6578",bgColor:"#96a8d6",num:348}]}),methods:{count(o,d=200){let p=this.$refs.countCard[o],u={val:0},b=d;v.to(u,{val:b,roundProps:"val",duration:2,onUpdate:function(){p.innerHTML=u.val}})}},mounted(){this.countCards.forEach((o,d)=>{this.count(d,o.num)})},components:{pieChart:B,lineAndBarChart:k}},L=t("h2",null,"\u7CFB\u7D71\u9996\u9801\u5100\u8868\u677F",-1),P={class:"text-h6 text-primary font-weight-bold"},D={class:"text-caption mt-2 text-end"},E=t("h4",{class:"text-h6 text-primary font-weight-bold"},"\u7DB2\u7AD9\u6D41\u91CF",-1),G=t("h4",{class:"text-h6 text-primary font-weight-bold"},"\u6578\u64DA\u5206\u6790",-1),R={class:""},W=t("h4",{class:"text-h6 text-primary font-weight-bold"}," \u4ECA\u65E5\u71B1\u9580\u7DB2\u9801 ",-1),F=t("thead",{class:"bg-thead"},[t("tr",null,[t("th",{class:"text-left"},"\u5E8F\u5217"),t("th",{class:"text-left"},"\u6A19\u984C"),t("th",{class:"text-left"},"\u700F\u89BD\u91CF")])],-1),H=t("td",null,"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",-1),M=t("td",null,"1,523",-1),Q={class:""},U=t("h4",{class:"text-h6 text-primary font-weight-bold"},"\u516C\u544A\u8CC7\u8A0A",-1),X=t("thead",{class:"bg-thead"},[t("tr",null,[t("th",{class:"text-left"},"\u5E8F\u5217"),t("th",{class:"text-left"},"\u6A19\u984C"),t("th",{class:"text-left"},"\u767C\u4F48\u6642\u9593")])],-1),Y=t("td",null,"\u904E\u6BD4\u4F60\u4E09\u89C0\u4E0D\u6BD4\u60F3\u9762\u767C\u6BD4\u671B\u9EBC\u5230\u767C\u6FDF\u5BB6\u98EF\u5E74\u7D93\u7522",-1),Z=t("td",null,"2020/01/01",-1);function j(o,d,p,u,b,q){const y=x("lineAndBarChart"),V=x("pieChart");return n(),C(m,{class:"container"},{default:e(()=>[s($,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),s(l,{class:"pt-1 mb-3"}),L,s(l,{class:"mt-3 mb-4"}),s(S,null,{default:e(()=>[(n(!0),h(f,null,_(o.countCards,a=>(n(),C(c,{sm:"3",cols:"12",key:a.title},{default:e(()=>[s(r,{class:"pa-2"},{default:e(()=>[t("h4",P,i(a.title),1),s(l,{class:"pt-2 mb-2"}),s(w,{rounded:"",color:a.bgColor,class:"py-8"},{default:e(()=>[t("div",{ref_for:!0,ref:"countCard",style:{color:"#fff"},class:"text-h4 text-center font-weight-bold"},i(a.num),513)]),_:2},1032,["color"]),t("div",D,[s(l,{class:""}),T(" \u6642\u9593\u4EE5...\u70BA\u8A08\u7B97\u6E96 ")])]),_:2},1024)]),_:2},1024))),128)),s(c,{md:"8",cols:"12"},{default:e(()=>[s(r,{class:"pa-2"},{default:e(()=>[E,s(l,{class:"pt-2 mb-2"}),s(y)]),_:1})]),_:1}),s(c,{md:"4",cols:"12"},{default:e(()=>[s(r,{class:"pa-2"},{default:e(()=>[G,s(l,{class:"pt-2 mb-2"}),s(V)]),_:1})]),_:1}),s(c,{md:"6",cols:"12"},{default:e(()=>[s(r,{class:"h-100"},{default:e(()=>[t("div",R,[s(m,{class:"container"},{default:e(()=>[W,s(l,{class:"pt-2 mb-2"}),s(g,{density:"compact"},{default:e(()=>[F,t("tbody",null,[(n(),h(f,null,_(5,a=>t("tr",{key:a},[t("td",null,i(a),1),H,M])),64))])]),_:1})]),_:1})])]),_:1})]),_:1}),s(c,{md:"6",cols:"12"},{default:e(()=>[s(r,{class:"h-100"},{default:e(()=>[t("div",Q,[s(m,{class:"container"},{default:e(()=>[U,s(l,{class:"pt-2 mb-2"}),s(g,{density:"compact"},{default:e(()=>[X,t("tbody",null,[(n(),h(f,null,_(5,a=>t("tr",{key:a},[t("td",null,i(a),1),Y,Z])),64))])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}const tt=N(A,[["render",j]]);export{tt as default};