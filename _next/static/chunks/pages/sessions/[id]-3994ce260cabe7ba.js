(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{6096:function(e,r,t){"use strict";t(7294);var o=t(4235),n=t(5893);r.Z=(0,o.Z)((0,n.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},4731:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var o=t(3366),n=t(7462),a=t(7294),i=t(6010),s=t(4780),l=t(1719),c=t(8884),u=t(4235),d=t(5893),x=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=t(4867);function h(e){return(0,p.Z)("MuiAvatar",e)}(0,t(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=e=>{let{classes:r,variant:t,colorDefault:o}=e;return(0,s.Z)({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},h,r)},v=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(x,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),Z=a.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:u,component:x="div",imgProps:p,sizes:h,src:Z,srcSet:g,variant:w="circular"}=t,j=(0,o.Z)(t,m),k=null,_=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:o}){let[n,i]=a.useState(!1);return a.useEffect(()=>{if(!t&&!o)return;i(!1);let n=!0,a=new Image;return a.onload=()=>{n&&i("loaded")},a.onerror=()=>{n&&i("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=t,o&&(a.srcset=o),()=>{n=!1}},[e,r,t,o]),n}((0,n.Z)({},p,{src:Z,srcSet:g})),D=Z||g,R=D&&"error"!==_,C=(0,n.Z)({},t,{colorDefault:!R,component:x,variant:w}),A=f(C);return k=R?(0,d.jsx)(y,(0,n.Z)({alt:s,src:Z,srcSet:g,sizes:h,ownerState:C,className:A.img},p)):null!=l?l:D&&s?s[0]:(0,d.jsx)(b,{className:A.fallback}),(0,d.jsx)(v,(0,n.Z)({as:x,ownerState:C,className:(0,i.Z)(A.root,u),ref:r},j,{children:k}))});var g=Z},6369:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sessions/[id]",function(){return t(7e3)}])},7831:function(e,r,t){"use strict";t.d(r,{F:function(){return l}});var o=t(5893),n=t(1953),a=t(9630),i=t(8416);let s=e=>{switch(e){case"Room A":return{backgroundColor:i.w.background.primary_pink};case"Room B":return{backgroundColor:i.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},l=e=>{let{sessionId:r,roomName:t,isRoomNameDisplayed:l}=e,{backgroundColor:c}=s(t);return(0,o.jsx)(n.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,o.jsx)(a.Z,{variant:"caption",sx:{color:i.w.text.white},children:l?"".concat(t," : ").concat(r):r})})}},435:function(e,r,t){"use strict";t.d(r,{y:function(){return a}});var o=t(5893),n=t(4731);let a=e=>{let{iconUrl:r,name:t,size:a}=e;return(0,o.jsx)(n.Z,{alt:t,src:r,sx:{width:a,height:a,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},7e3:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return $},default:function(){return B}});var o=t(5893),n=t(1953),a=t(9630),i=t(3366),s=t(7462),l=t(7294),c=t(6010),u=t(4780),d=t(6622),x=t(1719),p=t(8884),h=t(1625),m=t(4771),f=t(4867),v=t(1588);function y(e){return(0,f.Z)("MuiLink",e)}let b=(0,v.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var Z=t(4844),g=t(1796);let w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>w[e]||e,k=({theme:e,ownerState:r})=>{let t=j(r.color),o=(0,Z.DW)(e,`palette.${t}`,!1)||r.color,n=(0,Z.DW)(e,`palette.${t}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:(0,g.Fq)(o,.4)},_=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=e=>{let{classes:r,component:t,focusVisible:o,underline:n}=e,a={root:["root",`underline${(0,d.Z)(n)}`,"button"===t&&"button",o&&"focusVisible"]};return(0,u.Z)(a,y,r)},R=(0,x.ZP)(a.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`underline${(0,d.Z)(t.underline)}`],"button"===t.component&&r.button]}})(({theme:e,ownerState:r})=>(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:k({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})),C=l.forwardRef(function(e,r){let t=(0,p.Z)({props:e,name:"MuiLink"}),{className:n,color:a="primary",component:u="a",onBlur:d,onFocus:x,TypographyClasses:f,underline:v="always",variant:y="inherit",sx:b}=t,Z=(0,i.Z)(t,_),{isFocusVisibleRef:g,onBlur:j,onFocus:k,ref:C}=(0,h.Z)(),[A,N]=l.useState(!1),S=(0,m.Z)(r,C),M=e=>{j(e),!1===g.current&&N(!1),d&&d(e)},z=e=>{k(e),!0===g.current&&N(!0),x&&x(e)},F=(0,s.Z)({},t,{color:a,component:u,focusVisible:A,underline:v,variant:y}),I=D(F);return(0,o.jsx)(R,(0,s.Z)({color:a,className:(0,c.Z)(I.root,n),classes:f,component:u,onBlur:M,onFocus:z,ref:S,ownerState:F,variant:y,sx:[...Object.keys(w).includes(a)?[]:[{color:a}],...Array.isArray(b)?b:[b]]},Z))});var A=t(7831),N=t(435),S=t(1504),M=t(8416),z=t(4235),F=(0,z.Z)((0,o.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),I=(0,z.Z)((0,o.jsx)("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),P=t(6096),E=t(4374),H=t(1664),L=t.n(H);let V=e=>{let{title:r,roomName:t,sessionId:i,description:s,sessionLevel:l,sessionType:c,addEventToCalendarLink:u,speaker:{fullName:d,profilePicture:x,bio:p,tagLine:h,twitterLink:m}}=e,{t:f}=(0,E.$)();return(0,o.jsx)(S.A,{children:(0,o.jsxs)(n.Z,{sx:{my:"128px",maxWidth:"1024px",mx:"auto",backgroundColor:M.w.background.primary,borderRadius:"20px",p:{xs:"16px",sm:"24px 32px"}},children:[(0,o.jsx)(L(),{href:"/sessions",children:(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",mb:"40px",color:M.w.text.secondary,":hover":{color:M.w.text.primary,textDecoration:"underline"}},children:[(0,o.jsx)(F,{}),(0,o.jsx)(a.Z,{variant:"body2",sx:{color:M.w.text.secondary,":hover":{color:M.w.text.primary}},children:f("back_to_sessions")})]})}),(0,o.jsx)(a.Z,{variant:"h2",children:r}),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column",gap:"8px",mb:"24px"},children:[(0,o.jsx)(A.F,{roomName:t,sessionId:i,isRoomNameDisplayed:!0}),(0,o.jsx)(a.Z,{variant:"body2",sx:{whiteSpace:"pre-wrap"},children:s}),(0,o.jsxs)(n.Z,{sx:{display:"flex"},children:[(0,o.jsxs)(n.Z,{sx:{display:"flex",gap:"4px"},children:[l&&(0,o.jsx)(a.Z,{variant:"subtitle1",sx:{color:M.w.text.secondary},children:"Level: ".concat(l," / ")}),(0,o.jsx)(a.Z,{variant:"subtitle1",sx:{color:M.w.text.secondary},children:c})]}),(0,o.jsxs)(C,{href:u,target:"_blank",variant:"body2",sx:{display:"flex",gap:"4px",ml:"auto",alignItems:"center",color:M.w.text.primary,textDecoration:"none",":hover":{color:M.w.text.secondary,textDecoration:"underline"}},children:[(0,o.jsx)(I,{}),f("add_to_calendar")]})]})]}),(0,o.jsxs)(n.Z,{sx:{backgroundColor:M.w.background.secondary,borderRadius:"12px",p:{xs:"16px",sm:"32px"}},children:[(0,o.jsxs)(n.Z,{sx:{display:"flex",gap:"8px",alignItems:"center",mb:"8px"},children:[(0,o.jsx)(N.y,{iconUrl:x,name:d,size:"60px"}),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,o.jsx)(a.Z,{variant:"h4",children:d}),(0,o.jsx)(a.Z,{variant:"subtitle1",sx:{color:M.w.text.secondary},children:h})]}),m&&(0,o.jsx)(C,{href:m,target:"_blank",sx:{color:M.w.text.primary,ml:"auto",alignSelf:"flex-start",":hover":{color:M.w.text.secondary}},children:(0,o.jsx)(P.Z,{})})]}),(0,o.jsx)(a.Z,{variant:"body2",children:p})]})]})})};var $=!0,B=V}},function(e){e.O(0,[714,113,504,774,888,179],function(){return e(e.s=6369)}),_N_E=e.O()}]);