(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6898],{23795:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var o=t(63366),n=t(87462),a=t(67294),s=t(86010),i=t(94780),d=t(98216),l=t(90948),c=t(71657),u=t(79674),h=t(51705),p=t(15861),m=t(1588),f=t(34867);function x(e){return(0,f.Z)("MuiLink",e)}let g=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=t(54844),y=t(41796);let v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>v[e]||e;var k=({theme:e,ownerState:r})=>{let t=j(r.color),o=(0,b.DW)(e,`palette.${t}`,!1)||r.color,n=(0,b.DW)(e,`palette.${t}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:(0,y.Fq)(o,.4)},Z=t(85893);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=e=>{let{classes:r,component:t,focusVisible:o,underline:n}=e,a={root:["root",`underline${(0,d.Z)(n)}`,"button"===t&&"button",o&&"focusVisible"]};return(0,i.Z)(a,x,r)},C=(0,l.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`underline${(0,d.Z)(t.underline)}`],"button"===t.component&&r.button]}})(({theme:e,ownerState:r})=>(0,n.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,n.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:k({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})),F=a.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiLink"}),{className:i,color:d="primary",component:l="a",onBlur:p,onFocus:m,TypographyClasses:f,underline:x="always",variant:g="inherit",sx:b}=t,y=(0,o.Z)(t,w),{isFocusVisibleRef:j,onBlur:k,onFocus:F,ref:P}=(0,u.Z)(),[R,I]=a.useState(!1),A=(0,h.Z)(r,P),M=(0,n.Z)({},t,{color:d,component:l,focusVisible:R,underline:x,variant:g}),T=D(M);return(0,Z.jsx)(C,(0,n.Z)({color:d,className:(0,s.Z)(T.root,i),classes:f,component:l,onBlur:e=>{k(e),!1===j.current&&I(!1),p&&p(e)},onFocus:e=>{F(e),!0===j.current&&I(!0),m&&m(e)},ref:A,ownerState:M,variant:g,sx:[...Object.keys(v).includes(d)?[]:[{color:d}],...Array.isArray(b)?b:[b]]},y))});var P=F},7590:function(e,r,t){"use strict";t.d(r,{P:function(){return h}});var o=t(85893),n=t(67294),a=t(90948),s=t(93155),i=t(87357);let d=(0,a.ZP)(s.Z)`
  input {
    text-align: center;
  }
`,l={TextFieldStyled:d},c=e=>(0,o.jsx)(l.TextFieldStyled,{...e}),u={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace",home:"Home",end:"End"},h=n.forwardRef((e,r)=>{let{value:t,length:a,autoFocus:s,onChange:d,TextFieldsProps:l,onComplete:h,validateChar:p,className:m,...f}=e,{onPaste:x,onFocus:g,onKeyDown:b,className:y,...v}=l||{},j=a<=0?[]:Array.from({length:a},(e,r)=>({character:t[r]||"",inputRef:n.createRef()})),k=e=>j.findIndex(({inputRef:r})=>r.current===e),Z=()=>j.map(({character:e})=>e),w=(e,r)=>{let t=Z().map((t,o)=>e===o?r:t);return t.join("")},D=e=>{j[e]?.inputRef.current?.focus()},C=e=>{-1===e?j[j.length-1]?.inputRef.current?.select():j[e]?.inputRef.current?.select()},F=e=>{e+1!==a&&(j[e+1].character?C(e+1):D(e+1))},P=e=>{e>0&&C(e-1)},R=e=>{let r=e.target.value[0]||"",t=k(e.target);if("function"==typeof p&&!p(r,t))return;let o=w(t,r);d?.(o),o.length===a&&h?.(o),""!==r?o.length<a?F(o.length-1):F(t):o[t]?C(t):P(t)},I=e=>{e.preventDefault(),e.target.select(),g?.(e)},A=e=>{let r=e.target,t=k(r);r.value===e.key?(e.preventDefault(),F(t)):(r.value||u.backspace!==e.key)&&u.left!==e.key?u.right===e.key?(e.preventDefault(),C(t+1)):u.home===e.key?(e.preventDefault(),C(0)):u.end===e.key&&(e.preventDefault(),C(-1)):(e.preventDefault(),C(t-1)),b?.(e)},M=e=>{var r;e.preventDefault();let t=e.target,o=e.clipboardData.getData("text/plain"),n=k(t),s=Z(),i=(r=o.split(""),s.reduce((e,r,t)=>{let{characters:o,restArrayMerged:a}=e;if(t<n)return{restArrayMerged:a,characters:[...o,r]};let[s,...i]=a;return{restArrayMerged:i,characters:[...o,s||""]}},{restArrayMerged:r,characters:[]}).characters),l=i.findIndex((e,r)=>r>n&&""===e),c=i.join("");if(d?.(c),c.length===a){h?.(c),D(a-1);return}-1!==l&&D(l),x?.(e)};return(0,o.jsx)(i.Z,{display:"flex",gap:"20px",alignItems:"center",ref:r,className:`MuiOtpInput-Box ${m||""}`,...f,children:j.map(({character:e,inputRef:r},t)=>(0,o.jsx)(c,{autoFocus:!!s&&0===t,autoComplete:"one-time-code",value:e,inputRef:r,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${t+1} ${y||""}`,onPaste:M,onFocus:I,onChange:R,onKeyDown:A,...v},t))})});h.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}}},16064:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/verify-code/modern",function(){return t(99022)}])},83172:function(e,r,t){"use strict";t.d(r,{r:function(){return i}});var o=t(85893),n=t(67294),a=t(41664),s=t.n(a);let i=(0,n.forwardRef)(function(e,r){return(0,o.jsx)(s(),{ref:r,...e})})},8425:function(e,r,t){"use strict";t.d(r,{p:function(){return d}});var o=t(85893),n=t(9008),a=t.n(n),s=t(45697),i=t.n(s);let d=e=>{let{title:r}=e;return(0,o.jsx)(a(),{children:(0,o.jsx)("title",{children:r?r+" | Devias Kit PRO":"Devias Kit PRO"})})};d.propTypes={title:i().string}},47576:function(e,r,t){"use strict";t.d(r,{A:function(){return b}});var o=t(85893),n=t(45697),a=t.n(n),s=t(87357),i=t(15861),d=t(51233),l=t(45456),c=t(84714),u=t(83428),h=t(12800),p=t(62550),m=t(86126),f=t(40250),x=t(83172),g=t(45025);let b=e=>{let{children:r}=e;return(0,o.jsxs)(s.Z,{sx:{backgroundColor:"background.default",display:"flex",flex:"1 1 auto",flexDirection:{xs:"column-reverse",md:"row"}},children:[(0,o.jsx)(s.Z,{sx:{alignItems:"center",backgroundColor:"neutral.800",backgroundImage:'url("/assets/gradient-bg.svg")',backgroundPosition:"top center",backgroundRepeat:"no-repeat",color:"common.white",display:"flex",flex:{xs:"0 0 auto",md:"1 1 auto"},justifyContent:"center",p:{xs:4,md:8}},children:(0,o.jsxs)(s.Z,{maxWidth:"md",children:[(0,o.jsx)(i.Z,{sx:{mb:1},variant:"h4",children:"Welcome to Devias Kit PRO"}),(0,o.jsx)(i.Z,{color:"text.secondary",sx:{mb:4},children:"A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications."}),(0,o.jsx)(i.Z,{variant:"subtitle2",sx:{mb:2},children:"Join 6,000+ forward-thinking companies:"}),(0,o.jsxs)(d.Z,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:4,sx:{color:"text.primary","& > *":{color:"neutral.400",flex:"0 0 auto"}},children:[(0,o.jsx)(c.T,{}),(0,o.jsx)(u.z,{}),(0,o.jsx)(h.p,{}),(0,o.jsx)(p.f,{}),(0,o.jsx)(m.D,{}),(0,o.jsx)(f.m,{})]})]})}),(0,o.jsx)(s.Z,{sx:{backgroundColor:"background.paper",display:"flex",flex:{xs:"1 1 auto",md:"0 0 auto"},flexDirection:"column",justifyContent:{md:"center"},maxWidth:"100%",p:{xs:4,md:8},width:{md:600}},children:(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{sx:{mb:4},children:(0,o.jsxs)(d.Z,{alignItems:"center",component:x.r,direction:"row",display:"inline-flex",href:g.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,o.jsx)(s.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,o.jsx)(l.T,{})}),(0,o.jsxs)(s.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,o.jsx)("span",{children:"PRO"})]})]})}),r]})})]})};b.propTypes={children:a().node}},99022:function(e,r,t){"use strict";t.r(r);var o=t(85893),n=t(16310),a=t(17417),s=t(30136),i=t(7590),d=t(87357),l=t(11057),c=t(94054),u=t(56815),h=t(40476),p=t(23795),m=t(51233),f=t(53219),x=t(15861),g=t(83172),b=t(8425),y=t(47576),v=t(45025);let j={code:""},k=n.Ry({code:n.Z_().min(6).max(6).required("Code is required")}),Z=()=>{let e=(0,a.TA)({initialValues:j,validationSchema:k,onSubmit:()=>{}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.p,{title:"Verify Code"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(d.Z,{sx:{mb:4},children:(0,o.jsxs)(p.Z,{color:"text.primary",component:g.r,href:v.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,o.jsx)(f.Z,{sx:{mr:1},children:(0,o.jsx)(s.Z,{})}),(0,o.jsx)(x.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,o.jsx)(m.Z,{sx:{mb:4},spacing:1,children:(0,o.jsx)(x.Z,{variant:"h5",children:"Verify code"})}),(0,o.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,o.jsxs)(c.Z,{error:!!(e.touched.code&&e.errors.code),children:[(0,o.jsx)(h.Z,{sx:{display:"block",mb:2},children:"Code"}),(0,o.jsx)(i.P,{length:6,onBlur:()=>e.handleBlur("code"),onChange:r=>e.setFieldValue("code",r),onFocus:()=>e.setFieldTouched("code"),sx:{"& .MuiFilledInput-input":{p:"14px"}},value:e.values.code}),!!(e.touched.code&&e.errors.code)&&(0,o.jsx)(u.Z,{children:e.errors.code})]}),(0,o.jsx)(l.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Verify"})]})]})]})};Z.getLayout=e=>(0,o.jsx)(y.A,{children:e}),r.default=Z},45025:function(e,r,t){"use strict";t.d(r,{H:function(){return o}});let o={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:"https://material-kit-pro-react-docs.devias.io",notAuthorized:"/401",notFound:"/404",serverError:"/500"}},30136:function(e,r,t){"use strict";var o=t(87462);t(67294);var n=t(85893);r.Z=function(e){return(0,n.jsxs)("svg",(0,o.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,n.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[4310,8471,3155,9118,5902,9774,2888,179],function(){return e(e.s=16064)}),_N_E=e.O()}]);