import{a as l}from"./chunk-3NGIFNNN.js";import{a as I,c as k,d as m,f as j}from"./chunk-X6K6JCTU.js";import{k as y,p as x,q as A}from"./chunk-XJVDUTBG.js";import{Oa as C,P as s,U as i,Y as v,eb as b,n as f,r as c,y as u}from"./chunk-6IZXC2FC.js";var M=(t,e)=>{let d=localStorage.getItem("token"),o=t.headers;return d?o=o.set("Authorization","Bearer "+d):localStorage.getItem("token")&&(d=localStorage.getItem("token")),o=o.set("Content-Type","application/json"),t=t.clone({headers:o}),console.log(t.headers),e(t)};var a=(()=>{let e=class e{constructor(o,r){this.router=o,this.auth=r}canActivate(o,r){return this.auth.isauth().pipe(c(n=>n.status===200?!0:(n.status===401&&this.router.navigate(["/login"]),!1)),u(n=>(console.error(n),this.router.navigate(["/login"]),f(!1))))}};e.\u0275fac=function(r){return new(r||e)(i(m),i(l))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var p=(()=>{let e=class e{constructor(o,r){this.router=o,this.auth=r}canActivate(o,r){return this.auth.checkActive().pipe(c(n=>n.body===1?!0:(n.body===0&&(localStorage.removeItem("token"),localStorage.removeItem("userEmail"),this.router.navigate(["/login"])),!1)),u(n=>(console.log(n),this.router.navigate(["/login"]),f(!1))))}};e.\u0275fac=function(r){return new(r||e)(i(m),i(l))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var g=(()=>{let e=class e{constructor(o,r){this.router=o,this.auth=r}canActivate(o,r){return this.auth.checkRol().pipe(c(n=>n.body===2?!0:(n.body===1&&this.router.navigate(["/lifeplants/home"]),!1)))}};e.\u0275fac=function(r){return new(r||e)(i(m),i(l))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var w=[{path:"lifeplants",loadComponent:()=>import("./chunk-QUO3W5SK.js").then(t=>t.NavtwoComponent),canActivate:[p,a],children:[{path:"about",loadComponent:()=>import("./chunk-VYPTAXO5.js").then(t=>t.AboutComponent)},{path:"home",loadComponent:()=>import("./chunk-2JZZ3NRG.js").then(t=>t.HomeComponent),canActivate:[p,a]},{path:"plants",loadComponent:()=>import("./chunk-G7H4D3G6.js").then(t=>t.PlantsComponent),canActivate:[a,p]},{path:"plant/:id",loadComponent:()=>import("./chunk-4QXVJKOF.js").then(t=>t.PlantComponent),canActivate:[a,p]},{path:"users",loadComponent:()=>import("./chunk-3F5RCBFG.js").then(t=>t.UsersComponent),canActivate:[a,p,g]},{path:"sensors",loadComponent:()=>import("./chunk-SI5R4YK6.js").then(t=>t.SensorsComponent),canActivate:[a,p,g]},{path:"perfil",loadComponent:()=>import("./chunk-7AVS36HU.js").then(t=>t.ProfileComponent),canActivate:[a,p]}]},{path:"registro",loadComponent:()=>import("./chunk-RLXQNEAP.js").then(t=>t.RegistroComponent)},{path:"login",loadComponent:()=>import("./chunk-L3TUOP6S.js").then(t=>t.LoginComponent)},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",loadComponent:()=>import("./chunk-IQAOTUHS.js").then(t=>t.NotFoundComponent)}];var O={providers:[j(w),x(A([M]))]};var F=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(r,n){r&1&&C(0,"router-outlet")},dependencies:[k,y],styles:[".btn-principal[_ngcontent-%COMP%]{background-color:#743c07;color:#fff;border:none;padding:10px 20px;cursor:pointer;border-radius:5px}.offcanvas-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.iconplanta[_ngcontent-%COMP%]{width:29px;height:35px;filter:invert(1)}"]});let t=e;return t})();I(F,O).catch(t=>console.error(t));