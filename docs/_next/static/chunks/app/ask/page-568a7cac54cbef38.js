(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{4153:(e,r,s)=>{Promise.resolve().then(s.bind(s,5282))},5282:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c});var t=s(5155),a=s(2115),n=s(2110),l=s(5565),o=s(8173),i=s.n(o);function c(){let[e,r]=(0,a.useState)(""),[s,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(!1),u=async t=>{t.preventDefault();try{if(0===e.trim().length){n.oR.error("The question cannot be empty");return}if(e.trim().length>1e4){n.oR.error("The question is too long");return}d(!0);let t=await fetch("https://script.google.com/macros/s/AKfycbzqNdQb90npRi2BRnBpXb1w0Rxq9rZbG5CZN19nP6KNLOiaFnNM4ija8-w2sQYmA6g/exec",{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({question:e,email:s,origin:"oyaraouf.com Ask Page"})}),a=await t.json();if(!t.ok||!a.result||"success"!==a.result)throw Error(a.message||"Request failed");n.oR.success("The question has been recorded successfully! Follow my updates to view the response!",{autoClose:4e3,hideProgressBar:!0,draggable:!1,closeOnClick:!0}),r(""),o("")}catch(e){n.oR.error("Something went wrong when adding your question/email")}finally{d(!1)}};return(0,t.jsx)("div",{className:"max-w",children:(0,t.jsxs)("main",{className:"max-w w-full text-center",children:[(0,t.jsxs)("section",{className:"flex w-full items-center bg-white p-8",children:[(0,t.jsx)("div",{className:"relative w-20 h-20 flex-shrink-0",children:(0,t.jsx)(i(),{href:"/",passHref:!0,children:(0,t.jsx)(l.default,{src:"/favicon.png",alt:"Omar's avatar",fill:!0,className:"rounded-full object-cover"})})}),(0,t.jsx)("h2",{className:"flex-1 font-bold text-3xl text-center px-8 py-4",children:"Ask me anything \uD83E\uDD14"}),(0,t.jsx)("div",{className:"relative w-20 h-20 flex-shrink-0",children:(0,t.jsx)(l.default,{src:"/favicon.png",alt:"Omar's avatar",fill:!0,className:"rounded-full object-cover",hidden:!0})})]}),(0,t.jsx)("section",{className:"flex max-w flex-col items-center bg-white text-black",children:(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)(n.N9,{}),(0,t.jsx)("p",{className:"max-w-3xl",children:"Feel free to ask me anything! If I know the answer, I'll be happy to respond."}),(0,t.jsx)("textarea",{value:e,onChange:e=>r(e.target.value),className:"bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:4,cols:50}),(0,t.jsxs)("p",{className:"max-w-xl pt-4 px-4",children:[(0,t.jsx)("b",{children:"Optionally"}),", if you want me to notify you when I post the answer (and for future updates), add your email here ",(0,t.jsx)("b",{children:"or"})," ","check my social channels for updates."]}),(0,t.jsx)("textarea",{value:s,onChange:e=>o(e.target.value),className:"bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:1,cols:30}),c?(0,t.jsxs)("div",{className:"m-4 px-8 py-2 border border-black rounded flex items-center justify-center",children:[(0,t.jsx)("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mr-2"}),"Sending..."]}):(0,t.jsx)("button",{onClick:u,className:"m-4 px-8 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors",children:"Send"})]})})]})})}},5565:(e,r,s)=>{"use strict";s.d(r,{default:()=>a.a});var t=s(4146),a=s.n(t)},4146:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{default:function(){return i},getImageProps:function(){return o}});let t=s(306),a=s(666),n=s(7970),l=t._(s(5514));function o(e){let{props:r}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(r))void 0===s&&delete r[e];return{props:r}}let i=n.Image}},e=>{var r=r=>e(e.s=r);e.O(0,[173,970,110,441,517,358],()=>r(4153)),_N_E=e.O()}]);