import{o as n,s as t}from"./chunk-CLN57MIK.js";import{P as s,U as i}from"./chunk-6IZXC2FC.js";var c=(()=>{let e=class e{constructor(r){this.http=r}isauth(){return this.http.get(`${t.UrlAuth}/me`,{observe:"response"})}register(r){return this.http.post(`${t.UrlAuth}/register`,r)}login(r){return this.http.post(`${t.UrlAuth}/login`,r)}verify(r){return this.http.post(`${t.UrlAuth}/login`,r)}me(){return this.http.get(`${t.UrlAuth}/me`)}checkRol(){return this.http.get(`${t.UrlAuth}/getrol`,{observe:"response"})}checkActive(){return this.http.get(`${t.UrlAuth}/getstatus`,{observe:"response"})}logout(){return this.http.post(`${t.UrlAuth}/logout`,{observe:"response"})}};e.\u0275fac=function(h){return new(h||e)(i(n))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{c as a};