import{a as j}from"./chunk-SQOI43AL.js";import{a as M}from"./chunk-NBQUY2AC.js";import{a as H}from"./chunk-NQVB3N2W.js";import{d as T}from"./chunk-VAZ272IR.js";import{i as k,j as w,k as P}from"./chunk-HX75HRTQ.js";import{Ga as p,Ia as u,Ma as n,Na as e,Pa as v,Qa as E,Ra as S,Sa as h,Ta as b,Xa as _,Y as g,Ya as t,Za as y,_a as I,ea as f,eb as C,fa as x,gb as F,ua as d,va as m}from"./chunk-6IZXC2FC.js";function O(a,r){if(a&1&&(n(0,"tr")(1,"td"),t(2),e()()),a&2){let c=r.$implicit;d(2),y(c.plant)}}function q(a,r){if(a&1&&(v(0),p(1,O,3,1,"tr",15),E()),a&2){let c=b();d(),u("ngForOf",c.plants.data)}}function A(a,r){a&1&&(n(0,"tr")(1,"td",16),t(2,"No hay plantas por mostrar."),e()())}var $=(()=>{let r=class r{constructor(i,o,l,s){this.auth=i,this.router=o,this.plantsService=l,this.socket=s}ngOnInit(){this.auth.me().subscribe(i=>{console.log(i),this.username=i.name,localStorage.setItem("userEmail",i.email)},i=>{console.log(i)}),this.plantsService.getPlants().subscribe(i=>{this.plants=i,console.log(i)},i=>{console.log(i)})}link(){this.router.navigate(["/plants"])}};r.\u0275fac=function(o){return new(o||r)(m(j),m(T),m(H),m(M))},r.\u0275cmp=g({type:r,selectors:[["app-home"]],standalone:!0,features:[C],decls:59,vars:3,consts:[["noPlants",""],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row","mt-5"],[1,"col-md-2"],[1,"card-title","text-primary","text-center"],[1,"table"],[4,"ngIf","ngIfElse"],[1,"card-footer","align-items-center"],["type","button",1,"btn","add",3,"click"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"text-center"]],template:function(o,l){if(o&1){let s=S();n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h1",6),t(6),e()()()()(),n(7,"div",7)(8,"div",8)(9,"div",4)(10,"div",5)(11,"h5",9),t(12,"Plantas"),e(),n(13,"table",10)(14,"tbody"),p(15,q,2,1,"ng-container",11)(16,A,3,0,"ng-template",null,0,F),e()()(),n(18,"div",12)(19,"button",13),h("click",function(){return f(s),x(l.link())}),t(20,"Agregar Planta"),e()()()(),n(21,"div",14)(22,"div",4)(23,"div",5)(24,"h5",9),t(25,"Funciones de los Sensores"),e(),n(26,"ul")(27,"li")(28,"strong"),t(29,"Agua:"),e(),t(30," Este sensor mide la cantidad de agua disponible para la planta."),e(),n(31,"li")(32,"strong"),t(33,"Temperatura:"),e(),t(34," Este sensor mide la temperatura del ambiente en el que se encuentra la planta."),e(),n(35,"li")(36,"strong"),t(37,"Humedad:"),e(),t(38," Este sensor mide la humedad del ambiente en el que se encuentra la planta."),e(),n(39,"li")(40,"strong"),t(41,"Lluvia:"),e(),t(42," Este sensor detecta si est\xE1 lloviendo o no."),e(),n(43,"li")(44,"strong"),t(45,"Suelo:"),e(),t(46," Este sensor mide la calidad del suelo en el que se encuentra la planta."),e(),n(47,"li")(48,"strong"),t(49,"Luz:"),e(),t(50," Este sensor mide la cantidad de luz que recibe la planta."),e(),n(51,"li")(52,"strong"),t(53,"Movimiento:"),e(),t(54," Este sensor detecta si hay alg\xFAn movimiento alrededor de la planta."),e(),n(55,"li")(56,"strong"),t(57,"Vibraci\xF3n:"),e(),t(58," Este sensor detecta si hay alguna vibraci\xF3n en el suelo donde se encuentra la planta."),e()()()()()()()}if(o&2){let s=_(17);d(6),I("Bienvenido, ",l.username,""),d(9),u("ngIf",l.plants.data.length)("ngIfElse",s)}},dependencies:[P,k,w],styles:[".add[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;font-size:20px}"]});let a=r;return a})();export{$ as HomeComponent};
