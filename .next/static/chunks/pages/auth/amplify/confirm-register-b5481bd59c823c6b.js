(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7219],{7590:function(e,t,r){"use strict";r.d(t,{P:function(){return h}});var a=r(85893),s=r(67294),n=r(90948),i=r(93155),o=r(87357);let d=(0,n.ZP)(i.Z)`
  input {
    text-align: center;
  }
`,l={TextFieldStyled:d},c=e=>(0,a.jsx)(l.TextFieldStyled,{...e}),u={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace",home:"Home",end:"End"},h=s.forwardRef((e,t)=>{let{value:r,length:n,autoFocus:i,onChange:d,TextFieldsProps:l,onComplete:h,validateChar:p,className:m,...f}=e,{onPaste:g,onFocus:x,onKeyDown:b,className:y,...j}=l||{},v=n<=0?[]:Array.from({length:n},(e,t)=>({character:r[t]||"",inputRef:s.createRef()})),k=e=>v.findIndex(({inputRef:t})=>t.current===e),w=()=>v.map(({character:e})=>e),Z=(e,t)=>{let r=w().map((r,a)=>e===a?t:r);return r.join("")},C=e=>{v[e]?.inputRef.current?.focus()},R=e=>{-1===e?v[v.length-1]?.inputRef.current?.select():v[e]?.inputRef.current?.select()},F=e=>{e+1!==n&&(v[e+1].character?R(e+1):C(e+1))},P=e=>{e>0&&R(e-1)},I=e=>{let t=e.target.value[0]||"",r=k(e.target);if("function"==typeof p&&!p(t,r))return;let a=Z(r,t);d?.(a),a.length===n&&h?.(a),""!==t?a.length<n?F(a.length-1):F(r):a[r]?R(r):P(r)},D=e=>{e.preventDefault(),e.target.select(),x?.(e)},T=e=>{let t=e.target,r=k(t);t.value===e.key?(e.preventDefault(),F(r)):(t.value||u.backspace!==e.key)&&u.left!==e.key?u.right===e.key?(e.preventDefault(),R(r+1)):u.home===e.key?(e.preventDefault(),R(0)):u.end===e.key&&(e.preventDefault(),R(-1)):(e.preventDefault(),R(r-1)),b?.(e)},S=e=>{var t;e.preventDefault();let r=e.target,a=e.clipboardData.getData("text/plain"),s=k(r),i=w(),o=(t=a.split(""),i.reduce((e,t,r)=>{let{characters:a,restArrayMerged:n}=e;if(r<s)return{restArrayMerged:n,characters:[...a,t]};let[i,...o]=n;return{restArrayMerged:o,characters:[...a,i||""]}},{restArrayMerged:t,characters:[]}).characters),l=o.findIndex((e,t)=>t>s&&""===e),c=o.join("");if(d?.(c),c.length===n){h?.(c),C(n-1);return}-1!==l&&C(l),g?.(e)};return(0,a.jsx)(o.Z,{display:"flex",gap:"20px",alignItems:"center",ref:t,className:`MuiOtpInput-Box ${m||""}`,...f,children:v.map(({character:e,inputRef:t},r)=>(0,a.jsx)(c,{autoFocus:!!i&&0===r,autoComplete:"one-time-code",value:e,inputRef:t,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${r+1} ${y||""}`,onPaste:S,onFocus:D,onChange:I,onKeyDown:T,...j},r))})});h.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}}},59064:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/amplify/confirm-register",function(){return r(95704)}])},83172:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var a=r(85893),s=r(67294),n=r(41664),i=r.n(n);let o=(0,s.forwardRef)(function(e,t){return(0,a.jsx)(i(),{ref:t,...e})})},8425:function(e,t,r){"use strict";r.d(t,{p:function(){return d}});var a=r(85893),s=r(9008),n=r.n(s),i=r(45697),o=r.n(i);let d=e=>{let{title:t}=e;return(0,a.jsx)(n(),{children:(0,a.jsx)("title",{children:t?t+" | Devias Kit PRO":"Devias Kit PRO"})})};d.propTypes={title:o().string}},6142:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var a=r(85893),s=r(67294),n=r(45697),i=r.n(n),o=r(3025),d=r(59599),l=r(45025);let c=e=>{let{children:t}=e,{isAuthenticated:r}=(0,o.a)(),n=(0,d.t)(),[i,c]=(0,s.useState)(!1),u=(0,s.useCallback)(()=>{r?n.replace(l.H.dashboard.index):c(!0)},[r,n]);return((0,s.useEffect)(()=>{u()},[]),i)?(0,a.jsx)(a.Fragment,{children:t}):null};c.propTypes={children:i().node}},83058:function(e,t,r){"use strict";r.d(t,{z:function(){return p}});var a=r(85893),s=r(45697),n=r.n(s),i=r(87357),o=r(65582),d=r(15861),l=r(98396),c=r(8425);let u=e=>{let{statusCode:t,title:r}=e,s=(0,l.Z)(e=>e.breakpoints.down("md")),n="".concat(t,": ").concat(r);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.p,{title:n}),(0,a.jsx)(i.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,py:"80px"},children:(0,a.jsx)(o.Z,{maxWidth:"lg",children:(0,a.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",mb:6},children:(0,a.jsx)(d.Z,{align:"center",variant:s?"h1":"h4",children:n})})})})]})};u.propTypes={statusCode:n().number.isRequired,title:n().string.isRequired};var h=r(3025);let p=e=>{let{children:t,issuer:r}=e,{issuer:s}=(0,h.a)();return r!==s?(0,a.jsx)(u,{statusCode:400,title:"Issuer mismatch, currently using ".concat(s)}):(0,a.jsx)(a.Fragment,{children:t})};p.propTypes={children:n().any,issuer:n().any}},3025:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var a=r(67294),s=r(12337);let n=()=>(0,a.useContext)(s.Vo)},59401:function(e,t,r){"use strict";r.d(t,{s:function(){return s}});var a=r(67294);let s=()=>{let e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,a.useCallback)(()=>e.current,[])}},48050:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var a=r(67294),s=r(12808);let n=()=>{(0,a.useEffect)(()=>{s.w.push({event:"page_view"})},[])}},59599:function(e,t,r){"use strict";r.d(t,{t:function(){return a.useRouter}});var a=r(39332)},5379:function(e,t,r){"use strict";r.d(t,{l:function(){return a.useSearchParams}});var a=r(39332)},15870:function(e,t,r){"use strict";r.d(t,{A:function(){return m}});var a=r(85893),s=r(45697),n=r.n(s),i=r(87357),o=r(65582),d=r(51233),l=r(90948),c=r(45456),u=r(83172),h=r(45025);let p=(0,l.ZP)("div")(e=>{let{theme:t}=e;return{backgroundColor:t.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),m=e=>{let{children:t}=e;return(0,a.jsxs)(p,{children:[(0,a.jsx)(i.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:e=>e.zIndex.appBar},children:(0,a.jsx)(o.Z,{maxWidth:"lg",children:(0,a.jsx)(d.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,a.jsxs)(d.Z,{alignItems:"center",component:u.r,direction:"row",display:"inline-flex",href:h.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,a.jsx)(i.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,a.jsx)(c.T,{})}),(0,a.jsxs)(i.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,a.jsx)("span",{children:"PRO"})]})]})})})}),(0,a.jsx)(i.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,a.jsx)(o.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:t})})]})};m.propTypes={children:n().node}},95704:function(e,t,r){"use strict";r.r(t);var a=r(85893),s=r(16310),n=r(17417),i=r(7590),o=r(11057),d=r(66242),l=r(44267),c=r(78445),u=r(94054),h=r(56815),p=r(40476),m=r(51233),f=r(93155),g=r(8425),x=r(6142),b=r(83058),y=r(3025),j=r(59401),v=r(48050),k=r(59599),w=r(5379),Z=r(15870),C=r(45025),R=r(64687);let F=e=>({code:"",email:e||"",submit:null}),P=s.Ry({code:s.Z_().min(6).max(6).required("Code is required"),email:s.Z_().email("Must be a valid email").max(255).required("Email is required")}),I=()=>{let e=(0,j.s)(),t=(0,k.t)(),r=(0,w.l)(),s=r.get("username")||void 0,{confirmSignUp:x}=(0,y.a)(),b=(0,n.TA)({enableReinitialize:!0,initialValues:F(s),validationSchema:P,onSubmit:async(r,a)=>{try{if(await x(r.email,r.code),e()){let e=new URLSearchParams({username:r.email}).toString(),a=C.H.auth.amplify.login+"?".concat(e);t.push(a)}}catch(t){console.error(t),e()&&(a.setStatus({success:!1}),a.setErrors({submit:t.message}),a.setSubmitting(!1))}}});return(0,v.a)(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.p,{title:"Confirm Register"}),(0,a.jsx)("div",{children:(0,a.jsxs)(d.Z,{elevation:16,children:[(0,a.jsx)(c.Z,{sx:{pb:0},title:"Confirm Register"}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)("form",{noValidate:!0,onSubmit:b.handleSubmit,children:[(0,a.jsxs)(m.Z,{spacing:3,children:[s?(0,a.jsx)(f.Z,{disabled:!0,fullWidth:!0,label:"Email",value:s}):(0,a.jsx)(f.Z,{autoFocus:!0,error:!!(b.touched.email&&b.errors.email),fullWidth:!0,helperText:b.touched.email&&b.errors.email,label:"Email Address",name:"email",onBlur:b.handleBlur,onChange:b.handleChange,type:"email",value:b.values.email}),(0,a.jsxs)(u.Z,{error:!!(b.touched.code&&b.errors.code),children:[(0,a.jsx)(p.Z,{sx:{display:"block",mb:2},children:"Verification code"}),(0,a.jsx)(i.P,{length:6,onBlur:()=>b.handleBlur("code"),onChange:e=>b.setFieldValue("code",e),onFocus:()=>b.setFieldTouched("code"),sx:{"& .MuiFilledInput-input":{p:"14px"}},value:b.values.code}),!!(b.touched.code&&b.errors.code)&&(0,a.jsx)(h.Z,{children:b.errors.code})]})]}),b.errors.submit&&(0,a.jsx)(h.Z,{error:!0,sx:{mt:3},children:b.errors.submit}),(0,a.jsx)(o.Z,{disabled:b.isSubmitting,fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Confirm"})]})})]})})]})};I.getLayout=e=>(0,a.jsx)(b.z,{issuer:R.M.Amplify,children:(0,a.jsx)(x.A,{children:(0,a.jsx)(Z.A,{children:e})})}),t.default=I},45025:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});let a={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:"https://material-kit-pro-react-docs.devias.io",notAuthorized:"/401",notFound:"/404",serverError:"/500"}}},function(e){e.O(0,[4310,8471,7176,3155,9118,8727,9774,2888,179],function(){return e(e.s=59064)}),_N_E=e.O()}]);