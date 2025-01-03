(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5368:(e,t,r)=>{Promise.resolve().then(r.bind(r,8791)),Promise.resolve().then(r.bind(r,1708)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,7970,23))},8791:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(5155),o=r(2115),s=r(1536),l=r(2110);function a(){let[e,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(""),[i,c]=(0,o.useState)(""),[u,d]=(0,o.useState)(!1),m=(0,o.useRef)(null);(0,o.useRef)(null);let f=()=>{t(!1),a(""),c("")},b=async e=>{e.preventDefault();try{if(0===r.trim().length){l.oR.error("Question cannot be empty");return}if(r.trim().length>1e4){l.oR.error("Question is too long");return}d(!0);let e=await fetch("https://script.google.com/macros/s/AKfycbzqNdQb90npRi2BRnBpXb1w0Rxq9rZbG5CZN19nP6KNLOiaFnNM4ija8-w2sQYmA6g/exec",{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({question:r,email:i,origin:"oyaraouf.com Home Page"})}),t=await e.json();if(!e.ok||!t.result||"success"!==t.result)throw Error(t.message||"Request failed");l.oR.success("The question has been recorded successfully! Follow my updates to view the response!",{autoClose:4e3,hideProgressBar:!0,draggable:!1,closeOnClick:!0}),a(""),c(""),f()}catch(e){l.oR.error("Something went wrong when adding your question/email")}finally{d(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.N9,{}),(0,n.jsx)("button",{onClick:()=>t(!0),className:"m-4 px-8 py-2 border border-white bg-grey rounded hover:bg-white hover:text-grey transition-colors",children:"Ask Me Anything"}),e&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:(0,n.jsxs)("div",{className:"bg-white text-black rounded-lg w-11/12 max-w-lg p-6 relative",children:[(0,n.jsx)("button",{onClick:f,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors","aria-label":"Close Question Form",children:(0,n.jsx)(s.QCr,{size:20})}),(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Ask Me Anything"}),(0,n.jsxs)("form",{onSubmit:b,className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"feedback",className:"mb-2",children:"Feel free to ask me anything! If I know the answer, I'll be happy to respond."}),(0,n.jsx)("textarea",{id:"question",value:r,onChange:e=>a(e.target.value),className:"w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey",rows:4,placeholder:"Enter your question here...",required:!0,ref:m}),(0,n.jsx)("label",{htmlFor:"question-email",className:"mb-2",children:(0,n.jsxs)("p",{className:"max-w-xl pt-4 px-4",children:[(0,n.jsx)("b",{children:"Optionally"}),", if you want me to notify you when I post the answer (and for future updates), add your email here"," ",(0,n.jsx)("b",{children:"or"})," check my social channels for updates."]})}),(0,n.jsx)("input",{type:"email",id:"question-email",value:i,onChange:e=>c(e.target.value),className:"w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey",placeholder:"you@example.com"}),(0,n.jsx)("button",{type:"submit",className:"m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors",disabled:u,children:u?"Sending...":"Submit Question"})]})]})})})]})}r(5716)},1708:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5155),o=r(2115);let s=function(e){let{text:t,speed:r}=e,[s,l]=(0,o.useState)(""),[a,i]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=setInterval(()=>{a<t.length?(l(e=>e+t.charAt(a)),i(a+1)):clearInterval(e)},100-r);return()=>clearInterval(e)}),(0,n.jsx)(n.Fragment,{children:s})}},5716:()=>{},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),l=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:s,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[797,711,173,970,110,441,517,358],()=>t(5368)),_N_E=e.O()}]);