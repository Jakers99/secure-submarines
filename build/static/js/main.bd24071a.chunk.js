(this["webpackJsonpprime-solo-project"]=this["webpackJsonpprime-solo-project"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/submarine.7ce9680e.svg"},40:function(e,t,a){e.exports=a(72)},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(19),c=a.n(s),l=a(14),o=a(8),u=a(38);a(49);var i=Object(l.c)({loginMessage:(e="",t)=>{switch(t.type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:(e="",t)=>{switch(t.type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}});var p=(e="login",t)=>{switch(t.type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}};var m=(e={},t)=>{switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}};var E=(e=[],t)=>{switch(t.type){case"SET_SECRETS":return t.payload;case"UNSET_SECRETS":return[];default:return e}};var h=Object(l.c)({errors:i,loginMode:p,user:m,secrets:E}),d=a(5),b=a.n(d),v=a(6),O=a(15),g=a.n(O),R=b.a.mark(y),w=b.a.mark(_),T=b.a.mark(x);function y(e){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(v.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,g.a.post("/api/user/login",e.payload,t);case 6:return a.next=8,Object(v.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(v.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(v.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}}),R,null,[[0,10]])}function _(e){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,g.a.post("/api/user/logout",t);case 4:return e.next=6,Object(v.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}}),w,null,[[0,8]])}function x(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)("LOGIN",y);case 2:return e.next=4,Object(v.c)("LOGOUT",_);case 4:case"end":return e.stop()}}),T)}var f=x,I=b.a.mark(C),S=b.a.mark(N);function C(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(v.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,g.a.post("/api/user/register",e.payload);case 5:return t.next=7,Object(v.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(v.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(v.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}}),I,null,[[0,11]])}function N(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)("REGISTER",C);case 2:case"end":return e.stop()}}),S)}var j=N,L=b.a.mark(G),k=b.a.mark(F);function G(){var e,t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,g.a.get("/api/user",e);case 4:return t=a.sent,a.next=7,Object(v.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),L,null,[[0,9]])}function F(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)("FETCH_USER",G);case 2:case"end":return e.stop()}}),k)}var U=F,D=b.a.mark(A),M=b.a.mark(P);function A(){var e,t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,g.a.get("api/secrets",e);case 4:return t=a.sent,a.next=7,Object(v.b)({type:"SET_SECRETS",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("Secrets get request failed",a.t0);case 12:case"end":return a.stop()}}),D,null,[[0,9]])}function P(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)("FETCH_SECRETS",A);case 2:case"end":return e.stop()}}),M)}var H=P,q=b.a.mark(J);function J(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([f(),j(),U(),H()]);case 2:case"end":return e.stop()}}),q)}var B=a(16),W=a(7);var Y=Object(o.b)()(e=>n.a.createElement("button",{className:e.className,onClick:()=>e.dispatch({type:"LOGOUT"})},"Log Out"));a(68);var z=Object(o.b)(e=>({user:e.user}))(e=>n.a.createElement("div",{className:"nav"},n.a.createElement(B.b,{to:"/home"},n.a.createElement("h2",{className:"nav-title"},"Security Submarine")),n.a.createElement("div",{className:"nav-right"},n.a.createElement(B.b,{className:"nav-link",to:"/home"},e.user.id?"Home":"Login / Register"),e.user.id&&n.a.createElement(n.a.Fragment,null,n.a.createElement(B.b,{className:"nav-link",to:"/secrets"},"Secrets Page"),n.a.createElement(Y,{className:"nav-link"})),n.a.createElement(B.b,{className:"nav-link",to:"/about"},"About"))));a(70);var K=()=>n.a.createElement("footer",null,"\xa9 Secure Submarine Navy"),Q=a(39),V=a(37),X=a.n(V);class Z extends r.Component{constructor(...e){super(...e),this.state={username:"",password:""},this.login=e=>{e.preventDefault(),this.state.username&&this.state.password?this.props.dispatch({type:"LOGIN",payload:{username:this.state.username,password:this.state.password}}):this.props.dispatch({type:"LOGIN_INPUT_ERROR"})},this.handleInputChangeFor=e=>t=>{this.setState({[e]:t.target.value})}}render(){return n.a.createElement("div",null,this.props.errors.loginMessage&&n.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),n.a.createElement("form",{onSubmit:this.login},n.a.createElement("h1",null,"Login"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"username"},"Username:",n.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"password"},"Password:",n.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),n.a.createElement("div",null,n.a.createElement("input",{className:"log-in",type:"submit",name:"submit",value:"Log In"}))),n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"link-button",onClick:()=>{this.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")),n.a.createElement("center",null,n.a.createElement("img",{src:X.a,height:"200px"})))}}var $=Object(o.b)(e=>({errors:e.errors}))(Z);class ee extends r.Component{constructor(...e){super(...e),this.state={username:"",password:""},this.registerUser=e=>{e.preventDefault(),this.state.username&&this.state.password?this.props.dispatch({type:"REGISTER",payload:{username:this.state.username,password:this.state.password}}):this.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},this.handleInputChangeFor=e=>t=>{this.setState({[e]:t.target.value})}}render(){return n.a.createElement("div",null,this.props.errors.registrationMessage&&n.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),n.a.createElement("form",{onSubmit:this.registerUser},n.a.createElement("h1",null,"Register User"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"username"},"Username:",n.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"password"},"Password:",n.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),n.a.createElement("div",null,n.a.createElement("input",{className:"register",type:"submit",name:"submit",value:"Register"}))),n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"link-button",onClick:()=>{this.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}var te=Object(o.b)(e=>({errors:e.errors}))(ee);var ae=Object(o.b)(e=>({user:e.user,loginMode:e.loginMode}))(e=>{const t=e.component,a=e.user,r=e.loginMode,s=Object(Q.a)(e,["component","user","loginMode"]);let c;return c=a.id?t:"login"===r?$:te,n.a.createElement(W.b,Object.assign({},s,{component:c}))});var re=()=>n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("p",null,"This about page is for anyone to read!")));var ne=Object(o.b)(e=>({user:e.user}))(e=>n.a.createElement("div",null,n.a.createElement("h1",{id:"welcome"},"Welcome, ",e.user.username,"!"),n.a.createElement("p",null,"Your ID is: ",e.user.id),n.a.createElement(Y,{className:"log-in"})));class se extends r.Component{componentDidMount(){this.props.dispatch({type:"FETCH_SECRETS"})}render(){return n.a.createElement("div",null,n.a.createElement("p",null,"Currently logged in as ",n.a.createElement("b",null,this.props.user.username)),n.a.createElement("p",null,"Clearance level: ",n.a.createElement("b",null,this.props.user.clearance_level)),n.a.createElement("ul",null,this.props.secrets.map(e=>n.a.createElement("li",null,"Clearance: ",e.secrecy_level," | Content: ",e.content))))}}var ce=Object(o.b)(e=>({secrets:e.secrets,user:e.user}))(se);a(71);class le extends r.Component{componentDidMount(){this.props.dispatch({type:"FETCH_USER"})}render(){return n.a.createElement(B.a,null,n.a.createElement("div",null,n.a.createElement(z,null),n.a.createElement(W.d,null,n.a.createElement(W.a,{exact:!0,from:"/",to:"/home"}),n.a.createElement(W.b,{exact:!0,path:"/about",component:re}),n.a.createElement(ae,{exact:!0,path:"/home",component:ne}),n.a.createElement(ae,{exact:!0,path:"/secrets",component:ce}),n.a.createElement(W.b,{render:()=>n.a.createElement("h1",null,"404")})),n.a.createElement(K,null)))}}var oe=Object(o.b)()(le);const ue=Object(u.a)(),ie=[ue],pe=Object(l.e)(h,Object(l.a)(...ie));ue.run(J),c.a.render(n.a.createElement(o.a,{store:pe},n.a.createElement(oe,null)),document.getElementById("react-root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bd24071a.chunk.js.map