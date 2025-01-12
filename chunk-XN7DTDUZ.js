import{a as ne,d as te,e as ce}from"./chunk-RC5MBHSI.js";import{Q as W,R as Y,ea as ee,fa as $,ja as oe,la as ie,ma as T}from"./chunk-MEET4NWQ.js";import{Db as p,Eb as b,Fb as h,Gb as F,Hb as S,Ic as U,Jb as R,Kc as Z,Lb as j,Mb as I,Mc as K,Oc as X,Pb as B,Qb as A,Rb as M,S as D,Sa as s,Sb as w,T as z,U as E,Z as L,Za as N,cc as H,dc as G,ea as O,eb as f,ec as J,fa as C,fb as q,ga as y,ha as v,ia as d,ib as x,kb as Q,lb as g,na as _,rc as k,sb as r,sc as P,tb as c,wb as V,xb as u}from"./chunk-HS3LNPZD.js";var Me=(()=>{class e extends T{static \u0275fac=(()=>{let i;return function(o){return(i||(i=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["ChevronRightIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,o){n&1&&(v(),p(0,"svg",0),h(1,"path",1),b()),n&2&&(u(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var re=(()=>{class e extends T{static \u0275fac=(()=>{let i;return function(o){return(i||(i=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["MinusIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(v(),p(0,"svg",0),h(1,"path",1),b()),n&2&&(u(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var he=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,de={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},le=(()=>{class e extends oe{name="checkbox";theme=he;classes=de;static \u0275fac=(()=>{let i;return function(o){return(i||(i=d(e)))(o||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var ue=["checkboxicon"],pe=["input"],be=()=>({"p-checkbox-input":!0}),ke=e=>({checked:e,class:"p-checkbox-icon"});function fe(e,a){if(e&1&&h(0,"span",8),e&2){let i=I(3);c("ngClass",i.checkboxIcon),r("data-pc-section","icon")}}function xe(e,a){e&1&&h(0,"CheckIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function me(e,a){if(e&1&&(F(0),g(1,fe,1,2,"span",7)(2,xe,1,2,"CheckIcon",6),S()),e&2){let i=I(2);s(),c("ngIf",i.checkboxIcon),s(),c("ngIf",!i.checkboxIcon)}}function ge(e,a){e&1&&h(0,"MinusIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function Ce(e,a){if(e&1&&(F(0),g(1,me,3,2,"ng-container",4)(2,ge,1,2,"MinusIcon",6),S()),e&2){let i=I();s(),c("ngIf",i.checked),s(),c("ngIf",i._indeterminate())}}function ye(e,a){}function ve(e,a){e&1&&g(0,ye,0,0,"ng-template")}var _e={provide:te,useExisting:D(()=>se),multi:!0},se=(()=>{class e extends ie{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new _;onFocus=new _;onBlur=new _;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Y(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=N(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=L(le);ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"icon":this._checkboxIconTemplate=i.template;break;case"checkboxicon":this._checkboxIconTemplate=i.template;break}})}ngOnChanges(i){super.ngOnChanges(i),i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}updateModel(i){let n,o=this.injector.get(ce,null,{optional:!0,self:!0}),t=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=t.filter(l=>!W(l,this.value)):n=t?[...t,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}static \u0275fac=(()=>{let i;return function(o){return(i||(i=d(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,t){if(n&1&&(B(t,ue,4),B(t,ee,4)),n&2){let l;M(l=w())&&(o.checkboxIconTemplate=l.first),M(l=w())&&(o.templates=l)}},viewQuery:function(n,o){if(n&1&&A(pe,5),n&2){let t;M(t=w())&&(o.inputViewChild=t.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",k],binary:[2,"binary","binary",k],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",P],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",k],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",k],required:[2,"required","required",k],autofocus:[2,"autofocus","autofocus",k],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[H([_e,le]),Q,x,O],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let t=R();p(0,"div",1)(1,"input",2,0),j("focus",function(m){return C(t),y(o.onInputFocus(m))})("blur",function(m){return C(t),y(o.onInputBlur(m))})("change",function(m){return C(t),y(o.handleChange(m))}),b(),p(3,"div",3),g(4,Ce,3,2,"ng-container",4)(5,ve,1,0,null,5),b()()}n&2&&(V(o.style),u(o.styleClass),c("ngClass",o.containerClass),r("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),s(),V(o.inputStyle),u(o.inputClass),c("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",G(26,be)),r("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),s(3),c("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),s(),c("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",J(27,ke,o.checked)))},dependencies:[X,U,Z,K,ne,re,$],encapsulation:2,changeDetection:0})}return e})(),Ze=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=E({imports:[se,$,$]})}return e})();export{Me as a,se as b,Ze as c};
