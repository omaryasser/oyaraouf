(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{119:(e,t,r)=>{Promise.resolve().then(r.bind(r,9715)),Promise.resolve().then(r.t.bind(r,6770,23)),Promise.resolve().then(r.bind(r,4268)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,7970,23))},9715:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r(5155),o=r(2115),a=r(1536),s=r(2110);r(5716);var i=r(6046);function c(){let[e,t]=(0,o.useState)(!1),[r,c]=(0,o.useState)(""),[l,u]=(0,o.useState)(""),[d,b]=(0,o.useState)(!1),h=(0,i.usePathname)(),f=()=>{t(!1),c(""),u("")},m=async e=>{e.preventDefault();try{if(0===r.trim().length){s.oR.error("Feedback cannot be empty");return}if(r.trim().length>1e4){s.oR.error("Feedback is too long");return}b(!0);let e=await fetch("https://script.google.com/macros/s/AKfycbwIJnQ63_bajZ95BBXVHJB3GP9PZo8-fthJSJrM-FVs7gbnti6cxP8Dx4ljWKea7__PDg/exec",{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({feedback:r,email:l,origin:h})}),t=await e.json();if(!e.ok||!t.result||"success"!==t.result)throw Error(t.message||"Request failed");s.oR.success("Thank you for your feedback!",{autoClose:4e3,hideProgressBar:!0,draggable:!1,closeOnClick:!0}),c(""),u(""),f()}catch(e){s.oR.error("Something went wrong while submitting your feedback.")}finally{b(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.N9,{}),(0,n.jsx)("button",{onClick:()=>t(!0),className:"m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors",children:"Send Me Feedback"}),e&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:(0,n.jsxs)("div",{className:"bg-white text-black rounded-lg w-11/12 max-w-lg p-6 relative",children:[(0,n.jsx)("button",{onClick:f,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors","aria-label":"Close Feedback Modal",children:(0,n.jsx)(a.QCr,{size:20})}),(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Send Me Feedback"}),(0,n.jsxs)("form",{onSubmit:m,className:"flex flex-col",children:[(0,n.jsx)("textarea",{id:"feedback",value:r,onChange:e=>c(e.target.value),className:"w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey",rows:4,placeholder:"Enter your feedback here...",required:!0}),(0,n.jsx)("button",{type:"submit",className:"m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors",disabled:d,children:d?"Sending...":"Submit Feedback"})]})]})})})]})}},4268:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r(5155),o=r(8173),a=r.n(o);r(2115);var s=r(1536),i=r(4367);function c(e){let{title:t,summary:r,slug:o}=e,c="https://oyaraouf.com/thoughts/".concat(o),l="Check this post: ".concat(t,"\n\n").concat(r,"\n\nRead more at: ").concat(c),u="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(l)),d="https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(c)),b=async()=>{try{await navigator.clipboard.writeText(l),alert("Copied!")}catch(e){alert("Failed to copy!")}};return(0,n.jsx)("div",{className:"flex gap-4 mt-4 mb-4",children:(0,n.jsxs)("div",{className:"flex justify-center items-center pt-4 gap-6",children:[(0,n.jsx)("button",{onClick:b,children:(0,n.jsx)(i.pZj,{className:"text-2xl hover:text-black transition-colors border-white",size:20})}),(0,n.jsx)(a(),{href:d,target:"_blank",children:(0,n.jsx)(s.H1h,{className:"text-2xl hover:text-black transition-colors border-white",size:20})}),(0,n.jsx)(a(),{href:u,target:"_blank",children:(0,n.jsx)(s.feZ,{className:"text-2xl hover:text-black transition-colors",size:20})})]})})}},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})},6770:()=>{},5716:()=>{},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:a,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[797,99,711,206,173,970,110,441,517,358],()=>t(119)),_N_E=e.O()}]);