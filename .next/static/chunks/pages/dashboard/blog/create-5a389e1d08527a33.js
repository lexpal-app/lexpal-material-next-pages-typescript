(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9470],{48817:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/blog/create",function(){return n(29558)}])},20592:function(e,r,n){"use strict";n.d(r,{$:function(){return o}});var t=n(85893),i=n(87357);let o=()=>(0,t.jsx)(i.Z,{sx:{backgroundColor:"neutral.500",borderRadius:"50%",height:4,width:4}})},56397:function(e,r,n){"use strict";n.d(r,{Y:function(){return k}});var t=n(85893),i=n(45697),o=n.n(i),s=n(21582),l=n(2957),a=n(45331),c=n(87952),d=n(87357),h=n(11057),p=n(93946),x=n(78462),u=n(19294),m=n(48885),g=n(59334),b=n(51233),j=n(53219),f=n(34386),Z=n(15861),v=n(16143),y=n(95809);let k=e=>{let{caption:r,files:n=[],onRemove:i,onRemoveAll:o,onUpload:k,...w}=e,{getRootProps:C,getInputProps:R,isDragActive:q}=(0,s.uI)(w),D=n.length>0;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(d.Z,{sx:{alignItems:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",display:"flex",flexWrap:"wrap",justifyContent:"center",outline:"none",p:6,...q&&{backgroundColor:"action.active",opacity:.5},"&:hover":{backgroundColor:"action.hover",cursor:"pointer",opacity:.5}},...C(),children:[(0,t.jsx)("input",{...R()}),(0,t.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,t.jsx)(c.Z,{sx:{height:64,width:64},children:(0,t.jsx)(j.Z,{children:(0,t.jsx)(l.Z,{})})}),(0,t.jsxs)(b.Z,{spacing:1,children:[(0,t.jsxs)(Z.Z,{sx:{"& span":{textDecoration:"underline"}},variant:"h6",children:[(0,t.jsx)("span",{children:"Click to upload"})," or drag and drop"]}),r&&(0,t.jsx)(Z.Z,{color:"text.secondary",variant:"body2",children:r})]})]})]}),D&&(0,t.jsxs)(d.Z,{sx:{mt:2},children:[(0,t.jsx)(x.Z,{children:n.map(e=>{let r=e.name.split(".").pop();return(0,t.jsxs)(u.ZP,{sx:{border:1,borderColor:"divider",borderRadius:1,"& + &":{mt:1}},children:[(0,t.jsx)(m.Z,{children:(0,t.jsx)(v.a,{extension:r})}),(0,t.jsx)(g.Z,{primary:e.name,primaryTypographyProps:{variant:"subtitle2"},secondary:(0,y.R)(e.size)}),(0,t.jsx)(f.Z,{title:"Remove",children:(0,t.jsx)(p.Z,{edge:"end",onClick:()=>null==i?void 0:i(e),children:(0,t.jsx)(j.Z,{children:(0,t.jsx)(a.Z,{})})})})]},e.path)})}),(0,t.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,sx:{mt:2},children:[(0,t.jsx)(h.Z,{color:"inherit",onClick:o,size:"small",type:"button",children:"Remove All"}),(0,t.jsx)(h.Z,{onClick:k,size:"small",type:"button",variant:"contained",children:"Upload"})]})]})]})};k.propTypes={caption:o().string,files:o().array,onRemove:o().func,onRemoveAll:o().func,onUpload:o().func,accept:o().objectOf(o().arrayOf(o().string.isRequired).isRequired),disabled:o().bool,getFilesFromEvent:o().func,maxFiles:o().number,maxSize:o().number,minSize:o().number,noClick:o().bool,noDrag:o().bool,noDragEventsBubbling:o().bool,noKeyboard:o().bool,onDrop:o().func,onDropAccepted:o().func,onDropRejected:o().func,onFileDialogCancel:o().func,preventDropOnDocument:o().bool}},16143:function(e,r,n){"use strict";n.d(r,{a:function(){return l}});var t=n(85893),i=n(45697),o=n.n(i);let s={jpeg:"/assets/icons/icon-jpg.svg",jpg:"/assets/icons/icon-jpg.svg",mp4:"/assets/icons/icon-mp4.svg",pdf:"/assets/icons/icon-pdf.svg",png:"/assets/icons/icon-png.svg",svg:"/assets/icons/icon-svg.svg"},l=e=>{let r;let{extension:n}=e;return r=n&&s[n]||"/assets/icons/icon-other.svg",(0,t.jsx)("img",{src:r})};l.propTypes={extension:o().string}},96377:function(e,r,n){"use strict";n.d(r,{B:function(){return l}});var t=n(5152),i=n.n(t),o=n(90948);let s=i()(()=>Promise.all([n.e(2937),n.e(8764),n.e(1167)]).then(n.t.bind(n,71167,23)),{loadableGenerated:{webpack:()=>[71167]},ssr:!1,loading:()=>null}),l=(0,o.ZP)(s)(e=>{let{theme:r}=e;return{border:1,borderColor:r.palette.divider,borderRadius:r.shape.borderRadius,borderStyle:"solid",display:"flex",flexDirection:"column",overflow:"hidden","& .quill":{display:"flex",flex:1,flexDirection:"column",overflow:"hidden"},"& .ql-snow.ql-toolbar":{borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",borderTop:"none","& .ql-picker-label:hover":{color:r.palette.primary.main},"& .ql-picker-label.ql-active":{color:r.palette.primary.main},"& .ql-picker-item:hover":{color:r.palette.primary.main},"& .ql-picker-item.ql-selected":{color:r.palette.primary.main},"& button:hover":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button:focus":{color:r.palette.primary.main,"& .ql-stroke":{stroke:r.palette.primary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:r.palette.primary.main}},"& .ql-stroke":{stroke:r.palette.text.primary},"& .ql-picker":{color:r.palette.text.primary},"& .ql-picker-options":{backgroundColor:r.palette.background.paper,border:"none",borderRadius:r.shape.borderRadius,boxShadow:r.shadows[10],padding:r.spacing(2)}},"& .ql-snow.ql-container":{borderBottom:"none",borderColor:r.palette.divider,borderLeft:"none",borderRight:"none",display:"flex",flex:1,flexDirection:"column",height:"auto",overflow:"hidden","& .ql-editor":{color:r.palette.text.primary,flex:1,fontFamily:r.typography.body1.fontFamily,fontSize:r.typography.body1.fontSize,height:"auto",overflowY:"auto",padding:r.spacing(2),"&.ql-blank::before":{color:r.palette.text.secondary,fontStyle:"normal",left:r.spacing(2)}}}}})},48050:function(e,r,n){"use strict";n.d(r,{a:function(){return o}});var t=n(67294),i=n(12808);let o=()=>{(0,t.useEffect)(()=>{i.w.push({event:"page_view"})},[])}},29558:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return B}});var t=n(85893),i=n(67294),o=n(83075),s=n(87357),l=n(12963),a=n(11057),c=n(66242),d=n(44267),h=n(65582),p=n(27400),x=n(93946),u=n(23795),m=n(51233),g=n(53219),b=n(93155),j=n(15861),f=n(20592),Z=n(56397),v=n(96377),y=n(83172),k=n(8425),w=n(48050),C=n(8493),R=n(45025);let q=e=>new Promise((r,n)=>{let t=new FileReader;t.readAsDataURL(e),t.onload=()=>r(t.result),t.onerror=e=>n(e)}),D=()=>{let[e,r]=(0,i.useState)("/assets/covers/abstract-1-4x3-large.png");(0,w.a)();let n=(0,i.useCallback)(async e=>{let[n]=e,t=await q(n);r(t)},[]),C=(0,i.useCallback)(()=>{r(null)},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.p,{title:"Blog: Post Create"}),(0,t.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,t.jsxs)(h.Z,{maxWidth:"xl",children:[(0,t.jsxs)(m.Z,{spacing:1,children:[(0,t.jsx)(j.Z,{variant:"h3",children:"Create a new post"}),(0,t.jsxs)(l.Z,{separator:(0,t.jsx)(f.$,{}),children:[(0,t.jsx)(u.Z,{color:"text.primary",component:y.r,href:R.H.dashboard.index,variant:"subtitle2",children:"Dashboard"}),(0,t.jsx)(u.Z,{color:"text.primary",component:y.r,href:R.H.dashboard.blog.index,variant:"subtitle2",children:"Blog"}),(0,t.jsx)(j.Z,{color:"text.secondary",variant:"subtitle2",children:"Create"})]})]}),(0,t.jsxs)(c.Z,{elevation:16,sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"space-between",mb:8,mt:6,px:3,py:2},children:[(0,t.jsx)(j.Z,{variant:"subtitle1",children:"Hello, Admin"}),(0,t.jsxs)(m.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,t.jsx)(a.Z,{color:"inherit",component:y.r,href:R.H.dashboard.blog.index,children:"Cancel"}),(0,t.jsx)(a.Z,{component:y.r,href:R.H.dashboard.blog.postDetails,variant:"contained",children:"Publish changes"}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(g.Z,{children:(0,t.jsx)(o.Z,{})})})]})]}),(0,t.jsxs)(m.Z,{spacing:3,children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,t.jsx)(p.Z,{xs:12,md:4,children:(0,t.jsx)(j.Z,{variant:"h6",children:"Basic details"})}),(0,t.jsx)(p.Z,{xs:12,md:8,children:(0,t.jsxs)(m.Z,{spacing:3,children:[(0,t.jsx)(b.Z,{fullWidth:!0,label:"Post title",name:"title"}),(0,t.jsx)(b.Z,{fullWidth:!0,label:"Short description"})]})})]})})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,t.jsx)(p.Z,{xs:12,md:4,children:(0,t.jsx)(j.Z,{variant:"h6",children:"Post cover"})}),(0,t.jsx)(p.Z,{xs:12,md:8,children:(0,t.jsxs)(m.Z,{spacing:3,children:[e?(0,t.jsx)(s.Z,{sx:{backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,height:230,mt:3}}):(0,t.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",height:230,mt:3,p:3},children:[(0,t.jsx)(j.Z,{align:"center",color:"text.secondary",variant:"h6",children:"Select a cover image"}),(0,t.jsx)(j.Z,{align:"center",color:"text.secondary",sx:{mt:1},variant:"subtitle1",children:"Image used for the blog post cover and also for Open Graph meta"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(a.Z,{color:"inherit",disabled:!e,onClick:C,children:"Remove photo"})}),(0,t.jsx)(Z.Y,{accept:{"image/*":[]},maxFiles:1,onDrop:n,caption:"(SVG, JPG, PNG, or gif maximum 900x400)"})]})})]})})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,t.jsx)(p.Z,{xs:12,md:4,children:(0,t.jsx)(j.Z,{variant:"h6",children:"Content"})}),(0,t.jsx)(p.Z,{xs:12,md:8,children:(0,t.jsx)(v.B,{placeholder:"Write something",sx:{height:330}})})]})})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,t.jsx)(p.Z,{xs:12,md:4,children:(0,t.jsx)(j.Z,{variant:"h6",children:"Meta"})}),(0,t.jsx)(p.Z,{xs:12,lg:8,children:(0,t.jsxs)(m.Z,{spacing:3,children:[(0,t.jsx)(b.Z,{fullWidth:!0,label:"SEO title",name:"title"}),(0,t.jsx)(b.Z,{fullWidth:!0,label:"SEO description"})]})})]})})})]}),(0,t.jsx)(s.Z,{sx:{display:{sm:"none"},mt:2},children:(0,t.jsx)(a.Z,{component:y.r,href:R.H.dashboard.blog.postDetails,variant:"contained",children:"Publish changes"})})]})})]})};D.getLayout=e=>(0,t.jsx)(C.A,{children:e});var B=D},95809:function(e,r,n){"use strict";n.d(r,{R:function(){return t}});let t=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";let n=r<0?0:r,t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(n))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t])}},83075:function(e,r,n){"use strict";var t=n(87462);n(67294);var i=n(85893);r.Z=function(e){return(0,i.jsxs)("svg",(0,t.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,i.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm7 0c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1ZM5 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"}),(0,i.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm7 0c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1ZM5 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"})]}))}}},function(e){e.O(0,[4310,8471,7176,3155,3852,3473,4411,209,7974,5311,3678,865,9774,2888,179],function(){return e(e.s=48817)}),_N_E=e.O()}]);