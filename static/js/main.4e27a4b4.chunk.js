(this.webpackJsonpbasket_ball_manager=this.webpackJsonpbasket_ball_manager||[]).push([[0],{63:function(e,n,t){},64:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a,c=t(0),o=t.n(c),r=t(13),i=t.n(r),s=(t(63),t(6)),l=t(17),u=(t(64),t(23)),d=t(12),j=t(1),b=d.a.nav(a||(a=Object(l.a)(["\n\nfont-family: 'Graduate', cursive;\n\n.active{\n    border-bottom: 1px solid yellow;\n    border-radius: 4px;\n    box-shadow: 0px 0px 2px 1px #424242;\n    padding: 5px;\n\n}\n\ndisplay:flex;\nbackground-color: #000;\nmin-height: 60px;\nalign-items: center;\ngap: 15px;\njustify-content: center;\na{\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    font-size: 1.2em;\n}\n\n\n\n"])));var O,h=function(){return Object(j.jsxs)(b,{children:[Object(j.jsx)(u.b,{to:"/BasketBallApp/",exact:!0,activeClassName:"active",children:"Home"}),Object(j.jsx)(u.b,{to:"/BasketBallApp/create",activeClassName:"active",children:"Compose Team"}),Object(j.jsx)(u.b,{to:"/BasketBallApp/event",activeClassName:"active",children:"First Quarter"}),Object(j.jsx)(u.b,{to:"/BasketBallApp/about",activeClassName:"active",children:"ABOUT"})]})},p=t(50),f=t(2),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{team:[],message:{}},n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"ADD_PLAYER":console.log("hello");var c=e.team.find((function(e){return e.firstName===a.firstName}));return e.team.includes(c)?Object(f.a)(Object(f.a)({},e),{},{message:{error:"Player With This Name is Already Exists"},report:!0}):Object(f.a)(Object(f.a)({},e),{},{team:[].concat(Object(p.a)(e.team),[a]),message:"",report:!1});case"UPDATE_ARRAY_REUEST":var o=e.team.find((function(e){return Number(e.id)===Number(a.id)}));return e.team.includes(o)?Object(f.a)(Object(f.a)({},e),{},{message:{error:"Player With This Name is Already Exists"},report:!0}):Object(f.a)(Object(f.a)({},e),{},{team:[].concat(Object(p.a)(e.team),[a]),message:"",report:!1});default:return e}},m=t(9),g={team:[{firstName:"John",lastName:"Doe",id:1,position:[{label:"Point Guard (PG)",value:1}]},{firstName:"John",lastName:"Doe2",id:2,position:[{label:"Shooting Guard (SG)",value:2}]},{firstName:"John",lastName:"Doe3",id:3,position:[{label:"Small Forward (SF)",value:3}]},{firstName:"John",lastName:"Doe4",id:4,position:[{label:"Power Forward (PF)",value:4}]},{firstName:"John",lastName:"Doe5",id:5,position:[{label:"Center (C)",value:5}]}]},v=o.a.createContext(g),N=function(e){var n=e.children,t=Object(c.useReducer)(x,g),a=Object(s.a)(t,2),o=a[0],r=a[1];return Object(j.jsx)(v.Provider,{value:[o,r],children:n})},S=t(88),y=t(86),A=t(85),P=t.p+"static/media/BG2.e211ec51.jpg",C=t(84),E=d.a.div(O||(O=Object(l.a)(["\nwidth: 200px;\nmargin: 0 auto;\n\n"])));var R=function(){return Object(j.jsx)(E,{children:Object(j.jsx)(C.a,{style:{width:"200px",height:"200px",fontSize:"5em",color:"#fff",marginTop:"100px",margin:"100px auto"},animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},T=t(16),w=(t(51),t(89)),B=o.a.forwardRef((function(e,n){var t=e.children,a=e.closeHandler,c=e.nature;return Object(j.jsx)(w.a,{ref:n,className:"ErrorComponent",variant:c,onClose:function(){return a()},dismissible:!0,children:Object(j.jsx)("p",{children:t})})})),Y=t(87);var L,F=function(e){var n=e.children,t=e.title,a=e.handleClose,c=e.show;return Object(j.jsxs)(Y.a,{animation:!0,size:"lg",centered:!0,show:c,onHide:a,children:[Object(j.jsx)(Y.a.Header,{closeButton:!0,children:Object(j.jsx)(Y.a.Title,{children:t})}),Object(j.jsx)(Y.a.Body,{children:n}),Object(j.jsxs)(Y.a.Footer,{children:[Object(j.jsx)(A.a,{variant:"secondary",onClick:a,children:"Close"}),Object(j.jsx)(A.a,{variant:"primary",onClick:a,children:"Save Changes"})]})]})},k=d.a.div(L||(L=Object(l.a)(["\n\nfont-family: 'Graduate', cursive;\n\nbody{\n  background-image: url(",")!important;\n}import Loader from './Loader';\n\n\n\n\nbox-sizing: border-box;\nwidth: 1000px;\nbackground: rgab(0,0,0,.5);\nmargin: 40px auto;\nbox-shadow: 0px 0px 5px 2px #000;\nmin-height: 500px;\ndisplay: grid;\nalign-content: center;\ncolor: #fff;\n\nh1{\n  font-size: 1.8em;\n  background-color: rgba(0,0,0,.9);\n  padding: 10px;\n}\n\n.formGroup{\n  width: 100%;\n  text-align: left\n}\n\n.select{\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n\n}\n\nlabel{\n  font-size: 1.2em;\n  background-color: rgba(0,0,0,.8);\n  padding: 10px;\n  border-radius: 4px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.PlayerName{\n  margin: 10px 0px;\n}\n\n.selectBox{\n    width: 100%;\n    min-width: 300px;\n}\n\n.SelectHeading{\n  color: #FFF;\n  margin-bottom 40px;\n  padding: 10px;\n  background-color: rgba(0,0,0,.5);\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.selectBox{\n  color: #000;\n  background-color: #000;\n}\n\n.ErrorComponent{\n    padding: 10px!important;\n    margin: 10px 0px!important;\n\np{\n    margin: 5px!important\n}\n}\n\n"])),P),G=[{value:1,label:"Point Guard (PG)"},{value:2,label:"Shooting Guard (SG)"},{value:3,label:"Small Forward (SF)"},{value:4,label:"Power Forward (PF)"},{value:5,label:"Center (C)"}];var D,H=function(){var e=Object(c.useContext)(v),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(s.a)(o,2),i=r[0],l=r[1],u=Object(c.useState)([]),d=Object(s.a)(u,2),b=d[0],O=d[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),f=p[0],x=p[1],m=Object(c.useState)(""),g=Object(s.a)(m,2),N=g[0],P=g[1],C=Object(c.useState)(""),E=Object(s.a)(C,2),w=(E[0],E[1],Object(c.useState)(!1)),Y=Object(s.a)(w,2),L=Y[0],D=Y[1],H=Object(c.useState)(!1),U=Object(s.a)(H,2),M=U[0],V=U[1],z=Object(c.useState)(!1),J=Object(s.a)(z,2),I=J[0],Q=J[1],_=Object(c.useState)(!1),q=Object(s.a)(_,2),W=q[0],Z=q[1],$=Object(c.useState)(!1),K=Object(s.a)($,2),X=K[0],ee=K[1],ne=Object(c.useState)(""),te=Object(s.a)(ne,2),ae=te[0],ce=te[1],oe=Object(c.useState)(""),re=Object(s.a)(oe,2),ie=re[0],se=re[1],le=Object(c.useState)(""),ue=Object(s.a)(le,2),de=ue[0],je=ue[1],be=Object(c.useState)(""),Oe=Object(s.a)(be,2),he=Oe[0],pe=Oe[1];Object(c.useEffect)((function(){l(!0)}),[]);var fe=Object(c.useRef)(),xe=Object(c.useRef)(),me=Object(c.useRef)(),ge=Object(c.useRef)(),ve=Object(c.useRef)();function Ne(){D(!1),ee(!1)}return!1===i?Object(j.jsx)(R,{}):Object(j.jsxs)(k,{children:[Object(j.jsx)("h1",{children:"CREATE A PLAYER"}),X&&Object(j.jsx)(F,{handleClose:function(){ee(!1)},show:X,title:"Congratulations Player Created Successfully",children:"Please Go To Quarters Page. And Select Your Best Combinations For First Quarter Finals."}),Object(j.jsxs)(S.a,{onSubmit:function(e){return function(e){if(e.preventDefault(),console.log(f),""===f)D(!0),ce("Please Enter Your First Name. This is a Required Field."),fe.current.focus();else if(""!==f&&""===N)D(!1),V(!0),se("Please Enter Your Last Name. This is a Required Field."),xe.current.focus();else if(""!==f&&""!==N&&""===me.current.value)D(!1),V(!1),Q(!0),je("Please Enter The Age Of Your Player. Only Positive Integers Allowed. This is a Required Field."),me.current.focus();else if(b.length<1)Q(!1),Z(!0),pe("Please Select One or More Positions For Your Player. *Required");else{console.log(fe.current.value),console.log(xe.current.value),console.log(me.current.value),console.log(ge.current.value);var n={firstName:fe.current.value,lastName:xe.current.value,age:me.current.value,position:b,id:ve};a({type:"ADD_PLAYER",payload:n}),ee(!0),e.target.reset()}}(e)},children:[Object(j.jsx)(y.a,{children:Object(j.jsxs)(S.a.Group,{className:"formGroup",controlId:"formGroupEmail",children:[Object(j.jsx)(S.a.Label,{children:"First Name"}),Object(j.jsx)(S.a.Control,{ref:fe,type:"text",className:"control",placeholder:"First Name",value:f,onChange:function(e){return function(e){var n=e.target.value;n=n.replace(/[^A-Za-z ]*$/gm,""),x(n)}(e)}}),L&&Object(j.jsx)(B,{nature:"danger",closeHandler:Ne,children:ae})]})}),Object(j.jsxs)(S.a.Group,{className:"formGroup",children:[Object(j.jsx)(S.a.Label,{children:"Last Name"}),Object(j.jsx)(S.a.Control,{ref:xe,type:"text",className:"control",placeholder:"Last Name",value:N,onChange:function(e){return function(e){var n=e.target.value;n=n.replace(/[^A-Za-z ]*$/gm,""),P(n)}(e)}}),M&&Object(j.jsx)(B,{nature:"danger",closeHandler:Ne,children:ie})]}),Object(j.jsxs)(S.a.Group,{className:"formGroup",children:[Object(j.jsx)(S.a.Label,{children:"Age "}),Object(j.jsx)(S.a.Control,{ref:me,min:"1.0",type:"number",className:"control",placeholder:"Height"}),I&&Object(j.jsx)(B,{nature:"danger",closeHandler:Ne,children:de})]}),Object(j.jsxs)("div",{className:"formGroup",children:[Object(j.jsx)("label",{children:"Select Position"}),Object(j.jsx)(T.a,{options:G,ref:ge,required:!0,name:"SelectPosition",id:"SelectPosition",className:"selectBox",isClearable:!0,isMulti:!0,onChange:function(e){O(Array.isArray(e)?e.map((function(e){return{label:e.label,value:e.value}})):[])}}),W&&Object(j.jsx)(B,{nature:"danger",closeHandler:Ne,children:he})]}),Object(j.jsx)("input",{ref:ve,type:"hidden",id:t.team.length+1}),Object(j.jsx)("div",{className:"d-grid gap-2",children:Object(j.jsx)(A.a,{type:"submit",size:"lg",className:"mt-3",variant:"dark",children:"CREATE PLAYER"})})]}),L&&setTimeout((function(){D(!1)}),4e3),M&&setTimeout((function(){V(!1)}),4e3),I&&setTimeout((function(){Q(!1)}),4e3),W&&setTimeout((function(){Z(!1)}),4e3),X&&setTimeout((function(){ee(!1)}),1e4)]})},U=d.a.div(D||(D=Object(l.a)(["\nfont-family: 'Graduate', cursive;\nwidth: 1000px;\nmargin: 40px auto;\nbox-shadow: 0px 0px 5px 2px #000;\ndisplay: grid;\nalign-content: center;\n\n.select{\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n\n}\n\n.PlayerName, .PlayerPosition{\n  margin: 10px 0px;\n  width: 50%;\n}\n\n.selectBox{\n    width: 100%;\n    min-width: 300px;\n}\n\n.SelectHeading{\n  color: #FFF;\n  margin-bottom 40px;\n  padding: 10px;\n  background-color: rgba(0,0,0,.8);\n  font-size:1.8em;\n  font-weight: bold;\n  font-family: 'Graduate', cursive;\n}\n\n.playerHeadings{\n  display: flex;\n  justify-content: space-around;\n  color: #eee;\n  font-size: 18px;\n\n  h2{\n    font-size: 1.4em;\n    background-color: rgba(0,0,0,.8);\n    padding: 10px;\n    min-width: 300px;\n  }\n\n}\n\n.ErrorComponent{\n    padding: 10px!important;\n    margin: 10px 0px!important;\n\np{\n    margin: 5px!important\n}\n}\n\n\n"]))),M=[],V=[];var z,J=function(){var e=Object(c.useContext)(v),n=Object(s.a)(e,2),t=n[0],a=(n[1],Object(c.useState)(t.team)),o=Object(s.a)(a,2),r=o[0],i=(o[1],Object(c.useState)("")),l=Object(s.a)(i,2),u=l[0],d=l[1],b=Object(c.useState)(!1),O=Object(s.a)(b,2),h=O[0],p=O[1],f=Object(c.useState)(!1),x=Object(s.a)(f,2),m=x[0],g=x[1],N=Object(c.useState)(!1),S=Object(s.a)(N,2),y=S[0],P=S[1],C=Object(c.useState)(!1),E=Object(s.a)(C,2),w=E[0],Y=E[1],L=Object(c.useState)(!1),k=Object(s.a)(L,2),G=k[0],D=k[1],H=Object(c.useRef)(),z=Object(c.useState)([]),J=Object(s.a)(z,2),I=J[0],Q=J[1],_=Object(c.useState)([]),q=Object(s.a)(_,2),W=q[0],Z=q[1],$=Object(c.useState)([]),K=Object(s.a)($,2),X=K[0],ee=K[1],ne=Object(c.useState)([]),te=Object(s.a)(ne,2),ae=te[0],ce=te[1],oe=Object(c.useState)([]),re=Object(s.a)(oe,2),ie=re[0],se=re[1],le=Object(c.useState)(!1),ue=Object(s.a)(le,2),de=ue[0],je=ue[1],be=Object(c.useState)(!1),Oe=Object(s.a)(be,2),he=Oe[0],pe=Oe[1],fe=Object(c.useState)(!1),xe=Object(s.a)(fe,2),me=xe[0],ge=xe[1],ve=Object(c.useState)(!1),Ne=Object(s.a)(ve,2),Se=Ne[0],ye=Ne[1],Ae=Object(c.useState)(!1),Pe=Object(s.a)(Ae,2),Ce=Pe[0],Ee=Pe[1],Re=Object(c.useState)(!1),Te=Object(s.a)(Re,2),we=Te[0],Be=Te[1],Ye=Object(c.useState)(!1),Le=Object(s.a)(Ye,2),Fe=Le[0],ke=Le[1],Ge=Object(c.useState)(!1),De=Object(s.a)(Ge,2),He=De[0],Ue=De[1],Me=Object(c.useState)(!1),Ve=Object(s.a)(Me,2),ze=(Ve[0],Ve[1]),Je=Object(c.useState)(!1),Ie=Object(s.a)(Je,2),Qe=(Ie[0],Ie[1]);function _e(e){M.includes(e)?(console.log(this),p(!0),d("You have already selected this Player ".concat(e.firstName," ").concat(e.lastName,". Player Can Be Selected Once.")),console.log("error")):(M.push(e),Q(Array.isArray(e.position)?e.position:[e.position]),console.log(I),je(!0)),console.log(e)}function qe(e){M.includes(e)?(console.log("error"),p(!0),d("You have already selected this Player ".concat(e.firstName," ").concat(e.lastName,". Player Can Be Selected Once."))):(M.push(e),Z(Array.isArray(e.position)?e.position:[e.position]),console.log(I),pe(!0)),console.log(e)}function We(e){M.includes(e)?(console.log("error"),p(!0),d("You have already selected this Player ".concat(e.firstName," ").concat(e.lastName,". Player Can Be Selected Once."))):(M.push(e),ee(Array.isArray(e.position)?e.position:[e.position]),ge(!0)),console.log(e)}function Ze(e){console.log(M.includes(e)),M.includes(e)?(console.log("error"),p(!0),d("You have already selected this Player ".concat(e.firstName," ").concat(e.lastName,". Player Can Be Selected Once."))):(M.push(e),ce(Array.isArray(e.position)?e.position:[e.position]),console.log(I),ye(!0)),console.log(e)}function $e(e){M.includes(e)?(console.log("error"),p(!0),d("You have already selected this Player ".concat(e.firstName," ").concat(e.lastName,". Player Can Be Selected Once."))):(M.push(e),se(Array.isArray(e.position)?e.position:[e.position]),console.log(I),Ee(!0)),console.log(e)}function Ke(e){var n=V.find((function(n){return n.value===e.value}));V.includes(n)?(console.log("error"),d("You Have Already Selected This Position ".concat(e.label,". You Cannot Select Same Position Again ")),p(!0)):(V.push(e),console.log(e,V),Be(!0)),console.log(e)}function Xe(e){var n=V.find((function(n){return n.value===e.value}));V.includes(n)?(console.log("error"),e.disabled=!0,d("You Have Already Selected This Position ".concat(e.label,". You Cannot Select Same Position Again ")),p(!0)):(V.push(e),ke(!0),console.log(e,V)),console.log(e)}function en(e){var n=V.find((function(n){return n.value===e.value}));V.includes(n)?(console.log("error"),d("You Have Already Selected This Position ".concat(e.label,". You Cannot Select Same Position Again ")),p(!0)):(V.push(e),Ue(!0),console.log(e,V)),console.log(e)}function nn(e){var n=V.find((function(n){return n.value===e.value}));V.includes(n)?(console.log("error"),d("You Have Already Selected This Position ".concat(e.label,". You Cannot Select Same Position Again ")),p(!0)):(V.push(e),ze(!0),console.log(e,V)),console.log(e)}function tn(e){var n=V.find((function(n){return n.value===e.value}));V.includes(n)?(console.log("error"),d("You Have Already Selected This Position ".concat(e.label,". You Cannot Select Same Position Again. Change The Player")),p(!0)):(V.push(e),Qe(!0),console.log(e,V)),console.log(e)}function an(){Y(!1),G&&D(!1)}return Object(c.useEffect)((function(){g(!0),M=[],V=[]}),[]),Object(c.useEffect)((function(){console.log(M.length,V.length),5===M.length&&5===V.length?P(!0):P(!1)}),[_e,qe,We,Ze,$e,Ke,Xe,en,nn,tn]),!1===m?Object(j.jsx)(R,{}):Object(j.jsxs)(U,{children:[Object(j.jsx)("h1",{className:"SelectHeading",children:"Select 5 Players To Play in Quarter's & Assign A Role"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"playerHeadings",children:[Object(j.jsx)("h2",{children:"PLAYER NAME"}),Object(j.jsx)("h2",{children:"PLAYER ROLE"})]}),h&&Object(j.jsx)(B,{ref:H,nature:"danger",closeHandler:function(){p(!1)},children:u}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("div",{className:"PlayerName",children:Object(j.jsx)(T.a,{className:"selectBox",options:M.length>0?r.filter((function(e,n){return e!==M[n]})):r,onChange:_e,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},getOptionValue:function(e){return e.id}})}),Object(j.jsx)("div",{className:"PlayerPosition",children:Object(j.jsx)(T.a,{isDisabled:!de,className:"selectBox",options:we&&V.length>0?I.filter((function(e,n){return e!==V[n]})):I,onChange:Ke,getOptionLabel:function(e){return"".concat(e.label)},getOptionValue:function(e){return e.id}})})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("div",{className:"PlayerName",children:Object(j.jsx)(T.a,{className:"selectBox",options:M.length>0?r.filter((function(e,n){return e!==M[n]})):r,onChange:qe,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},getOptionValue:function(e){return e.id}})}),Object(j.jsx)("div",{className:"PlayerPosition",children:Object(j.jsx)(T.a,{isDisabled:!he,className:"selectBox",options:Fe&&V.length>0?W.filter((function(e,n){return e!==V[n]})):W,onChange:Xe,getOptionLabel:function(e){return"".concat(e.label)},getOptionValue:function(e){return e.id}})})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("div",{className:"PlayerName",children:Object(j.jsx)(T.a,{className:"selectBox",options:M.length>0?r.filter((function(e,n){return M[n],e})):r,onChange:We,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},getOptionValue:function(e){return e.id}})}),Object(j.jsx)("div",{className:"PlayerPosition",children:Object(j.jsx)(T.a,{className:"selectBox",isDisabled:!me,options:He&&V.length>0?X.filter((function(e,n){return e!==V[n]})):X,onChange:en,getOptionLabel:function(e){return"".concat(e.label)},getOptionValue:function(e){return e.id}})})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("div",{className:"PlayerName",children:Object(j.jsx)(T.a,{className:"selectBox",options:M.length>0?r.filter((function(e,n){return e!==M[n]})):r,onChange:Ze,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},getOptionValue:function(e){return e.id}})}),Object(j.jsx)("div",{className:"PlayerPosition",children:Object(j.jsx)(T.a,{isDisabled:!Se,className:"selectBox",options:V.length>0?ae.filter((function(e,n){return e!==V[n]})):ae,onChange:nn,getOptionLabel:function(e){return"".concat(e.label)},getOptionValue:function(e){return e.id}})})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("div",{className:"PlayerName",children:Object(j.jsx)(T.a,{className:"selectBox",options:M.length>0?r.filter((function(e,n){return e!==M[n]})):r,onChange:$e,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},getOptionValue:function(e){return e.id}})}),Object(j.jsx)("div",{className:"PlayerPosition",children:Object(j.jsx)(T.a,{isDisabled:!Ce,className:"selectBox",options:V.length>0?ie.filter((function(e,n){return e!==V[n]})):ie,onChange:tn,getOptionLabel:function(e){return"".concat(e.label)},getOptionValue:function(e){return e.id}})})]})]}),y?Object(j.jsx)(A.a,{onClick:function(){Y(!0)},variant:"dark",children:"SAVE PLAYERS FOR QUARTERS"}):Object(j.jsx)(A.a,{onClick:function(e){return function(e){D(!0),e.preventDefault()}(e)},variant:"dark",children:"SAVE PLAYERS FOR QUARTERS"}),w&&Object(j.jsx)(F,{handleClose:an,show:w,title:"Players Selected For Quarters Successfuly",children:"Congratulations On Selecting Your team for Quarter Finals. All The Best."}),G&&Object(j.jsx)(F,{handleClose:an,show:G,title:"Please Select The Team First! Button is Disabled",children:"You cannot Move Forward Without Selecting Players for the Quarters."}),h&&setTimeout((function(){p(!1)}),7e3)]})},I=t(58),Q=d.a.div(z||(z=Object(l.a)(["\nbackground-color: rgba(0,0,0,.8);\nwidth: 100%;\nheight: 200px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 100px;\n\n.AboutContainer{\nwidth: 800px;\ncolor: #fff;\nfont-family: 'Graduate', cursive;\n}\n\nspan{\n    color: yellow;\n}\n\n"])));var _,q=function(){return Object(j.jsx)(Q,{children:Object(j.jsx)("div",{className:"AboutContainer",children:Object(j.jsxs)("h1",{children:["A PERSONAL PROJECT BY ",Object(j.jsx)("span",{children:"MM NAUMAN"})," For ",Object(j.jsx)("span",{children:"SYSTANGO"})]})})})},W=d.a.div(_||(_=Object(l.a)(["\nfont-family: 'Graduate', cursive;\nh1{\n  color: yellow;\n  margin-top: 50px;\n  font-family: 'Graduate', cursive;\n  background-color: rgba(0,0,0,.8);\n  padding: 10px;\n}\n\n.AppDetails{\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  gap: 30px;\n  width: 100%;\n  margin-top: 80px;\n}\n\n.CREDITS{\n  background-color: rgba(0,0,0,.7);\n padding: 20px;\n  width: 100%;\n  margin-top: 80px;\n  color: #fff;\n}\n\n.sections{\n background-color: rgba(0,0,0,.7);\n padding: 20px;\n  width: 100%;\n\n  h2{\n    margin: 10px 0px 20px 0px;\n  }\n\n  ol li{\n    margin: 10px 0px\n  }\n\n}\n\n.features{\n  width: 50%;\n}\n\n.TechUsed{\n  width: 50%\n}\n\n.REACT{\n  color: #41e0fd;\n}\n\nfooter span{\n  color: yellow\n}\n\n"])));var Z=function(){var e=Object(c.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){a(!0)}),[]),!1===t?Object(j.jsx)(R,{}):Object(j.jsxs)(N,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m.a,{exact:!0,path:"/",children:Object(j.jsxs)(W,{children:[Object(j.jsx)("h1",{children:"Basket Ball Manager"}),Object(j.jsxs)("div",{className:"AppDetails",children:[Object(j.jsxs)("div",{className:"sections features",children:[Object(j.jsx)("h2",{children:"Features"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"YOU CAN CREATE YOUR OWN TEAM"}),Object(j.jsx)("li",{children:"CUSTOMIZED EACH PLAYER ROLES"}),Object(j.jsx)("li",{children:"SELECT YOUR BEST COMBINATION FOR QUARTERS"})]})]}),Object(j.jsxs)("div",{className:"sections TechUsed",children:[Object(j.jsx)("h2",{children:"Languages and Libraries Used"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"HTML5"}),Object(j.jsx)("li",{children:"VANILLA JAVASCRIPT"}),Object(j.jsx)("li",{children:"CSS3"}),Object(j.jsx)("li",{children:"REACTJS "}),Object(j.jsx)("li",{children:"REACT-ROUTER & HOOKS"})]})]})]}),Object(j.jsx)("footer",{className:"CREDITS",children:Object(j.jsxs)("h2",{children:["A PROJECT CREATED BY ",Object(j.jsx)("span",{children:"MM NAUMAN"})," - PROUDLY USING"," ",Object(j.jsx)(I.a,{className:"REACT"})," REACTJS"]})})]})}),Object(j.jsx)(m.a,{path:"/create",children:Object(j.jsx)(H,{})}),Object(j.jsx)(m.a,{path:"/event",children:Object(j.jsx)(J,{})}),Object(j.jsx)(m.a,{path:"/about",children:Object(j.jsx)(q,{})})]})]})};i.a.render(Object(j.jsx)(u.a,{children:Object(j.jsx)(Z,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.4e27a4b4.chunk.js.map