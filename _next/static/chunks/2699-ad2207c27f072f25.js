"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2699],{5753:(e,t,r)=>{function n(e,t,r){let{includePage:n=!0,includeSeparator:o=!1,includeRoot:l}=r,i=[];return t.forEach((e,r)=>{if("separator"===e.type&&o&&i.push({name:e.name}),"folder"===e.type){let n=t.at(r+1);if(n&&e.index===n)return;if(e.root){i=[];return}i.push({name:e.name,url:e.index?.url})}"page"===e.type&&n&&i.push({name:e.name,url:e.url})}),l&&i.unshift({name:e.name,url:"object"==typeof l?l.url:void 0}),i}r.d(t,{Pp:()=>n,oe:()=>function e(t,r){let n;for(let o of(r.endsWith("/")&&(r=r.slice(0,-1)),t)){if("separator"===o.type&&(n=o),"folder"===o.type){if(o.index?.url===r){let e=[];return n&&e.push(n),e.push(o,o.index),e}let t=e(o.children,r);if(t)return t.unshift(o),n&&t.unshift(n),t}if("page"===o.type&&o.url===r){let e=[];return n&&e.push(n),e.push(o),e}}return null}}),r(76892),r(44388)},15996:(e,t,r)=>{r.d(t,{GB:()=>s,Pg:()=>c,x2:()=>d}),r(76892);var n=r(44388),o=r(69272),l=r(93800),i=(0,n.createContext)(null);function a(){let e=(0,n.useContext)(i);if(!e)throw Error("Missing sidebar provider");return e}function s(e){let[t,r]=void 0===e.open?(0,n.useState)(!1):[e.open,e.onOpenChange];return(0,l.jsx)(i.Provider,{value:(0,n.useMemo)(()=>({open:t,setOpen:null!=r?r:()=>void 0}),[t,r]),children:e.children})}function d(e){let{as:t,...r}=e,{open:n,setOpen:o}=a();return(0,l.jsx)(null!=t?t:"button",{"aria-label":"Toggle Sidebar","data-open":n,onClick:()=>{o(!n)},...r})}function c(e){let{as:t,blockScrollingWidth:r,...i}=e,{open:s}=a(),[d,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!r)return;let e=window.matchMedia("(min-width: ".concat(r.toString(),"px)")),t=()=>{c(!e.matches)};return t(),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[r]),(0,l.jsx)(o.A,{as:null!=t?t:"aside","data-open":s,enabled:!!(d&&s),...i,children:i.children})}},23490:(e,t,r)=>{r.d(t,{Mermaid:()=>l});var n=r(93800),o=r(44388);function l(e){let{chart:t}=e,l=(0,o.useId)(),[i,a]=(0,o.useState)(""),s=(0,o.useRef)(null),d=function(e){let[t,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(e=>{let[n]=e;n.isIntersecting&&(t.disconnect(),r(!0))});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}(s);return(0,o.useEffect)(()=>{if(!d)return;let e=document.documentElement,n=new MutationObserver(o);return n.observe(e,{attributes:!0}),o(),()=>{n.disconnect()};async function o(){var n;let o=e.classList.contains("dark")||(null===(n=e.attributes.getNamedItem("data-theme"))||void 0===n?void 0:n.value)==="dark",{default:i}=await Promise.all([r.e(7006),r.e(993)]).then(r.bind(r,40993));try{i.initialize({startOnLoad:!1,securityLevel:"loose",fontFamily:"inherit",themeCSS:"margin: 1.5rem auto 0;",theme:o?"dark":"default"});let{svg:e}=await i.render(l.replaceAll(":",""),t.replaceAll("\\n","\n"),s.current);a(e)}catch(e){console.error("Error while rendering mermaid",e)}}},[t,d]),(0,n.jsx)("div",{ref:s,dangerouslySetInnerHTML:{__html:i}})}},28044:(e,t,r)=>{r.d(t,{StylesProvider:()=>a,v:()=>i});var n=r(93800),o=r(44388);let l=(0,o.createContext)({tocNav:"xl:hidden",toc:"max-xl:hidden"});function i(){return(0,o.useContext)(l)}function a(e){let{children:t,...r}=e;return(0,n.jsx)(l.Provider,{value:r,children:t})}},43102:(e,t,r)=>{r.d(t,{G:()=>c,c:()=>d});var n=r(93800),o=r(44388),l=r(43807),i=r(15996),a=r(66580);let s=(0,o.createContext)(void 0);function d(){let e=(0,o.useContext)(s);if(!e)throw Error("Missing root provider");return e}function c({children:e}){let t=(0,o.useRef)(!0),[r,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(!1),f=(0,l.usePathname)();return(0,a.T)(f,()=>{t.current&&d(!1),t.current=!0}),(0,n.jsx)(s.Provider,{value:(0,o.useMemo)(()=>({open:r,setOpen:d,collapsed:c,setCollapsed:u,closeOnRedirect:t}),[r,c]),children:(0,n.jsx)(i.GB,{open:r,onOpenChange:d,children:e})})}},44906:(e,t,r)=>{r.d(t,{T:()=>o});var n=r(44388);function o(e,t,r=function e(t,r){return Array.isArray(t)&&Array.isArray(r)?r.length!==t.length||t.some((t,n)=>e(t,r[n])):t!==r}){let[l,i]=(0,n.useState)(e);r(l,e)&&(t(e,l),i(e))}},56768:(e,t,r)=>{r.d(t,{FK:()=>V,$H:()=>q,Gl:()=>Q});var n=r(93800),o=r(44388),l=r(27653),i=r(30130),a=r(6964),s=r(4090),d=r(58973),c=r(94249),u=r(75215),f=r(59017),p="ScrollArea",[h,v]=(0,a.A)(p),[m,w]=h(p),g=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:a,scrollHideDelay:d=600,...u}=e,[f,p]=o.useState(null),[h,v]=o.useState(null),[w,g]=o.useState(null),[b,x]=o.useState(null),[y,S]=o.useState(null),[C,E]=o.useState(0),[R,T]=o.useState(0),[P,j]=o.useState(!1),[N,L]=o.useState(!1),_=(0,s.s)(t,e=>p(e)),A=(0,c.jH)(a);return(0,n.jsx)(m,{scope:r,type:i,dir:A,scrollHideDelay:d,scrollArea:f,viewport:h,onViewportChange:v,content:w,onContentChange:g,scrollbarX:b,onScrollbarXChange:x,scrollbarXEnabled:P,onScrollbarXEnabledChange:j,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:N,onScrollbarYEnabledChange:L,onCornerWidthChange:E,onCornerHeightChange:T,children:(0,n.jsx)(l.sG.div,{dir:A,...u,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})})});g.displayName=p;var b="ScrollAreaViewport",x=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:i,nonce:a,...d}=e,c=w(b,r),u=o.useRef(null),f=(0,s.s)(t,u,c.onViewportChange);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),(0,n.jsx)(l.sG.div,{"data-radix-scroll-area-viewport":"",...d,ref:f,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,n.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:i})})]})});x.displayName=b;var y="ScrollAreaScrollbar",S=o.forwardRef((e,t)=>{let{forceMount:r,...l}=e,i=w(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:s}=i,d="horizontal"===e.orientation;return o.useEffect(()=>(d?a(!0):s(!0),()=>{d?a(!1):s(!1)}),[d,a,s]),"hover"===i.type?(0,n.jsx)(C,{...l,ref:t,forceMount:r}):"scroll"===i.type?(0,n.jsx)(E,{...l,ref:t,forceMount:r}):"auto"===i.type?(0,n.jsx)(R,{...l,ref:t,forceMount:r}):"always"===i.type?(0,n.jsx)(T,{...l,ref:t}):null});S.displayName=y;var C=o.forwardRef((e,t)=>{let{forceMount:r,...l}=e,a=w(y,e.__scopeScrollArea),[s,d]=o.useState(!1);return o.useEffect(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),d(!0)},n=()=>{t=window.setTimeout(()=>d(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,n.jsx)(i.C,{present:r||s,children:(0,n.jsx)(R,{"data-state":s?"visible":"hidden",...l,ref:t})})}),E=o.forwardRef((e,t)=>{var r,l;let{forceMount:a,...s}=e,d=w(y,e.__scopeScrollArea),c="horizontal"===e.orientation,u=F(()=>h("SCROLL_END"),100),[p,h]=(r="hidden",l={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,t)=>{let r=l[e][t];return null!=r?r:e},r));return o.useEffect(()=>{if("idle"===p){let e=window.setTimeout(()=>h("HIDE"),d.scrollHideDelay);return()=>window.clearTimeout(e)}},[p,d.scrollHideDelay,h]),o.useEffect(()=>{let e=d.viewport,t=c?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(h("SCROLL"),u()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[d.viewport,c,h,u]),(0,n.jsx)(i.C,{present:a||"hidden"!==p,children:(0,n.jsx)(T,{"data-state":"hidden"===p?"hidden":"visible",...s,ref:t,onPointerEnter:(0,f.m)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.m)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),R=o.forwardRef((e,t)=>{let r=w(y,e.__scopeScrollArea),{forceMount:l,...a}=e,[s,d]=o.useState(!1),c="horizontal"===e.orientation,u=F(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;d(c?e:t)}},10);return U(r.viewport,u),U(r.content,u),(0,n.jsx)(i.C,{present:l||s,children:(0,n.jsx)(T,{"data-state":s?"visible":"hidden",...a,ref:t})})}),T=o.forwardRef((e,t)=>{let{orientation:r="vertical",...l}=e,i=w(y,e.__scopeScrollArea),a=o.useRef(null),s=o.useRef(0),[d,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=M(d.viewport,d.content),f={...l,sizes:d,onSizesChange:c,hasThumb:!!(u>0&&u<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function p(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=W(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport;return Y([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,s.current,d,t)}return"horizontal"===r?(0,n.jsx)(P,{...f,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=G(i.viewport.scrollLeft,d,i.dir);a.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}}):"vertical"===r?(0,n.jsx)(j,{...f,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=G(i.viewport.scrollTop,d);a.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}}):null}),P=o.forwardRef((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(y,e.__scopeScrollArea),[d,c]=o.useState(),u=o.useRef(null),f=(0,s.s)(t,u,a.onScrollbarXChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,n.jsx)(_,{"data-orientation":"horizontal",...i,ref:f,sizes:r,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":W(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&a.viewport&&d&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:k(d.paddingLeft),paddingEnd:k(d.paddingRight)}})}})}),j=o.forwardRef((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(y,e.__scopeScrollArea),[d,c]=o.useState(),u=o.useRef(null),f=(0,s.s)(t,u,a.onScrollbarYChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,n.jsx)(_,{"data-orientation":"vertical",...i,ref:f,sizes:r,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":W(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&a.viewport&&d&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:k(d.paddingTop),paddingEnd:k(d.paddingBottom)}})}})}),[N,L]=h(y),_=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:a,onThumbChange:c,onThumbPointerUp:u,onThumbPointerDown:p,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:m,onResize:g,...b}=e,x=w(y,r),[S,C]=o.useState(null),E=(0,s.s)(t,e=>C(e)),R=o.useRef(null),T=o.useRef(""),P=x.viewport,j=i.content-i.viewport,L=(0,d.c)(m),_=(0,d.c)(h),A=F(g,10);function D(e){R.current&&v({x:e.clientX-R.current.left,y:e.clientY-R.current.top})}return o.useEffect(()=>{let e=e=>{let t=e.target;(null==S?void 0:S.contains(t))&&L(e,j)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[P,S,j,L]),o.useEffect(_,[i,_]),U(S,A),U(x.content,A),(0,n.jsx)(N,{scope:r,scrollbar:S,hasThumb:a,onThumbChange:(0,d.c)(c),onThumbPointerUp:(0,d.c)(u),onThumbPositionChange:_,onThumbPointerDown:(0,d.c)(p),children:(0,n.jsx)(l.sG.div,{...b,ref:E,style:{position:"absolute",...b.style},onPointerDown:(0,f.m)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),R.current=S.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),D(e))}),onPointerMove:(0,f.m)(e.onPointerMove,D),onPointerUp:(0,f.m)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,x.viewport&&(x.viewport.style.scrollBehavior=""),R.current=null})})})}),A="ScrollAreaThumb",D=o.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=L(A,e.__scopeScrollArea);return(0,n.jsx)(i.C,{present:r||l.hasThumb,children:(0,n.jsx)(I,{ref:t,...o})})}),I=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:i,...a}=e,d=w(A,r),c=L(A,r),{onThumbPositionChange:u}=c,p=(0,s.s)(t,e=>c.onThumbChange(e)),h=o.useRef(void 0),v=F(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{let e=d.viewport;if(e){let t=()=>{if(v(),!h.current){let t=X(e,u);h.current=t,u()}};return u(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[d.viewport,v,u]),(0,n.jsx)(l.sG.div,{"data-state":c.hasThumb?"visible":"hidden",...a,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,f.m)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;c.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,f.m)(e.onPointerUp,c.onThumbPointerUp)})});D.displayName=A;var O="ScrollAreaCorner",z=o.forwardRef((e,t)=>{let r=w(O,e.__scopeScrollArea),o=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&o?(0,n.jsx)(H,{...e,ref:t}):null});z.displayName=O;var H=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,...i}=e,a=w(O,r),[s,d]=o.useState(0),[c,u]=o.useState(0),f=!!(s&&c);return U(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),u(t)}),U(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),d(t)}),f?(0,n.jsx)(l.sG.div,{...i,ref:t,style:{width:s,height:c,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}}):null});function k(e){return e?parseInt(e,10):0}function M(e,t){let r=e/t;return isNaN(r)?0:r}function W(e){let t=M(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function G(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=W(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,i]:[-1*i,0]);return Y([0,i],[0,l-n])(a)}function Y(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var X=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function F(e,t){let r=(0,d.c)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function U(e,t){let r=(0,d.c)(t);(0,u.N)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var B=r(77030);let V=o.forwardRef(({className:e,children:t,...r},o)=>(0,n.jsxs)(g,{ref:o,className:(0,B.QP)("overflow-hidden",e),...r,children:[t,(0,n.jsx)(z,{}),(0,n.jsx)(q,{orientation:"vertical"})]}));V.displayName=g.displayName;let Q=o.forwardRef(({className:e,children:t,...r},o)=>(0,n.jsx)(x,{ref:o,className:(0,B.QP)("size-full rounded-[inherit]",e),...r,children:t}));Q.displayName=x.displayName;let q=o.forwardRef(({className:e,orientation:t="vertical",...r},o)=>(0,n.jsx)(S,{ref:o,orientation:t,className:(0,B.QP)("flex select-none data-[state=hidden]:animate-fd-fade-out","vertical"===t&&"h-full w-1.5","horizontal"===t&&"h-1.5 flex-col",e),...r,children:(0,n.jsx)(D,{className:"relative flex-1 rounded-full bg-fd-border"})}));q.displayName=S.displayName},62236:(e,t,r)=>{r.d(t,{Nt:()=>T,Ke:()=>j,R6:()=>P});var n=r(93800),o=r(44388),l=r(59017),i=r(6964),a=r(50605),s=r(75215),d=r(4090),c=r(27653),u=r(30130),f=r(48077),p="Collapsible",[h,v]=(0,i.A)(p),[m,w]=h(p),g=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:l,defaultOpen:i,disabled:s,onOpenChange:d,...u}=e,[p=!1,h]=(0,a.i)({prop:l,defaultProp:i,onChange:d});return(0,n.jsx)(m,{scope:r,disabled:s,contentId:(0,f.B)(),open:p,onOpenToggle:o.useCallback(()=>h(e=>!e),[h]),children:(0,n.jsx)(c.sG.div,{"data-state":E(p),"data-disabled":s?"":void 0,...u,ref:t})})});g.displayName=p;var b="CollapsibleTrigger",x=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,...o}=e,i=w(b,r);return(0,n.jsx)(c.sG.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":E(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...o,ref:t,onClick:(0,l.m)(e.onClick,i.onOpenToggle)})});x.displayName=b;var y="CollapsibleContent",S=o.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=w(y,e.__scopeCollapsible);return(0,n.jsx)(u.C,{present:r||l.open,children:e=>{let{present:r}=e;return(0,n.jsx)(C,{...o,ref:t,present:r})}})});S.displayName=y;var C=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:l,children:i,...a}=e,u=w(y,r),[f,p]=o.useState(l),h=o.useRef(null),v=(0,d.s)(t,h),m=o.useRef(0),g=m.current,b=o.useRef(0),x=b.current,S=u.open||f,C=o.useRef(S),R=o.useRef(void 0);return o.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.N)(()=>{let e=h.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,b.current=t.width,C.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),p(l)}},[u.open,l]),(0,n.jsx)(c.sG.div,{"data-state":E(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!S,...a,ref:v,style:{"--radix-collapsible-content-height":g?"".concat(g,"px"):void 0,"--radix-collapsible-content-width":x?"".concat(x,"px"):void 0,...e.style},children:S&&i})});function E(e){return e?"open":"closed"}var R=r(77030);let T=g,P=x,j=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,[i,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{a(!0)},[]),(0,n.jsx)(S,{ref:t,...l,className:(0,R.QP)("overflow-hidden",i&&"data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down",l.className),children:r})});j.displayName=S.displayName},63818:(e,t,r)=>{r.d(t,{L:()=>c,TreeContextProvider:()=>d,t:()=>u});var n=r(93800),o=r(43807),l=r(44388),i=r(5753);let a=(0,l.createContext)(null),s=(0,l.createContext)([]);function d(e){var t,r;let{children:d,tree:c}=e,u=(0,l.useRef)(0),f=(0,o.usePathname)(),p=(0,l.useMemo)(()=>{var e;return null!==(e=(0,i.oe)(c.children,f))&&void 0!==e?e:[]},[f,c]),h=null!==(t=p.findLast(e=>"folder"===e.type&&e.root))&&void 0!==t?t:c;return null!==(r=h.$id)&&void 0!==r||(h.$id=String(u.current++)),(0,n.jsx)(a.Provider,{value:(0,l.useMemo)(()=>({root:h}),[h]),children:(0,n.jsx)(s.Provider,{value:p,children:d})})}function c(){return(0,l.useContext)(s)}function u(){let e=(0,l.useContext)(a);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}},66580:(e,t,r)=>{r.d(t,{T:()=>n.T});var n=r(44906);r(76892)}}]);