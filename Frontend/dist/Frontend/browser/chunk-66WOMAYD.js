import{A as Ui,B as _e,C as ve,D as qi,E as Ki,a as bi,b as ce,c as de,d as he,e as wi,f as xi,g as ki,h as Ci,i as Si,k as Di,l as Ri,p as Mi,r as Oi,t as fe,u as ji,v as Wi,x as Yi,y as Gi,z as Xi}from"./chunk-IDNI34HK.js";import{a as Zi,b as $i}from"./chunk-6FI2QLJH.js";import{$ as ut,$a as Lt,$b as B,A as Ae,Ac as ot,Ba as Pt,Bc as Ni,Ca as si,Cc as ue,D as oi,Dc as Vi,Eb as ui,Ec as Hi,Fa as C,Fb as fi,Fc as ge,Ga as S,Gb as _i,Gc as ye,Ha as E,Hc as Qi,Ia as et,Ic as be,Ja as jt,Jb as $,K as ie,Kb as v,L as ne,La as li,Lb as ct,M as j,N as ai,Nb as gi,Oa as ze,Pa as ci,Qa as I,Qb as vi,Ra as T,S as Y,Sa as P,T as x,Ta as re,Tb as yi,Ua as At,Ub as le,V as k,Va as Ft,Wa as D,X as s,Xa as l,Ya as h,Z as oe,Za as F,_a as Rt,_b as kt,a as pt,aa as ft,ac as dt,b as Je,ba as st,bb as wt,bc as Bt,ca as Fe,cb as se,cc as nt,da as N,db as g,dc as Nt,e as rt,ea as U,eb as di,ec as Ei,fb as R,fc as me,g as ti,gb as Q,gc as ht,h as w,ha as z,hb as A,hc as pe,ia as H,ib as xt,j as ei,jb as Z,jc as Be,kb as f,kc as Ii,lb as _,lc as Ti,m as ii,ma as G,na as Le,nc as Pi,oa as _t,oc as Ai,pa as tt,pb as Wt,pc as Fi,q as Pe,qb as M,qc as mt,ra as O,rb as zt,rc as Li,sa as ri,sb as u,sc as Ne,tb as q,tc as zi,ub as it,uc as Mt,v as ni,va as d,vb as hi,vc as Bi,wa as bt,wb as lt,wc as Ve,xa as ae,xb as mi,y as yt,ya as Dt,yb as pi,yc as L,z as St,za as gt,zc as J}from"./chunk-HO5WGDRY.js";var qn=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Kn=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Zn(o,n){o&1&&(l(0,"span",3),A(1,1),h())}function $n(o,n){o&1&&(l(0,"span",6),A(1,2),h())}var Jn=new k("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ji=new k("MatChipAvatar"),tn=new k("MatChipTrailingIcon"),en=new k("MatChipEdit"),nn=new k("MatChipRemove"),an=new k("MatChip"),rn=(()=>{class o{_elementRef=s(O);_parentChip=s(an);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(ht).load(Mt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,i){e&2&&(I("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),M("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",v],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:ct(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return o})(),to=(()=>{class o extends rn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275dir=E({type:o,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,i){e&1&&g("click",function(r){return i._handleClick(r)})("keydown",function(r){return i._handleKeydown(r)}),e&2&&(I("tabindex",i._getTabindex()),M("mdc-evolution-chip__action--presentational",!1))},features:[et]})}return o})();var sn=(()=>{class o{_changeDetectorRef=s($);_elementRef=s(O);_tagName=s(fi);_ngZone=s(H);_focusMonitor=s(me);_globalRippleOptions=s(ue,{optional:!0});_document=s(U);_onFocus=new w;_onBlur=new w;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ot();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(mt).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new z;destroyed=new z;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(Hi);_injector=s(N);constructor(){let t=s(ht);t.load(Mt),t.load(pe),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=yt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let i=e._elementRef.nativeElement;return i===t||i.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,i,a){if(e&1&&xt(a,Ji,5)(a,en,5)(a,tn,5)(a,nn,5)(a,Ji,5)(a,tn,5)(a,en,5)(a,nn,5),e&2){let r;f(r=_())&&(i.leadingIcon=r.first),f(r=_())&&(i.editIcon=r.first),f(r=_())&&(i.trailingIcon=r.first),f(r=_())&&(i.removeIcon=r.first),f(r=_())&&(i._allLeadingIcons=r),f(r=_())&&(i._allTrailingIcons=r),f(r=_())&&(i._allEditIcons=r),f(r=_())&&(i._allRemoveIcons=r)}},viewQuery:function(e,i){if(e&1&&Z(to,5),e&2){let a;f(a=_())&&(i.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,i){e&1&&g("keydown",function(r){return i._handleKeydown(r)}),e&2&&(se("id",i.id),I("role",i.role)("aria-label",i.ariaLabel),zt("mat-"+(i.color||"primary")),M("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",v],highlighted:[2,"highlighted","highlighted",v],disableRipple:[2,"disableRipple","disableRipple",v],disabled:[2,"disabled","disabled",v]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[lt([{provide:an,useExisting:o}])],ngContentSelectors:Kn,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,i){e&1&&(Q(qn),F(0,"span",0),l(1,"span",1)(2,"span",2),T(3,Zn,2,0,"span",3),l(4,"span",4),A(5),F(6,"span",5),h()()(),T(7,$n,2,0,"span",6)),e&2&&(d(3),P(i.leadingIcon?3:-1),d(4),P(i._hasTrailingIcon()?7:-1))},dependencies:[rn],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return o})();var ln=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({providers:[fe,{provide:Jn,useValue:{separatorKeyCodes:[13]}}],imports:[ge,B]})}return o})();var we=class o{product=_i.required();static \u0275fac=function(t){return new(t||o)};static \u0275cmp=C({type:o,selectors:[["app-product-item"]],inputs:{product:[1,"product"]},decls:9,vars:6,consts:[[1,"product-item"],[1,"meta"],["color","primary","selected",""],[1,"price"]],template:function(t,e){t&1&&(l(0,"mat-card",0)(1,"mat-card-title"),u(2),h(),l(3,"mat-card-subtitle",1)(4,"mat-chip",2),u(5),h(),l(6,"span",3),u(7),mi(8,"number"),h()()()),t&2&&(d(2),q(e.product().name),d(3),it("Kod: ",e.product().code),d(2),it("",pi(8,3,e.product().price,"1.2-2")," PLN"))},dependencies:[le,wi,ce,he,de,ln,sn,yi],styles:[".product-item[_ngcontent-%COMP%]{margin:8px 0}.meta[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;margin-top:8px}.price[_ngcontent-%COMP%]{color:#fff;font-size:.95rem}"]})};var oo=20,Vt=(()=>{class o{_ngZone=s(H);_platform=s(nt);_renderer=s(Dt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new w;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=oo){return this._platform.isBrowser?new ti(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(Ae(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ii()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(St(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,a)=>{this._scrollableContainsElement(a,t)&&e.push(a)}),e}_scrollableContainsElement(t,e){let i=Ei(e),a=t.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ao=20,vt=(()=>{class o{_platform=s(nt);_listeners;_viewportSize=null;_change=new w;_document=s(U);constructor(){let t=s(H),e=s(Dt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[e.listen("window","resize",i),e.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,a=i.getBoundingClientRect(),r=-a.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,c=-a.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0;return{top:r,left:c}}change(t=ao){return t>0?this._change.pipe(Ae(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Et=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({})}return o})(),Gt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[B,Et,B,Et]})}return o})();var dn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[Gt]})}return o})();var Xt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new w;constructor(n=!1,t,e=!0,i){this._multiple=n,this._emitChanges=e,this.compareWith=i,t&&t.length&&(n?t.forEach(a=>this._markSelected(a)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...n){this._verifyValueAssignment(n),n.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...n){this._verifyValueAssignment(n);let t=this.selected,e=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),t.filter(a=>!e.has(this._getConcreteValue(a,e))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(n,e))return e;return n}else return n}};var hn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[dn,B]})}return o})();var Ut=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Qt=class extends Ut{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,t,e,i,a){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=i,this.bindings=a||null}},qt=class extends Ut{templateRef;viewContainerRef;context;injector;constructor(n,t,e,i){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},He=class extends Ut{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},je=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Qt)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof qt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof He)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},xe=class extends je{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,i=e.get(si,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,i=n.injector||this._defaultInjector||N.NULL,a=i.get(oe,e.injector);t=gi(n.component,{elementInjector:i,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(i=>this.outletElement.appendChild(i)),e.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(e);i!==-1&&t.remove(i)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var mn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({})}return o})();var pn=Bi();function bn(o){return new ke(o.get(vt),o.get(U))}var ke=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=L(-this._previousScrollPosition.left),n.style.top=L(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,i=t.style,a=e.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),pn&&(e.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pn&&(e.scrollBehavior=a,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function wn(o,n){return new Ce(o.get(Vt),o.get(H),o.get(vt),n)}var Ce=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,i){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(St(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Kt=class{enable(){}disable(){}attach(){}};function We(o,n){return n.some(t=>{let e=o.bottom<t.top,i=o.top>t.bottom,a=o.right<t.left,r=o.left>t.right;return e||i||a||r})}function un(o,n){return n.some(t=>{let e=o.top<t.top,i=o.bottom>t.bottom,a=o.left<t.left,r=o.right>t.right;return e||i||a||r})}function Tt(o,n){return new Se(o.get(Vt),o.get(vt),o.get(H),n)}var Se=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,i){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();We(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xn=(()=>{class o{_injector=s(N);constructor(){}noop=()=>new Kt;close=t=>wn(this._injector,t);block=()=>bn(this._injector);reposition=t=>Tt(this._injector,t);static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Zt=class{positionStrategy;scrollStrategy=new Kt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var De=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var kn=(()=>{class o{_attachedOverlays=[];_document=s(U);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Cn=(()=>{class o extends kn{_ngZone=s(H);_renderer=s(Dt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let a=e[i];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Sn=(()=>{class o extends kn{_platform=s(nt);_ngZone=s(H);_renderer=s(Dt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"pointerdown",this._pointerDownListener,i),a.listen(e,"click",this._clickListener,i),a.listen(e,"auxclick",this._clickListener,i),a.listen(e,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Bt(t)};_clickListener=t=>{let e=Bt(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let c=a[r],m=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,t,m))){if(fn(c.overlayElement,e)||fn(c.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>m.next(t)):m.next(t)}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function fn(o,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Dn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),Rn=(()=>{class o{_platform=s(nt);_containerElement;_document=s(U);_styleLoader=s(ht);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Ve()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let e=this._document.createElement("div");e.classList.add(t),Ve()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Dn)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Ye=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,i){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ge(o){return o&&o.nodeType===1}var Re=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=rt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(n,t,e,i,a,r,c,m,b,p=!1,y,W){this._portalOutlet=n,this._host=t,this._pane=e,this._config=i,this._ngZone=a,this._keyboardDispatcher=r,this._document=c,this._location=m,this._outsideClickDispatcher=b,this._animationsDisabled=p,this._injector=y,this._renderer=W,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=bt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=pt(pt({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Je(pt({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=L(this._config.width),n.height=L(this._config.height),n.minWidth=L(this._config.minWidth),n.minHeight=L(this._config.minHeight),n.maxWidth=L(this._config.maxWidth),n.maxHeight=L(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ge(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ye(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let i=Be(t||[]).filter(a=>!!a);i.length&&(e?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=bt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},_n="cdk-overlay-connected-position-bounding-box",co=/([A-Za-z%]+)$/;function $t(o,n){return new Me(n,o.get(vt),o.get(U),o.get(nt),o.get(Rn))}var Me=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new w;_resizeSubscription=rt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,i,a){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(_n),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,a=[],r;for(let c of this._preferredPositions){let m=this._getOriginPoint(n,i,c),b=this._getOverlayPoint(m,t,c),p=this._getOverlayFit(b,t,e,c);if(p.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,m);return}if(this._canFitWithFlexibleDimensions(p,b,e)){a.push({position:c,origin:m,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(m,c)});continue}(!r||r.overlayFit.visibleArea<p.visibleArea)&&(r={overlayFit:p,overlayPoint:b,originPoint:m,position:c,overlayRect:t})}if(a.length){let c=null,m=-1;for(let b of a){let p=b.boundingBoxRect.width*b.boundingBoxRect.height*(b.position.weight||1);p>m&&(m=p,c=b)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&It(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(_n),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:Ge(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let i;if(e.originX=="center")i=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,c=this._isRtl()?n.left:n.right;i=e.originX=="start"?r:c}t.left<0&&(i-=t.left);let a;return e.originY=="center"?a=n.top+n.height/2:a=e.originY=="top"?n.top:n.bottom,t.top<0&&(a-=t.top),{x:i,y:a}}_getOverlayPoint(n,t,e){let i;e.overlayX=="center"?i=-t.width/2:e.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let a;return e.overlayY=="center"?a=-t.height/2:a=e.overlayY=="top"?0:-t.height,{x:n.x+i,y:n.y+a}}_getOverlayFit(n,t,e,i){let a=vn(t),{x:r,y:c}=n,m=this._getOffset(i,"x"),b=this._getOffset(i,"y");m&&(r+=m),b&&(c+=b);let p=0-r,y=r+a.width-e.width,W=0-c,K=c+a.height-e.height,X=this._subtractOverflows(a.width,p,y),at=this._subtractOverflows(a.height,W,K),$e=X*at;return{visibleArea:$e,isCompletelyWithinViewport:a.width*a.height===$e,fitsInViewportVertically:at===a.height,fitsInViewportHorizontally:X==a.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,a=e.right-t.x,r=gn(this._overlayRef.getConfig().minHeight),c=gn(this._overlayRef.getConfig().minWidth),m=n.fitsInViewportVertically||r!=null&&r<=i,b=n.fitsInViewportHorizontally||c!=null&&c<=a;return m&&b}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=vn(t),a=this._viewportRect,r=Math.max(n.x+i.width-a.width,0),c=Math.max(n.y+i.height-a.height,0),m=Math.max(a.top-e.top-n.y,0),b=Math.max(a.left-e.left-n.x,0),p=0,y=0;return i.width<=a.width?p=b||-r:p=n.x<this._getViewportMarginStart()?a.left-e.left-n.x:0,i.height<=a.height?y=m||-c:y=n.y<this._getViewportMarginTop()?a.top-e.top-n.y:0,this._previousPushAmount={x:p,y},{x:n.x+p,y:n.y+y}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!ho(this._lastScrollVisibility,e)){let i=new De(n,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let a=0;a<t.length;a++)t[a].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,i=this._isRtl(),a,r,c;if(t.overlayY==="top")r=n.y,a=e.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")c=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=e.height-c+this._getViewportMarginTop();else{let K=Math.min(e.bottom-n.y+e.top,n.y),X=this._lastBoundingBoxSize.height;a=K*2,r=n.y-K,a>X&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-X/2)}let m=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,b=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,p,y,W;if(b)W=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),p=n.x-this._getViewportMarginStart();else if(m)y=n.x,p=e.right-n.x-this._getViewportMarginEnd();else{let K=Math.min(e.right-n.x+e.left,n.x),X=this._lastBoundingBoxSize.width;p=K*2,y=n.x-K,p>X&&!this._isInitialRender&&!this._growAfterOpen&&(y=n.x-X/2)}return{top:r,left:y,bottom:c,right:W,width:p,height:a}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=L(e.width),i.height=L(e.height),i.top=L(e.top)||"auto",i.bottom=L(e.bottom)||"auto",i.left=L(e.left)||"auto",i.right=L(e.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",a&&(i.maxHeight=L(a)),r&&(i.maxWidth=L(r))}this._lastBoundingBoxSize=e,It(this._boundingBox.style,i)}_resetBoundingBoxStyles(){It(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){It(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let p=this._viewportRuler.getViewportScrollPosition();It(e,this._getExactOverlayY(t,n,p)),It(e,this._getExactOverlayX(t,n,p))}else e.position="static";let c="",m=this._getOffset(t,"x"),b=this._getOffset(t,"y");m&&(c+=`translateX(${m}px) `),b&&(c+=`translateY(${b}px)`),e.transform=c.trim(),r.maxHeight&&(i?e.maxHeight=L(r.maxHeight):a&&(e.maxHeight="")),r.maxWidth&&(i?e.maxWidth=L(r.maxWidth):a&&(e.maxWidth="")),It(this._pane.style,e)}_getExactOverlayY(n,t,e){let i={top:"",bottom:""},a=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(a.y+this._overlayRect.height)}px`}else i.top=L(a.y);return i}_getExactOverlayX(n,t,e){let i={left:"",right:""},a=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let c=this._document.documentElement.clientWidth;i.right=`${c-(a.x+this._overlayRect.width)}px`}else i.left=L(a.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:un(n,e),isOriginOutsideView:We(n,e),isOverlayClipped:un(t,e),isOverlayOutsideView:We(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,i)=>e-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Be(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function It(o,n){for(let t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}function gn(o){if(typeof o!="number"&&o!=null){let[n,t]=o.split(co);return!t||t==="px"?parseFloat(n):null}return o||null}function vn(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function ho(o,n){return o===n?!0:o.isOriginClipped===n.isOriginClipped&&o.isOriginOutsideView===n.isOriginOutsideView&&o.isOverlayClipped===n.isOverlayClipped&&o.isOverlayOutsideView===n.isOverlayOutsideView}var yn="cdk-global-overlay-wrapper";function Mn(o){return new Oe}var Oe=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(yn),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:i,height:a,maxWidth:r,maxHeight:c}=e,m=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),b=(a==="100%"||a==="100vh")&&(!c||c==="100%"||c==="100vh"),p=this._xPosition,y=this._xOffset,W=this._overlayRef.getConfig().direction==="rtl",K="",X="",at="";m?at="flex-start":p==="center"?(at="center",W?X=y:K=y):W?p==="left"||p==="end"?(at="flex-end",K=y):(p==="right"||p==="start")&&(at="flex-start",X=y):p==="left"||p==="start"?(at="flex-start",K=y):(p==="right"||p==="end")&&(at="flex-end",X=y),n.position=this._cssPosition,n.marginLeft=m?"0":K,n.marginTop=b?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=m?"0":X,t.justifyContent=at,t.alignItems=b?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(yn),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},On=(()=>{class o{_injector=s(N);constructor(){}global(){return Mn()}flexibleConnectedTo(t){return $t(this._injector,t)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Jt=new k("OVERLAY_DEFAULT_CONFIG");function te(o,n){o.get(ht).load(Dn);let t=o.get(Rn),e=o.get(U),i=o.get(mt),a=o.get(ze),r=o.get(kt),c=o.get(gt,null,{optional:!0})||o.get(Dt).createRenderer(null,null),m=new Zt(n),b=o.get(Jt,null,{optional:!0})?.usePopover??!0;m.direction=m.direction||r.value,"showPopover"in e.body?m.usePopover=n?.usePopover??b:m.usePopover=!1;let p=e.createElement("div"),y=e.createElement("div");p.id=i.getId("cdk-overlay-"),p.classList.add("cdk-overlay-pane"),y.appendChild(p),m.usePopover&&(y.setAttribute("popover","manual"),y.classList.add("cdk-overlay-popover"));let W=m.usePopover?m.positionStrategy?.getPopoverInsertionPoint?.():null;return Ge(W)?W.after(y):W?.type==="parent"?W.element.appendChild(y):t.getContainerElement().appendChild(y),new Re(new xe(p,a,o),y,p,m,o.get(H),o.get(Cn),e,o.get(vi),o.get(Sn),n?.disableAnimations??o.get(ri,null,{optional:!0})==="NoopAnimations",o.get(oe),c)}var En=(()=>{class o{scrollStrategies=s(xn);_positionBuilder=s(On);_injector=s(N);constructor(){}create(t){return te(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),mo=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],po=new k("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(N);return()=>Tt(o)}}),Ht=(()=>{class o{elementRef=s(O);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return o})(),In=new k("cdk-connected-overlay-default-config"),Ie=(()=>{class o{_dir=s(kt,{optional:!0});_injector=s(N);_overlayRef;_templatePortal;_backdropSubscription=rt.EMPTY;_attachSubscription=rt.EMPTY;_detachSubscription=rt.EMPTY;_positionSubscription=rt.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(po);_ngZone=s(H);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new z;positionChange=new z;attach=new z;detach=new z;overlayKeydown=new z;overlayOutsideClick=new z;constructor(){let t=s(ae),e=s(Pt),i=s(In,{optional:!0}),a=s(Jt,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new qt(t,e),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=mo);let t=this._overlayRef=te(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!dt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let i=this._getOriginElement(),a=Bt(e);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new Zt({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=$t(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Ht?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ht?this.origin.elementRef.nativeElement:this.origin instanceof O?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ai(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",v],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",v],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",v],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",v],push:[2,"cdkConnectedOverlayPush","push",v],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",v],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",v],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[_t]})}return o})(),ee=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({providers:[En],imports:[B,mn,Gt,Gt]})}return o})();var Tn=(()=>{class o{_animationsDisabled=ot();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,i){e&2&&M("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return o})();var uo=["text"],fo=[[["mat-icon"]],"*"],_o=["mat-icon","*"];function go(o,n){if(o&1&&F(0,"mat-pseudo-checkbox",1),o&2){let t=R();D("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function vo(o,n){if(o&1&&F(0,"mat-pseudo-checkbox",3),o&2){let t=R();D("disabled",t.disabled)}}function yo(o,n){if(o&1&&(l(0,"span",4),u(1),h()),o&2){let t=R();d(),it("(",t.group.label,")")}}var Ue=new k("MAT_OPTION_PARENT_COMPONENT"),Qe=new k("MatOptgroup");var Xe=class{source;isUserInput;constructor(n,t=!1){this.source=n,this.isUserInput=t}},Ct=(()=>{class o{_element=s(O);_changeDetectorRef=s($);_parent=s(Ue,{optional:!0});group=s(Qe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=G(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new z;_text;_stateChanges=new w;constructor(){let t=s(ht);t.load(Mt),t.load(pe),this._signalDisableRipple=!!this._parent&&li(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!dt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Xe(this,t))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-option"]],viewQuery:function(e,i){if(e&1&&Z(uo,7),e&2){let a;f(a=_())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,i){e&1&&g("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),e&2&&(se("id",i.id),I("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),M("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",v]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:_o,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,i){e&1&&(Q(fo),T(0,go,1,2,"mat-pseudo-checkbox",1),A(1),l(2,"span",2,0),A(4,1),h(),T(5,vo,1,1,"mat-pseudo-checkbox",3),T(6,yo,2,1,"span",4),F(7,"div",5)),e&2&&(P(i.multiple?0:-1),d(5),P(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),P(i.group&&i.group._inert?6:-1),d(),D("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Tn,Vi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return o})();function Pn(o,n,t){if(t.length){let e=n.toArray(),i=t.toArray(),a=0;for(let r=0;r<o+1;r++)e[r].group&&e[r].group===i[a]&&a++;return a}return 0}function An(o,n,t,e){return o<t?o:o+n>t+e?Math.max(0,o-e+n):t}var Fn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[B]})}return o})();var qe=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[ge,Fn,Ct,B]})}return o})();var ko=["trigger"],Co=["panel"],So=[[["mat-select-trigger"]],"*"],Do=["mat-select-trigger","*"];function Ro(o,n){if(o&1&&(l(0,"span",4),u(1),h()),o&2){let t=R();d(),q(t.placeholder)}}function Mo(o,n){o&1&&A(0)}function Oo(o,n){if(o&1&&(l(0,"span",11),u(1),h()),o&2){let t=R(2);d(),q(t.triggerValue)}}function Eo(o,n){if(o&1&&(l(0,"span",5),T(1,Mo,1,0)(2,Oo,2,1,"span",11),h()),o&2){let t=R();d(),P(t.customTrigger?1:2)}}function Io(o,n){if(o&1){let t=wt();l(0,"div",12,1),g("keydown",function(i){ut(t);let a=R();return ft(a._handleKeydown(i))}),A(2,1),h()}if(o&2){let t=R();zt(t.panelClass),M("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),I("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var To=new k("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(N);return()=>Tt(o)}}),Po=new k("MAT_SELECT_CONFIG"),Ao=new k("MatSelectTrigger"),Ke=class{source;value;constructor(n,t){this.source=n,this.value=t}},Te=(()=>{class o{_viewportRuler=s(vt);_changeDetectorRef=s($);_elementRef=s(O);_dir=s(kt,{optional:!0});_idGenerator=s(mt);_renderer=s(gt);_parentFormField=s(Ui,{optional:!0});ngControl=s(Ci,{self:!0,optional:!0});_liveAnnouncer=s(Pi);_defaultOptions=s(Po,{optional:!0});_animationsDisabled=ot();_popoverLocation;_initialized=new w;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let i=this.panel.nativeElement,a=Pn(t,this.options,this.optionGroups),r=e._getHostElement();t===0&&a===1?i.scrollTop=0:i.scrollTop=An(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Ke(this,t)}_scrollStrategyFactory=s(To);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new w;_errorStateTracker;stateChanges=new w;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=G(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ki.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ni(()=>{let t=this.options;return t?t.changes.pipe(ie(t),ne(()=>yt(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(ne(()=>this.optionSelectionChanges))});openedChange=new z;_openedStream=this.openedChange.pipe(St(t=>t),Pe(()=>{}));_closedStream=this.openedChange.pipe(St(t=>!t),Pe(()=>{}));selectionChange=new z;valueChange=new z;constructor(){let t=s(fe),e=s(Di,{optional:!0}),i=s(Mi,{optional:!0}),a=s(new ui("tabindex"),{optional:!0}),r=s(Jt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ji(t,this.ngControl,i,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Xt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(j(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(j(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(ie(null),j(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(oi(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&Ne(this._trackedModal,"aria-owns",e),Li(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;Ne(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(i),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,i=e===40||e===38||e===37||e===39,a=e===13||e===32,r=this._keyManager;if(!r.isTyping()&&a&&!dt(t)||(this.multiple||t.altKey)&&i)t.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;r.onKeydown(t);let m=this.selected;m&&c!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,i=t.keyCode,a=i===40||i===38,r=e.isTyping();if(a&&t.altKey)t.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&e.activeItem&&!dt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&t.ctrlKey){t.preventDefault();let c=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(c?m.select():m.deselect())})}else{let c=e.activeItemIndex;e.onKeydown(t),this._multiple&&a&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==c&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!dt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Ht?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Fi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=yt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(j(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),yt(...this.options.map(e=>e._stateChanges)).pipe(j(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let i=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(i!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),i!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,i)=>this.sortComparator?this.sortComparator(e,i,t):t.indexOf(e)-t.indexOf(i)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Bt(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-select"]],contentQueries:function(e,i,a){if(e&1&&xt(a,Ao,5)(a,Ct,5)(a,Qe,5),e&2){let r;f(r=_())&&(i.customTrigger=r.first),f(r=_())&&(i.options=r),f(r=_())&&(i.optionGroups=r)}},viewQuery:function(e,i){if(e&1&&Z(ko,5)(Co,5)(Ie,5),e&2){let a;f(a=_())&&(i.trigger=a.first),f(a=_())&&(i.panel=a.first),f(a=_())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,i){e&1&&g("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),e&2&&(I("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),M("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",v],disableRipple:[2,"disableRipple","disableRipple",v],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:ct(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",v],placeholder:"placeholder",required:[2,"required","required",v],multiple:[2,"multiple","multiple",v],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",v],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ct],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",v]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[lt([{provide:Xi,useExisting:o},{provide:Ue,useExisting:o}]),_t],ngContentSelectors:Do,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,i){if(e&1&&(Q(So),l(0,"div",2,0),g("click",function(){return i.open()}),l(3,"div",3),T(4,Ro,2,1,"span",4)(5,Eo,3,1,"span",5),h(),l(6,"div",6)(7,"div",7),st(),l(8,"svg",8),F(9,"path",9),h()()()(),jt(10,Io,3,16,"ng-template",10),g("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),e&2){let a=Wt(1);d(3),I("id",i._valueId),d(),P(i.empty?4:5),d(6),D("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ht,Ie],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return o})();var Bn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[ee,qe,B,Et,ve,qe]})}return o})();var Fo=["tooltip"],Lo=20;var zo=new k("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(N);return()=>Tt(o,{scrollThrottle:Lo})}}),Bo=new k("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Nn="tooltip-panel",No={passive:!0},Vo=8,Ho=8,jo=24,Wo=200,Vn=(()=>{class o{_elementRef=s(O);_ngZone=s(H);_platform=s(nt);_ariaDescriber=s(zi);_focusMonitor=s(me);_dir=s(kt);_injector=s(N);_viewContainerRef=s(Pt);_mediaMatcher=s(Ii);_document=s(U);_renderer=s(gt);_animationsDisabled=ot();_defaultOptions=s(Bo,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Yo;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=J(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=J(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Nt(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Nt(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new w;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Vo}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(j(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Qt(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(j(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof O)return this._overlayRef;this._detach()}let e=this._injector.get(Vt).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Nn}`,a=$t(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return a.positionChanges.pipe(j(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=te(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(zo)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(j(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(j(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(j(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(j(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();e.withPositions([this._addOffset(pt(pt({},i.main),a.main)),this._addOffset(pt(pt({},i.fallback),a.fallback))])}_addOffset(t){let e=Ho,i=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=i?-e:e:t.originX==="end"&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"||e=="below"?i={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={originX:"end",originY:"center"});let{x:a,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"?i={overlayX:"center",overlayY:"bottom"}:e=="below"?i={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),bt(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:a}=t,r;if(e==="center"?this._dir&&this._dir.value==="rtl"?r=i==="end"?"left":"right":r=i==="start"?"left":"right":r=e==="bottom"&&a==="top"?"above":"below",r!==this._currentPosition){let c=this._overlayRef;if(c){let m=`${this._cssClassPrefix}-${Nn}-`;c.removePanelClass(m+this._currentPosition),c.addPanelClass(m+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,No))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,i=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(t==="on"||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||bt({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!dt(t):!0;static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,i){e&2&&M("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),Yo=(()=>{class o{_changeDetectorRef=s($);_elementRef=s(O);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ot();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new w;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>jo&&t.width>=Wo}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(e.classList.remove(t?a:i),e.classList.add(t?i:a),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(e);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(e&1&&Z(Fo,7),e&2){let a;f(a=_())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,i){e&1&&g("mouseleave",function(r){return i._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,i){e&1&&(Rt(0,"div",1,0),di("animationend",function(r){return i._handleAnimationEnd(r)}),Rt(2,"div",2),u(3),Lt()()),e&2&&(zt(i.tooltipClass),M("mdc-tooltip--multiline",i._isMultiline),d(3),q(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return o})();var Hn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[Ai,ee,B,Et]})}return o})();function Go(o,n){if(o&1&&(l(0,"mat-option",17),u(1),h()),o&2){let t=n.$implicit;D("value",t),d(),it(" ",t," ")}}function Xo(o,n){if(o&1){let t=wt();l(0,"mat-form-field",14)(1,"mat-select",16,0),g("selectionChange",function(i){ut(t);let a=R(2);return ft(a._changePageSize(i.value))}),At(3,Go,2,2,"mat-option",17,re),h(),l(5,"div",18),g("click",function(){ut(t);let i=Wt(2);return ft(i.open())}),h()()}if(o&2){let t=R(2);D("appearance",t._formFieldAppearance)("color",t.color),d(),D("value",t.pageSize)("disabled",t.disabled),ci("aria-labelledby",t._pageSizeLabelId),D("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),d(2),Ft(t._displayedPageSizeOptions)}}function Uo(o,n){if(o&1&&(l(0,"div",15),u(1),h()),o&2){let t=R(2);d(),q(t.pageSize)}}function Qo(o,n){if(o&1&&(l(0,"div",3)(1,"div",13),u(2),h(),T(3,Xo,6,7,"mat-form-field",14),T(4,Uo,2,1,"div",15),h()),o&2){let t=R();d(),I("id",t._pageSizeLabelId),d(),it(" ",t._intl.itemsPerPageLabel," "),d(),P(t._displayedPageSizeOptions.length>1?3:-1),d(),P(t._displayedPageSizeOptions.length<=1?4:-1)}}function qo(o,n){if(o&1){let t=wt();l(0,"button",19),g("click",function(){ut(t);let i=R();return ft(i._buttonClicked(0,i._previousButtonsDisabled()))}),st(),l(1,"svg",8),F(2,"path",20),h()()}if(o&2){let t=R();D("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),I("aria-label",t._intl.firstPageLabel)}}function Ko(o,n){if(o&1){let t=wt();l(0,"button",21),g("click",function(){ut(t);let i=R();return ft(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),st(),l(1,"svg",8),F(2,"path",22),h()()}if(o&2){let t=R();D("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),I("aria-label",t._intl.lastPageLabel)}}var Zo=(()=>{class o{changes=new w;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,e,i)=>{if(i==0||e==0)return`0 of ${i}`;i=Math.max(i,0);let a=t*e,r=a<i?Math.min(a+e,i):a+e;return`${a+1} \u2013 ${r} of ${i}`};static \u0275fac=function(e){return new(e||o)};static \u0275prov=Y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),$o=50;var Jo=new k("MAT_PAGINATOR_DEFAULT_OPTIONS"),ta=(()=>{class o{_intl=s(Zo);_changeDetectorRef=s($);_formFieldAppearance;_pageSizeLabelId=s(mt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new ei(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(e=>ct(e,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new z;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,e=s(Jo,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),e){let{pageSize:i,pageSizeOptions:a,hidePageSize:r,showFirstLastButtons:c}=e;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),r!=null&&(this.hidePageSize=r),c!=null&&(this.showFirstLastButtons=c)}this._formFieldAppearance=e?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let e=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(e/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:$o),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,e)=>t-e),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let e=this.pageIndex;t!==e&&(this.pageIndex=t,this._emitPageEvent(e))}_buttonClicked(t,e){e||this._navigate(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",ct],length:[2,"length","length",ct],pageSize:[2,"pageSize","pageSize",ct],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",v],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",v],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",v]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,i){e&1&&(l(0,"div",1)(1,"div",2),T(2,Qo,5,4,"div",3),l(3,"div",4)(4,"div",5),u(5),h(),T(6,qo,3,5,"button",6),l(7,"button",7),g("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),st(),l(8,"svg",8),F(9,"path",9),h()(),Fe(),l(10,"button",10),g("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),st(),l(11,"svg",8),F(12,"path",11),h()(),T(13,Ko,3,5,"button",12),h()()()),e&2&&(d(2),P(i.hidePageSize?-1:2),d(3),it(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),d(),P(i.showFirstLastButtons?6:-1),d(),D("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),I("aria-label",i._intl.previousPageLabel),d(3),D("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),I("aria-label",i._intl.nextPageLabel),d(3),P(i.showFirstLastButtons?13:-1))},dependencies:[_e,Te,Ct,ye,Vn],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return o})(),jn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[be,Bn,Hn,ta]})}return o})();var Wn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=S({type:o});static \u0275inj=x({imports:[B]})}return o})();var Yn=(()=>{class o{get vertical(){return this._vertical}set vertical(t){this._vertical=J(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=J(t)}_inset=!1;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,i){e&2&&(I("aria-orientation",i.vertical?"vertical":"horizontal"),M("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return o})();var ea=["*"],ia=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,na=["unscopedContent"],oa=["text"],aa=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ra=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var sa=new k("ListOption"),la=(()=>{class o{_elementRef=s(O);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return o})(),ca=(()=>{class o{_elementRef=s(O);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return o})(),da=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return o})(),Gn=(()=>{class o{_listOption=s(sa,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,hostVars:4,hostBindings:function(e,i){e&2&&M("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return o})(),ha=(()=>{class o extends Gn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275dir=E({type:o,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[et]})}return o})(),ma=(()=>{class o extends Gn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275dir=E({type:o,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[et]})}return o})(),pa=new k("MAT_LIST_CONFIG"),Ze=(()=>{class o{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=J(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(J(t))}_disabled=G(!1);_defaultOptions=s(pa,{optional:!0});static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,hostVars:1,hostBindings:function(e,i){e&2&&I("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return o})(),ua=(()=>{class o{_elementRef=s(O);_ngZone=s(H);_listBase=s(Ze,{optional:!0});_platform=s(nt);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(t){this._explicitLines=Nt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=J(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(J(t))}_disabled=G(!1);_subscriptions=new rt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(ht).load(Mt);let t=s(ue,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ni(this,this._ngZone,this._hostElement,this._platform,s(N)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(yt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=E({type:o,contentQueries:function(e,i,a){if(e&1&&xt(a,ha,4)(a,ma,4),e&2){let r;f(r=_())&&(i._avatars=r),f(r=_())&&(i._icons=r)}},hostVars:4,hostBindings:function(e,i){e&2&&(I("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),M("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return o})();var Xn=(()=>{class o extends Ze{static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275cmp=C({type:o,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[lt([{provide:Ze,useExisting:o}]),et],ngContentSelectors:ea,decls:1,vars:0,template:function(e,i){e&1&&(Q(),A(0))},styles:[ia],encapsulation:2,changeDetection:0})}return o})(),Un=(()=>{class o extends ua{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=J(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=tt(o)))(i||o)}})();static \u0275cmp=C({type:o,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&xt(a,ca,5)(a,la,5)(a,da,5),e&2){let r;f(r=_())&&(i._lines=r),f(r=_())&&(i._titles=r),f(r=_())&&(i._meta=r)}},viewQuery:function(e,i){if(e&1&&Z(na,5)(oa,5),e&2){let a;f(a=_())&&(i._unscopedContent=a.first),f(a=_())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(I("aria-current",i._getAriaCurrent()),M("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[et],ngContentSelectors:ra,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(Q(aa),A(0),l(1,"span",1),A(2,1),A(3,2),l(4,"span",2,0),g("cdkObserveContent",function(){return i._updateItemLines(!0)}),A(6,3),h()(),A(7,4),A(8,5),F(9,"div",3))},dependencies:[Ti],encapsulation:2,changeDetection:0})}return o})();var fa=(o,n)=>n.value,_a=(o,n)=>n.id;function ga(o,n){if(o&1){let t=wt();l(0,"button",23),g("click",function(){ut(t);let i=R();return ft(i.search.set(""))}),l(1,"mat-icon"),u(2,"close"),h()()}}function va(o,n){if(o&1&&(l(0,"mat-option",12),u(1),h()),o&2){let t=n.$implicit;D("value",t),d(),q(t)}}function ya(o,n){if(o&1&&(l(0,"mat-option",12),u(1),h()),o&2){let t=n.$implicit;D("value",t.value),d(),q(t.label)}}function ba(o,n){if(o&1&&(l(0,"mat-list-item",16),F(1,"app-product-item",24),h()),o&2){let t=n.$implicit;d(),D("product",t)}}function wa(o,n){o&1&&(l(0,"div",17)(1,"div"),u(2,"Brak produkt\xF3w do wy\u015Bwietlenia."),h()())}var Qn=class o{service=s(bi);products=this.service.products;totalPages=this.service.totalPages;page=G(1);pageSize=G(10);total=this.service.total;sortBy=G(null);sortDesc=G(!1);search=G("");sortingOptions=[{value:0,label:"Domy\u015Blne"},{value:1,label:"ID"},{value:2,label:"Kod"},{value:3,label:"Nazwa"},{value:4,label:"Cena"}];pageSizes=[3,5,10,25,50];constructor(){Le(()=>{this.load()})}onSort(n){this.sortBy.set(n||null)}toggleDesc(){this.sortDesc.update(n=>!n)}prev(){this.page.update(n=>Math.max(1,n-1))}next(){this.page.update(n=>n+1)}load(){this.service.getProducts(this.page(),this.pageSize(),this.search(),this.sortBy()??void 0,this.sortDesc()).subscribe()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=C({type:o,selectors:[["app-product-list"]],decls:50,vars:10,consts:[[1,"products-card"],[1,"header"],[1,"title"],[1,"product-list"],[1,"controls-row"],["appearance","outline",1,"search"],["matPrefix",""],["matInput","","placeholder","Szukaj (kod lub nazwa)",3,"ngModelChange","ngModel"],["mat-icon-button","","matSuffix",""],[1,"right-controls"],["appearance","outline",1,"small"],[3,"selectionChange","value"],[3,"value"],["appearance","outline"],["mat-icon-button","","title","Toggle sort direction",3,"click"],["role","list"],["role","listitem"],[1,"empty"],[1,"paginator"],[1,"summary"],[1,"spacer"],[1,"controls"],["mat-stroked-button","",3,"click","disabled"],["mat-icon-button","","matSuffix","",3,"click"],[1,"card",3,"product"]],template:function(t,e){t&1&&(l(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"mat-card-title"),u(4,"Produkty"),h(),l(5,"mat-card-subtitle"),u(6,"Przegl\u0105daj katalog produkt\xF3w"),h()()(),F(7,"mat-divider"),l(8,"div",3)(9,"div",4)(10,"mat-form-field",5)(11,"mat-icon",6),u(12,"search"),h(),l(13,"input",7),g("ngModelChange",function(a){return e.search.set(a),e.page.set(1)}),h(),T(14,ga,3,0,"button",8),h(),l(15,"div",9)(16,"mat-form-field",10)(17,"mat-label"),u(18,"Ilo\u015B\u0107 na stronie"),h(),l(19,"mat-select",11),g("selectionChange",function(a){return e.pageSize.set(a.value),e.page.set(1)}),At(20,va,2,2,"mat-option",12,re),h()(),l(22,"mat-form-field",13)(23,"mat-label"),u(24,"Sortowanie"),h(),l(25,"mat-select",11),g("selectionChange",function(a){return e.sortBy.set(a.value)}),At(26,ya,2,2,"mat-option",12,fa),h()(),l(28,"button",14),g("click",function(){return e.toggleDesc()}),l(29,"mat-icon"),u(30),h()()()(),F(31,"mat-divider"),l(32,"mat-list",15),At(33,ba,2,1,"mat-list-item",16,_a),T(35,wa,3,0,"div",17),h(),l(36,"div",18)(37,"div",19)(38,"span"),u(39),h(),F(40,"span",20),h(),l(41,"div",21)(42,"button",22),g("click",function(){return e.prev()}),l(43,"mat-icon"),u(44,"chevron_left"),h(),u(45," Poprzednia "),h(),l(46,"button",22),g("click",function(){return e.next()}),u(47," Nast\u0119pna "),l(48,"mat-icon"),u(49,"chevron_right"),h()()()()()()),t&2&&(d(13),D("ngModel",e.search()),d(),P(e.search()?14:-1),d(5),D("value",e.pageSize()),d(),Ft(e.pageSizes),d(5),D("value",e.sortBy()),d(),Ft(e.sortingOptions),d(4),q(e.sortDesc()?"arrow_downward":"arrow_upward"),d(3),Ft(e.products()),d(2),P(e.products().length===0?35:-1),d(4),hi("Strona ",e.page()," z ",e.totalPages()||1),d(3),D("disabled",e.page()<=1),d(4),D("disabled",e.page()>=(e.totalPages()||0)))},dependencies:[we,le,Oi,xi,Si,Ri,hn,jn,Wn,ve,_e,Wi,Yi,Gi,Ki,qi,$i,Zi,be,Qi,ye,Te,Ct,ce,de,he,Yn,Xn,Un],styles:[".products-card[_ngcontent-%COMP%]{padding:2.5rem;margin:2rem 1rem}mat-list-item[_ngcontent-%COMP%]{height:auto!important;align-items:stretch!important}.summary[_ngcontent-%COMP%]{margin-top:20px;justify-self:center}.controls[_ngcontent-%COMP%]{margin-top:15px;justify-content:center}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:1rem}.title[_ngcontent-%COMP%]{flex:1 1 auto}.actions[_ngcontent-%COMP%]{display:flex;gap:8px}.controls-row[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;padding:12px 16px;flex-wrap:wrap}.search[_ngcontent-%COMP%]{display:flex;min-width:200px}.right-controls[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.small[_ngcontent-%COMP%]{width:160px}.list[_ngcontent-%COMP%]{gap:20px;padding:12px 16px}.empty[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;padding:32px 0;display:flex;flex-direction:column;align-items:center;gap:8px}.paginator-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 16px 16px}.summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;color:#fff}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.controls[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.icon-left[_ngcontent-%COMP%]{margin-right:8px}"]})};export{Qn as ProductListComponent};
