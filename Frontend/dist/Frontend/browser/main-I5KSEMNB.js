import{b as D,d as T,e as R,f as k}from"./chunk-VYWVPH6G.js";import{Fa as n,Ha as h,Hc as E,Ic as P,Vb as _,X as a,Xa as i,Ya as l,Za as g,cc as A,ea as f,gb as v,hb as s,ib as w,kb as x,la as u,lb as M,qb as y,ra as b,rb as C,sb as c}from"./chunk-HO5WGDRY.js";function d(t){return`ADForMERecruitment | ${t}`}var L=[{path:"",redirectTo:"products",pathMatch:"full"},{path:"products",loadComponent:()=>import("./chunk-66WOMAYD.js").then(t=>t.ProductListComponent),title:d("Produkty")},{path:"products/create",loadComponent:()=>import("./chunk-MD4U6MND.js").then(t=>t.ProductFormComponent),title:d("Dodaj produkt")},{path:"**",loadComponent:()=>import("./chunk-AQXCIKEQ.js").then(t=>t.PageNotFoundComponent),title:d("404")}];var j={providers:[u(),k(L)]};var S=["*",[["mat-toolbar-row"]]],z=["*","mat-toolbar-row"],I=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=h({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),N=(()=>{class t{_elementRef=a(b);_platform=a(A);_document=a(f);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=n({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,r,B){if(o&1&&w(B,I,5),o&2){let p;x(p=M())&&(r._toolbarRows=p)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(C(r.color?"mat-"+r.color:""),y("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:z,decls:2,vars:0,template:function(o,r){o&1&&(v(S),s(0),s(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var m=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-root"]],decls:8,vars:0,consts:[["color","primary",1,"topbar"],["mat-button","","routerLink","/products","routerLinkActive","active","aria-current","page"],["mat-button","","routerLink","/products/create","routerLinkActive","active","aria-current","page"],[1,"container"]],template:function(e,o){e&1&&(i(0,"nav")(1,"mat-toolbar",0)(2,"a",1),c(3,"Produkty"),l(),i(4,"a",2),c(5,"Dodaj produkt"),l()()(),i(6,"div",3),g(7,"router-outlet"),l())},dependencies:[D,T,R,N,P,E],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a.active[_ngcontent-%COMP%]{font-weight:600;text-decoration:underline}mat-toolbar[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:#fff}"]})};_(m,j).catch(t=>console.error(t));
