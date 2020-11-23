(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "0HvM":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_data_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/announcement.service */ "52xg");
/* harmony import */ var _shared_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/data */ "rSg4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alerts/alerts.component */ "bQN8");
/* harmony import */ var _sacrament_list_sacrament_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sacrament-list/sacrament-list.component */ "ud7l");
/* harmony import */ var _broadcast_list_broadcast_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./broadcast-list/broadcast-list.component */ "a9Fh");
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ "2MiQ");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "KmN4");
/* harmony import */ var _missionary_list_missionary_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./missionary-list/missionary-list.component */ "umAq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "2kYt");














class HomeComponent {
    constructor(announcementService) {
        this.announcementService = announcementService;
        this.data = _shared_data_data__WEBPACK_IMPORTED_MODULE_3__["DATA"];
        this.announcements$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.missionaries$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.missionaries);
        this.broadcastLinks$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.broadcastLinks.filter((z) => z.active));
        this.announcementService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((announcements) => {
            announcements.forEach(a => {
                a.date = new Date(a.date);
            });
            return announcements.sort((b, a) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }))
            .subscribe(r => this.announcements$.next(r));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["lehi41-home"]], decls: 16, vars: 9, consts: [[1, "row", "mb-4"], [1, "col-12", "mb-3"], [3, "broadcastLinks"], [3, "announcements"], [3, "missionaries"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "lehi41-alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lehi41-sacrament-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "lehi41-broadcast-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "lehi41-announcement-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "lehi41-contact-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "lehi41-missionary-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("broadcastLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.broadcastLinks$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("announcements", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.announcements$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("missionaries", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.missionaries$));
    } }, directives: [_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_5__["AlertsComponent"], _sacrament_list_sacrament_list_component__WEBPACK_IMPORTED_MODULE_6__["SacramentListComponent"], _broadcast_list_broadcast_list_component__WEBPACK_IMPORTED_MODULE_7__["BroadcastListComponent"], _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_8__["AnnouncementListComponent"], _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__["ContactInfoComponent"], _missionary_list_missionary_list_component__WEBPACK_IMPORTED_MODULE_10__["MissionaryListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["#alert[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: #b8daff 1px solid;\n  background: #ebf4ff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY2xpZW50L3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FsZXJ0IHtcbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbGlnaHRlbigjMDA3YmZmLCAzNiUpIDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMwMDdiZmYsIDQ2JSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _shared_data_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"] }]; }, null); })();


/***/ }),

/***/ "2MiQ":
/*!********************************************************************************!*\
  !*** ./src/app/features/home/announcement-list/announcement-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnnouncementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementListComponent", function() { return AnnouncementListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function AnnouncementListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const announcement_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, announcement_r1.date, "d MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", announcement_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", announcement_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AnnouncementListComponent {
}
AnnouncementListComponent.ɵfac = function AnnouncementListComponent_Factory(t) { return new (t || AnnouncementListComponent)(); };
AnnouncementListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnnouncementListComponent, selectors: [["lehi41-announcement-list"]], inputs: { announcements: "announcements" }, decls: 8, vars: 1, consts: [[1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-seating-02.jpg", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-calendar-day"], [1, "text-uppercase", "font-weight-bold", "font-size-10"], [1, "ml-4", "mt-2"], [1, "h6", "font-weight-bold"], [3, "innerHTML"]], template: function AnnouncementListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Announcements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnnouncementListComponent_li_7_Template, 12, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvYW5ub3VuY2VtZW50LWxpc3QvYW5ub3VuY2VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-announcement-list',
                templateUrl: './announcement-list.component.html',
                styleUrls: ['./announcement-list.component.scss'],
            }]
    }], null, { announcements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "52xg":
/*!*****************************************************!*\
  !*** ./src/app/shared/data/announcement.service.ts ***!
  \*****************************************************/
/*! exports provided: AnnouncementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementService", function() { return AnnouncementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _data_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-base */ "DZn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "Czmw");







class AnnouncementService extends _data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"] {
    constructor(http, firestore) {
        super(http, 'announcements', firestore);
        this.http = http;
        this.firestore = firestore;
    }
}
AnnouncementService.ɵfac = function AnnouncementService_Factory(t) { return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
AnnouncementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnnouncementService, factory: AnnouncementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "DZn/":
/*!******************************************!*\
  !*** ./src/app/shared/data/data-base.ts ***!
  \******************************************/
/*! exports provided: DataBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBase", function() { return DataBase; });
class DataBase {
    constructor(http, collectionName, firestore) {
        this.http = http;
        this.collectionName = collectionName;
        this.firestore = firestore;
    }
    getAll() {
        return this.firestore.collection(this.collectionName).valueChanges();
    }
    set(item) {
        return this.firestore.collection(this.collectionName).add(item);
    }
    update(id, item) {
        return this.firestore.collection(this.collectionName).doc(id).update(item);
    }
    delete(id) {
        return this.firestore.collection(this.collectionName).doc(id).delete();
    }
}


/***/ }),

/***/ "KmN4":
/*!**********************************************************************!*\
  !*** ./src/app/features/home/contact-info/contact-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class ContactInfoComponent {
    constructor() { }
    ngOnInit() { }
}
ContactInfoComponent.ɵfac = function ContactInfoComponent_Factory(t) { return new (t || ContactInfoComponent)(); };
ContactInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactInfoComponent, selectors: [["lehi41-contact-info"]], decls: 87, vars: 0, consts: [[1, "card", "border-light"], ["src", "./assets/images/chapel.jpeg", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "broadcast-section"], [1, "h4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "ml-2", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "fa-3x"], [1, "fas", "fa-user-tie"], [1, "ml-4", "w-100"], [1, "p-0", "m-0"], [1, "mt-2", "d-flex", "justify-content-between"], ["href", "tel:8018601598", "target", "_blank"], [1, "fas", "fa-sms"], [1, "fas", "fa-place-of-worship"], [1, "ml-4", "mt-2"], ["href", "https://goo.gl/maps/TLrPMMT1CpjijHnE7", "target", "_blank"], ["href", "tel:8014718893", "target", "_blank"], ["href", "tel:8012434881", "target", "_blank"], ["href", "tel:8018306979", "target", "_blank"], ["href", "https://goo.gl/maps/yMNWPjvQtTMa179p6", "target", "_blank"]], template: function ContactInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ward Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Appointment with Bishopric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Josh Tune:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " | 801-860-1598");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Chapel Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 220 W 200 S, Lehi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " UT 84043 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " United States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Stake Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Temple Recommend or Endorsement Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Viliami Fotu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "801-471-8893");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tony Wolfgramm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "801-243-4881");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Stake President Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Mote Siufanua:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 801-830-6979 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Stake Center Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 680 E Cedar Hollow Rd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Lehi UT 84043 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " United States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-contact-info',
                templateUrl: './contact-info.component.html',
                styleUrls: ['./contact-info.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RxMv":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0HvM");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "a9Fh":
/*!**************************************************************************!*\
  !*** ./src/app/features/home/broadcast-list/broadcast-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: BroadcastListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastListComponent", function() { return BroadcastListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function BroadcastListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Passcode:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Meeting ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const broadcastItem_r1 = ctx.$implicit;
    const elementIndex_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", broadcastItem_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#b-details-", elementIndex_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", broadcastItem_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "b-details-", elementIndex_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", broadcastItem_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](broadcastItem_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](broadcastItem_r1.passcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](broadcastItem_r1.meetingId);
} }
class BroadcastListComponent {
}
BroadcastListComponent.ɵfac = function BroadcastListComponent_Factory(t) { return new (t || BroadcastListComponent)(); };
BroadcastListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BroadcastListComponent, selectors: [["lehi41-broadcast-list"]], inputs: { broadcastLinks: "broadcastLinks" }, decls: 8, vars: 1, consts: [[1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-seating-01.jpg", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "broadcast-section"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-tv"], [1, "ml-4", "mt-2", "w-100"], [1, "h6", "font-weight-bold"], [1, "text-right"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "b-details", 1, "btn", "btn-outline-info", "btn-sm", "mr-2", 3, "href"], ["target", "_blank", 1, "btn", "btn-primary", "btn-sm", 3, "href"], [1, "details", "w-100", "mt-3", "mb-3", "collapse", 3, "id"], [1, "list-group", "list-group-flush", "w-100"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["target", "_blank", 3, "href"]], template: function BroadcastListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Broadcast Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BroadcastListComponent_li_7_Template, 30, 8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.broadcastLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".broadcast-section[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  font-size: small;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY2xpZW50L3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9icm9hZGNhc3QtbGlzdC9icm9hZGNhc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcHMvY2xpZW50L3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9icm9hZGNhc3QtbGlzdC9icm9hZGNhc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icm9hZGNhc3Qtc2VjdGlvbiB7XG4gIC5kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BroadcastListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-broadcast-list',
                templateUrl: './broadcast-list.component.html',
                styleUrls: ['./broadcast-list.component.scss'],
            }]
    }], null, { broadcastLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bQN8":
/*!**********************************************************!*\
  !*** ./src/app/features/home/alerts/alerts.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class AlertsComponent {
    constructor() { }
    ngOnInit() { }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(); };
AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["lehi41-alerts"]], decls: 9, vars: 0, consts: [["id", "alert"], ["role", "alert", 1, "alert", "alert-warning", "p-3"], [1, "alert-heading"], [1, "text-right", "mb-0"], ["href", "https://docs.google.com/document/d/11V65jpUgfazarUkN63ezuQy5wvGY19W6cY5xEWLKjWU/edit?usp=sharing", "target", "_blank", 1, "btn", "btn-warning", "btn-sm"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2020 Tithing Settlement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bishopric is now ready to do tithing settlement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Schedule an appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fOOd":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "RxMv");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "0HvM");
/* harmony import */ var _sacrament_list_sacrament_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sacrament-list/sacrament-list.component */ "ud7l");
/* harmony import */ var _broadcast_list_broadcast_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./broadcast-list/broadcast-list.component */ "a9Fh");
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ "2MiQ");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "bQN8");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-info/contact-info.component */ "KmN4");
/* harmony import */ var _missionary_list_missionary_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./missionary-list/missionary-list.component */ "umAq");
/* harmony import */ var _lesson_list_lesson_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson-list/lesson-list.component */ "k5ID");












class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _sacrament_list_sacrament_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentListComponent"],
        _broadcast_list_broadcast_list_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastListComponent"],
        _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_6__["AnnouncementListComponent"],
        _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
        _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__["ContactInfoComponent"],
        _missionary_list_missionary_list_component__WEBPACK_IMPORTED_MODULE_9__["MissionaryListComponent"],
        _lesson_list_lesson_list_component__WEBPACK_IMPORTED_MODULE_10__["LessonListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _sacrament_list_sacrament_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentListComponent"],
                    _broadcast_list_broadcast_list_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastListComponent"],
                    _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_6__["AnnouncementListComponent"],
                    _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
                    _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__["ContactInfoComponent"],
                    _missionary_list_missionary_list_component__WEBPACK_IMPORTED_MODULE_9__["MissionaryListComponent"],
                    _lesson_list_lesson_list_component__WEBPACK_IMPORTED_MODULE_10__["LessonListComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "k5ID":
/*!********************************************************************!*\
  !*** ./src/app/features/home/lesson-list/lesson-list.component.ts ***!
  \********************************************************************/
/*! exports provided: LessonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonListComponent", function() { return LessonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class LessonListComponent {
    constructor() { }
    ngOnInit() { }
}
LessonListComponent.ɵfac = function LessonListComponent_Factory(t) { return new (t || LessonListComponent)(); };
LessonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonListComponent, selectors: [["lehi41-lesson-list"]], decls: 2, vars: 0, template: function LessonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lesson-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvbGVzc29uLWxpc3QvbGVzc29uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-lesson-list',
                templateUrl: './lesson-list.component.html',
                styleUrls: ['./lesson-list.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rSg4":
/*!*************************************!*\
  !*** ./src/app/shared/data/data.ts ***!
  \*************************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = {};
DATA.people = {
    memberOfBishopric: { name: 'Member of Bishopric' },
    chorister: { name: 'Ward Chorister' },
    organist: { name: 'Ward Organist' },
    tbd: { name: 'TBD' },
    stakeRepresentative: { name: 'Stake Representative' },
    jasonFaga: { name: 'Jason Faga' },
    gursteenMoeai: { name: 'Gursteen Moeai' },
    jaredAva: { name: 'Jared Ava' },
    samBrown: { name: 'Sam Brown' },
    adamChase: { name: 'Adam Chase' },
    mekeFinau: { name: 'Meke Finau' },
    keliiUnga: { name: 'Kelii Unga' },
    natalieUnga: { name: 'Natalie Unga' },
    saaneQoro: { name: 'Saane Qoro' },
    folauKaveinga: { name: 'Folau Kaveinga' },
    kikiAmosa: { name: 'Kiki Amosa' },
    melekisetekiFetokai: { name: 'Melekiseteki Fetokai' },
    felofiakiFetokai: { name: 'Felofiaki Fetokai' },
    koloFunaki: { name: 'Kolo Funaki' },
    sioneBrown: { name: 'Sione Brown' },
    amberBrown: { name: 'Amber Brown' },
    kaiRaas: { name: 'Kai Raas' },
    patricRipley: { name: 'Patrick Ripley' },
    joshTune: { name: 'Josh Tune' },
    moneAfu: { name: 'Mone Afu' },
    charlotteAfu: { name: 'Charlotte Afu' },
    kelepiFinau: { name: 'Kelepi Finau' },
    carmaBrown: { name: 'Carma Brown' },
    suniaHalafuka: { name: 'Sunia Halafuka' },
    tuaTeriipaia: { name: 'Tua Teriipaia' },
    ionaTeriipaia: { name: 'Iona Teriipaia' },
    rockyKalamafoni: { name: 'Rocky Kalamafoni' },
    mckenzieNeiufi: { name: 'Mckenzie Neiufi' },
};
DATA.addresses = {
    chapel: {
        reference: '220 W 200 S, Lehi, UT 84043',
        link: 'https://goo.gl/maps/UCX6H9QWRjoZPNTt9',
    },
};
DATA.hymns = {
    tbd: {
        title: 'To Be Determined',
        page: 0,
        link: 'null',
    },
    5: {
        title: 'High on the Mountain Top',
        page: 6,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/high-on-the-mountain-top?lang=eng',
    },
    6: {
        title: 'Redeemer of Israel',
        page: 6,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/redeemer-of-israel?lang=eng',
    },
    7: {
        title: 'Israel, Israel, God Is Calling',
        page: 7,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/israel-israel-god-is-calling?lang=eng',
    },
    19: {
        title: 'We Thank Thee, O God, for a Prophet',
        page: 19,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/we-thank-thee-o-god-for-a-prophet?lang=eng',
    },
    27: {
        title: 'Folofola Mai ʻa Sīsū',
        page: 27,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/thus-sayeth-the-lord?lang=ton',
    },
    66: {
        title: 'Rejoice, the Lord Is King!',
        page: 66,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/rejoice-the-lord-is-king?lang=eng',
    },
    83: {
        title: 'Guide Us, O Thou Great Jehovah',
        page: 83,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/guide-us-o-thou-great-jehovah?lang=eng',
    },
    85: {
        title: 'How Firm a Foundation',
        page: 85,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/how-firm-a-foundation?lang=eng',
    },
    136: {
        title: 'I Know That My Redeemer Lives',
        page: 136,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-know-that-my-redeemer-lives?lang=eng',
    },
    169: {
        title: 'As Now We Take the Sacrament',
        page: 169,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/as-now-we-take-the-sacrament?lang=eng',
    },
    187: {
        title: 'Ofa ʻi ʻApi [Love at Home #294]',
        page: 187,
        link: 'https://www.churchofjesuschrist.org/study/manual/hymns/love-at-home?lang=ton',
    },
    194: {
        title: 'There Is a Green Hill Far Away',
        page: 194,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-a-green-hill-far-away?lang=eng',
    },
    227: {
        title: 'There Is Sunshine in My Soul Today',
        page: 227,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-sunshine-in-my-soul-today?lang=eng',
    },
    239: {
        title: 'Choose the Right',
        page: 239,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/choose-the-right?lang=eng',
    },
    294: {
        title: 'Love at Home',
        page: 294,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/love-at-home?lang=eng',
    },
};
DATA.announcements = [
    {
        title: 'Tue 24 Nov - 8:00am - Food Bank',
        date: new Date(2020, 10, 24).toUTCString(),
        description: 'Saratoga Spring 12 Branch Parking Lot, ' +
            '<a href="https://goo.gl/maps/GCA2rMwdfKwQbxZu5" target="_blank">1149 North 300 West Lehi UT 84043</a>, ' +
            '8:00am. If you like to volunteer, be there 7:00am. High Councilor Brother Brigham Johnson Will Provide ' +
            'Instructions',
    },
    {
        title: 'Sat 5 Dec - Primary Baptism',
        date: new Date(2020, 11, 5).toUTCString(),
        description: 'Primary Baptism - <a href="https://goo.gl/maps/3yFKCXzoFB3hzTZN7" target="_blank">Lehi YSA Stake ' +
            'Building 1550 South 1100 West</a>',
    },
    {
        title: 'Sun 6 Dec - Fast Sunday',
        date: new Date(2020, 11, 6).toUTCString(),
        description: '',
    },
    {
        title: 'Sun 6 Dec - 6:00am - First Presidency Christmas Devotional',
        date: new Date(2020, 11, 6).toUTCString(),
        description: 'To view a livestream of the devotional, visit: ' +
            '<a href="https://ChurchofJesusChrist.org" target="_blank">ChurchofJesusChrist.org</a>, ' +
            'BYUtv, Mormon Channel (website, YouTube, mobile app, Roku), Local meetinghouse via Church ' +
            'satellite system',
    },
];
DATA.broadcastLinks = [
    {
        fixed: true,
        active: true,
        label: 'Sunday 10:30am - Sacrament',
        link: 'https://us02web.zoom.us/j/89646695998',
        passcode: '',
        meetingId: '896 4669 5998',
    },
    {
        active: true,
        label: 'Sunday 12:00pm - Relief Society',
        link: 'https://us02web.zoom.us/j/8016280153?pwd=R0xKL0tQTnZhVkV4UFgxR2hlMllXUT09',
        passcode: 'lehifataha',
        meetingId: '801 628 0153',
    },
    {
        fixed: true,
        active: false,
        label: 'Sunday 1:00pm - Sunday School - Tongan - Gospel Doctrine',
        link: 'https://cutt.ly/lehi_41st_sunday_school',
        passcode: '',
        meetingId: '',
    },
    {
        fixed: true,
        active: false,
        label: 'Sunday 1:00pm - Sunday School - English - Gospel Doctrine',
        link: 'https://cutt.ly/lehi_41st_sunday_school',
        passcode: '',
        meetingId: '',
    },
    {
        fixed: true,
        active: false,
        label: 'Sunday 1:00pm - Sunday School - Youth Class',
        link: 'https://cutt.ly/lehi_41st_sunday_school',
        passcode: '',
        meetingId: '',
    },
    {
        active: true,
        label: 'Sunday 1:00pm - Elders Quorum - English Class',
        link: 'https://us02web.zoom.us/j/85978679866?pwd=WEN0UmpZaHpUZjA2V0tlL2UralJtQT09',
        passcode: '505817',
        meetingId: '859 7867 9866',
    },
    {
        active: true,
        label: 'Sunday 1:00pm - Elders Quorum - Tongan Class',
        link: 'https://us04web.zoom.us/j/7511959897?pwd=N1RJSUZDcmdNOG5xcFA1RkVpcXlNdz09',
        passcode: '',
        meetingId: '751 195 9897',
    },
    {
        active: true,
        label: 'Sunday 1:00pm - Young Women Class',
        link: 'https://us05web.zoom.us/j/84536107218?pwd=WTRVRTBxb0NodTZGaWFjRC9NMnl4UT09&fbclid=IwAR34fguFd26GSeID-_EBrTZS9H0vPGZ-h0iuXssrtEuU3jegcdT1Wji2QK4',
        passcode: 'strivetobe',
        meetingId: '845 3610 7218',
    },
    {
        fixed: true,
        active: true,
        label: 'Sunday 1:00pm - Young Men Class',
        link: 'https://lucidsoftware.zoom.us/j/96870131780',
        passcode: '',
        meetingId: '968 7013 1780',
    },
];
DATA.releases = [];
DATA.sustaining = [];
DATA.aaronicPriesthoodAdvancements = [];
DATA.newMembers = [
    {
        name: 'Raass, Maile',
    },
    {
        name: 'Fifita, Ofa',
    },
];
DATA.baptisms = [];
DATA.babyBlessing = [];
DATA.missionaries = [
    {
        name: 'Jarom Brown',
        mission: 'Arizona Temple',
        startDate: new Date(2019, 11, 25),
        endDate: new Date(2021, 11, 15),
        photoUrl: './assets/people/jarom-brown.png',
    },
    {
        name: 'Brooks Maile',
        mission: 'Minnesota Minneapolis',
        startDate: new Date(2019, 8, 21),
        endDate: new Date(2021, 8, 3),
        photoUrl: './assets/people/brooks-maile.png',
    },
    {
        name: 'Peni Mounga',
        mission: 'New Jersey Morristown',
        startDate: new Date(2019, 12, 18),
        endDate: new Date(2022, 1, 4),
        photoUrl: './assets/people/peni-mounga.png',
    },
    {
        name: 'Kaden Nahinu',
        mission: 'California San Diego',
        startDate: new Date(2020, 10, 7),
        endDate: new Date(2022, 10, 11),
        photoUrl: './assets/people/kaden-nahinu.png',
    },
];
DATA.cheatSheet = {
    zoomSession: true,
    sacrament: {
        id: 1,
        date: new Date(2020, 11, 22),
        startTime: '10:30 AM',
        endTime: '11:10 AM',
        address: DATA.addresses.chapel,
        presiding: DATA.people.rockyKalamafoni,
        conducting: DATA.people.rockyKalamafoni,
        chorister: DATA.people.tbd,
        organist: DATA.people.mckenzieNeiufi,
        invocation: DATA.people.tbd,
        openingSong: DATA.hymns['7'],
        sacramentSong: DATA.hymns['194'],
        testimonySunday: false,
        speakers: [
            {
                person: DATA.people.ionaTeriipaia,
                index: 1,
            },
        ],
        closingSong: DATA.hymns['6'],
        benediction: DATA.people.tbd,
    },
    stakeVisitors: [],
    stakeBusinessAssignment: DATA.people.keliiUnga,
    announcements: DATA.announcements,
    releases: DATA.releases,
    sustaining: DATA.sustaining,
    newMembers: DATA.newMembers,
    babyBlessing: DATA.babyBlessing,
    aaronicPriesthoodAdvancements: DATA.aaronicPriesthoodAdvancements,
    baptisms: DATA.baptisms,
};


/***/ }),

/***/ "ud7l":
/*!**************************************************************************!*\
  !*** ./src/app/features/home/sacrament-list/sacrament-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: SacramentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacramentListComponent", function() { return SacramentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



class SacramentListComponent {
    constructor() { }
    ngOnInit() { }
}
SacramentListComponent.ɵfac = function SacramentListComponent_Factory(t) { return new (t || SacramentListComponent)(); };
SacramentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SacramentListComponent, selectors: [["lehi41-sacrament-list"]], decls: 33, vars: 2, consts: [[1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-blessers-wear-mask.jpg", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-user-friends"], [1, "ml-4", "mt-2", "w-100"], [1, "h6", "font-weight-bold"], [1, "text-right", "w-100"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "fas", "fa-tv"]], template: function SacramentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sacrament Programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " In Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This program is meant for those attending the session in person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Broadcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This program is meant for those watching the broadcast from home via an online medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sacrament/in-person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sacrament/broadcast");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvc2FjcmFtZW50LWxpc3Qvc2FjcmFtZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SacramentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-sacrament-list',
                templateUrl: './sacrament-list.component.html',
                styleUrls: ['./sacrament-list.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "umAq":
/*!****************************************************************************!*\
  !*** ./src/app/features/home/missionary-list/missionary-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: MissionaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionaryListComponent", function() { return MissionaryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function MissionaryListComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const missionary_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", missionary_r1.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](missionary_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", missionary_r1.mission, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, missionary_r1.startDate), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, missionary_r1.endDate), " ");
} }
class MissionaryListComponent {
}
MissionaryListComponent.ɵfac = function MissionaryListComponent_Factory(t) { return new (t || MissionaryListComponent)(); };
MissionaryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MissionaryListComponent, selectors: [["lehi41-missionary-list"]], inputs: { missionaries: "missionaries" }, decls: 7, vars: 1, consts: [[1, "card", "border-light"], ["src", "./assets/images/missionaries-riding-bikes.jpeg", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-2 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-2", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], ["alt", "", 1, "photo", "mr-3", 3, "src"]], template: function MissionaryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Serving Full Time Missionaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MissionaryListComponent_li_6_Template, 12, 9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.missionaries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY2xpZW50L3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9taXNzaW9uYXJ5LWxpc3QvbWlzc2lvbmFyeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy9jbGllbnQvc3JjL2FwcC9mZWF0dXJlcy9ob21lL21pc3Npb25hcnktbGlzdC9taXNzaW9uYXJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogODBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MissionaryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-missionary-list',
                templateUrl: './missionary-list.component.html',
                styleUrls: ['./missionary-list.component.scss'],
            }]
    }], null, { missionaries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=features-home-home-module.js.map