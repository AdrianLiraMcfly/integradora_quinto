import{a as Q}from"./chunk-LBYXGKYQ.js";import{a as N}from"./chunk-3NGIFNNN.js";import{d as q,e as W}from"./chunk-X6K6JCTU.js";import{a as K}from"./chunk-6TRNSDK3.js";import{a as V,b as k,c,d as z,e as B,f as G,g as y,h as O,i as R,j,k as D,o as Z,p as H,q as J}from"./chunk-QMUPNAPL.js";import{j as F,k as P,r as A}from"./chunk-XJVDUTBG.js";import{Ga as p,Ia as a,Ka as M,Ma as r,Na as n,Oa as x,Ra as L,Sa as C,Ta as g,Y as E,Ya as s,_a as I,ab as h,bb as f,cb as v,ea as S,eb as T,fa as b,ua as o,va as w}from"./chunk-6IZXC2FC.js";function U(i,l){if(i&1&&(r(0,"div",20),s(1),n()),i&2){let e=g();M(e.alert),o(),I(" ",e.errormsg,`
`)}}function X(i,l){i&1&&(r(0,"div"),s(1,"El correo electr\xF3nico es requerido"),n())}function Y(i,l){i&1&&(r(0,"div"),s(1,"El correo electr\xF3nico debe ser v\xE1lido"),n())}function $(i,l){i&1&&(r(0,"div"),s(1,"El correo electr\xF3nico debe ser v\xE1lido"),n())}function ee(i,l){if(i&1&&(r(0,"div",21),p(1,X,2,0,"div",22)(2,Y,2,0,"div",22)(3,$,2,0,"div",22),n()),i&2){let e=g();o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.required),o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.email),o(),a("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.pattern)}}function te(i,l){i&1&&(r(0,"div"),s(1,"La contrase\xF1a es requerida"),n())}function ie(i,l){i&1&&(r(0,"div"),s(1,"La contrase\xF1a debe tener al menos 8 caracteres"),n())}function ne(i,l){i&1&&(r(0,"div"),s(1,"La contrase\xF1a debe contener al menos una letra y un n\xFAmero"),n())}function re(i,l){if(i&1&&(r(0,"div",21),p(1,te,2,0,"div",22)(2,ie,2,0,"div",22)(3,ne,2,0,"div",22),n()),i&2){let e=g();o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.required),o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.minlength),o(),a("ngIf",e.password==null||e.password.errors==null?null:e.password.errors.pattern)}}function oe(i,l){i&1&&(r(0,"div"),s(1,"Codigo de autorizacion debe tener 6 caracteres"),n())}function le(i,l){i&1&&(r(0,"div"),s(1,"Codigo de autorizacion es requerido"),n())}function ae(i,l){if(i&1&&(r(0,"div",21),p(1,oe,2,0,"div",22)(2,le,2,0,"div",22),n()),i&2){let e=g(2);o(),a("ngIf",e.code==null||e.code.errors==null?null:e.code.errors.minlength),o(),a("ngIf",e.code==null||e.code.errors==null?null:e.code.errors.required)}}function se(i,l){if(i&1){let e=L();r(0,"div",23)(1,"label",24),s(2,"Codigo de autorizacion"),n(),r(3,"input",25),v("ngModelChange",function(u){S(e);let t=g();return f(t.verify.code,u)||(t.verify.code=u),b(u)}),n(),p(4,ae,3,2,"div",11),n()}if(i&2){let e=g();o(3),h("ngModel",e.verify.code),o(),a("ngIf",(e.code==null?null:e.code.invalid)&&((e.code==null?null:e.code.dirty)||(e.code==null?null:e.code.touched)))}}var ye=(()=>{let l=class l{constructor(d,u,t){this.auth=d,this.router=u,this.msg=t,this.login={email:"",password:""},this.verify={email:"",password:"",code:null},this.isAuth=!1,this.errormsg="",this.isError=!1,this.alert="",this.message="",this.showPassword=!1,this.formlogin=new G({email:new y("",[c.required,c.email,c.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),password:new y("",[c.required,c.minLength(8)]),code:new y("",[c.required,c.minLength(6)])})}ngOnInit(){this.message=this.msg.getMessage(),this.message!==""&&(this.isError=!0,this.errormsg=this.message,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4))}get email(){return this.formlogin.get("email")}get password(){return this.formlogin.get("password")}get code(){return this.formlogin.get("code")}togglePasswordVisibility(){this.showPassword=!this.showPassword}Onsubmit(){this.isAuth?(this.verify.email=this.login.email,this.verify.password=this.login.password,this.auth.verify(this.verify).subscribe(d=>{console.log(d),localStorage.setItem("token",d.access_token),this.router.navigate(["/lifeplants/home"])},d=>{console.log(d),this.isError=!0,this.errormsg=d.error,this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)})):this.auth.login(this.login).subscribe(d=>{this.isAuth=!0,console.log(d),this.isError=!0,this.errormsg=d.msg,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)},d=>{d.error==="La cuenta no ha sido activada o no existe"?(this.isError=!0,this.errormsg=d.error,this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)):d.status===401&&(this.isError=!0,this.errormsg="Correo o contrase\xF1a incorrectos",this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4))})}};l.\u0275fac=function(u){return new(u||l)(w(N),w(q),w(K))},l.\u0275cmp=E({type:l,selectors:[["app-login"]],standalone:!0,features:[T],decls:33,vars:12,consts:[["role","alert",3,"class",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-header","text-white","text-center"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"mb-3",3,"hidden"],["for","inputEmail",1,"form-label"],["type","email","id","inputEmail","formControlName","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","inputPassword",1,"form-label"],["id","inputPassword","formControlName","password","name","password","required","",1,"form-control",3,"ngModelChange","type","ngModel"],["type","checkbox","id","showPassword",3,"change","ngModelChange","ngModel"],["for","showPassword",1,"form-label"],["class","mb-3",4,"ngIf"],["type","submit",1,"btn","text-white","w-100"],[1,"card-footer","text-center"],["routerLink","/registro"],["role","alert"],[1,"text-danger"],[4,"ngIf"],[1,"mb-3"],["for","code",1,"form-label"],["type","text","id","code","formControlName","code","name","code","placeholder","Ingresa el codigo","required","",1,"form-control",3,"ngModelChange","ngModel"]],template:function(u,t){u&1&&(x(0,"app-navone"),p(1,U,2,4,"div",0),r(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"h3"),s(8,"Iniciar sesi\xF3n"),n()(),r(9,"div",6)(10,"form",7),C("ngSubmit",function(){return t.Onsubmit()}),r(11,"div",8)(12,"label",9),s(13,"Correo electr\xF3nico"),n(),r(14,"input",10),v("ngModelChange",function(m){return f(t.login.email,m)||(t.login.email=m),m}),n(),p(15,ee,4,3,"div",11),n(),r(16,"div",8)(17,"label",12),s(18,"Contrase\xF1a"),n(),r(19,"input",13),v("ngModelChange",function(m){return f(t.login.password,m)||(t.login.password=m),m}),n(),p(20,re,4,3,"div",11),n(),r(21,"div",8)(22,"input",14),C("change",function(){return t.togglePasswordVisibility()}),v("ngModelChange",function(m){return f(t.showPassword,m)||(t.showPassword=m),m}),n(),r(23,"label",15),s(24,"Mostrar contrase\xF1a"),n()(),p(25,se,5,2,"div",16),r(26,"button",17),s(27,"Iniciar sesi\xF3n"),n()()(),r(28,"div",18)(29,"p"),s(30,"\xBFAun no tienes cuenta? "),r(31,"a",19),s(32,"Registrate"),n()()()()()()()),u&2&&(o(),a("ngIf",t.isError),o(9),a("formGroup",t.formlogin),o(),a("hidden",t.isAuth),o(3),h("ngModel",t.login.email),o(),a("ngIf",(t.email==null?null:t.email.invalid)&&((t.email==null?null:t.email.dirty)||(t.email==null?null:t.email.touched))),o(),a("hidden",t.isAuth),o(3),a("type",t.showPassword?"text":"password"),h("ngModel",t.login.password),o(),a("ngIf",(t.password==null?null:t.password.invalid)&&((t.password==null?null:t.password.dirty)||(t.password==null?null:t.password.touched))),o(),a("hidden",t.isAuth),o(),h("ngModel",t.showPassword),o(3),a("ngIf",t.isAuth))},dependencies:[W,P,F,H,R,k,V,z,B,Z,O,J,j,D,A,Q],styles:[".card-header[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{background-color:#00c881}"]});let i=l;return i})();export{ye as LoginComponent};