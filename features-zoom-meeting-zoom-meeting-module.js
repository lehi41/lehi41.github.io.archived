(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-zoom-meeting-zoom-meeting-module"],{

/***/ "Ujgp":
/*!**********************************************************************!*\
  !*** ./src/app/features/zoom-meeting/zoom-meeting-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ZoomMeetingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMeetingRoutingModule", function() { return ZoomMeetingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _zoom_meeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-meeting.component */ "fwVt");





const routes = [
    {
        path: '',
        component: _zoom_meeting_component__WEBPACK_IMPORTED_MODULE_2__["ZoomMeetingComponent"],
    },
];
class ZoomMeetingRoutingModule {
}
ZoomMeetingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ZoomMeetingRoutingModule });
ZoomMeetingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ZoomMeetingRoutingModule_Factory(t) { return new (t || ZoomMeetingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ZoomMeetingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomMeetingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fwVt":
/*!*****************************************************************!*\
  !*** ./src/app/features/zoom-meeting/zoom-meeting.component.ts ***!
  \*****************************************************************/
/*! exports provided: ZoomMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMeetingComponent", function() { return ZoomMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/video/video.component */ "kEUT");



class ZoomMeetingComponent {
    // people: BehaviorSubject<Person[]> = new BehaviorSubject([]);
    //
    // constructor(private personService: PersonService) {}
    //
    // ngOnInit(): void {
    //   // this.personService.get().subscribe(d => {
    //   //   this.people = d;
    //   // });
    // }
    constructor() { }
    ngOnInit() { }
}
ZoomMeetingComponent.ɵfac = function ZoomMeetingComponent_Factory(t) { return new (t || ZoomMeetingComponent)(); };
ZoomMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomMeetingComponent, selectors: [["lehi41-zoom-meeting"]], decls: 4, vars: 4, consts: [[3, "title", "source"]], template: function ZoomMeetingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zoom Meeting Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "lehi41-video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "lehi41-video", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Rejoice the Lord is King")("source", "./assets/video/rejoice-the-lord-is-king.mp4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Redeemer of Israel")("source", "./assets/video/redeemer-of-israel.mp4");
    } }, directives: [_shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomMeetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-zoom-meeting',
                template: `
    <h2>Zoom Meeting Assets</h2>

    <lehi41-video
      [title]="'Rejoice the Lord is King'"
      [source]="'./assets/video/rejoice-the-lord-is-king.mp4'"
    ></lehi41-video>
    <lehi41-video
      [title]="'Redeemer of Israel'"
      [source]="'./assets/video/redeemer-of-israel.mp4'"
    ></lehi41-video>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pRuw":
/*!**************************************************************!*\
  !*** ./src/app/features/zoom-meeting/zoom-meeting.module.ts ***!
  \**************************************************************/
/*! exports provided: ZoomMeetingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMeetingModule", function() { return ZoomMeetingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _zoom_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom-meeting-routing.module */ "Ujgp");
/* harmony import */ var _zoom_meeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom-meeting.component */ "fwVt");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");






class ZoomMeetingModule {
}
ZoomMeetingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ZoomMeetingModule });
ZoomMeetingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ZoomMeetingModule_Factory(t) { return new (t || ZoomMeetingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _zoom_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ZoomMeetingRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ZoomMeetingModule, { declarations: [_zoom_meeting_component__WEBPACK_IMPORTED_MODULE_3__["ZoomMeetingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _zoom_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ZoomMeetingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomMeetingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_zoom_meeting_component__WEBPACK_IMPORTED_MODULE_3__["ZoomMeetingComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _zoom_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ZoomMeetingRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-zoom-meeting-zoom-meeting-module.js.map