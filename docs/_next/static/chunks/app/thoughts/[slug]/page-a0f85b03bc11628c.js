(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{119:(e,t,r)=>{Promise.resolve().then(r.bind(r,9715)),Promise.resolve().then(r.t.bind(r,6770,23)),Promise.resolve().then(r.bind(r,4268)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,7970,23))},9715:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(5155),o=r(2115),a=r(1536),n=r(2110);r(5716);var i=r(6046);function c(){let[e,t]=(0,o.useState)(!1),[r,c]=(0,o.useState)(""),[l,d]=(0,o.useState)(""),[h,u]=(0,o.useState)(!1),b=(0,i.usePathname)(),m=()=>{t(!1),c(""),d("")},x=async e=>{e.preventDefault();try{if(0===r.trim().length){n.oR.error("Feedback cannot be empty");return}if(r.trim().length>1e4){n.oR.error("Feedback is too long");return}u(!0);let e=await fetch("https://script.google.com/macros/s/AKfycbwIJnQ63_bajZ95BBXVHJB3GP9PZo8-fthJSJrM-FVs7gbnti6cxP8Dx4ljWKea7__PDg/exec",{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({feedback:r,email:l,origin:b})}),t=await e.json();if(!e.ok||!t.result||"success"!==t.result)throw Error(t.message||"Request failed");n.oR.success("Thank you for your feedback!",{autoClose:4e3,hideProgressBar:!0,draggable:!1,closeOnClick:!0}),c(""),d(""),m()}catch(e){n.oR.error("Something went wrong while submitting your feedback.")}finally{u(!1)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.N9,{}),(0,s.jsx)("button",{onClick:()=>t(!0),className:"m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors",children:"Send Me Feedback"}),e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:(0,s.jsxs)("div",{className:"bg-white text-black rounded-lg w-11/12 max-w-lg p-6 relative",children:[(0,s.jsx)("button",{onClick:m,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors","aria-label":"Close Feedback Modal",children:(0,s.jsx)(a.QCr,{size:20})}),(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Send Me Feedback"}),(0,s.jsxs)("form",{onSubmit:x,className:"flex flex-col",children:[(0,s.jsx)("textarea",{id:"feedback",value:r,onChange:e=>c(e.target.value),className:"w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-grey",rows:4,placeholder:"Enter your feedback here...",required:!0}),(0,s.jsx)("button",{type:"submit",className:"m-4 px-8 py-2 border border-grey bg-white rounded hover:bg-grey hover:text-white transition-colors",disabled:h,children:h?"Sending...":"Submit Feedback"})]})]})})})]})}},4268:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(5155),o=r(8173),a=r.n(o);r(2115);var n=r(1536),i=r(4367);function c(e){let{title:t,summary:r,slug:o}=e,c="https://oyaraouf.com/thoughts/".concat(o),l="Check this post: ".concat(t,"\n\n").concat(r,"\n\nRead more at: ").concat(c),d="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(l)),h="https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(c)),u=async()=>{try{await navigator.clipboard.writeText(l),alert("Copied!")}catch(e){alert("Failed to copy!")}};return(0,s.jsx)("div",{className:"flex gap-4 mt-4 mb-4",children:(0,s.jsxs)("div",{className:"flex justify-center items-center pt-4 gap-6",children:[(0,s.jsx)("button",{onClick:u,children:(0,s.jsx)(i.pZj,{className:"text-2xl hover:text-black transition-colors border-white",size:20})}),(0,s.jsx)(a(),{href:h,target:"_blank",children:(0,s.jsx)(n.H1h,{className:"text-2xl hover:text-black transition-colors border-white",size:20})}),(0,s.jsx)(a(),{href:d,target:"_blank",children:(0,s.jsx)(n.feZ,{className:"text-2xl hover:text-black transition-colors",size:20})})]})})}},6046:(e,t,r)=>{"use strict";var s=r(6658);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return s.useServerInsertedHTML}})},6770:()=>{},5716:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[797,99,711,206,173,970,352,441,517,358],()=>t(119)),_N_E=e.O()}]);