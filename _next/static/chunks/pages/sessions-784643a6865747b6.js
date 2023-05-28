(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{4587:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sessions",function(){return n(238)}])},7831:function(e,r,n){"use strict";n.d(r,{F:function(){return l}});var t=n(5893),i=n(1953),a=n(9630),s=n(8416);let o=e=>{switch(e){case"Room A":return{backgroundColor:s.w.background.primary_pink};case"Room B":return{backgroundColor:s.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},l=e=>{let{sessionId:r,roomName:n,isRoomNameDisplayed:l}=e,{backgroundColor:c}=o(n);return(0,t.jsx)(i.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,t.jsx)(a.Z,{variant:"caption",sx:{color:s.w.text.white},children:l?"".concat(n," : ").concat(r):r})})}},435:function(e,r,n){"use strict";n.d(r,{y:function(){return a}});var t=n(5893),i=n(4731);let a=e=>{let{iconUrl:r,name:n,size:a}=e;return(0,t.jsx)(i.Z,{alt:n,src:r,sx:{width:a,height:a,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},635:function(e,r,n){"use strict";n.d(r,{Rs:function(){return k},kV:function(){return o},Sm:function(){return p},iB:function(){return h},G7:function(){return w}}),n(4799);var t=n(5893),i=n(1953),a=n(9630),s=n(8416);let o=e=>{let{title:r,minutes:n}=e;return(0,t.jsxs)(i.Z,{sx:{backgroundColor:s.w.background.secondary_blue,padding:"20px 16px",borderRadius:"4px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)(a.Z,{variant:"body2",children:r}),(0,t.jsx)(a.Z,{variant:"caption",children:"(".concat(n,"min)")})]})};var l=n(7831),c=n(9640),d=n(1664),x=n.n(d);let p=e=>{let{title:r,roomName:n,sessionId:o,description:d,speaker:p,sessionLevel:u,sessionType:g}=e,{isPCOrOver:m}=(0,c.tH)();return(0,t.jsx)(x(),{href:"/sessions/".concat(o),children:(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:m?"24px":"16px",gap:m?"12px":"8px",borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:s.w.background.primary,":hover":{opacity:"0.6"}},children:[(0,t.jsx)(a.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:r}),(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,t.jsx)(l.F,{isRoomNameDisplayed:!0,roomName:n,sessionId:o}),(0,t.jsx)(a.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word"},children:d})]}),(0,t.jsxs)(i.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch"},children:[(0,t.jsx)(h,{name:p.fullName,tagLine:p.tagLine,profilePicture:p.profilePicture}),(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[u&&(0,t.jsxs)(a.Z,{variant:"subtitle1",sx:{textAlign:"right",color:s.w.text.secondary},children:["Level: ",u]}),(0,t.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"right",color:s.w.text.secondary},children:g})]})]})]})})};var u=n(435);let h=e=>{let{profilePicture:r,name:n,tagLine:o}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,t.jsx)(u.y,{iconUrl:r,name:n,size:"40px"}),(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,t.jsx)(a.Z,{variant:"h6",children:n}),(0,t.jsx)(a.Z,{variant:"subtitle1",sx:{color:s.w.text.secondary},children:o})]})]})};n(8561);var g=n(5675),m=n.n(g);let f=e=>{switch(e){case"Room A":return{backgroundColor:s.w.background.secondary_pink};case"Room B":return{backgroundColor:s.w.background.secondary_green};default:throw Error("Invalid room ".concat(e))}},b=e=>e&&e.includes("40min")?{height:"280px"}:{height:"140px"},w=e=>{let{roomName:r,sessionId:n,title:s,sessionType:o,speakerName:c,profilePicture:d}=e,{backgroundColor:p}=f(r),{height:u}=b(o);return(0,t.jsx)(x(),{href:"/sessions/".concat(n),children:(0,t.jsxs)(i.Z,{sx:{backgroundColor:p,padding:"16px",borderRadius:"4px",width:"100%",height:u,display:"flex",flexDirection:"column",gap:"4px",":hover":{opacity:"0.6"}},children:[(0,t.jsx)(l.F,{sessionId:n,roomName:r,isRoomNameDisplayed:!1}),(0,t.jsx)(a.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:s}),(0,t.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,t.jsx)(i.Z,{width:"20px",height:"20px",borderRadius:"50%",overflow:"hidden",margin:"0 4px 0 0",children:(0,t.jsx)(m(),{src:d,width:20,height:20,style:{objectFit:"contain"},alt:"".concat(c,"'s icon"),quality:100})}),(0,t.jsx)(a.Z,{variant:"caption",fontWeight:"bold",children:c}),(0,t.jsx)(a.Z,{variant:"caption",margin:"0 0 0 auto",children:o})]})]})})};var j=n(6257);let k=e=>{let{title:r,description:n}=e;return(0,t.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,t.jsx)(a.Z,{variant:"h3",children:r}),(0,t.jsx)(a.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,j.i)(n)})]})}},6257:function(e,r,n){"use strict";n.d(r,{i:function(){return l}});var t=n(5893),i=n(7294),a=n(8416);let s=RegExp("(https?:\\/\\/[^)\\s\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}]+)","gu"),o=e=>{let r=e.replace(/(https?:\/\/)/,"");return r.length>24?r.slice(0,24)+"...":r},l=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{keepFullLength:n=!1}=r,l=e.split(s);return l.map((e,r)=>e.match(s)?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:a.w.text.link,textDecoration:"underline"},children:n?e:o(e)},r):(0,t.jsx)(i.Fragment,{children:e},r))}},238:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return x}});var t=n(5893),i=n(9630),a=n(1953),s=n(9072),o=n(1504),l=n(635),c=n(8416);let d=e=>{let{sessionsAndSpeakers:r}=e;return(0,t.jsxs)(o.A,{children:[(0,t.jsx)(i.Z,{variant:"h2",align:"center",sx:{marginTop:{xs:"80px",sm:"160px"},marginBottom:{xs:"32px",sm:"72px"}},children:"Sessions & Speakers"}),(0,t.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",backgroundColor:c.w.background.secondary,padding:{xs:"32px 16px",md:"80px 20px"},minHeight:"100vh"},children:(0,t.jsx)(a.Z,{maxWidth:"1024px",width:"100%",children:(0,t.jsx)(s.ZP,{container:!0,spacing:{xs:1,md:3},mx:"auto",columns:12,justifyContent:"center",alignItems:"stretch",children:r.map(e=>{let{title:r,roomName:n,sessionId:i,description:a,speaker:o,sessionLevel:c,sessionType:d}=e;return(0,t.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(l.Sm,{title:r,roomName:n,sessionId:i,description:a,speaker:o,sessionLevel:c,sessionType:d})},i)})})})})]})};var x=!0;r.default=d}},function(e){e.O(0,[714,603,131,504,774,888,179],function(){return e(e.s=4587)}),_N_E=e.O()}]);