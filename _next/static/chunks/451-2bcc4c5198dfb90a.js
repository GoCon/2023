"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{4731:function(e,r,t){t.d(r,{Z:function(){return j}});var n=t(3366),i=t(7462),a=t(7294),o=t(6010),l=t(4780),s=t(1719),c=t(8884),d=t(4235),x=t(5893),p=(0,d.Z)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),u=t(4867);function h(e){return(0,u.Z)("MuiAvatar",e)}(0,t(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=e=>{let{classes:r,variant:t,colorDefault:n}=e;return(0,l.Z)({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},h,r)},m=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),b=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),y=a.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:d,component:p="div",imgProps:u,sizes:h,src:y,srcSet:j,variant:k="circular"}=t,Z=(0,n.Z)(t,g),w=null,R=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:n}){let[i,o]=a.useState(!1);return a.useEffect(()=>{if(!t&&!n)return;o(!1);let i=!0,a=new Image;return a.onload=()=>{i&&o("loaded")},a.onerror=()=>{i&&o("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=t,n&&(a.srcset=n),()=>{i=!1}},[e,r,t,n]),i}((0,i.Z)({},u,{src:y,srcSet:j})),S=y||j,A=S&&"error"!==R,D=(0,i.Z)({},t,{colorDefault:!A,component:p,variant:k}),I=f(D);return w=A?(0,x.jsx)(b,(0,i.Z)({alt:l,src:y,srcSet:j,sizes:h,ownerState:D,className:I.img},u)):null!=s?s:S&&l?l[0]:(0,x.jsx)(v,{className:I.fallback}),(0,x.jsx)(m,(0,i.Z)({as:p,ownerState:D,className:(0,o.Z)(I.root,d),ref:r},Z,{children:w}))});var j=y},7831:function(e,r,t){t.d(r,{F:function(){return s}});var n=t(5893),i=t(1953),a=t(9630),o=t(8416);let l=e=>{switch(e){case"Room A":return{backgroundColor:o.w.background.primary_pink};case"Room B":return{backgroundColor:o.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},s=e=>{let{sessionId:r,roomName:t,isRoomNameDisplayed:s}=e,{backgroundColor:c}=l(t);return(0,n.jsx)(i.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,n.jsx)(a.Z,{variant:"caption",sx:{color:o.w.text.white},children:s?"".concat(t," : ").concat(r):r})})}},435:function(e,r,t){t.d(r,{y:function(){return a}});var n=t(5893),i=t(4731);let a=e=>{let{iconUrl:r,name:t,size:a}=e;return(0,n.jsx)(i.Z,{alt:t,src:r,sx:{width:a,height:a,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},635:function(e,r,t){t.d(r,{Rs:function(){return g},Sm:function(){return x},iB:function(){return u}}),t(4799);var n=t(5893),i=t(8416),a=t(1953),o=t(9630),l=t(7831),s=t(9640),c=t(1664),d=t.n(c);let x=e=>{let{title:r,roomName:t,sessionId:c,description:x,speaker:p,sessionLevel:h,sessionType:g}=e,{isPCOrOver:f}=(0,s.tH)();return(0,n.jsx)(d(),{href:"/sessions/".concat(c),children:(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:f?"24px":"16px",gap:f?"12px":"8px",borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:i.w.background.primary,":hover":{opacity:"0.6"}},children:[(0,n.jsx)(o.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:r}),(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,n.jsx)(l.F,{isRoomNameDisplayed:!0,roomName:t,sessionId:c}),(0,n.jsx)(o.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word"},children:x})]}),(0,n.jsxs)(a.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch"},children:[(0,n.jsx)(u,{name:p.fullName,tagLine:p.tagLine,profilePicture:p.profilePicture}),(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[h&&(0,n.jsxs)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:i.w.text.secondary},children:["Level: ",h]}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{textAlign:"right",color:i.w.text.secondary},children:g})]})]})]})})};var p=t(435);let u=e=>{let{profilePicture:r,name:t,tagLine:l}=e;return(0,n.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(p.y,{iconUrl:r,name:t,size:"40px"}),(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,n.jsx)(o.Z,{variant:"h6",children:t}),(0,n.jsx)(o.Z,{variant:"subtitle1",sx:{color:i.w.text.secondary},children:l})]})]})};t(8561),t(5675);var h=t(6257);let g=e=>{let{title:r,description:t}=e;return(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(o.Z,{variant:"h3",children:r}),(0,n.jsx)(o.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,h.i)(t)})]})}},2451:function(e,r,t){t.d(r,{J:function(){return g},z:function(){return p}});var n=t(5893),i=t(1504),a=t(4709),o=t(1953),l=t(9630),s=t(8416),c=t(5675),d=t.n(c);let x=()=>(0,n.jsxs)(o.Z,{bgcolor:s.w.background.secondary,display:"flex",flexDirection:"column",alignItems:"center",px:{xs:2},py:{md:10,xs:4},children:[(0,n.jsx)(l.Z,{variant:"h2",textAlign:"center",children:"Special Thanks"}),(0,n.jsxs)(o.Z,{bgcolor:s.w.background.primary,maxWidth:"1024px",width:"100%",borderRadius:5,p:{xs:3,md:5},children:[(0,n.jsx)(l.Z,{variant:"body1",align:"center",children:"reBako.io powered by"}),(0,n.jsx)(o.Z,{position:"relative",sx:{aspectRatio:"16/9",maxWidth:"384px",mx:"auto"},children:(0,n.jsx)(d(),{src:"special-thanks/sikmi.png",alt:"しくみ製作所",quality:100,fill:!0,style:{objectFit:"contain"}})})]})]}),p=()=>(0,n.jsxs)(i.A,{children:[(0,n.jsx)(a.CO,{}),(0,n.jsx)(a.Uz,{}),(0,n.jsx)(a.PA,{}),(0,n.jsx)(x,{})]});var u=t(4374),h=t(635);let g=()=>{let{t:e}=(0,u.$)();return(0,n.jsx)(i.A,{children:(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:{md:10,xs:4},px:"24px",mt:"100px",children:[(0,n.jsx)(l.Z,{variant:"h2",children:e("floor_guide_title")}),(0,n.jsx)(a.ki,{}),(0,n.jsx)(o.Z,{width:"80%",height:"8px",sx:{margin:"40px",borderRadius:"4px",backgroundColor:s.w.background.secondary}}),(0,n.jsx)(l.Z,{variant:"h2",children:e("booth_information_title")}),[{title:"Kyoto.go LT & 雑談会場 「畳」",description:"こんにちは！　京都のほうから来ましたKyoto.goです！\nオンラインでのLT会やもくもく会などを月1回のペースで開催しています。\n今回、Kyoto.goではランチタイムにLT大会を開催します。1人3分のスーパーライトニングトーク形式を予定しています（発表者はconnpassでの事前募集枠と当日飛び入り参加枠で募集しています）。発表の合間には参加者同士の雑談タイムを設けて、Gopher同士でワイワイとGoの知見を深め合える時間をご提供します。\nなお、発表者の方にはKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。"},{title:"Gopherラジオ",description:"Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。"},{title:"Umeda.go + TinyGo ",description:"本ブースでは、 TinyGo の組込ハンズオンとしてシンプルな自作キーボードの作成を行います。基本的には Wio Terminal (https://akizukidenshi.com/catalog/g/gM-15275/) を使って説明しますが、それ以外の TinyGo で遊べるマイコン (https://sago35.hatenablog.com/entry/2023/02/13/220248) のうち samd51 / rp2040 / nrf52840 を搭載したマイコンであれば使用可能です。キーボードとして使いたいので、何らかのボタンを持っているか、外付けできたほうが良いです。\nUmeda.go は、プログラミング言語 Go に関するテックトークなどのイベントをやっています。名前が示す通り、大阪を中心として活動しています。技術レベル・知識を問わず、Goを学びたい人が気軽に相談できるコミュニティ を目指しています。イベントアカウントをフォローしておくと、随時イベント情報をお知らせいたします。\nhttps://twitter.com/umedago"}].map((e,r)=>{let{title:t,description:i}=e;return(0,n.jsx)(h.Rs,{title:t,description:i},r)})]})})}},6257:function(e,r,t){t.d(r,{i:function(){return s}});var n=t(5893),i=t(7294),a=t(8416);let o=RegExp("(https?:\\/\\/[^)\\s\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}]+)","gu"),l=e=>{let r=e.replace(/(https?:\/\/)/,"");return r.length>24?r.slice(0,24)+"...":r},s=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{keepFullLength:t=!1}=r,s=e.split(o);return s.map((e,r)=>e.match(o)?(0,n.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:a.w.text.link,textDecoration:"underline"},children:t?e:l(e)},r):(0,n.jsx)(i.Fragment,{children:e},r))}}}]);