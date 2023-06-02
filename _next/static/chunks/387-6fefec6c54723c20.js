"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{6467:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(4938)),i=r(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");t.Z=a},4731:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(3366),o=r(7462),i=r(7294),a=r(6010),s=r(4780),l=r(1719),c=r(8884),d=r(4235),x=r(5893),p=(0,d.Z)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(4867);function u(e){return(0,h.Z)("MuiAvatar",e)}(0,r(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],m=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,s.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},u,t)},f=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),v=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),y=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:d,component:p="div",imgProps:h,sizes:u,src:y,srcSet:j,variant:w="circular"}=r,k=(0,n.Z)(r,g),Z=null,R=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[o,a]=i.useState(!1);return i.useEffect(()=>{if(!r&&!n)return;a(!1);let o=!0,i=new Image;return i.onload=()=>{o&&a("loaded")},i.onerror=()=>{o&&a("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,n&&(i.srcset=n),()=>{o=!1}},[e,t,r,n]),o}((0,o.Z)({},h,{src:y,srcSet:j})),G=y||j,_=G&&"error"!==R,S=(0,o.Z)({},r,{colorDefault:!_,component:p,variant:w}),A=m(S);return Z=_?(0,x.jsx)(v,(0,o.Z)({alt:s,src:y,srcSet:j,sizes:u,ownerState:S,className:A.img},h)):null!=l?l:G&&s?s[0]:(0,x.jsx)(b,{className:A.fallback}),(0,x.jsx)(f,(0,o.Z)({as:p,ownerState:S,className:(0,a.Z)(A.root,d),ref:t},k,{children:Z}))});var j=y},7831:function(e,t,r){r.d(t,{F:function(){return l}});var n=r(5893),o=r(1953),i=r(9630),a=r(8416);let s=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.primary_pink};case"Room B":return{backgroundColor:a.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},l=e=>{let{sessionId:t,roomName:r,isRoomNameDisplayed:l}=e,{backgroundColor:c}=s(r);return(0,n.jsx)(o.Z,{sx:{display:"inline-flex",backgroundColor:c,borderRadius:"2px",padding:"2px 4px",width:"fit-content"},children:(0,n.jsx)(i.Z,{variant:"caption",sx:{color:a.w.text.white},children:l?"".concat(r," : ").concat(t):t})})}},435:function(e,t,r){r.d(t,{y:function(){return i}});var n=r(5893),o=r(4731);let i=e=>{let{iconUrl:t,name:r,size:i}=e;return(0,n.jsx)(o.Z,{alt:r,src:t,sx:{width:i,height:i,border:"1px solid rgba(0, 0, 0, 0.08)"}})}},2225:function(e,t,r){r.d(t,{Rs:function(){return y},k9:function(){return _},kV:function(){return s},Sm:function(){return x},iB:function(){return h},G7:function(){return v},eo:function(){return R}}),r(4799);var n=r(5893),o=r(1953),i=r(9630),a=r(8416);let s=e=>{let{title:t,minutes:r}=e;return(0,n.jsxs)(o.Z,{sx:{backgroundColor:a.w.background.secondary_blue,padding:"20px 16px",borderRadius:"4px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(i.Z,{variant:"body2",children:t}),(0,n.jsx)(i.Z,{variant:"caption",children:"(".concat(r,"min)")})]})};var l=r(7831),c=r(1664),d=r.n(c);let x=e=>{let{title:t,roomName:r,sessionId:s,description:c,speaker:x,sessionLevel:p,sessionType:u}=e;return(0,n.jsx)(d(),{href:"/sessions/".concat(s),style:{display:"flex"},children:(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:{xs:"16px",md:"24px"},gap:{xs:"8px",md:"12px"},borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:a.w.background.primary,":hover":{opacity:"0.6"}},children:[(0,n.jsx)(i.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:t}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,n.jsx)(l.F,{isRoomNameDisplayed:!0,roomName:r,sessionId:s}),(0,n.jsx)(i.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:c})]}),(0,n.jsxs)(o.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch",marginTop:"auto"},children:[(0,n.jsx)(h,{name:x.fullName,tagLine:x.tagLine,profilePicture:x.profilePicture}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[p&&(0,n.jsxs)(i.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:["Level: ",p]}),(0,n.jsx)(i.Z,{variant:"subtitle1",sx:{textAlign:"right",color:a.w.text.secondary},children:u})]})]})]})})};var p=r(435);let h=e=>{let{profilePicture:t,name:r,tagLine:s}=e;return(0,n.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(p.y,{iconUrl:t,name:r,size:"40px"}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,n.jsx)(i.Z,{variant:"h6",children:r}),(0,n.jsx)(i.Z,{variant:"subtitle1",sx:{color:a.w.text.secondary},children:s})]})]})};r(8561);var u=r(5675),g=r.n(u);let m=e=>{switch(e){case"Room A":return{backgroundColor:a.w.background.secondary_pink};case"Room B":return{backgroundColor:a.w.background.secondary_green};default:throw Error("Invalid room ".concat(e))}},f=e=>e&&e.includes("40min")?{height:"280px"}:{height:"140px"},v=e=>{let{roomName:t,sessionId:r,title:a,sessionType:s,speakerName:c,profilePicture:x}=e,{backgroundColor:p}=m(t),{height:h}=f(s);return(0,n.jsx)(d(),{href:"/sessions/".concat(r),children:(0,n.jsxs)(o.Z,{sx:{backgroundColor:p,padding:"16px",borderRadius:"4px",width:"100%",height:h,display:"flex",flexDirection:"column",gap:"4px",":hover":{opacity:"0.6"}},children:[(0,n.jsx)(l.F,{sessionId:r,roomName:t,isRoomNameDisplayed:!1}),(0,n.jsx)(i.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word",flexGrow:1},children:a}),(0,n.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,n.jsx)(o.Z,{width:"20px",height:"20px",borderRadius:"50%",overflow:"hidden",margin:"0 4px 0 0",children:(0,n.jsx)(g(),{src:x,width:20,height:20,style:{objectFit:"contain"},alt:"".concat(c,"'s icon"),quality:100})}),(0,n.jsx)(i.Z,{variant:"caption",fontWeight:"bold",children:c}),(0,n.jsx)(i.Z,{variant:"caption",margin:"0 0 0 auto",children:s})]})]})})};var b=r(6257);let y=e=>{let{title:t,description:r}=e;return(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(i.Z,{variant:"h3",children:t}),(0,n.jsx)(i.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,b.i)(r)})]})};var j=r(8346),w=r(4374),k=r(5084);let Z=e=>{switch(e){case"Room A":return"goconA";case"Room B":return"goconB";default:throw Error("Invalid room: ".concat(e))}},R=e=>{let{sessionId:t,title:r,roomName:o}=e,{t:i}=(0,w.$)(),s=Z(o),l="https://twitter.com/intent/tweet?url=https://gocon.jp/2023/sessions/".concat(t,"&text=").concat(r,"&hashtags=gocon,").concat(s);return(0,n.jsxs)(j.Z,{href:l,target:"_blank",variant:"body2",sx:{display:"flex",gap:"4px",alignItems:"center",textDecoration:"none",color:a.w.text.primary,":hover":{color:a.w.text.primary_hover,textDecoration:"underline"}},children:[(0,n.jsx)(k.Z,{"aria-label":i("tweet")}),(0,n.jsx)("span",{children:i("tweet")})]})};var G=r(6467);let _=e=>{let{googleCalendarEventCreationLink:t}=e,{t:r}=(0,w.$)();return(0,n.jsxs)(j.Z,{href:t,target:"_blank",variant:"body2",sx:{display:"flex",gap:"4px",alignItems:"center",color:a.w.text.primary,textDecoration:"none",":hover":{color:a.w.text.primary_hover,textDecoration:"underline"}},children:[(0,n.jsx)(G.Z,{}),(0,n.jsx)("span",{children:r("add_to_calendar")})]})}},9387:function(e,t,r){r.d(t,{J:function(){return m},z:function(){return a}});var n=r(5893),o=r(1504),i=r(7698);let a=()=>(0,n.jsxs)(o.A,{children:[(0,n.jsx)(i.CO,{}),(0,n.jsx)(i.ge,{}),(0,n.jsx)(i.Uz,{}),(0,n.jsx)(i.PA,{}),(0,n.jsx)(i.AL,{})]});var s=r(1953),l=r(9630),c=r(4374),d=r(8416),x=r(2225),p=r(7262),h=r(6257);let u=()=>{let{t:e}=(0,c.$)();return(0,n.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(l.Z,{variant:"h3",children:"Main"}),(0,n.jsx)(l.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:(0,h.i)('「platinum"Go"ld」「"Go"ld」「Silver」スポンサーのパートナー企業さまのブースとコミュニティのブースがあり、企業紹介、クイズ、ハンズオンなどさまざまなコンテンツを準備していただいております。\nお気軽にご参加いただき、お楽しみください。\n「ビンGo」ゲームの問題も各企業さまに出題頂いております。各ブースを周って回答を聞いてみましょう！\n他には、Goに関わる書籍や記事を集めた「Go Books」やGoのユーザー企業、OSS、コミュニティの情報を集めた「Go Users」もあります。\n参加者が自由にホワイトボード（Miro）で情報を共有できるようになっています。\n商業誌に限らず本を執筆されてる方、Goを使ってる事を知ってほしい企業のみなさま、コミュニティやOSSの宣伝などにご活用ください。\n何か不明点等あれば、Main会場内にある運営ブースにお越しください。\n')}),(0,n.jsx)("a",{href:"https://bin.gocon.jp/",target:"_blank",children:(0,n.jsx)(p.zx,{text:e("bingo")})}),(0,n.jsx)(l.Z,{variant:"caption",sx:{my:"8px"},children:"※ ".concat(e("need_connpass_number"))})]})},g=()=>(0,n.jsx)(s.Z,{width:"100%",height:"8px",sx:{margin:"40px",borderRadius:"4px",backgroundColor:d.w.background.secondary}}),m=()=>{let{t:e}=(0,c.$)();return(0,n.jsx)(o.A,{children:(0,n.jsxs)(s.Z,{sx:{maxWidth:"1024px",display:"flex",flexDirection:"column",alignItems:"center",px:{xs:"16px",sm:"32px"},mx:"auto"},children:[(0,n.jsx)(p.CD,{children:e("floor_guide_title")}),(0,n.jsx)(i.ki,{}),(0,n.jsx)(g,{}),(0,n.jsx)(l.Z,{variant:"h2",children:e("booth_information_title")}),(0,n.jsx)(u,{}),[{title:"Room A sponsored by GO Inc.",description:"トークセッションだけではなく、スポンサーセッション、LT、Ask the Speaker、Opening、Closingが行われます。なお、Room Aがいっぱいの場合は、ゲートページに遷移しますので、そこからRoom Aのサテライト会場をご利用ください。\n"},{title:"Room B sponsored by Kanmu, Inc.",description:"トークセッションとAsk the Speakerが行われます。ご興味あるセッションに是非、ご参加ください。なお、Room Bがいっぱいの場合は、ゲートページに遷移しますので、そこからRoom Bのサテライト会場をご利用ください。\n"}].map((e,t)=>{let{title:r,description:o}=e;return(0,n.jsx)(x.Rs,{title:r,description:o},t)}),(0,n.jsx)(g,{}),(0,n.jsx)(l.Z,{variant:"h2",children:e("community_booth_information_title")}),[{title:"Kyoto.go LT & 雑談会場 「畳」",description:"こんにちは！　京都のほうから来ましたKyoto.goです！　普段はオンラインでのLT会、もくもく会などを月1回のペースで開催しています。 (https://kyotogo.connpass.com/) \n\nKyoto.goのコミュニティブースでは、15:00の休憩時間にアンカンファレンスを開催します。Gopher同士で気になる話題を持ち寄って、ワイワイとGoの知見を深め合える時間をご提供します。\nまた、ブースではKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\n\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。"},{title:"Gopherラジオ",description:"Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。\n\n12:00 - 13:00 Go の歴史と変遷 Looking back on history of Go\n13:50 - 14:50 Go の開発について語ろう How do you develop in Go ?\n15:00 - 16:00 ChatGPT は良い Go のコードを書けるのか !? Get ChatGPT to write Go !?"},{title:"Umeda.go + TinyGo ",description:"本ブースでは、 TinyGo の組込ハンズオンとしてシンプルな自作キーボードの作成を行います。基本的には Wio Terminal (https://akizukidenshi.com/catalog/g/gM-15275/) を使って説明しますが、それ以外の TinyGo で遊べるマイコン (https://sago35.hatenablog.com/entry/2023/02/13/220248) のうち samd51 / rp2040 / nrf52840 を搭載したマイコンであれば使用可能です。キーボードとして使いたいので、何らかのボタンを持っているか、外付けできたほうが良いです。\nUmeda.go は、プログラミング言語 Go に関するテックトークなどのイベントをやっています。名前が示す通り、大阪を中心として活動しています。技術レベル・知識を問わず、Goを学びたい人が気軽に相談できるコミュニティ を目指しています。イベントアカウントをフォローしておくと、随時イベント情報をお知らせいたします。\nhttps://twitter.com/umedago\n\n当日、 1h 枠を 2 回、という形で開催します。 2 回とも参加されてもかまいませんし、当日は sago35 および Umeda.go スタッフが捕まる限りはサポートを受けることができます。 途中で抜けるのも自由です。\n\n- 2023/06/02 (金)\n	- 11:00 - 12:00\n	- 15:00 - 16:00\n- 場所は reBako 内の Umeda.go + TinyGo ブースです\n\nなお、当日以降についても、 sago35 のほうでサポート可能なので、気になる事があったら何でも聞いてください。詳細は以下にあります。\nhttps://sago35.hatenablog.com/entry/2023/05/18/225618"}].map((e,t)=>{let{title:r,description:o}=e;return(0,n.jsx)(x.Rs,{title:r,description:o},t)}),(0,n.jsx)(g,{}),(0,n.jsx)(l.Z,{variant:"h2",children:e("contents_information_title")}),[{title:"Ask the Speaker",description:"12時、15時、16時20分、17時30分と開催し、それぞれの回にて複数名の登壇者にご参加いただきます。\nトークセッションの登壇者に直接質問できる機会ですので、是非ご活用ください。\nタイムテーブルは以下のリンクから確認できます。\nhttps://docs.google.com/spreadsheets/d/1hRRkYazKpy4b5DZgSwTx3dV8YEHyjMZPdwiRRQXtrB0/edit#gid=0"}].map((e,t)=>{let{title:r,description:o}=e;return(0,n.jsx)(x.Rs,{title:r,description:o},t)})]})})}},6257:function(e,t,r){r.d(t,{i:function(){return l}});var n=r(5893),o=r(7294),i=r(7262);let a=RegExp("(https?:\\/\\/[^)\\s\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Han}]+)","gu"),s=e=>{let t=e.replace(/(https?:\/\/)/,"");return t.length>24?t.slice(0,24)+"...":t},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{keepFullLength:r=!1}=t,l=e.split(a);return l.map((e,t)=>e.match(a)?(0,n.jsx)(i.dL,{href:e,children:r?e:s(e)},t):(0,n.jsx)(o.Fragment,{children:e},t))}}}]);