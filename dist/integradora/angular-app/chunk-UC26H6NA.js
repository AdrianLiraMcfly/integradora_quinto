import{a as E}from"./chunk-3NGIFNNN.js";import{c as g,d as h,e as x}from"./chunk-X6K6JCTU.js";import{k as v}from"./chunk-XJVDUTBG.js";import{Ga as f,La as p,Ma as e,Na as t,Oa as n,Sa as b,Y as m,Ya as a,eb as u,ua as c,va as d}from"./chunk-6IZXC2FC.js";function k(r,o){r&1&&(e(0,"tr")(1,"td")(2,"a",30),n(3,"i",31),a(4,"Usuarios"),t()()(),e(5,"tr")(6,"td")(7,"a",32),n(8,"i",33),a(9,"Sensores"),t()()())}var M=(()=>{let o=class o{constructor(i,l){this.auth=i,this.router=l,this.rol_id=0,this.router.events.subscribe(s=>{s.constructor.name=="NavigationEnd"&&this.getRol()})}ngOnInit(){this.getRol()}getRol(){this.auth.checkRol().subscribe(i=>{console.log(i),this.rol_id=i.body},i=>{console.log=i})}logout(){this.auth.logout().subscribe(i=>{console.log(i),localStorage.removeItem("token")},i=>{console.log(i)})}};o.\u0275fac=function(l){return new(l||o)(d(E),d(h))},o.\u0275cmp=m({type:o,selectors:[["app-navtwo"]],standalone:!0,features:[u],decls:46,vars:1,consts:[[1,"navbar","shadow"],[1,"container-fluid"],["routerLink","/lifeplants/home","data-bs-toggle","offcanvas","data-bs-target","#offcanvasExample","aria-controls","offcanvasExample",1,"navbar-brand"],["src","../assets/imagenes/icon.png","alt","",1,"icon"],["routerLink","/lifeplants/home",1,"navbar-brand"],[1,"navbar","me-auto","mb-2","mb-lg-0"],[1,"navbar-item"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasExample",1,"btn","btn-principal"],[1,"bi","bi-list"],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-principal","dropdown-toggle"],[1,"bi","bi-person-circle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu","dropdown-menu-end"],["routerLink","/lifeplants/perfil",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",3,"click"],["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasExampleLabel",1,"offcanvas-title"],["src","../../assets/imagenes/icon.png","alt","",1,"icon"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"offcanvas-body","d-flex","bg-dark"],[1,"table","table-dark","fs-3"],["routerLink","/lifeplants/home","data-bs-dismiss","offcanvas"],[1,"bi","bi-house-door","me-2"],["src","../assets/imagenes/iconbw.png","alt","",1,"iconplanta"],["routerLink","/lifeplants/plants","data-bs-dismiss","offcanvas"],[1,"bi","bi-leaf","me-2"],["routerLink","/lifeplants/about","data-bs-dismiss","offcanvas"],[1,"bi","bi-info-circle","me-2"],["routerLink","/lifeplants/users","data-bs-dismiss","offcanvas"],[1,"bi","bi-person","me-2"],["routerLink","/lifeplants/sensors","data-bs-dismiss","offcanvas"],[1,"bi","bi-cpu-fill","me-2"]],template:function(l,s){l&1&&(e(0,"nav",0)(1,"div",1)(2,"a",2),n(3,"img",3),t(),e(4,"a",4),a(5,"Life plants"),t(),e(6,"ul",5)(7,"li",6)(8,"button",7),n(9,"i",8),t()()(),e(10,"div",9)(11,"button",10),n(12,"i",11),t(),e(13,"div",12)(14,"a",13),a(15,"Perfil"),t(),n(16,"div",14),e(17,"a",15),b("click",function(){return s.logout()}),a(18,"Cerrar sesion"),t()()()()(),e(19,"div",16)(20,"div",17)(21,"h5",18),n(22,"img",19),a(23,"Men\xFA"),t(),n(24,"button",20),t(),e(25,"div",21)(26,"table",22)(27,"tbody")(28,"tr")(29,"td")(30,"a",23),n(31,"i",24),a(32,"Inicio"),t()()(),e(33,"tr")(34,"td"),n(35,"img",25),e(36,"a",26),n(37,"i",27),a(38,"Plantas"),t()()(),f(39,k,10,0),e(40,"tr")(41,"td")(42,"a",28),n(43,"i",29),a(44,"Acerca de"),t()()()()()()(),n(45,"router-outlet")),l&2&&(c(39),p(39,s.rol_id==2?39:-1))},dependencies:[g,x,v],styles:[".btn-principal[_ngcontent-%COMP%]{background-color:#743c07;color:#fff;border:none;padding:10px 20px;cursor:pointer;border-radius:5px}.offcanvas-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.iconplanta[_ngcontent-%COMP%]{width:29px;height:35px;filter:invert(1)}"]});let r=o;return r})();export{M as NavtwoComponent};
