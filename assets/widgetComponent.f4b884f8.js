import{_ as w,Y as C,L as s,N as r,Q as t,Z as i,V,T as u,R as p,W as _,b4 as b,S as D,H as F,J as S,X as x,O as c,G as e,P as l,as as g,aO as z,aP as N,aQ as E,a6 as I,U as P,K as G}from"./index.e9d56fdf.js";import{_ as L}from"./06.312e17cd.js";import{V as B,a as U,b as m,c as v}from"./VRow.46d91bd8.js";import{V as k}from"./VCard.ed58274d.js";import{V as j}from"./VPagination.ebd26227.js";import{V as Q}from"./VCheckbox.21074763.js";const R={name:"TreeItem",props:{model:Object},data(){return{isOpen:!0}},computed:{isFolder(){return this.model.children&&this.model.children.length}},methods:{toggle(){this.isFolder&&(this.isOpen=!this.isOpen)},changeType(){this.isFolder||(this.model.children=[],this.addChild(),this.isOpen=!0)}}},H={class:"d-flex treeTitle"},J={key:0,class:"iconList"},K={key:0};function M(d,n,y,O,h,o){const f=C("tree-item",!0);return s(),r("li",null,[t("div",{class:D({bold:o.isFolder}),onClick:n[0]||(n[0]=(...a)=>o.toggle&&o.toggle(...a)),onDblclick:n[1]||(n[1]=(...a)=>o.changeType&&o.changeType(...a))},[t("div",H,[o.isFolder?(s(),r("span",J,[h.isOpen?(s(),i(V,{key:0,class:"mr-2",icon:"mdi-folder-open",color:"primary"})):(s(),i(V,{key:1,class:"mr-2",icon:"mdi-folder",color:"primary"}))])):(s(),i(V,{key:1,class:"mr-2",icon:"mdi-file-document",color:"secondary"})),u(" "+p(y.model.name)+" ",1),o.isFolder?(s(),r(_,{key:2},[h.isOpen?(s(),i(c,{key:0,density:"compact",variant:"text",icon:"mdi-chevron-up"})):(s(),i(c,{key:1,density:"compact",variant:"text",icon:"mdi-chevron-down"}))],64)):b("",!0)])],34),o.isFolder?F((s(),r("ul",K,[(s(!0),r(_,null,x(y.model.children,a=>(s(),r("div",{class:"d-flex",key:a},[e(f,{class:"item",model:a},null,8,["model"])]))),128))],512)),[[S,h.isOpen]]):b("",!0)])}const W=w(R,[["render",M]]),X={name:"\u5206\u985E\uFF21",children:[{name:"\u5206\u985E\uFF21-1"},{name:"\u5206\u985E\uFF21-2"},{name:"\u5206\u985E\uFF21-3",children:[{name:"\u5206\u985E\uFF21-3.1"},{name:"\u5206\u985E\uFF21-3.2"},{name:"\u5206\u985E\uFF21-3.3"},{name:"\u5206\u985E\uFF21-3.4"}]}]},Y={name:"\u5206\u985EB",children:[{name:"\u5206\u985EB-1"},{name:"\u5206\u985EB-2"},{name:"\u5206\u985EB-3",children:[{name:"\u5206\u985EB-3.1"},{name:"\u5206\u985EB-3.2"},{name:"\u5206\u985EB-3.3"},{name:"\u5206\u985EB-3.4"}]}]},Z={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}],treeData:X,treeData2:Y}),methods:{},components:{TreeItem:W}},q=t("h2",null,"\u7279\u6B8A\u7BC4\u4F8B\u9801\u9762 - \u7DB2\u7AD9\u7E3D\u89BD",-1),A={class:""},$=t("thead",null,[t("tr",null,[t("th",{class:"text-left",style:{width:"50px"}}),t("th",{class:"text-center",style:{width:"50px"}},"\u5E8F\u865F"),t("th",{class:"text-left"},"\u5716\u7247"),t("th",{class:"text-center",style:{"min-width":"400px"}}," \u6A19\u984C "),t("th",{class:"text-left"},"\u8CC7\u6599\u5206\u985E"),t("th",{class:"text-left"},"\u72C0\u614B"),t("th",{class:"text-left",style:{width:"100px"}},"\u52D5\u4F5C")])],-1),ee={class:"text-center"},te={class:"text-center pb-5"};function le(d,n,y,O,h,o){const f=C("tree-item");return s(),i(B,{class:"container"},{default:l(()=>[e(U,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),e(g,{class:"pt-1 mb-3"}),q,e(g,{class:"mt-3 mb-4"}),e(v,null,{default:l(()=>[e(m,{class:"px-1",md:"2",cols:"12"},{default:l(()=>[e(k,{class:"treeviewBlock pa-2"},{default:l(()=>[t("ul",null,[e(f,{class:"item",model:d.treeData},null,8,["model"]),e(f,{class:"item",model:d.treeData2},null,8,["model"])])]),_:1})]),_:1}),e(m,{class:"px-1",md:"10",cols:"12"},{default:l(()=>[e(k,{class:"mb-5"},{default:l(()=>[t("div",A,[e(B,{class:"container"},{default:l(()=>[e(v,{class:"mb-1"},{default:l(()=>[e(m,{cols:"12",class:"py-0"},{default:l(()=>[t("div",null,[e(z,{modelValue:d.selection,"onUpdate:modelValue":n[0]||(n[0]=a=>d.selection=a)},{default:l(()=>[(s(),r(_,null,x(6,a=>e(E,{key:a,color:"primary",link:"",label:""},{default:l(()=>[u(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),e(g,{class:"my-2"})]),_:1}),e(m,{class:"pb-0 justify-end d-flex",cols:"12"},{default:l(()=>[e(c,{variant:"flat",color:"primary ","prepend-icon":"mdi-plus"},{default:l(()=>[u("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),e(v,{class:"mt-0"},{default:l(()=>[e(m,null,{default:l(()=>[e(N,null,{default:l(()=>[$,t("tbody",null,[(s(!0),r(_,null,x(d.data,a=>(s(),r("tr",{key:a.name},[t("td",null,[e(Q,{value:"1",label:"","hide-details":"",type:"checkbox"})]),t("td",ee,p(a.id),1),t("td",null,[e(I,{width:60,"aspect-ratio":"1/1",cover:"",src:L})]),t("td",null,p(a.title),1),t("td",null,p(a.class),1),t("td",null,p(a.status),1),t("td",null,[e(P,{transition:"slide-y-transition"},{activator:l(({props:T})=>[e(c,G({icon:"mdi-chevron-down",class:"ma-2"},T,{size:"x-small"}),null,16)]),default:l(()=>[e(k,{class:"pa-2"},{default:l(()=>[e(c,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[u("\u522A\u9664")]),_:1}),e(c,{size:"small",variant:"outlined",class:"my-1",block:"","prepend-icon":"mdi-pencil",color:"primary"},{default:l(()=>[u("\u7DE8\u8F2F")]),_:1})]),_:1})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),t("div",te,[e(j,{modelValue:d.page,"onUpdate:modelValue":n[1]||(n[1]=a=>d.page=a),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1})]),_:1})}const ie=w(Z,[["render",le]]);export{ie as default};
