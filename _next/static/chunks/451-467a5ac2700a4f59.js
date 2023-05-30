"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{4731:function(e,r,t){t.d(r,{Z:function(){return j}});var n=t(3366),i=t(7462),o=t(7294),a=t(6010),l=t(4780),s=t(1719),c=t(8884),d=t(4235),x=t(5893),p=(0,d.Z)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),u=t(4867);function h(e){return(0,u.Z)("MuiAvatar",e)}(0,t(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=e=>{let{classes:r,variant:t,colorDefault:n}=e;return(0,l.Z)({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},h,r)},m=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),b=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),y=o.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:d,component:p="div",imgProps:u,sizes:h,src:y,srcSet:j,variant:k="circular"}=t,w=(0,n.Z)(t,g),Z=null,R=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:n}){let[i,a]=o.useState(!1);return o.useEffect(()=>{if(!t&&!n)return;a(!1);let i=!0,o=new Image;return o.onload=()=>{i&&a("loaded")},o.onerror=()=>{i&&a("error")},o.crossOrigin=e,o.referrerPolicy=r,o.src=t,n&&(o.srcset=n),()=>{i=!1}},[e,r,t,n]),i}((0,i.Z)({},u,{src:y,srcSet:j})),G=y||j,C=G&&"error"!==R,I=(0,i.Z)({},t,{colorDefault:!C,component:p,variant:k}),A=f(I);return Z=C?(0,x.jsx)(b,(0,i.Z)({alt:l,src:y,srcSet:j,sizes:h,ownerState:I,className:A.img},u)):null!=s?s:G&&l?l[0]:(0,x.jsx)(v,{className:A.fallback}),(0,x.jsx)(m,(0,i.Z)({as:p,ownerState:I,className:(0,a.Z)(A.root,d),ref:r},w,{children:Z}))});var j=y},7831:function(e,r,t){t.d(r,{F:function(){return s}});var n=t(5893),i=t(1953),o=t(9630),a=t(8416);let l=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.primary_pink};case"Room B":return{backgroundColor:a.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},s=e=>{let{sessionId:r,roomName:t,isRoomNameDisplayed:s}=e,{backgroundColor:c}=l(t);return(0,n.jsx)(i.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,n.jsx)(o.Z,{variant:"caption",sx:{color:a.w.text.white},children:s?"".concat(t," : ").concat(r):r})})}},435:function(e,r,t){t.d(r,{y:function(){return o}});var n=t(5893),i=t(4731);let o=e=>{let{iconUrl:r,name:t,size:o}=e;return(0,n.jsx)(i.Z,{alt:t,src:r,sx:{width:o,height:o,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},635:function(e,r,t){t.d(r,{Rs:function(){return j},kV:function(){return l},Sm:function(){return p},iB:function(){return h},G7:function(){return v}}),t(4799);var n=t(5893),i=t(1953),o=t(9630),a=t(8416);let l=e=>{let{title:r,minutes:t}=e;return(0,n.jsxs)(i.Z,{sx:{backgroundColor:a.w.background.secondary_blue,padding:"20px 16px",borderRadius:"4px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.Z,{variant:"body2",children:r}),(0,n.jsx)(o.Z,{variant:"caption",children:"(".concat(t,"min)")})]})};var s=t(7831),c=t(9640),d=t(1664),x=t.n(d);let p=e=>{let{title:r,roomName:t,sessionId:l,description:d,speaker:p,sessionLevel:u,sessionType:g}=e,{isPCOrOver:f}=(0,c.tH)();return(0,n.jsx)(x(),{href:"/sessions/".concat(l),style:{display:"flex"},children:(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:f?"24px":"16px",gap:f?"12px":"8px",borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:a.w.background.primary,":hover":{opacity:"0.6"}},children:[(0,n.jsx)(o.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:r}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,n.jsx)(s.F,{isRoomNameDisplayed:!0,roomName:t,sessionId:l}),(0,n.jsx)(o.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:d})]}),(0,n.jsxs)(i.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch",marginTop:"auto"},children:[(0,n.jsx)(h,{name:p.fullName,tagLine:p.tagLine,profilePicture:p.profilePicture}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[u&&(0,n.jsxs)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:["Level: ",u]}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:g})]})]})]})})};var u=t(435);let h=e=>{let{profilePicture:r,name:t,tagLine:l}=e;return(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(u.y,{iconUrl:r,name:t,size:"40px"}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,n.jsx)(o.Z,{variant:"h6",children:t}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{color:a.w.text.secondary},children:l})]})]})};t(8561);var g=t(5675),f=t.n(g);let m=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.secondary_pink};case"Room B":return{backgroundColor:a.w.background.secondary_green};default:throw Error("Invalid room ".concat(e))}},b=e=>e&&e.includes("40min")?{height:"280px"}:{height:"140px"},v=e=>{let{roomName:r,sessionId:t,title:a,sessionType:l,speakerName:c,profilePicture:d}=e,{backgroundColor:p}=m(r),{height:u}=b(l);return(0,n.jsx)(x(),{href:"/sessions/".concat(t),children:(0,n.jsxs)(i.Z,{sx:{backgroundColor:p,padding:"16px",borderRadius:"4px",width:"100%",height:u,display:"flex",flexDirection:"column",gap:"4px",":hover":{opacity:"0.6"}},children:[(0,n.jsx)(s.F,{sessionId:t,roomName:r,isRoomNameDisplayed:!1}),(0,n.jsx)(o.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:a}),(0,n.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,n.jsx)(i.Z,{width:"20px",height:"20px",borderRadius:"50%",overflow:"hidden",margin:"0 4px 0 0",children:(0,n.jsx)(f(),{src:d,width:20,height:20,style:{objectFit:"contain"},alt:"".concat(c,"'s icon"),quality:100})}),(0,n.jsx)(o.Z,{variant:"caption",fontWeight:"bold",children:c}),(0,n.jsx)(o.Z,{variant:"caption",margin:"0 0 0 auto",children:l})]})]})})};var y=t(6257);let j=e=>{let{title:r,description:t}=e;return(0,n.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(o.Z,{variant:"h3",children:r}),(0,n.jsx)(o.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,y.i)(t)})]})}},2451:function(e,r,t){t.d(r,{J:function(){return g},z:function(){return p}});var n=t(5893),i=t(1504),o=t(7643),a=t(1953),l=t(9630),s=t(8416),c=t(5675),d=t.n(c);let x=()=>(0,n.jsxs)(a.Z,{bgcolor:s.w.background.secondary,display:"flex",flexDirection:"column",alignItems:"center",px:{xs:2},py:{md:10,xs:4},children:[(0,n.jsx)(l.Z,{variant:"h2",textAlign:"center",children:"Special Thanks"}),(0,n.jsxs)(a.Z,{bgcolor:s.w.background.primary,maxWidth:"1024px",width:"100%",borderRadius:5,p:{xs:3,md:5},children:[(0,n.jsx)(l.Z,{variant:"body1",align:"center",children:"reBako.io powered by"}),(0,n.jsx)(a.Z,{position:"relative",sx:{aspectRatio:"16/9",maxWidth:"384px",mx:"auto"},children:(0,n.jsx)(d(),{src:"special-thanks/sikmi.png",alt:"しくみ製作所",quality:100,fill:!0,style:{objectFit:"contain"}})})]})]}),p=()=>(0,n.jsxs)(i.A,{children:[(0,n.jsx)(o.CO,{}),(0,n.jsx)(o.Uz,{}),(0,n.jsx)(o.PA,{}),(0,n.jsx)(x,{})]});var u=t(4374),h=t(635);let g=()=>{let{t:e}=(0,u.$)();return(0,n.jsx)(i.A,{children:(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:{md:10,xs:4},px:"24px",mt:"100px",children:[(0,n.jsx)(l.Z,{variant:"h2",children:e("floor_guide_title")}),(0,n.jsx)(o.ki,{}),(0,n.jsx)(a.Z,{width:"80%",height:"8px",sx:{margin:"40px",borderRadius:"4px",backgroundColor:s.w.background.secondary}}),(0,n.jsx)(l.Z,{variant:"h2",children:e("booth_information_title")}),[{title:"Kyoto.go LT & 雑談会場 「畳」",description:"こんにちは！　京都のほうから来ましたKyoto.goです！\nオンラインでのLT会やもくもく会などを月1回のペースで開催しています。\n今回、Kyoto.goではランチタイムにLT大会を開催します。1人3分のスーパーライトニングトーク形式を予定しています（発表者はconnpassでの事前募集枠と当日飛び入り参加枠で募集しています）。発表の合間には参加者同士の雑談タイムを設けて、Gopher同士でワイワイとGoの知見を深め合える時間をご提供します。\nなお、発表者の方にはKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。"},{title:"Gopherラジオ",description:"Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。\n\n12:00 - 13:00 Go の歴史と変遷 Looking back on history of Go\n13:50 - 14:50 Go の開発について語ろう How do you develop in Go ?\n15:00 - 16:00 ChatGPT は良い Go のコードを書けるのか !? Get ChatGPT to write Go !?"},{title:"Umeda.go + TinyGo ",description:"本ブースでは、 TinyGo の組込ハンズオンとしてシンプルな自作キーボードの作成を行います。基本的には Wio Terminal (https://akizukidenshi.com/catalog/g/gM-15275/) を使って説明しますが、それ以外の TinyGo で遊べるマイコン (https://sago35.hatenablog.com/entry/2023/02/13/220248) のうち samd51 / rp2040 / nrf52840 を搭載したマイコンであれば使用可能です。キーボードとして使いたいので、何らかのボタンを持っているか、外付けできたほうが良いです。\nUmeda.go は、プログラミング言語 Go に関するテックトークなどのイベントをやっています。名前が示す通り、大阪を中心として活動しています。技術レベル・知識を問わず、Goを学びたい人が気軽に相談できるコミュニティ を目指しています。イベントアカウントをフォローしておくと、随時イベント情報をお知らせいたします。\nhttps://twitter.com/umedago"}].map((e,r)=>{let{title:t,description:i}=e;return(0,n.jsx)(h.Rs,{title:t,description:i},r)})]})})}},6257:function(e,r,t){t.d(r,{i:function(){return s}});var n=t(5893),i=t(7294),o=t(33);let a=RegExp("(https?:\\/\\/[^)\\s\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}]+)","gu"),l=e=>{let r=e.replace(/(https?:\/\/)/,"");return r.length>24?r.slice(0,24)+"...":r},s=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{keepFullLength:t=!1}=r,s=e.split(a);return s.map((e,r)=>e.match(a)?(0,n.jsx)(o.dL,{href:e,children:t?e:l(e)},r):(0,n.jsx)(i.Fragment,{children:e},r))}}}]);