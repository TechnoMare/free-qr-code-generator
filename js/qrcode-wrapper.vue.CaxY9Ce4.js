import{u as q,t as C,d as N,Q as S,_ as z}from"./index.DYcylpL8.js";import{f,j as b,o,c as l,a as e,t as i,n as s,G,r as j,H as B,z as V,B as u,K as $,q as D,C as P,l as Q,D as h,d as g,L as F,b as T}from"./entry.VC833E2J.js";import{u as E}from"./index.CK6hgZyY.js";const I={class:"collapse bg-base-100 prose prose-sm"},O={class:"text-xs collapse-title min-h-fit text-center pr-4 sm:text-start"},U=G('<article class="collapse-content"><ol class="my-0"><li><strong class="mr-1">Fast</strong>and Simple.</li><li>Completely<strong class="ml-1">Free</strong>.</li><li><strong class="mr-1">No registration</strong>required.</li><li>Everything is running in your browser, we<strong class="mx-1">DO NOT</strong>track/collect/sell your data.</li></ol></article>',1),H=f({__name:"why-choose-us",setup(_){const{t:n}=b();return(m,r)=>(o(),l("details",I,[e("summary",O,i(s(n)("why_us")),1),U]))}}),K={class:"items-center bg-base-200 p-4 sm:flex sm:gap-8 sm:p-8"},L={class:"relative w-min h-min"},R=["alt","src"],W={class:"absolute top-0 left-0 w-full h-full flex items-center justify-center bg-base-100 opacity-50"},A=e("span",{class:"loading loading-spinner w-10 h-10"},null,-1),J=[A],M={class:"flex items-center mt-4 gap-2"},X={class:"join"},Y=["disabled"],Z={key:0,class:"loading loading-spinner"},ee={key:1,class:"bi bi-download"},se={class:"dropdown dropdown-end join-item"},te=e("summary",{class:"btn btn-neutral rounded-l-none"},[e("i",{class:"bi bi-caret-down-fill"})],-1),oe={class:"p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-[1]"},ne=["href"],ae=e("i",{class:"bi bi-filetype-svg"},null,-1),le={key:0,class:"mt-4 font-mono break-all max-w-xs"},ce={class:"flex-1"},me=f({__name:"qrcode-wrapper",props:{size:{default:""},content:{},hasSettings:{type:Boolean,default:!0}},setup(_){const n=_,m=!1,{t:r}=b(),d=E(),{content:p,qrcodeUrl:a,isWaiting:w}=q(),c=j(!1),y=B(()=>a.value||S);async function x(){c.value=!0;const t=await C(a.value);N(t,"exported_qrcode_image.png"),c.value=!1}return V(()=>n.content,()=>{p.value=n.content}),p.value=n.content,(t,ie)=>{const v=z,k=H;return o(),l("div",K,[e("div",{class:u(["flex flex-col items-center justify-center flex-none",t.size])},[e("div",L,[e("img",{class:u(["block max-w-xs max-h-80",{"qrcode-placeholder opacity-50":!s(a)}]),alt:s(a)?s(d).pageTitle:"Qrcode placeholder",src:s(y),style:$({"--width":s(d).qrcodeConfig.size+"px","--height":s(d).qrcodeConfig.size+"px"})},null,14,R),D(e("div",W,J,512),[[P,s(w)]])]),e("div",M,[t.hasSettings?(o(),Q(v,{key:0})):h("",!0),e("div",X,[e("button",{class:"btn btn-neutral join-item",type:"button",disabled:s(c),onClick:x},[s(c)?(o(),l("span",Z)):(o(),l("i",ee)),g(i(s(r)("download")),1)],8,Y),e("details",se,[te,e("ul",oe,[e("li",null,[e("a",{download:"exported_qrcode_image.svg",href:s(a),target:"_blank"},[ae,g(i(s(r)("download"))+" SVG",1)],8,ne)])])])])]),s(m)?(o(),l("p",le,i(t.content),1)):h("",!0)],2),e("div",ce,[F(t.$slots,"default"),T(k,{class:"mt-4"})])])}}});export{me as _};
