import{a as Z}from"./chunk-NQVB3N2W.js";import{d as R}from"./chunk-VAZ272IR.js";import{a as tt}from"./chunk-NFSDIVT5.js";import{b as W,c as b,d as $,e as q,f as B,g as U,i as H,j as J,k as K,p as Q,q as X,r as Y}from"./chunk-QRH52RPE.js";import{h as z,i as G,j as D,k as L}from"./chunk-HX75HRTQ.js";import{Ga as _,Ia as c,Ka as S,Ma as n,Na as i,Oa as E,Pa as I,Qa as M,Ra as P,Sa as f,Ta as d,Xa as T,Y as w,Ya as l,Za as V,_a as C,ab as F,bb as k,cb as N,ea as g,eb as O,fa as u,fb as j,gb as A,ra as y,ua as s,va as v}from"./chunk-6IZXC2FC.js";var et=(e,r)=>({"border-primary":e,"border-danger":r});function nt(e,r){if(e&1&&(n(0,"div",20),l(1),i()),e&2){let a=d();S(a.alert),s(),C(" ",a.errormsg,`
`)}}function it(e,r){if(e&1){let a=P();I(0),n(1,"div",25),E(2,"img",26),n(3,"div",6)(4,"h5",27),l(5),i(),n(6,"p",28),l(7),i(),n(8,"button",29),f("click",function(){g(a);let m=d().$implicit,o=d(2);return u(o.openPlant(m.id))}),l(9," Ver "),i()()(),M()}if(e&2){let a=d().$implicit,t=d(2);s(),c("ngClass",j(4,et,a.status==1,a.status!=1)),s(),c("src",t.getImg(),y),s(3),V(a.plant),s(2),C("Estado: ",a.status==1?"Activo":"Inactivo","")}}function rt(e,r){if(e&1&&(n(0,"div",23),_(1,it,10,7,"ng-container",24),i()),e&2){let a=r.$implicit,t=d(2);s(),c("ngIf",t.filteredPlants=="all"||t.filteredPlants=="active"&&a.status==1||t.filteredPlants=="inactive"&&a.status!=1)}}function at(e,r){if(e&1&&(n(0,"div",21),_(1,rt,2,1,"div",22),i()),e&2){let a=d();s(),c("ngForOf",a.plants.data)}}function ot(e,r){e&1&&(n(0,"div",3)(1,"div",4)(2,"h3"),l(3,"No hay plantas para mostrar."),i()()())}var _t=(()=>{let r=class r{constructor(t,m,o){this.plantsService=t,this.msg=m,this.router=o,this.id=0,this.filteredPlants="all",this.newPlant={plant:""},this.isError=!1,this.alert="",this.errormsg="",this.srcImg="",this.plantForm=new B({plant:new U("",[b.required,b.minLength(3),b.maxLength(30)])})}ngOnInit(){this.plantsService.getPlants().subscribe(t=>{console.log(t),this.plants=t}),this.router.events.subscribe(t=>{t.constructor.name==="NavigationEnd"&&(this.srcImg=this.getImg())}),this.id=0,this.errormsg=this.msg.getMessage(),this.errormsg=="Planta actualizada correctamente"&&(this.isError=!0,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)),this.errormsg=="Planta eliminada correctamente"&&(this.isError=!0,this.alert="alert alert-danger",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4)),this.errormsg=="Planta registrada correctamente"&&(this.isError=!0,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.errormsg="",this.alert=""},1e4))}get plant(){return this.plantForm.get("plant")}addPlant(){this.plantsService.registrarPlants(this.newPlant).subscribe(t=>{this.msg.setMessage("Planta registrada correctamente"),this.ngOnInit()})}getImg(){return`../../../assets/imagenes/plantsIcons/${Math.floor(Math.random()*5)+1}.jpg`}openPlant(t){this.router.navigate(["/plant",t])}filterPlants(t){this.filteredPlants=t}};r.\u0275fac=function(m){return new(m||r)(v(Z),v(Y),v(R))},r.\u0275cmp=w({type:r,selectors:[["app-plants"]],standalone:!0,features:[O],decls:30,vars:7,consts:[["noPlants",""],["role","alert",3,"class",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row","mt-3","justify-content-center"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"],["data-bs-toggle","modal","data-bs-target","#addPlant",1,"btn","btn-secondary"],["class","row",4,"ngIf","ngIfElse"],[3,"modalId","modalTitle"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","plant",1,"form-label"],["type","text","id","plant","formControlName","plant",1,"form-control",3,"ngModelChange","ngModel"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary"],["role","alert"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[4,"ngIf"],[1,"card","md-3",2,"width","18rem",3,"ngClass"],["alt","...",1,"card-img-top","IconPlant",3,"src"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","add",3,"click"]],template:function(m,o){if(m&1){let p=P();_(0,nt,2,4,"div",1),n(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h1",7),l(7,"Plantas"),i()()()()(),n(8,"div",8)(9,"div",4)(10,"button",9),f("click",function(){return g(p),u(o.filterPlants("all"))}),l(11,"Todos"),i(),n(12,"button",10),f("click",function(){return g(p),u(o.filterPlants("active"))}),l(13,"Activos"),i(),n(14,"button",11),f("click",function(){return g(p),u(o.filterPlants("inactive"))}),l(15,"Inactivos"),i(),n(16,"button",12),l(17,"Agregar Planta"),i()()(),n(18,"div",2),_(19,at,2,1,"div",13)(20,ot,4,0,"ng-template",null,0,A),i(),n(22,"app-modal",14)(23,"form",15),f("ngSubmit",function(){return g(p),u(o.addPlant())}),n(24,"div",16)(25,"label",17),l(26,"Nombre de la planta"),i(),n(27,"input",18),N("ngModelChange",function(x){return g(p),k(o.newPlant.plant,x)||(o.newPlant.plant=x),u(x)}),i()(),n(28,"button",19),l(29,"Agregar"),i()()()()}if(m&2){let p=T(21);c("ngIf",o.isError),s(19),c("ngIf",o.plants.data.length)("ngIfElse",p),s(3),c("modalId","addPlant")("modalTitle","Agrega una planta"),s(),c("formGroup",o.plantForm),s(4),F("ngModel",o.newPlant.plant)}},dependencies:[L,z,G,D,tt,Q,H,W,$,q,X,J,K],styles:[".add[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;font-size:20px}.border[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;border:none;cursor:pointer;font-size:20px}.IconPlant[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;object-fit:cover}.card-img-top[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;cursor:pointer;font-size:20px}"]});let e=r;return e})();export{_t as PlantsComponent};
