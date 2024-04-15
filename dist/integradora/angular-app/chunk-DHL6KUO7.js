import{a as Z}from"./chunk-NFSDIVT5.js";import{b as U,c as d,d as q,e as D,f as k,g as C,i as $,j as z,k as H,l as R,m as J,n as K,p as Q,q as X,r as Y}from"./chunk-QRH52RPE.js";import{i as L,j,k as B,o as P,s as b}from"./chunk-HX75HRTQ.js";import{Ga as y,Ia as c,Ka as O,Ma as e,Na as n,Oa as f,P as F,Pa as M,Qa as I,Ra as V,Sa as S,Ta as g,U as N,Y as W,Ya as r,Za as T,_a as A,ab as _,bb as h,cb as v,ea as x,eb as G,fa as E,ua as l,va as w}from"./chunk-6IZXC2FC.js";var ee=(()=>{let o=class o{constructor(t){this.http=t}getSensors(){return this.http.get(`${b.UrlSensors}/index`)}StoreSensor(t){return this.http.post(`${b.UrlSensors}/store`,t)}putSensor(t,a){return this.http.put(`${b.UrlSensors}/update/${t}`,a)}deleteSensor(t){return this.http.delete(`${b.UrlSensors}/destroy/${t}`)}getSensor(t){return this.http.get(`${b.UrlSensors}/show/${t}`)}};o.\u0275fac=function(a){return new(a||o)(N(P))},o.\u0275prov=F({token:o,factory:o.\u0275fac,providedIn:"root"});let s=o;return s})();function ie(s,o){if(s&1&&(e(0,"div",35),r(1),n()),s&2){let p=g();O(p.alert),l(),A(" ",p.errormsg,`
`)}}function re(s,o){s&1&&(M(0),e(1,"td",36),r(2,"No se encontraron sensores"),n(),I())}function oe(s,o){if(s&1){let p=V();M(0),e(1,"td"),r(2),n(),e(3,"td"),r(4),n(),e(5,"td")(6,"button",37),S("click",function(){x(p);let a=g().$implicit,i=g();return E(i.editModal(a.id,a.name,a.status))}),f(7,"i",38),n(),e(8,"button",39),S("click",function(){x(p);let a=g().$implicit,i=g();return E(i.openModal(a.id))}),f(9,"i",40),n()(),I()}if(s&2){let p=g().$implicit;l(2),T(p.name),l(2),T(p.status===0?"Inactivo":"Activo")}}function se(s,o){if(s&1&&(e(0,"tr"),y(1,oe,10,2,"ng-container",19),n()),s&2){let p=o.$implicit,t=g();l(),c("ngIf",t.filteredSensors=="all"||t.filteredSensors=="active"&&p.status==1||t.filteredSensors=="inactive"&&p.status!=1)}}var ge=(()=>{let o=class o{constructor(t,a){this.sensorsService=t,this.messageService=a,this.id=0,this.newSensor={name:"",status:0},this.updateSensors={name:"",status:0},this.isError=!1,this.alert="",this.errormsg="",this.filteredSensors="all",this.formSensor=new k({name:new C("",[d.required,d.minLength(3),d.maxLength(20)]),status:new C(0,[d.required,d.min(0),d.max(1)])}),this.updateSensorForm=new k({nameput:new C("",[d.required,d.minLength(3),d.maxLength(20)]),statusput:new C(0,[d.required,d.min(0),d.max(1)])}),this.sensors={data:[]}}ngOnInit(){this.sensorsService.getSensors().subscribe(t=>{console.log(t),this.sensors=t}),this.errormsg=this.messageService.getMessage(),this.errormsg=="Sensor eliminado correctamente"&&(this.isError=!0,this.alert="alert alert-success",setTimeout(()=>{this.isError=!1,this.alert="",this.errormsg=""},1e4))}get name(){return this.formSensor.get("name")}get status(){return this.formSensor.get("status")}get nameput(){return this.updateSensorForm.get("nameput")}get statusput(){return this.updateSensorForm.get("statusput")}editModal(t,a,i){this.id=t,this.updateSensorForm.controls.nameput.setValue(a),this.updateSensorForm.controls.statusput.setValue(i)}deleteSensor(){this.sensorsService.deleteSensor(this.id).subscribe(t=>{console.log(t),this.ngOnInit(),this.messageService.setMessage("Sensor eliminado correctamente")})}createSensor(){this.sensorsService.StoreSensor(this.newSensor).subscribe(t=>{console.log(t),this.ngOnInit()})}updateSensor(){this.sensorsService.putSensor(this.id,this.updateSensors).subscribe(t=>{console.log(t),this.ngOnInit()})}openModal(t){this.id=t}filterSensors(t){this.filteredSensors=t}};o.\u0275fac=function(a){return new(a||o)(w(ee),w(Y))},o.\u0275cmp=W({type:o,selectors:[["app-sensors"]],standalone:!0,features:[G],decls:79,vars:15,consts:[["role","alert",3,"class",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row"],[1,"col-md-12"],[1,"card","border","shadow"],["type","button","data-bs-toggle","modal","data-bs-target","#postSensor",1,"btn","add"],[1,"bi","bi-cpu-fill","me-2"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"modalId","modalTitle"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngModelChange","ngModel"],["for","status",1,"form-label"],["formControlName","status",1,"form-select",3,"ngModelChange","ngModel"],["value","0"],["value","1"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary"],["type","text","formControlName","nameput",1,"form-control",3,"ngModelChange","ngModel"],["formControlName","statusput",1,"form-select",3,"ngModelChange","ngModel"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["role","alert"],["colspan","4",1,"text-center"],["type","button","data-bs-toggle","modal","data-bs-target","#putSensor",1,"btn","btn-warning",3,"click"],[1,"bi","bi-pencil-fill"],["type","button","data-bs-toggle","modal","data-bs-target","#deleteSensor",1,"btn","btn-danger",3,"click"],[1,"bi","bi-trash-fill"]],template:function(a,i){a&1&&(y(0,ie,2,4,"div",0),e(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),r(7,"Sensores"),n()()()()(),e(8,"div",1)(9,"div",7)(10,"div",8)(11,"div",9),f(12,"div",5),e(13,"div",7)(14,"div",8)(15,"button",10),f(16,"i",11),r(17," Agregar Sensor "),n()()(),e(18,"div",12)(19,"button",13),S("click",function(){return i.filterSensors("all")}),r(20,"Todos"),n(),e(21,"button",14),S("click",function(){return i.filterSensors("active")}),r(22,"Activos"),n(),e(23,"button",15),S("click",function(){return i.filterSensors("inactive")}),r(24,"Inactivos"),n()(),e(25,"div",7),f(26,"div",8),e(27,"div",16)(28,"table",17)(29,"thead")(30,"tr")(31,"th",18),r(32,"Nombre"),n(),e(33,"th",18),r(34,"Estado"),n(),e(35,"th",18),r(36,"Acciones"),n()()(),e(37,"tbody"),y(38,re,3,0,"ng-container",19)(39,se,2,1,"tr",20),n()()()()()()(),e(40,"app-modal",21)(41,"form",22),S("ngSubmit",function(){return i.createSensor()}),e(42,"div",23)(43,"label",24),r(44,"Nombre"),n(),e(45,"input",25),v("ngModelChange",function(m){return h(i.newSensor.name,m)||(i.newSensor.name=m),m}),n()(),e(46,"div",23)(47,"label",26),r(48,"Estado"),n(),e(49,"select",27),v("ngModelChange",function(m){return h(i.newSensor.status,m)||(i.newSensor.status=m),m}),e(50,"option",28),r(51,"Inactivo"),n(),e(52,"option",29),r(53,"Activo"),n()()(),e(54,"button",30),r(55,"Guardar"),n()()(),e(56,"app-modal",21)(57,"form",22),S("ngSubmit",function(){return i.updateSensor()}),e(58,"div",23)(59,"label",24),r(60,"Nombre"),n(),e(61,"input",31),v("ngModelChange",function(m){return h(i.updateSensors.name,m)||(i.updateSensors.name=m),m}),n()(),e(62,"div",23)(63,"label",26),r(64,"Estado"),n(),e(65,"select",32),v("ngModelChange",function(m){return h(i.updateSensors.status,m)||(i.updateSensors.status=m),m}),e(66,"option",28),r(67,"Inactivo"),n(),e(68,"option",29),r(69,"Activo"),n()()(),e(70,"button",30),r(71,"Guardar"),n()()(),e(72,"app-modal",21)(73,"p"),r(74,"\xBFEstas seguro de eliminar el sensor?"),n(),e(75,"button",33),S("click",function(){return i.deleteSensor()}),r(76,"Eliminar "),n(),e(77,"button",34),r(78,"Cancelar "),n()()()()),a&2&&(c("ngIf",i.isError),l(38),c("ngIf",i.sensors.data.length===0),l(),c("ngForOf",i.sensors.data),l(),c("modalId","postSensor")("modalTitle","Agregar Sensor"),l(),c("formGroup",i.formSensor),l(4),_("ngModel",i.newSensor.name),l(4),_("ngModel",i.newSensor.status),l(7),c("modalId","putSensor")("modalTitle","Editar Sensor"),l(),c("formGroup",i.updateSensorForm),l(4),_("ngModel",i.updateSensors.name),l(4),_("ngModel",i.updateSensors.status),l(7),c("modalId","deleteSensor")("modalTitle","Eliminar Sensor"))},dependencies:[B,L,j,Q,$,J,K,U,R,q,D,X,z,H,Z],styles:[".add[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;font-size:20px}.border[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;border:none;cursor:pointer;font-size:20px}"]});let s=o;return s})();export{ge as SensorsComponent};
