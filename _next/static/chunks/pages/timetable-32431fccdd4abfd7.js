(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{383:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timetable",function(){return t(8721)}])},7831:function(e,r,t){"use strict";t.d(r,{F:function(){return l}});var n=t(5893),i=t(1953),o=t(9630),a=t(8416);let s=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.primary_pink};case"Room B":return{backgroundColor:a.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},l=e=>{let{sessionId:r,roomName:t,isRoomNameDisplayed:l}=e,{backgroundColor:c}=s(t);return(0,n.jsx)(i.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,n.jsx)(o.Z,{variant:"caption",sx:{color:a.w.text.white},children:l?"".concat(t," : ").concat(r):r})})}},435:function(e,r,t){"use strict";t.d(r,{y:function(){return o}});var n=t(5893),i=t(4731);let o=e=>{let{iconUrl:r,name:t,size:o}=e;return(0,n.jsx)(i.Z,{alt:t,src:r,sx:{width:o,height:o,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},2225:function(e,r,t){"use strict";t.d(r,{Rs:function(){return A},k9:function(){return R},kV:function(){return s},Sm:function(){return p},iB:function(){return h},G7:function(){return w},eo:function(){return C}}),t(4799);var n=t(5893),i=t(1953),o=t(9630),a=t(8416);let s=e=>{let{title:r,minutes:t}=e;return(0,n.jsxs)(i.Z,{sx:{backgroundColor:a.w.background.secondary_blue,padding:"20px 16px",borderRadius:"4px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.Z,{variant:"body2",children:r}),(0,n.jsx)(o.Z,{variant:"caption",children:"(".concat(t,"min)")})]})};var l=t(7831),c=t(9640),d=t(1664),x=t.n(d);let p=e=>{let{title:r,roomName:t,sessionId:s,description:d,speaker:p,sessionLevel:u,sessionType:g}=e,{isPCOrOver:m}=(0,c.tH)();return(0,n.jsx)(x(),{href:"/sessions/".concat(s),style:{display:"flex"},children:(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:m?"24px":"16px",gap:m?"12px":"8px",borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:a.w.background.primary,":hover":{opacity:"0.6"}},children:[(0,n.jsx)(o.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:r}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,n.jsx)(l.F,{isRoomNameDisplayed:!0,roomName:t,sessionId:s}),(0,n.jsx)(o.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:d})]}),(0,n.jsxs)(i.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch",marginTop:"auto"},children:[(0,n.jsx)(h,{name:p.fullName,tagLine:p.tagLine,profilePicture:p.profilePicture}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[u&&(0,n.jsxs)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:["Level: ",u]}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:g})]})]})]})})};var u=t(435);let h=e=>{let{profilePicture:r,name:t,tagLine:s}=e;return(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(u.y,{iconUrl:r,name:t,size:"40px"}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,n.jsx)(o.Z,{variant:"h6",children:t}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{color:a.w.text.secondary},children:s})]})]})};t(8561);var g=t(5675),m=t.n(g);let f=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.secondary_pink};case"Room B":return{backgroundColor:a.w.background.secondary_green};default:throw Error("Invalid room ".concat(e))}},b=e=>e&&e.includes("40min")?{height:"280px"}:{height:"140px"},w=e=>{let{roomName:r,sessionId:t,title:a,sessionType:s,speakerName:c,profilePicture:d}=e,{backgroundColor:p}=f(r),{height:u}=b(s);return(0,n.jsx)(x(),{href:"/sessions/".concat(t),children:(0,n.jsxs)(i.Z,{sx:{backgroundColor:p,padding:"16px",borderRadius:"4px",width:"100%",height:u,display:"flex",flexDirection:"column",gap:"4px",":hover":{opacity:"0.6"}},children:[(0,n.jsx)(l.F,{sessionId:t,roomName:r,isRoomNameDisplayed:!1}),(0,n.jsx)(o.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:a}),(0,n.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,n.jsx)(i.Z,{width:"20px",height:"20px",borderRadius:"50%",overflow:"hidden",margin:"0 4px 0 0",children:(0,n.jsx)(m(),{src:d,width:20,height:20,style:{objectFit:"contain"},alt:"".concat(c,"'s icon"),quality:100})}),(0,n.jsx)(o.Z,{variant:"caption",fontWeight:"bold",children:c}),(0,n.jsx)(o.Z,{variant:"caption",margin:"0 0 0 auto",children:s})]})]})})};var j=t(6257);let A=e=>{let{title:r,description:t}=e;return(0,n.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(o.Z,{variant:"h3",children:r}),(0,n.jsx)(o.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,j.i)(t)})]})};var k=t(8346),y=t(4374),v=t(5084);let Z=e=>{switch(e){case"Room A":return"goconA";case"Room B":return"goconB";default:throw Error("Invalid room: ".concat(e))}},C=e=>{let{sessionId:r,title:t,roomName:i}=e,{t:o}=(0,y.$)(),s=Z(i),l="https://twitter.com/intent/tweet?url=https://gocon.jp/2023/sessions/".concat(r,"&text=").concat(t,"&hashtags=gocon,").concat(s);return(0,n.jsxs)(k.Z,{href:l,target:"_blank",variant:"body2",sx:{display:"flex",gap:"4px",alignItems:"center",textDecoration:"none",color:a.w.text.primary,":hover":{color:a.w.text.primary_hover,textDecoration:"underline"}},children:[(0,n.jsx)(v.Z,{"aria-label":o("tweet")}),(0,n.jsx)("span",{children:o("tweet")})]})};var I=t(6467);let R=e=>{let{googleCalendarEventCreationLink:r}=e,{t}=(0,y.$)();return(0,n.jsxs)(k.Z,{href:r,target:"_blank",variant:"body2",sx:{display:"flex",gap:"4px",alignItems:"center",color:a.w.text.primary,textDecoration:"none",":hover":{color:a.w.text.primary_hover,textDecoration:"underline"}},children:[(0,n.jsx)(I.Z,{}),(0,n.jsx)("span",{children:t("add_to_calendar")})]})}},6257:function(e,r,t){"use strict";t.d(r,{i:function(){return l}});var n=t(5893),i=t(7294),o=t(33);let a=RegExp("(https?:\\/\\/[^)\\s\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}]+)","gu"),s=e=>{let r=e.replace(/(https?:\/\/)/,"");return r.length>24?r.slice(0,24)+"...":r},l=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{keepFullLength:t=!1}=r,l=e.split(a);return l.map((e,r)=>e.match(a)?(0,n.jsx)(o.dL,{href:e,children:t?e:s(e)},r):(0,n.jsx)(i.Fragment,{children:e},r))}},8721:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return C},default:function(){return I}});var n={};t.r(n),t.d(n,{default:function(){return f}});var i={};t.r(i),t.d(i,{default:function(){return b}});var o=t(5893),a=t(1953),s=t(9630),l=t(7027),c=t(7484),d=t.n(c),x=t(7294),p=t(1504),u=t(2225),h=t(8416),g=t(5675),m=t.n(g),f={src:"/2023/_next/static/media/gopher_roomA.d6fb42ad.png",height:680,width:680,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42i2PO0sDURCF79+5P8jaVlSwCtjaKLYhtdiL4CokiNWuhc+gRjFpE7LZEMjmsUuyc/fxJQMZmGHgfJzDMYApy9JWVRUALs9zlyZzH7Cqma2gT8xuwnBM67lHGEWxQqYC3znHfLGU2XTCy/eIy+t3CaMhQGDUMkkSPt9euXts8uT/8NHpk8sawBk9g/6Aq1uPoxuPev2cdvsLgG28AgTr1YrGfVP2LhrsH9Y4OD6RNE0BfAWsZFn82/mjdnqG99Div9sFiIuisAqYTMQqLSIO0A20OmA2fw/cvwxc6eIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},b={src:"/2023/_next/static/media/gopher_roomB.5d1e8748.png",height:680,width:680,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA10lEQVR42i3Pv0vDQADF8fw7+XPcHXRwdPIfUjKom9IpgrGJk1BUCv4AEaU2XNLhDEm83l2a+9o7+uBtHx68CIiAWK9VoZSygG8OxJHPaPoYkOL9hsXdIeLlmup7jtZaBuS1sQPldN/8zk5opWA1PzM/xTFytSg8sH9NzWt6xNfbA03T0n1cssz2UH1rA+i6jml2y/kk5fk+oUwjlk8JQACFqGtOrybmILngs6zYLhrVNwB5eCAqIZMsJ509YrVmFzluhjga1so3xo05YJ1z1o1jsRlsuPkPX5DXsy0LH9sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let w=e=>{switch(e){case"Room A":return{backgroundColor:h.w.background.primary_pink};case"Room B":return{backgroundColor:h.w.background.primary_green};default:throw Error("Invalid room: ".concat(e))}},j=e=>{switch(e){case"Room A":return{src:n};case"Room B":return{src:i};default:throw Error("Invalid room: ".concat(e))}},A=e=>{let{roomName:r}=e,{backgroundColor:t}=w(r),{src:n}=j(r);return(0,o.jsxs)(a.Z,{sx:{position:"relative",backgroundColor:t,borderRadius:"8px 8px 0 0"},children:[(0,o.jsx)(s.Z,{variant:"body2",sx:{textAlign:"center",color:h.w.text.white,padding:"8px 16px",margin:0},children:r}),(0,o.jsx)(m(),{src:n,alt:"illustration of Gopher for ".concat(r),width:64,height:64,style:{position:"absolute",right:"16px",top:"0",bottom:"0",margin:"auto 0",border:"4px solid ".concat(t),borderRadius:"50%"}})]})};var k=t(9640),y=t(8298),v=t(3379);let Z=e=>{let{timeTableSessions:r}=e,[t,n]=(0,x.useState)(!1),{isPCOrOver:i}=(0,k.tH)(),c=(0,x.useCallback)(()=>{n(!0)},[]),g=(0,x.useCallback)(()=>{n(!1)},[]);return(0,o.jsx)(p.A,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{variant:"h2",sx:{textAlign:"center",paddingTop:{xs:"64px",sm:"128px"}},children:"2023.06.02(Fri)"}),!i&&(0,o.jsxs)(a.Z,{sx:{display:"flex",m:"32px 16px",justifyContent:"space-between"},children:[(0,o.jsxs)(l.Z,{onClick:g,disabled:!t,sx:{color:h.w.background.primary_pink,padding:0,":hover":{color:h.w.background.secondary_pink,backgroundColor:"transparent"}},children:[(0,o.jsx)(y.Z,{})," Room A"]}),(0,o.jsxs)(l.Z,{onClick:c,disabled:t,sx:{color:h.w.background.primary_green,padding:0,":hover":{color:h.w.background.secondary_green,backgroundColor:"transparent"}},children:["Room B ",(0,o.jsx)(v.Z,{})]})]}),(0,o.jsxs)(a.Z,{sx:{maxWidth:"1024px",mx:"auto",px:"16px",display:"grid",gridTemplateColumns:{xs:"auto 1fr",md:"auto 1fr 1fr"},rowGap:"4px",columnGap:{xs:"8px",sm:"24px"},alignItems:"start"},children:[(i||!t)&&(0,o.jsx)(a.Z,{sx:{gridColumn:"2 / 3",position:"sticky",top:"64px",zIndex:1200},children:(0,o.jsx)(A,{roomName:"Room A"})}),(i||t)&&(0,o.jsx)(a.Z,{sx:{gridColumn:{xs:"2 / 3",md:"3 / 4"},position:"sticky",top:"64px",zIndex:1200},children:(0,o.jsx)(A,{roomName:"Room B"})}),r.map(e=>{let{startsAt:r,plenum:n,roomA:l,roomB:c}=e;return(0,o.jsxs)(x.Fragment,{children:[(0,o.jsx)(a.Z,{sx:{gridColumn:"1 / 2"},children:(0,o.jsx)(s.Z,{sx:{textAlign:"right"},children:d()(r).format("HH:mm")})}),n&&(0,o.jsx)(a.Z,{sx:{gridColumn:"2 / -1"},children:(0,o.jsx)(u.kV,{title:n.title,minutes:n.minutes})}),l&&(i||!t)&&(0,o.jsx)(a.Z,{sx:{gridColumn:"2 / 3"},children:(0,o.jsx)(u.G7,{roomName:l.roomName,sessionId:l.sessionId,title:l.title,sessionType:l.sessionType,speakerName:l.speakerName,profilePicture:l.profilePicture})}),c&&(i||t)&&(0,o.jsx)(a.Z,{sx:{gridColumn:{xs:"2 / 3",md:"3 / 4"}},children:(0,o.jsx)(u.G7,{roomName:c.roomName,sessionId:c.sessionId,title:c.title,sessionType:c.sessionType,speakerName:c.speakerName,profilePicture:c.profilePicture})})]},r)})]})]})})};var C=!0,I=Z}},function(e){e.O(0,[714,603,750,504,774,888,179],function(){return e(e.s=383)}),_N_E=e.O()}]);