import{a as W}from"./chunk-HVGGJFLX.js";import{d as F,e as q}from"./chunk-CFXB26IQ.js";import{a as N,b as V,c as g,d as k,e as z,f as B,g as y,h as G,i as O,j as R,k as j,o as D,p as Z,q as H,r as J}from"./chunk-5AT7GHZW.js";import{j as T,k as P,r as A}from"./chunk-CLN57MIK.js";import{Ga as p,Ia as a,Ka as M,Ma as r,Na as n,Ra as x,Sa as C,Ta as c,Y as E,Ya as s,_a as L,ab as h,bb as f,cb as _,ea as S,eb as I,fa as b,ua as o,va as w}from"./chunk-6IZXC2FC.js";function K(i,l){if(i&1&&(r(0,"div",20),s(1),n()),i&2){let e=c();M(e.alert),o(),L(" ",e.errormsg,`
`)}}function Q(i,l){i&1&&(r(0,"div"),s(1,"Email is required"),n())}function U(i,l){i&1&&(r(0,"div"),s(1,"Email must be a valid email address"),n())}function X(i,l){i&1&&(r(0,"div"),s(1,"Email must be a valid email address"),n())}function Y(i,l){if(i&1&&(r(0,"div",21),p(1,Q,2,0,"div",22)(2,U,2,0,"div",22)(3,X,2,0,"div",22),n()),i&2){let e=c();o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.required),o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.email),o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.pattern)}}function $(i,l){i&1&&(r(0,"div"),s(1,"Password is required"),n())}function ee(i,l){i&1&&(r(0,"div"),s(1,"Password must be at least 8 characters"),n())}function te(i,l){i&1&&(r(0,"div"),s(1,"Password must contain at least one letter and one number"),n())}function ie(i,l){if(i&1&&(r(0,"div",21),p(1,$,2,0,"div",22)(2,ee,2,0,"div",22)(3,te,2,0,"div",22),n()),i&2){let e=c();o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.required),o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.minlength),o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.pattern)}}function ne(i,l){i&1&&(r(0,"div"),s(1,"Codigo de autorizacion debe tener 6 caracteres"),n())}function re(i,l){i&1&&(r(0,"div"),s(1,"Codigo de autorizacion es requerido"),n())}function oe(i,l){if(i&1&&(r(0,"div",21),p(1,ne,2,0,"div",22)(2,re,2,0,"div",22),n()),i&2){let e=c(2);o(),a("ngIf",e.code==null||e.code.errors==null?null:e.code.errors.minlength),o(),a("ngIf",e.code==null||e.code.errors==null?null:e.code.errors.required)}}function le(i,l){if(i&1){let e=x();r(0,"div",23)(1,"label",24),s(2,"Codigo de autorizacion"),n(),r(3,"input",25),_("ngModelChange",function(u){S(e);let t=c();return f(t.verify.code,u)||(t.verify.code=u),b(u)}),n(),p(4,oe,3,2,"div",11),n()}if(i&2){let e=c();o(3),h("ngModel",e.verify.code),o(),a("ngIf",(e.code==null?null:e.code.invalid)&&((e.code==null?null:e.code.dirty)||(e.code==null?null:e.code.touched)))}}var _e=(()=>{let l=class l{constructor(d,u,t){this.auth=d,this.router=u,this.msg=t,this.login={email:"",password:""},this.verify={email:"",password:"",code:null},this.isAuth=!1,this.errormsg="",this.isError=!1,this.alert="",this.message="",this.showPassword=!1,this.formlogin=new B({email:new y("",[g.required,g.email,g.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),password:new y("",[g.required,g.minLength(8)]),code:new y("",[g.required,g.minLength(6)])})}ngOnInit(){this.message=this.msg.getMessage(),this.message!==""&&(this.isError=!0,this.errormsg=this.message,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4))}get email(){return this.formlogin.get("email")}get password(){return this.formlogin.get("password")}get code(){return this.formlogin.get("code")}togglePasswordVisibility(){this.showPassword=!this.showPassword}Onsubmit(){this.isAuth?(this.verify.email=this.login.email,this.verify.password=this.login.password,this.auth.verify(this.verify).subscribe(d=>{console.log(d),localStorage.setItem("token",d.access_token),this.router.navigate(["/home"])},d=>{console.log(d),this.isError=!0,this.errormsg=d.error,this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)})):this.auth.login(this.login).subscribe(d=>{this.isAuth=!0,console.log(d),this.isError=!0,this.errormsg=d.msg,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)},d=>{d.error==="La cuenta no ha sido activada o no existe"?(this.isError=!0,this.errormsg=d.error,this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)):d.status===401&&(this.isError=!0,this.errormsg="Correo o contrase\xF1a incorrectos",this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4))})}};l.\u0275fac=function(u){return new(u||l)(w(W),w(F),w(J))},l.\u0275cmp=E({type:l,selectors:[["app-login"]],standalone:!0,features:[I],decls:32,vars:12,consts:[["role","alert",3,"class",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-header","text-white","text-center"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"mb-3",3,"hidden"],["for","inputEmail",1,"form-label"],["type","email","id","inputEmail","formControlName","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","inputPassword",1,"form-label"],["id","inputPassword","formControlName","password","name","password","required","",1,"form-control",3,"ngModelChange","type","ngModel"],["type","checkbox","id","showPassword",3,"change","ngModelChange","ngModel"],["for","showPassword",1,"form-label"],["class","mb-3",4,"ngIf"],["type","submit",1,"btn","text-white","w-100"],[1,"card-footer","text-center"],["routerLink","/registro"],["role","alert"],[1,"text-danger"],[4,"ngIf"],[1,"mb-3"],["for","code",1,"form-label"],["type","text","id","code","formControlName","code","name","code","placeholder","Ingresa el codigo","required","",1,"form-control",3,"ngModelChange","ngModel"]],template:function(u,t){u&1&&(p(0,K,2,4,"div",0),r(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),s(7,"Iniciar sesi\xF3n"),n()(),r(8,"div",6)(9,"form",7),C("ngSubmit",function(){return t.Onsubmit()}),r(10,"div",8)(11,"label",9),s(12,"Correo electr\xF3nico"),n(),r(13,"input",10),_("ngModelChange",function(m){return f(t.login.email,m)||(t.login.email=m),m}),n(),p(14,Y,4,3,"div",11),n(),r(15,"div",8)(16,"label",12),s(17,"Contrase\xF1a"),n(),r(18,"input",13),_("ngModelChange",function(m){return f(t.login.password,m)||(t.login.password=m),m}),n(),p(19,ie,4,3,"div",11),n(),r(20,"div",8)(21,"input",14),C("change",function(){return t.togglePasswordVisibility()}),_("ngModelChange",function(m){return f(t.showPassword,m)||(t.showPassword=m),m}),n(),r(22,"label",15),s(23,"Mostrar contrase\xF1a"),n()(),p(24,le,5,2,"div",16),r(25,"button",17),s(26,"Iniciar sesi\xF3n"),n()()(),r(27,"div",18)(28,"p"),s(29,"\xBFAun no tienes cuenta? "),r(30,"a",19),s(31,"Registrate"),n()()()()()()()),u&2&&(a("ngIf",t.isError),o(9),a("formGroup",t.formlogin),o(),a("hidden",t.isAuth),o(3),h("ngModel",t.login.email),o(),a("ngIf",(t.email==null?null:t.email.invalid)&&((t.email==null?null:t.email.dirty)||(t.email==null?null:t.email.touched))),o(),a("hidden",t.isAuth),o(3),a("type",t.showPassword?"text":"password"),h("ngModel",t.login.password),o(),a("ngIf",(t.password==null?null:t.password.invalid)&&((t.password==null?null:t.password.dirty)||(t.password==null?null:t.password.touched))),o(),a("hidden",t.isAuth),o(),h("ngModel",t.showPassword),o(3),a("ngIf",t.isAuth))},dependencies:[q,P,T,Z,O,V,N,k,z,D,G,H,R,j,A],styles:[".card-header[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{background-color:#00c881}"]});let i=l;return i})();export{_e as LoginComponent};
