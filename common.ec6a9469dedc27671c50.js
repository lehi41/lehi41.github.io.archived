"use strict";(self.webpackChunklehi41=self.webpackChunklehi41||[]).push([[592],{5695:(g,c,r)=>{r.d(c,{B:()=>h});var e=r(6215),a=r(9112),u=r(8002),m=r(3996);class h extends m._{constructor(i,s,t,o,_,I,C){super(i,s),this.activatedRoute=i,this.router=s,this.apiService=t,this.formBuilder=o,this.formModel=_,this.changeDetectorRef=I,this.homePath=C,this.formIsReady$=new e.X(!1),this.formGroup=this.formBuilder.group({});const E=(0,a.aj)([this.pageInfo$,this.apiService.data$,this.formIsReady$]).pipe((0,u.U)(n=>{const l=n[0];let d;return l.params.has("id")&&(this.itemId=parseInt(l.params.get("id"))),this.itemId&&(d=n[1].find(v=>v.id===this.itemId)),{item:d,formIsReady:n[2]}})).subscribe(n=>{n.item&&n.formIsReady&&Object.keys(this.formModel).forEach(l=>{var f,d;(null===(f=this.formGroup)||void 0===f?void 0:f.controls[null===(d=null==this?void 0:this.formModel[l])||void 0===d?void 0:d.name])&&this.formGroup.controls[this.formModel[l].name].setValue(n.item[this.formModel[l].dbPropertyName])})});this.subscriptions.push(E)}submit(){this.itemId?this.updateHymn():this.createHymn()}createHymn(){this.apiService.createItem(this.targetItem()).then(()=>{this.changeDetectorRef.detectChanges(),this.apiService.refreshData(),this.router.navigate([this.homePath])})}updateHymn(){this.apiService.updateItem(this.itemId,this.targetItem()).then(()=>{this.changeDetectorRef.detectChanges(),this.apiService.refreshData(),this.router.navigate([this.homePath])})}delete(){this.apiService.deleteItem(this.itemId).then(()=>this.changeDetectorRef.detectChanges())}isReady(i,s){this.formModel[i].isReady=s;let t=!0;Object.keys(this.formModel).forEach(o=>{this.formModel[o].isReady||(t=!1)}),this.formIsReady$.next(t)}targetItem(){let i={};return Object.keys(this.formModel).forEach(s=>{var t,o;(null===(t=this.formGroup)||void 0===t?void 0:t.controls[null===(o=null==this?void 0:this.formModel[s])||void 0===o?void 0:o.name])&&(i[this.formModel[s].dbPropertyName]=this.formGroup.controls[this.formModel[s].name].value)}),i}}},7430:(g,c,r)=>{r.d(c,{i:()=>a});var e=r(3996);class a extends e._{constructor(m,h,p){super(m,h),this.activatedRoute=m,this.router=h,this.apiService=p,this.apiService.refreshData(),this.data$=this.apiService.data$}deleteItem(m){this.apiService.deleteItem(m.id).then(()=>{this.apiService.refreshData()})}}},7298:(g,c,r)=>{r.d(c,{u:()=>p});var e=r(3018),a=r(665),u=r(8583);function m(i,s){if(1&i&&(e.TgZ(0,"label",5),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.s9C("for",t.formItem.name),e.xp6(1),e.hij(" ",t.formItem.label," ")}}function h(i,s){if(1&i&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("ngValue",t.value),e.xp6(1),e.hij(" ",t.key," ")}}let p=(()=>{class i{constructor(){this.isReady=new e.vpe(!1)}ngOnInit(){const t=[];this.formItem.required&&t.push(a.kI.required),this.control=new a.NI(this.formItem.defaultValue,t),this.formGroup.addControl(this.formItem.name,this.control),this.isReady.emit(!0)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["lehi41-mmi-select"]],inputs:{formItem:"formItem",formGroup:"formGroup"},outputs:{isReady:"isReady"},decls:6,vars:9,consts:[[3,"formGroup"],[3,"for",4,"ngIf"],[3,"id","className","formControlName"],["value",""],[3,"ngValue",4,"ngFor","ngForOf"],[3,"for"],[3,"ngValue"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,m,2,2,"label",1),e.TgZ(2,"select",2),e.TgZ(3,"option",3),e._uU(4),e.qZA(),e.YNc(5,h,2,2,"option",4),e.qZA(),e.qZA()),2&t&&(e.ekj("disabled",o.formItem.disabled),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("ngIf",o.formItem.label),e.xp6(1),e.Q6J("id",o.formItem.name)("className",o.formItem.cssClass)("formControlName",o.formItem.name),e.xp6(2),e.Oqu(o.formItem.firstOptionLabel),e.xp6(1),e.Q6J("ngForOf",o.formItem.options))},directives:[a.JL,a.sg,u.O5,a.EJ,a.JJ,a.u,a.YN,a.Kr,u.sg],encapsulation:2}),i})()}}]);