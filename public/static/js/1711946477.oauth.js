import{b as s,a as o,n as t,c as e,u as r}from"./1711946477.index.js";import{b as i}from"./1711946477.vue-router.js";import{a6 as a,y as n,aj as m,o as c,c as l,J as p,a as j,s as d,q as u,i as f}from"./1711946477.@vue.js";import"./1711946477.lscache.js";import"./1711946477.crypto-js.js";import"./1711946477.axios.js";import"./1711946477.element-plus.js";import"./1711946477.lodash-es.js";import"./1711946477.@element-plus.js";import"./1711946477.@popperjs.js";import"./1711946477.@ctrl.js";import"./1711946477.dayjs.js";import"./1711946477.async-validator.js";import"./1711946477.memoize-one.js";import"./1711946477.normalize-wheel-es.js";import"./1711946477.@floating-ui.js";import"./1711946477.notyf.js";import"./1711946477.pinia.js";import"./1711946477.lottie-web.js";import"./1711946477.bootstrap.js";import"./1711946477.plyr.js";import"./1711946477.@fancyapps.js";import"./1711946477.highlight.js.js";import"./1711946477.@howdyjs.js";const h={class:"container-fluid container-box"},v={key:0,class:"card card-body"},y={class:"d-flex justify-content-center align-items-center"},g=j("strong",{class:"font-16 ms-1"},"登录成功！",-1),b={class:"d-flex justify-content-center mt-2"},k={class:"font-14"},x={__name:"oauth",setup(x){const w=i(),I={comm:s()},_=a({second:5,close:!1,timer:null}),z=async()=>{var s;const{code:i,msg:a,data:n}=await o.post("/api/comm/check-token",{},{headers:{Authorization:w.params.token}});if(200!==i)return t.error(a);e.set("user-info",n.user,10),r.set.cookie((null==(s=null==globalThis?void 0:globalThis.inis)?void 0:s.token_name)||"INIS_LOGIN_TOKEN",w.params.token,604800),I.comm.login.finish=!0,I.comm.login.user=n.user;_.close=!0,_.timer=setInterval((()=>{_.second--,0===_.second&&(_.close=!1,clearInterval(_.timer),window.close())}),1e3)};return n((()=>{z()})),(s,o)=>{const t=m("i-svg");return c(),l("div",h,[p(_).close?(c(),l("div",v,[j("div",y,[d(t,{name:"!",size:"25px",color:"var(--el-color-success)"}),g]),j("div",b,[j("strong",k,u(p(_).second)+"s 后自动关闭当前窗口！",1)])])):f("",!0)])}}};export{x as default};
