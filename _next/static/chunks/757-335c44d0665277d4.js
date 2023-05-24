"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{2757:function(e,r,i){i.d(r,{JZ:function(){return _},wV:function(){return S},zf:function(){return p}});var n=i(5893),t=i(1504),s=i(2312),o=i(1953),a=i(9630),l=i(8416),d=i(5675),c=i.n(d);let x=()=>(0,n.jsxs)(o.Z,{bgcolor:l.w.background.secondary,display:"flex",flexDirection:"column",alignItems:"center",px:{xs:2},py:{md:10,xs:4},children:[(0,n.jsx)(a.Z,{variant:"h2",textAlign:"center",children:"Special Thanks"}),(0,n.jsxs)(o.Z,{bgcolor:l.w.background.primary,maxWidth:"1024px",width:"100%",borderRadius:5,p:{xs:3,md:5},children:[(0,n.jsx)(a.Z,{variant:"body1",align:"center",children:"reBako.io powered by"}),(0,n.jsx)(o.Z,{position:"relative",sx:{aspectRatio:"16/9",maxWidth:"384px",mx:"auto"},children:(0,n.jsx)(c(),{src:"special-thanks/sikmi.png",alt:"しくみ製作所",quality:100,fill:!0,style:{objectFit:"contain"}})})]})]}),p=()=>(0,n.jsxs)(t.A,{children:[(0,n.jsx)(s.CO,{}),(0,n.jsx)(s.Uz,{}),(0,n.jsx)(s.PA,{}),(0,n.jsx)(x,{})]});var u=i(9072),m=i(754);i(4799);let g=e=>{switch(e){case"Room A":return{backgroundColor:l.w.background.primary_pink};case"Room B":return{backgroundColor:l.w.background.primary_green};default:throw Error("Invalid room ".concat(e))}},h=e=>{let{sessionId:r,roomName:i,isRoomNameDisplayed:t}=e,{backgroundColor:s}=g(i);return(0,n.jsx)(o.Z,{sx:{display:"inline-flex",backgroundColor:s,borderRadius:"2px",padding:"2px 4px"},children:(0,n.jsx)(a.Z,{variant:"caption",sx:{color:l.w.text.white},children:t?"".concat(i," : ").concat(r):r})})};var b=i(9640);let z=e=>{let{title:r,roomName:i,sessionId:t,description:s,speaker:d,sessionLevel:c,sessionType:x}=e,{isPCOrOver:p}=(0,b.tH)();return(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:p?"24px":"16px",gap:p?"12px":"8px",borderRadius:"18px",boxShadow:"0px 3px 8px rgba(144, 131,  147, 0.15)",backgroundColor:l.w.background.primary},children:[(0,n.jsx)(a.Z,{variant:"h5",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",wordBreak:"break-word"},children:r}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",gap:"8px"},children:[(0,n.jsx)(h,{isRoomNameDisplayed:!0,roomName:i,sessionId:t}),(0,n.jsx)(a.Z,{variant:"body2",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:5,overflow:"hidden",wordBreak:"break-word"},children:s})]}),(0,n.jsxs)(o.Z,{sx:{gap:"24px",display:"flex",alignItems:"flex-end",alignSelf:"stretch"},children:[(0,n.jsx)(v,{name:d.fullName,tagLine:d.tagLine,profilePicture:d.profilePicture}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px",marginLeft:"auto"},children:[c&&(0,n.jsxs)(a.Z,{variant:"subtitle1",sx:{textAlign:"right",color:l.w.text.secondary},children:["Level: ",c]}),(0,n.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"right",color:l.w.text.secondary},children:x})]})]})]})};var y=i(4731);let f=e=>{let{iconUrl:r,name:i,size:t}=e;return(0,n.jsx)(y.Z,{alt:i,src:r,sx:{width:t,height:t,border:"1px solid rgba(0, 0, 0, 0.08)"}})},v=e=>{let{profilePicture:r,name:i,tagLine:t}=e;return(0,n.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)(f,{iconUrl:r,name:i,size:"40px"}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,n.jsx)(a.Z,{variant:"h6",children:i}),(0,n.jsx)(a.Z,{variant:"subtitle1",sx:{color:l.w.text.secondary},children:t})]})]})};i(8561);let j=e=>{let{title:r,description:i}=e;return(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:4,children:[(0,n.jsx)(a.Z,{variant:"h3",children:r}),(0,n.jsx)(a.Z,{variant:"body2",sx:{mb:"24px",maxWidth:"680px",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:i})]})};var k=i(9734),w=i(1604);let Z=w.z.object({id:w.z.string(),title:w.z.string(),description:w.z.string(),startsAt:w.z.string(),endsAt:w.z.string(),isServiceSession:w.z.boolean(),isPlenumSession:w.z.boolean(),speakers:w.z.array(w.z.string()),categoryItems:w.z.array(w.z.number()),questionAnswers:w.z.array(w.z.object({questionId:w.z.number(),answerValue:w.z.string()})),roomId:w.z.number(),liveUrl:w.z.null(),recordingUrl:w.z.null(),status:w.z.literal("Accepted")}),I=w.z.object({id:w.z.string(),firstName:w.z.string(),lastName:w.z.string(),bio:w.z.string(),tagLine:w.z.string(),profilePicture:w.z.string(),isTopSpeaker:w.z.boolean(),links:w.z.array(w.z.object({linkType:w.z.string(),title:w.z.string(),url:w.z.string()})),sessions:w.z.array(w.z.number()),fullName:w.z.string(),categoryItems:w.z.array(w.z.number()),questionAnswers:w.z.array(w.z.string())}),C=w.z.object({id:w.z.number(),title:w.z.string(),items:w.z.array(w.z.object({id:w.z.number(),name:w.z.string(),sort:w.z.number()})),sort:w.z.number(),type:w.z.literal("session")}),A=w.z.object({id:w.z.number(),name:w.z.union([w.z.literal("Room A"),w.z.literal("Room B")]),sort:w.z.number()}),T=w.z.object({sessions:w.z.array(Z),speakers:w.z.array(I),questions:w.z.array(w.z.any()),categories:w.z.array(C),rooms:w.z.array(A)});var N=i(7294);let G=e=>fetch(e).then(e=>e.json()),L=()=>{let[e,r]=(0,N.useState)(void 0),{data:i,error:n,isLoading:t}=(0,k.ZP)("https://sessionize.com/api/v2/3qcdixg4/view/All",G);(0,N.useEffect)(()=>{if(!i)return;let e=T.safeParse(i);e.success?r(e.data):console.error(e.error)},[i]);let s=(0,N.useMemo)(()=>{var r;let i=null==e?void 0:e.categories.find(e=>46584===e.id);return null!==(r=null==i?void 0:i.items)&&void 0!==r?r:[]},[null==e?void 0:e.categories]),o=(0,N.useMemo)(()=>{var r;let i=null==e?void 0:e.categories.find(e=>53862===e.id);return null!==(r=null==i?void 0:i.items)&&void 0!==r?r:[]},[null==e?void 0:e.categories]),a=(0,N.useCallback)(r=>{var i;let n=null===(i=null==e?void 0:e.rooms.find(e=>e.id===r))||void 0===i?void 0:i.name;if(!n)throw Error("Invalid roomId: ".concat(r));return n},[null==e?void 0:e.rooms]),l=(0,N.useCallback)(e=>{let r=e.questionAnswers.find(e=>52153===e.questionId);if(!r)throw Error("Invalid session: ".concat(e));return r.answerValue},[]),d=(0,N.useCallback)(r=>{let i=null==e?void 0:e.speakers.find(e=>e.id===r);if(!i)throw Error("Invalid speakerId: ".concat(r));return i},[null==e?void 0:e.speakers]),c=(0,N.useCallback)(e=>{var r;let i=e.categoryItems[0],n=s.find(e=>e.id===i);return null!==(r=null==n?void 0:n.name)&&void 0!==r?r:""},[s]),x=(0,N.useCallback)(e=>{var r;let i=e.categoryItems[1],n=o.find(e=>e.id===i);return null!==(r=null==n?void 0:n.name)&&void 0!==r?r:""},[o]);return{data:e,isError:!!n,isLoading:t,getRoomName:a,getSessionNumber:l,getSpeaker:d,getSessionLevel:x,getSessionType:c}},S=()=>{let{data:e,isLoading:r,getRoomName:i,getSessionNumber:s,getSpeaker:d,getSessionLevel:c,getSessionType:x}=L();return(0,n.jsxs)(t.A,{children:[(0,n.jsx)(a.Z,{variant:"h2",align:"center",sx:{marginTop:{xs:"80px",sm:"160px"},marginBottom:{xs:"32px",sm:"72px"}},children:"Sessions & Speakers"}),(0,n.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",backgroundColor:l.w.background.secondary,padding:{xs:"32px 16px",md:"80px 20px"}},children:(0,n.jsx)(o.Z,{maxWidth:"1024px",width:"100%",children:(0,n.jsx)(u.ZP,{container:!0,spacing:{xs:1,md:3},mx:"auto",columns:12,justifyContent:"center",alignItems:"stretch",children:r?(0,n.jsx)(m.Z,{}):null==e?void 0:e.sessions.map(e=>(0,n.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(z,{title:e.title,roomName:i(e.roomId),sessionId:s(e),description:e.description,speaker:d(e.speakers[0]),sessionLevel:c(e),sessionType:x(e)})},e.id))})})})]})};var R=i(4374);let _=()=>{let{t:e}=(0,R.$)();return(0,n.jsx)(t.A,{children:(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",py:{md:10,xs:4},px:"24px",mt:"100px",children:[(0,n.jsx)(a.Z,{variant:"h2",children:e("floor_guide_title")}),(0,n.jsx)(s.ki,{}),(0,n.jsx)(o.Z,{width:"80%",height:"8px",sx:{margin:"40px",borderRadius:"4px",backgroundColor:l.w.background.secondary}}),(0,n.jsx)(a.Z,{variant:"h2",children:e("booth_information_title")}),[{title:"Kyoto.go LT & 雑談会場 「畳」",description:"こんにちは！　京都のほうから来ましたKyoto.goです！\nオンラインでのLT会やもくもく会などを月1回のペースで開催しています。\n今回、Kyoto.goではランチタイムにLT大会を開催します。1人3分のスーパーライトニングトーク形式を予定しています（発表者はconnpassでの事前募集枠と当日飛び入り参加枠で募集しています）。発表の合間には参加者同士の雑談タイムを設けて、Gopher同士でワイワイとGoの知見を深め合える時間をご提供します。\nなお、発表者の方にはKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。"},{title:"Gopherラジオ",description:"Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。"},{title:"Umeda.go + TinyGo ",description:"本ブースでは、 TinyGo の組込ハンズオンとしてシンプルな自作キーボードの作成を行います。基本的には Wio Terminal (https://akizukidenshi.com/catalog/g/gM-15275/) を使って説明しますが、それ以外の TinyGo で遊べるマイコン (https://sago35.hatenablog.com/entry/2023/02/13/220248) のうち samd51 / rp2040 / nrf52840 を搭載したマイコンであれば使用可能です。キーボードとして使いたいので、何らかのボタンを持っているか、外付けできたほうが良いです。\nUmeda.go は、プログラミング言語 Go に関するテックトークなどのイベントをやっています。名前が示す通り、大阪を中心として活動しています。技術レベル・知識を問わず、Goを学びたい人が気軽に相談できるコミュニティ を目指しています。イベントアカウントをフォローしておくと、随時イベント情報をお知らせいたします。\nhttps://twitter.com/umedago"}].map((e,r)=>{let{title:i,description:t}=e;return(0,n.jsx)(j,{title:i,description:t},r)})]})})}}}]);