(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_zoom_sacrament_meeting_page_zoom_sacrament_meeting_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component */ "./src/app/pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
    },
    {
        path: 'cheat-sheet',
        component: _pages_zoom_sacrament_meeting_page_zoom_sacrament_meeting_page_component__WEBPACK_IMPORTED_MODULE_4__["ZoomSacramentMeetingPageComponent"]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    // {
    //   path: 'cheat-sheet',
    //   component: CheatSheetPageComponent
    // },
    // {
    //   path: 'safety-tips',
    //   component: SafetyTipsPageComponent
    // },
    // {
    //   path: 'sacrament-program/:id',
    //   component: SacramentProgramPageComponent
    // },
    {
        path: '**',
        component: _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <router-outlet></router-outlet>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_sacrament_program_page_sacrament_program_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sacrament-program-page/sacrament-program-page.component */ "./src/app/pages/sacrament-program-page/sacrament-program-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts");
/* harmony import */ var _pages_safety_tips_page_safety_tips_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/safety-tips-page/safety-tips-page.component */ "./src/app/pages/safety-tips-page/safety-tips-page.component.ts");
/* harmony import */ var _pages_cheat_sheet_page_cheat_sheet_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/cheat-sheet-page/cheat-sheet-page.component */ "./src/app/pages/cheat-sheet-page/cheat-sheet-page.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_testimony_meeting_page_testimony_meeting_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/testimony-meeting-page/testimony-meeting-page.component */ "./src/app/pages/testimony-meeting-page/testimony-meeting-page.component.ts");
/* harmony import */ var _pages_zoom_sacrament_meeting_page_zoom_sacrament_meeting_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component */ "./src/app/pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component.ts");
/* harmony import */ var _pages_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/meetings/meetings.component */ "./src/app/pages/meetings/meetings.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundPageComponent"],
        _pages_sacrament_program_page_sacrament_program_page_component__WEBPACK_IMPORTED_MODULE_6__["SacramentProgramPageComponent"],
        _pages_safety_tips_page_safety_tips_page_component__WEBPACK_IMPORTED_MODULE_8__["SafetyTipsPageComponent"],
        _pages_cheat_sheet_page_cheat_sheet_page_component__WEBPACK_IMPORTED_MODULE_9__["CheatSheetPageComponent"],
        _pages_testimony_meeting_page_testimony_meeting_page_component__WEBPACK_IMPORTED_MODULE_11__["TestimonyMeetingPageComponent"],
        _pages_zoom_sacrament_meeting_page_zoom_sacrament_meeting_page_component__WEBPACK_IMPORTED_MODULE_12__["ZoomSacramentMeetingPageComponent"],
        _pages_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_13__["MeetingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundPageComponent"],
                    _pages_sacrament_program_page_sacrament_program_page_component__WEBPACK_IMPORTED_MODULE_6__["SacramentProgramPageComponent"],
                    _pages_safety_tips_page_safety_tips_page_component__WEBPACK_IMPORTED_MODULE_8__["SafetyTipsPageComponent"],
                    _pages_cheat_sheet_page_cheat_sheet_page_component__WEBPACK_IMPORTED_MODULE_9__["CheatSheetPageComponent"],
                    _pages_testimony_meeting_page_testimony_meeting_page_component__WEBPACK_IMPORTED_MODULE_11__["TestimonyMeetingPageComponent"],
                    _pages_zoom_sacrament_meeting_page_zoom_sacrament_meeting_page_component__WEBPACK_IMPORTED_MODULE_12__["ZoomSacramentMeetingPageComponent"],
                    _pages_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_13__["MeetingsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/cheat-sheet-page/cheat-sheet-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cheat-sheet-page/cheat-sheet-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CheatSheetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetPageComponent", function() { return CheatSheetPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/cheat-sheet/cheat-sheet.component */ "./src/app/shared/components/cheat-sheet/cheat-sheet.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class CheatSheetPageComponent {
}
CheatSheetPageComponent.ɵfac = function CheatSheetPageComponent_Factory(t) { return new (t || CheatSheetPageComponent)(); };
CheatSheetPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatSheetPageComponent, selectors: [["app-cheat-sheet-page"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function CheatSheetPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cheat-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_2__["CheatSheetComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatSheetPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheat-sheet-page',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <app-cheat-sheet></app-cheat-sheet>
    </div>
    <app-footer></app-footer>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/announcement-list/announcement-list.component */ "./src/app/shared/components/announcement-list/announcement-list.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-announcement-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementListComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
<!--      <app-sacrament-program-list></app-sacrament-program-list>-->
      <app-announcement-list></app-announcement-list>
<!--      <app-zoom-list></app-zoom-list>-->
    </div>
    <app-footer></app-footer>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class LoginComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    login() {
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/home');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 1, consts: [[1, "l41-container", "pt-4", "mrg-horizon-auto"], [3, "formGroup", "ngSubmit"], [1, "mt-4", "mb-4", "text-center"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], [1, "form-group"], ["type", "text", "formControlName", "username", "id", "user-username", "aria-describedby", "usernameHelp", "placeholder", "Username", 1, "form-control"], ["type", "password", "id", "user-password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-secondary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lehi Fataha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["form[_ngcontent-%COMP%] { max-width: 300px; margin: 0 auto;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                styles: ['form { max-width: 300px; margin: 0 auto;}'],
                template: `
    <div class="l41-container pt-4 mrg-horizon-auto">
      <form [formGroup]="loginForm" (ngSubmit)="login()">
        <section class="mt-4 mb-4 text-center">
          <img src="./assets/logo.png" class="logo">
          <span class="ml-2">Lehi Fataha</span>
        </section>

        <div class="form-group">
          <input
            type="text"
            formControlName="username"
            class="form-control"
            id="user-username"
            aria-describedby="usernameHelp"
            placeholder="Username">
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="user-password"
            formControlName="password"
            placeholder="Password">
        </div>
        <div class="form-group text-right">
          <button type="submit" class="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/meetings/meetings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/meetings/meetings.component.ts ***!
  \******************************************************/
/*! exports provided: MeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function() { return MeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");




class MeetingsComponent {
}
MeetingsComponent.ɵfac = function MeetingsComponent_Factory(t) { return new (t || MeetingsComponent)(); };
MeetingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsComponent, selectors: [["app-meetings"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function MeetingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXRpbmdzL21lZXRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings',
                styleUrls: ['./meetings.component.scss'],
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      hello
    </div>
    <app-footer></app-footer>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-not-found-page/page-not-found-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPageComponent", function() { return PageNotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundPageComponent {
}
PageNotFoundPageComponent.ɵfac = function PageNotFoundPageComponent_Factory(t) { return new (t || PageNotFoundPageComponent)(); };
PageNotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundPageComponent, selectors: [["app-page-not-found"]], decls: 1, vars: 0, template: function PageNotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Page Not Found ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                template: `
    Page Not Found
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sacrament-program-page/sacrament-program-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/sacrament-program-page/sacrament-program-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SacramentProgramPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacramentProgramPageComponent", function() { return SacramentProgramPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/sacrament-program/sacrament-program.component */ "./src/app/shared/components/sacrament-program/sacrament-program.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");







class SacramentProgramPageComponent {
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.program = _shared_data__WEBPACK_IMPORTED_MODULE_1__["SACRAMENT_PROGRAMS"].filter(p => p.id === Math.floor(this.actRoute.snapshot.params.id))[0];
    }
}
SacramentProgramPageComponent.ɵfac = function SacramentProgramPageComponent_Factory(t) { return new (t || SacramentProgramPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SacramentProgramPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SacramentProgramPageComponent, selectors: [["app-sacrament-program-page"]], decls: 4, vars: 1, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"], [3, "program"]], template: function SacramentProgramPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sacrament-program", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("program", ctx.program);
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _shared_components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_4__["SacramentProgramComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SacramentProgramPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sacrament-program-page',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <app-sacrament-program [program]="program"></app-sacrament-program>
    </div>
    <app-footer></app-footer>
  `
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/safety-tips-page/safety-tips-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/safety-tips-page/safety-tips-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: SafetyTipsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyTipsPageComponent", function() { return SafetyTipsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/safe-sacrament/safe-sacrament.component */ "./src/app/shared/components/safe-sacrament/safe-sacrament.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class SafetyTipsPageComponent {
}
SafetyTipsPageComponent.ɵfac = function SafetyTipsPageComponent_Factory(t) { return new (t || SafetyTipsPageComponent)(); };
SafetyTipsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SafetyTipsPageComponent, selectors: [["app-safty-tips-page"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function SafetyTipsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-safe-sacrament");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_2__["SafeSacramentComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafetyTipsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-safty-tips-page',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <app-safe-sacrament></app-safe-sacrament>
    </div>
    <app-footer></app-footer>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/testimony-meeting-page/testimony-meeting-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/testimony-meeting-page/testimony-meeting-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TestimonyMeetingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyMeetingPageComponent", function() { return TestimonyMeetingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component */ "./src/app/shared/components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class TestimonyMeetingPageComponent {
}
TestimonyMeetingPageComponent.ɵfac = function TestimonyMeetingPageComponent_Factory(t) { return new (t || TestimonyMeetingPageComponent)(); };
TestimonyMeetingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonyMeetingPageComponent, selectors: [["app-testimony-meeting-page"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function TestimonyMeetingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cheat-sheet-zoom-testimory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_2__["CheatSheetZoomTestimonyComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonyMeetingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimony-meeting-page',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <app-cheat-sheet-zoom-testimory></app-cheat-sheet-zoom-testimory>
    </div>
    <app-footer></app-footer>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/zoom-sacrament-meeting-page/zoom-sacrament-meeting-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ZoomSacramentMeetingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomSacramentMeetingPageComponent", function() { return ZoomSacramentMeetingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _shared_components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component */ "./src/app/shared/components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class ZoomSacramentMeetingPageComponent {
}
ZoomSacramentMeetingPageComponent.ɵfac = function ZoomSacramentMeetingPageComponent_Factory(t) { return new (t || ZoomSacramentMeetingPageComponent)(); };
ZoomSacramentMeetingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomSacramentMeetingPageComponent, selectors: [["app-zoom-sacrament-meeting-page"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function ZoomSacramentMeetingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cheat-sheet-zoom-sacrament");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _shared_components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_2__["CheatSheetZoomSacramentComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomSacramentMeetingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoom-sacrament-meeting-page',
                template: `
    <app-navigation></app-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <app-cheat-sheet-zoom-sacrament></app-cheat-sheet-zoom-sacrament>
    </div>
    <app-footer></app-footer>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/announcement-list/announcement-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/announcement-list/announcement-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnnouncementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementListComponent", function() { return AnnouncementListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AnnouncementListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Link: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zoomItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", zoomItem_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", zoomItem_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zoomItem_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MeetingId: ", zoomItem_r2.meetingId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Passcode: ", zoomItem_r2.passcode, " ");
} }
function AnnouncementListComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const announcement_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, announcement_r3.date, "d MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", announcement_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r3.description);
} }
class AnnouncementListComponent {
    constructor() {
        this.announcementList = _data__WEBPACK_IMPORTED_MODULE_1__["ANNOUNCEMENTS"];
        this.zoomList = _data__WEBPACK_IMPORTED_MODULE_1__["ZOOM_LINKS"];
    }
}
AnnouncementListComponent.ɵfac = function AnnouncementListComponent_Factory(t) { return new (t || AnnouncementListComponent)(); };
AnnouncementListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnnouncementListComponent, selectors: [["app-announcement-list"]], decls: 13, vars: 2, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-seating-01.jpg", "alt", "Announcements Thumbnail", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-calendar-day"], [1, "ml-4", "mt-2"], [1, "h6", "font-weight-bold"], [3, "href"], [1, "text-uppercase", "font-weight-bold", "font-size-10"]], template: function AnnouncementListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Meeting Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AnnouncementListComponent_li_8_Template, 16, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Announcements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AnnouncementListComponent_li_12_Template, 13, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zoomList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcementList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-announcement-list',
                template: `
    <div class="row mb-4">
      <div class="col-12">

        <div class="card border-light">
          <img class="card-img-top l41-img-thumbnail" src="./assets/images/safe-sacrament/sacrament-seating-01.jpg"
               alt="Announcements Thumbnail">
          <div class="card-body">

            <h1 class="h4">Meeting Links</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item ml-0 pl-0 mr-0 pr-0" *ngFor="let zoomItem of zoomList">

                <div class="d-flex justify-content-start">
                  <div class="text-center">
                    <div class="fa-3x">
                      <i class="fas fa-calendar-day"></i>
                    </div>
                  </div>
                  <div class="ml-4 mt-2">
                    <h2 class="h6 font-weight-bold">
                      {{ zoomItem.label }}
                    </h2>
                    <p>
                      Link: <a href="{{ zoomItem.link}}">{{ zoomItem.link }}</a><br/>
                      MeetingId: {{ zoomItem.meetingId }}<br/>
                      Passcode: {{ zoomItem.passcode }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <h1 class="h4">Announcements</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item ml-0 pl-0 mr-0 pr-0" *ngFor="let announcement of announcementList">

                <div class="d-flex justify-content-start">
                  <div class="text-center">
                    <div class="fa-3x">
                      <i class="fas fa-calendar-day"></i>
                    </div>
                    <span
                      class="text-uppercase font-weight-bold font-size-10">{{ announcement.date | date : 'd MMM' }}</span>
                  </div>
                  <div class="ml-4 mt-2">
                    <h2 class="h6 font-weight-bold">
                      {{ announcement.title }}
                    </h2>
                    <p>{{ announcement.description }}</p>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CheatSheetZoomSacramentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetZoomSacramentComponent", function() { return CheatSheetZoomSacramentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CheatSheetZoomSacramentComponent_div_0_section_46_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const announcement_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r9.description);
} }
function CheatSheetZoomSacramentComponent_div_0_section_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Announcements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheatSheetZoomSacramentComponent_div_0_section_46_li_4_Template, 6, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cheatSheet.announcements);
} }
function CheatSheetZoomSacramentComponent_div_0_section_47_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r11.calling);
} }
function CheatSheetZoomSacramentComponent_div_0_section_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Releases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We would like to release the following members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomSacramentComponent_div_0_section_47_li_6_Template, 6, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service. Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand. [No dissenting vote is called for.] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cheatSheet.releases);
} }
function CheatSheetZoomSacramentComponent_div_0_section_48_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r13.calling);
} }
function CheatSheetZoomSacramentComponent_div_0_section_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sustainings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (If they are here) will the following please stand to be recognized, and remain standing while their names are presented. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomSacramentComponent_div_0_section_48_li_6_Template, 6, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted hand. [Pause for vote.] Those opposed, if any, may manifest it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cheatSheet.sustainings);
} }
function CheatSheetZoomSacramentComponent_div_0_section_49_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r15.name);
} }
function CheatSheetZoomSacramentComponent_div_0_section_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move In Members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following new members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomSacramentComponent_div_0_section_49_li_6_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.cheatSheet.newMembers);
} }
function CheatSheetZoomSacramentComponent_div_0_section_50_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r17.name);
} }
function CheatSheetZoomSacramentComponent_div_0_section_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Baptisms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following newly baptised members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomSacramentComponent_div_0_section_50_li_6_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.cheatSheet.baptisms);
} }
function CheatSheetZoomSacramentComponent_div_0_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stake Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We now turn the time over to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to conduct some stake business. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cheatSheet.stakeBusinessAssignment.name);
} }
function CheatSheetZoomSacramentComponent_div_0_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", speaker_r18.person.name, " ");
} }
function CheatSheetZoomSacramentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zoom Sacrament Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning. We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Presiding today is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We wish to recognize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Other members of the Bishopric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Members of the Stake");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " I am ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ", and I will be conducting this meeting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Opening Hymn & Prayer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " We will open our services by singing hymn, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Following the singing, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " has been invited to give the opening prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ward Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CheatSheetZoomSacramentComponent_div_0_section_46_Template, 5, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CheatSheetZoomSacramentComponent_div_0_section_47_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CheatSheetZoomSacramentComponent_div_0_section_48_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CheatSheetZoomSacramentComponent_div_0_section_49_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CheatSheetZoomSacramentComponent_div_0_section_50_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CheatSheetZoomSacramentComponent_div_0_div_51_Template, 9, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Speakers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CheatSheetZoomSacramentComponent_div_0_li_57_Template, 2, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Closing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " We will close our meeting by singing: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ". Following the singing, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " has been invited to give the closing prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.presiding.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.conducting.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.openingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.openingSong.title, " (", ctx_r0.cheatSheet.sacrament.openingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.invocation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.announcements);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.releases && ctx_r0.cheatSheet.releases.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.sustainings && ctx_r0.cheatSheet.sustainings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.newMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.baptisms.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.stakeBusinessAssignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cheatSheet.sacrament.speakers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.closingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.closingSong.title, " (", ctx_r0.cheatSheet.sacrament.closingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.benediction.name);
} }
class CheatSheetZoomSacramentComponent {
    constructor() {
        this.cheatSheet = _data__WEBPACK_IMPORTED_MODULE_1__["CHEAT_SHEETS"][3];
    }
}
CheatSheetZoomSacramentComponent.ɵfac = function CheatSheetZoomSacramentComponent_Factory(t) { return new (t || CheatSheetZoomSacramentComponent)(); };
CheatSheetZoomSacramentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatSheetZoomSacramentComponent, selectors: [["app-cheat-sheet-zoom-sacrament"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "mb-2", "mt-2"], [1, "h2", "mb-0"], [1, "col-12", "mt-2"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "highlight"], ["target", "_blank", 1, "highlight", 3, "href"], [4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "h6"]], template: function CheatSheetZoomSacramentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheatSheetZoomSacramentComponent_div_0_Template, 70, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cheatSheet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".highlight[_ngcontent-%COMP%] { color: #b8323e;}", ".assignment[_ngcontent-%COMP%] {color: darkgreen;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatSheetZoomSacramentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheat-sheet-zoom-sacrament',
                styles: [
                    '.highlight { color: #b8323e;}',
                    '.assignment {color: darkgreen;}'
                ],
                template: `
    <div class="row" *ngIf="cheatSheet">
      <div class="col-12 mb-2 mt-2">
        <h1 class="h2 mb-0">Zoom Sacrament Meeting</h1>
      </div>
      <div class="col-12 mt-2">

        <div class="card mb-4">
          <div class="card-header">Welcome:</div>
          <div class="card-body">
            <p>
              Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning.
              We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us.
            </p>

            <p>
              Presiding today is <span class="highlight">{{ cheatSheet.sacrament.presiding.name }}</span>.
            </p>

            <p>We wish to recognize:</p>
            <ul>
              <li><span class="highlight">Other members of the Bishopric</span></li>
              <li><span class="highlight">Members of the Stake</span></li>
            </ul>

            <p>
              I am <span class="highlight">{{ cheatSheet.sacrament.conducting.name }}</span>, and I will be conducting
              this meeting.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Opening Hymn & Prayer:</div>
          <div class="card-body">
            <p>
              We will open our services by singing hymn,
              <a class="highlight" [href]="cheatSheet.sacrament.openingSong.link" target="_blank">
                {{ cheatSheet.sacrament.openingSong.title}} ({{ cheatSheet.sacrament.openingSong.page}})
              </a>Following the singing,
              <span class="highlight">{{cheatSheet.sacrament.invocation.name}}</span> has been invited to give the
              opening prayer.
            </p>
          </div>
        </div>

        <!-- WARD BUSINESS -->
        <div class="card mb-4">
          <div class="card-header">Ward Business:</div>
          <div class="card-body">

            <!-- WARD BUSINESS: Announcements -->
            <section *ngIf="cheatSheet.announcements">
              <h3 class="h6">Announcements:</h3>
              <ul class="highlight">
                <li *ngFor="let announcement of cheatSheet.announcements">
                  <span>{{ announcement.title }}</span><br/>
                  <small>{{ announcement.description }}</small>
                </li>
              </ul>
            </section>

            <!-- WARD BUSINESS: Releases -->
            <section *ngIf="cheatSheet.releases && cheatSheet.releases.length">
              <h3 class="h6">Releases:</h3>
              <p>We would like to release the following members:</p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.releases">
                  <span>{{ person.name }}</span><br/>
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service.
                Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand.
                [No dissenting vote is called for.]
              </p>
            </section>

            <!-- WARD BUSINESS: Sustainings -->
            <section *ngIf="cheatSheet.sustainings && cheatSheet.sustainings.length">
              <h3 class="h6">Sustainings:</h3>
              <p>
                (If they are here) will the following please stand to be recognized, and remain standing
                while their names are presented.
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.sustainings">
                  <span>{{ person.name }}</span><br/>
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted
                hand. [Pause for vote.] Those opposed, if any, may manifest it.
              </p>
            </section>

            <!-- WARD BUSINESS: Move Ins -->
            <section *ngIf="cheatSheet.newMembers && cheatSheet.newMembers.length">
              <h3 class="h6">Move In Members:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following new members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.newMembers">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>

            <!-- WARD BUSINESS: Baptisms -->
            <section *ngIf="cheatSheet.newMembers && cheatSheet.baptisms.length">
              <h3 class="h6">Baptisms:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following newly baptised members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.baptisms">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>

          </div>
        </div>

        <div class="card mb-4" *ngIf="cheatSheet.stakeBusinessAssignment">
          <div class="card-header">Stake Business:</div>
          <div class="card-body">
            <p>
              We now turn the time over to <span class="highlight">{{ cheatSheet.stakeBusinessAssignment.name }}</span>
              to conduct some stake business.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Speakers:</div>
          <div class="card-body">
            <ul class="highlight">
              <li *ngFor="let speaker of cheatSheet.sacrament.speakers">
                {{ speaker.person.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Closing:</div>
          <div class="card-body">
            <p>
              We will close our meeting by singing:
              <a class="highlight" [href]="cheatSheet.sacrament.closingSong.link" target="_blank">
                {{ cheatSheet.sacrament.closingSong.title}} ({{ cheatSheet.sacrament.closingSong.page}})
              </a>. Following the singing, <span class="highlight">{{ cheatSheet.sacrament.benediction.name}}</span>
              has been invited to give the closing prayer.
            </p>
          </div>
        </div>

      </div>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CheatSheetZoomTestimonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetZoomTestimonyComponent", function() { return CheatSheetZoomTestimonyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CheatSheetZoomTestimonyComponent_div_0_section_46_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r7.calling);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Releases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We would like to release the following members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomTestimonyComponent_div_0_section_46_li_6_Template, 6, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service. Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand. [No dissenting vote is called for.] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cheatSheet.releases);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_47_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r9.calling);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sustainings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (If they are here) will the following please stand to be recognized, and remain standing while their names are presented. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomTestimonyComponent_div_0_section_47_li_6_Template, 6, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted hand. [Pause for vote.] Those opposed, if any, may manifest it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cheatSheet.sustainings);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_48_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r11.name);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move In Members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following new members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomTestimonyComponent_div_0_section_48_li_6_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cheatSheet.newMembers);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_49_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r13.name);
} }
function CheatSheetZoomTestimonyComponent_div_0_section_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Baptisms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following newly baptised members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetZoomTestimonyComponent_div_0_section_49_li_6_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.cheatSheet.baptisms);
} }
function CheatSheetZoomTestimonyComponent_div_0_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stake Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We now turn the time over to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to conduct some stake business. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.cheatSheet.stakeBusinessAssignment.name);
} }
function CheatSheetZoomTestimonyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zoom Testimony Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning. We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Presiding today is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We wish to recognize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Other members of the Bishopric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Members of the Stake");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " I am ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ", and I will be conducting this meeting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Opening Hymn & Prayer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " We will open our services by singing hymn, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Following the singing, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " has been invited to give the opening prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ward Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CheatSheetZoomTestimonyComponent_div_0_section_46_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CheatSheetZoomTestimonyComponent_div_0_section_47_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CheatSheetZoomTestimonyComponent_div_0_section_48_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CheatSheetZoomTestimonyComponent_div_0_section_49_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CheatSheetZoomTestimonyComponent_div_0_div_50_Template, 9, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Testimony Program:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Testimonies by Members of the Congregation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Closing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " We will close our meeting by singing: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ". Following the singing, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " has been invited to give the closing prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.presiding.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.conducting.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.openingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.openingSong.title, " (", ctx_r0.cheatSheet.sacrament.openingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.invocation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.releases && ctx_r0.cheatSheet.releases.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.sustainings && ctx_r0.cheatSheet.sustainings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.newMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.baptisms.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.stakeBusinessAssignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.closingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.closingSong.title, " (", ctx_r0.cheatSheet.sacrament.closingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.benediction.name);
} }
class CheatSheetZoomTestimonyComponent {
    constructor() {
        this.cheatSheet = _data__WEBPACK_IMPORTED_MODULE_1__["CHEAT_SHEETS"][3];
    }
}
CheatSheetZoomTestimonyComponent.ɵfac = function CheatSheetZoomTestimonyComponent_Factory(t) { return new (t || CheatSheetZoomTestimonyComponent)(); };
CheatSheetZoomTestimonyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatSheetZoomTestimonyComponent, selectors: [["app-cheat-sheet-zoom-testimory"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "mb-2", "mt-2"], [1, "h2", "mb-0"], [1, "col-12", "mt-2"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "highlight"], ["target", "_blank", 1, "highlight", 3, "href"], [4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], [1, "h6"], [4, "ngFor", "ngForOf"]], template: function CheatSheetZoomTestimonyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheatSheetZoomTestimonyComponent_div_0_Template, 69, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cheatSheet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".highlight[_ngcontent-%COMP%] { color: #b8323e;}", ".assignment[_ngcontent-%COMP%] {color: darkgreen;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatSheetZoomTestimonyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheat-sheet-zoom-testimory',
                styles: [
                    '.highlight { color: #b8323e;}',
                    '.assignment {color: darkgreen;}'
                ],
                template: `
    <div class="row" *ngIf="cheatSheet">
      <div class="col-12 mb-2 mt-2">
        <h1 class="h2 mb-0">Zoom Testimony Meeting</h1>
      </div>
      <div class="col-12 mt-2">

        <div class="card mb-4">
          <div class="card-header">Welcome:</div>
          <div class="card-body">
            <p>
              Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning.
              We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us.
            </p>

            <p>
              Presiding today is <span class="highlight">{{ cheatSheet.sacrament.presiding.name }}</span>.
            </p>

            <p>We wish to recognize:</p>
            <ul>
              <li><span class="highlight">Other members of the Bishopric</span></li>
              <li><span class="highlight">Members of the Stake</span></li>
            </ul>

            <p>
              I am <span class="highlight">{{ cheatSheet.sacrament.conducting.name }}</span>, and I will be conducting
              this meeting.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Opening Hymn & Prayer:</div>
          <div class="card-body">
            <p>
              We will open our services by singing hymn,
              <a class="highlight" [href]="cheatSheet.sacrament.openingSong.link" target="_blank">
                {{ cheatSheet.sacrament.openingSong.title}} ({{ cheatSheet.sacrament.openingSong.page}})
              </a>Following the singing,
              <span class="highlight">{{cheatSheet.sacrament.invocation.name}}</span> has been invited to give the
              opening prayer.
            </p>
          </div>
        </div>

        <!-- WARD BUSINESS -->
        <div class="card mb-4">
          <div class="card-header">Ward Business:</div>
          <div class="card-body">

            <!-- WARD BUSINESS: Releases -->
            <section *ngIf="cheatSheet.releases && cheatSheet.releases.length">
              <h3 class="h6">Releases:</h3>
              <p>We would like to release the following members:</p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.releases">
                  <span>{{ person.name }}</span><br/>
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service.
                Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand.
                [No dissenting vote is called for.]
              </p>
            </section>

            <!-- WARD BUSINESS: Sustainings -->
            <section *ngIf="cheatSheet.sustainings && cheatSheet.sustainings.length">
              <h3 class="h6">Sustainings:</h3>
              <p>
                (If they are here) will the following please stand to be recognized, and remain standing
                while their names are presented.
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.sustainings">
                  <span>{{ person.name }}</span><br/>
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted
                hand. [Pause for vote.] Those opposed, if any, may manifest it.
              </p>
            </section>

            <!-- WARD BUSINESS: Move Ins -->
            <section *ngIf="cheatSheet.newMembers && cheatSheet.newMembers.length">
              <h3 class="h6">Move In Members:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following new members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.newMembers">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>

            <!-- WARD BUSINESS: Baptisms -->
            <section *ngIf="cheatSheet.newMembers && cheatSheet.baptisms.length">
              <h3 class="h6">Baptisms:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following newly baptised members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.baptisms">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>

          </div>
        </div>

        <div class="card mb-4" *ngIf="cheatSheet.stakeBusinessAssignment">
          <div class="card-header">Stake Business:</div>
          <div class="card-body">
            <p>
              We now turn the time over to <span class="highlight">{{ cheatSheet.stakeBusinessAssignment.name }}</span>
              to conduct some stake business.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Testimony Program:</div>
          <div class="card-body">
            <p>Testimonies by Members of the Congregation</p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Closing:</div>
          <div class="card-body">
            <p>
              We will close our meeting by singing:
              <a class="highlight" [href]="cheatSheet.sacrament.closingSong.link" target="_blank">
                {{ cheatSheet.sacrament.closingSong.title}} ({{ cheatSheet.sacrament.closingSong.page}})
              </a>. Following the singing, <span class="highlight">{{ cheatSheet.sacrament.benediction.name}}</span>
              has been invited to give the closing prayer.
            </p>
          </div>
        </div>

      </div>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/cheat-sheet/cheat-sheet.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/cheat-sheet/cheat-sheet.component.ts ***!
  \************************************************************************/
/*! exports provided: CheatSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatSheetComponent", function() { return CheatSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CheatSheetComponent_div_0_section_56_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r8.calling);
} }
function CheatSheetComponent_div_0_section_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Releases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We would like to release the following members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetComponent_div_0_section_56_li_6_Template, 6, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service. Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand. [No dissenting vote is called for.] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cheatSheet.releases);
} }
function CheatSheetComponent_div_0_section_57_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r10.calling);
} }
function CheatSheetComponent_div_0_section_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sustainings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (If they are here) will the following please stand to be recognized, and remain standing while their names are presented. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetComponent_div_0_section_57_li_6_Template, 6, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted hand. [Pause for vote.] Those opposed, if any, may manifest it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cheatSheet.sustainings);
} }
function CheatSheetComponent_div_0_section_58_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r12.name);
} }
function CheatSheetComponent_div_0_section_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move In Members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following new members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetComponent_div_0_section_58_li_6_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cheatSheet.newMembers);
} }
function CheatSheetComponent_div_0_section_59_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r14.name);
} }
function CheatSheetComponent_div_0_section_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Baptisms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If they are here, will the following please stand to be recognized while their names are presented. It is proposed that we welcome the following newly baptised members to the ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheatSheetComponent_div_0_section_59_li_6_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Those wishing to join with us in doing so may manifest it by the uplifted hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.cheatSheet.baptisms);
} }
function CheatSheetComponent_div_0_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stake Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We now turn the time over to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to conduct some stake business. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.cheatSheet.stakeBusinessAssignment);
} }
function CheatSheetComponent_div_0_li_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r15.person.name);
} }
function CheatSheetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cheat Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning. We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Presiding today is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We wish to recognize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Other members of the Bishopric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Members of the Stake");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "who are all seated up here on the stand.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I am ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", and I will be conducting this meeting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Opening Hymn & Prayer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " We will open our services by singing hymn, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " will be our chorister, and");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " will be our organist. Following the singing,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " has been invited to give the opening prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ward Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CheatSheetComponent_div_0_section_56_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CheatSheetComponent_div_0_section_57_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CheatSheetComponent_div_0_section_58_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CheatSheetComponent_div_0_section_59_Template, 9, 1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CheatSheetComponent_div_0_div_60_Template, 9, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Other Business:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Baby blessings etc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sacrament Administration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " We will now prepare for the sacrament by singing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Following the singing, the sacrament will be administered to the congregation by the priesthood. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "[Hymn & Sacrament]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " We would like to thank the priesthood for administering the sacrament. We now excuse them to sit with their families. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sacrament Speakers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Today we will be honored to hear from the following speakers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, CheatSheetComponent_div_0_li_89_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Closing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " We will close our meeting by singing: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Following the singing, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " has been invited to give the closing prayer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.presiding.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.conducting.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.openingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.openingSong.title, " (", ctx_r0.cheatSheet.sacrament.openingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.chorister.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.organist.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.invocation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.releases && ctx_r0.cheatSheet.releases.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.sustainings && ctx_r0.cheatSheet.sustainings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.newMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.newMembers && ctx_r0.cheatSheet.newMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cheatSheet.stakeBusinessAssignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.sacramentSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.sacramentSong.title, " (", ctx_r0.cheatSheet.sacrament.sacramentSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cheatSheet.sacrament.speakers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.cheatSheet.sacrament.closingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cheatSheet.sacrament.closingSong.title, " (", ctx_r0.cheatSheet.sacrament.closingSong.page, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cheatSheet.sacrament.benediction.name);
} }
class CheatSheetComponent {
    constructor() {
        this.cheatSheet = _data__WEBPACK_IMPORTED_MODULE_1__["CHEAT_SHEETS"][0];
    }
}
CheatSheetComponent.ɵfac = function CheatSheetComponent_Factory(t) { return new (t || CheatSheetComponent)(); };
CheatSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatSheetComponent, selectors: [["app-cheat-sheet"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "mb-2", "mt-2"], [1, "h2", "mb-0"], [1, "col-12", "mt-2"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "highlight"], ["target", "_blank", 1, "highlight", 3, "href"], [4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "h6"]], template: function CheatSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheatSheetComponent_div_0_Template, 103, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cheatSheet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".highlight[_ngcontent-%COMP%] { color: #b8323e;}", ".assignment[_ngcontent-%COMP%] {color: darkgreen;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheat-sheet',
                styles: [
                    '.highlight { color: #b8323e;}',
                    '.assignment {color: darkgreen;}'
                ],
                template: `
    <div class="row" *ngIf="cheatSheet">
      <div class="col-12 mb-2 mt-2">
        <h1 class="h2 mb-0">Cheat Sheet</h1>
      </div>
      <div class="col-12 mt-2">

        <div class="card mb-4">
          <div class="card-header">Welcome:</div>
          <div class="card-body">
            <p>
              Malo e lelei and Talofa Brothers and Sisters. Thank you for being here this morning.
              We welcome those who are visiting us today. We pray that the Spirit of the Lord will be with us.
            </p>

            <p>
              Presiding today is <span class="highlight">{{ cheatSheet.sacrament.presiding.name }}</span>.
            </p>

            <p>We wish to recognize:</p>
            <ul>
              <li><span class="highlight">Other members of the Bishopric</span></li>
              <li><span class="highlight">Members of the Stake</span></li>
            </ul>
            <p>who are all seated up here on the stand.</p>

            <p>
              I am <span class="highlight">{{ cheatSheet.sacrament.conducting.name }}</span>, and I will be conducting this meeting.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Opening Hymn & Prayer:</div>
          <div class="card-body">
            <p>
              We will open our services by singing hymn,
              <a class="highlight" [href]="cheatSheet.sacrament.openingSong.link" target="_blank">
                {{ cheatSheet.sacrament.openingSong.title}} ({{ cheatSheet.sacrament.openingSong.page}})
              </a><br/>
              <span class="highlight">{{cheatSheet.sacrament.chorister.name}}</span> will be our chorister, and<br/>
              <span class="highlight">{{cheatSheet.sacrament.organist.name}}</span> will be our organist. Following the singing,<br/>
              <span class="highlight">{{cheatSheet.sacrament.invocation.name}}</span> has been invited to give the opening prayer.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Ward Business:</div>
          <div class="card-body">

            <section *ngIf="cheatSheet.releases && cheatSheet.releases.length">
              <h3 class="h6">Releases:</h3>
              <p>We would like to release the following members:</p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.releases">
                  <span>{{ person.name }}</span><br />
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be given a vote of thanks for [his/her/their] service.
                Those who wish to join with us in expressing appreciation may manifest it by the uplifted hand.
                [No dissenting vote is called for.]
              </p>
            </section>

            <section *ngIf="cheatSheet.sustainings && cheatSheet.sustainings.length">
              <h3 class="h6">Sustainings:</h3>
              <p>
                (If they are here) will the following please stand to be recognized, and remain standing
                while their names are presented.
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.sustainings">
                  <span>{{ person.name }}</span><br />
                  <small>{{ person.calling }}</small>
                </li>
              </ul>
              <p>
                ... and we propose that [he/she/they] be sustained. Those in favor may manifest it by the uplifted
                hand. [Pause for vote.] Those opposed, if any, may manifest it.
              </p>
            </section>

            <section *ngIf="cheatSheet.newMembers && cheatSheet.newMembers.length">
              <h3 class="h6">Move In Members:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following new members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.newMembers">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>

            <section *ngIf="cheatSheet.newMembers && cheatSheet.newMembers.length">
              <h3 class="h6">Baptisms:</h3>
              <p>
                If they are here, will the following please stand to be recognized while their names are presented.
                It is proposed that we welcome the following newly baptised members to the ward:
              </p>
              <ul class="highlight">
                <li *ngFor="let person of cheatSheet.baptisms">
                  <span>{{ person.name }}</span>
                </li>
              </ul>

              <p>
                Those wishing to join with us in doing so may manifest it by the uplifted hand.
              </p>
            </section>
          </div>
        </div>

        <div class="card mb-4" *ngIf="cheatSheet.stakeBusinessAssignment">
          <div class="card-header">Stake Business:</div>
          <div class="card-body">
            <p>
              We now turn the time over to <span class="highlight">{{ cheatSheet.stakeBusinessAssignment }}</span> to conduct some stake business.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Other Business:</div>
          <div class="card-body">
            <p>Baby blessings etc</p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Sacrament Administration:</div>
          <div class="card-body">
            <p>
              We will now prepare for the sacrament by singing:<br/>
              <a class="highlight" [href]="cheatSheet.sacrament.sacramentSong.link" target="_blank">
                {{ cheatSheet.sacrament.sacramentSong.title}} ({{ cheatSheet.sacrament.sacramentSong.page}})
              </a><br/>
              Following the singing, the sacrament will be administered to the congregation by the priesthood.
            </p>
            <p>[Hymn & Sacrament]</p>
            <p>
              We would like to thank the priesthood for administering the sacrament. We now excuse them
              to sit with their families.
            </p>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Sacrament Speakers:</div>
          <div class="card-body">
            <p>Today we will be honored to hear from the following speakers: </p>
            <ul class="highlight">
              <li *ngFor="let speaker of cheatSheet.sacrament.speakers">
                <span>{{ speaker.person.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header">Closing:</div>
          <div class="card-body">
            <p>
              We will close our meeting by singing:
              <a class="highlight" [href]="cheatSheet.sacrament.closingSong.link" target="_blank">
                {{ cheatSheet.sacrament.closingSong.title}} ({{ cheatSheet.sacrament.closingSong.page}})
              </a><br/>

              Following the singing, <span class="highlight">{{ cheatSheet.sacrament.benediction.name}}</span> has been invited to give the closing prayer.
            </p>
          </div>
        </div>

      </div>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["id", "footer", 1, "container", "l41-container", "mrg-btm-150", "text-right"], ["src", "./assets/logo.png", 1, "footer-logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 Sept 2020 | Lehi Fataha Bishopric ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {position: relative; min-height: 200px; margin-top: 80px;}", "img.footer-logo[_ngcontent-%COMP%] {opacity: 0.09; position: absolute; right: 0; top: -23px;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                styles: [
                    '#footer {position: relative; min-height: 200px; margin-top: 80px;}',
                    'img.footer-logo {opacity: 0.09; position: absolute; right: 0; top: -23px;}'
                ],
                template: `
    <div class="container l41-container mrg-btm-150 text-right" id="footer">
      <img src="./assets/logo.png" class="footer-logo" />
      &#169; Sept 2020 | Lehi Fataha Bishopric
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NavigationComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setDocTitle("Lehi Fataha | Cheat Sheet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cheat Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setDocTitle("Lehi Fataha | Login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(authService, router, titleService) {
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.authenticated = this.authService.isLoggedIn();
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/home');
        this.authenticated = false;
    }
    setDocTitle(title) {
        this.titleService.setTitle(title);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 13, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "mt-3"], [1, "container", "l41-container"], ["routerLink", "/home", 1, "navbar-brand", "d-flex", "align-items-center", 3, "click"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar-items", "aria-controls", "navbar-items", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar-items", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item nav-link", "routerLink", "/cheat-sheet", 3, "click", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/login", 3, "click", 4, "ngIf"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], ["routerLink", "/cheat-sheet", 1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/login", 1, "nav-item", "nav-link", 3, "click"], [1, "nav-item", "nav-link", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.setDocTitle("Lehi Fataha | Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lehi Fataha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_a_10_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavigationComponent_a_11_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavigationComponent_a_12_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                template: `
    <nav class="navbar navbar-expand-lg navbar-light mt-3">
      <div class="container l41-container">
        <a class="navbar-brand d-flex align-items-center"
           (click)="setDocTitle('Lehi Fataha | Home')"
           routerLink="/home">
          <img src="./assets/logo.png" class="logo">
          <span class="ml-2">Lehi Fataha</span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items" aria-controls="navbar-items"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-items">
          <div class="navbar-nav">
            <a class="nav-item nav-link" (click)="setDocTitle('Lehi Fataha | Cheat Sheet')" routerLink="/cheat-sheet" *ngIf="authenticated">Cheat Sheet</a>
            <a class="nav-item nav-link" (click)="setDocTitle('Lehi Fataha | Login')" routerLink="/login" *ngIf="!authenticated">Login</a>
            <a class="nav-item nav-link" *ngIf="authenticated" (click)="logout()">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  `
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/sacrament-program-list/sacrament-program-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/sacrament-program-list/sacrament-program-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SacramentProgramListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacramentProgramListComponent", function() { return SacramentProgramListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function SacramentProgramListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SacramentProgramListComponent_li_8_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setDocTitle("Lehi Fataha | Sacrament"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/sacrament-program/", program_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r1.zone, " Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", program_r1.startTime, " - ", program_r1.endTime, " ");
} }
class SacramentProgramListComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.programs = _data__WEBPACK_IMPORTED_MODULE_1__["SACRAMENT_PROGRAMS"];
    }
    setDocTitle(title) {
        this.titleService.setTitle(title);
    }
}
SacramentProgramListComponent.ɵfac = function SacramentProgramListComponent_Factory(t) { return new (t || SacramentProgramListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
SacramentProgramListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SacramentProgramListComponent, selectors: [["app-sacrament-program-list"]], decls: 9, vars: 1, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-preparation.jpg", "alt", "Sacrament Meeting Thumbnail", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-between"], [3, "routerLink", "click"]], template: function SacramentProgramListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sacrament Programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SacramentProgramListComponent_li_8_Template, 6, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SacramentProgramListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sacrament-program-list',
                template: `
    <div class="row mb-4">
      <div class="col-12">

        <div class="card border-light">
          <img class="card-img-top l41-img-thumbnail" src="./assets/images/safe-sacrament/sacrament-preparation.jpg"
               alt="Sacrament Meeting Thumbnail">
          <div class="card-body">
            <h1 class="h4">Sacrament Programs</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item ml-0 pl-0 mr-0 pr-0" *ngFor="let program of programs">
                <div class="d-flex justify-content-between">
                  <a
                    (click)="setDocTitle('Lehi Fataha | Sacrament')"
                    routerLink="/sacrament-program/{{program.id}}">
                    {{ program.zone }} Program
                  </a>
                  <small>
                    {{ program.startTime}} - {{program.endTime}}
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/sacrament-program/sacrament-program.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/sacrament-program/sacrament-program.component.ts ***!
  \************************************************************************************/
/*! exports provided: SacramentProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacramentProgramComponent", function() { return SacramentProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SacramentProgramComponent_div_0_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Speaker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r4.person.name);
} }
function SacramentProgramComponent_div_0_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rest Song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.program.restSong.title, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.program.restSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r2.program.restSong.page, "");
} }
function SacramentProgramComponent_div_0_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Speaker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r5.person.name);
} }
function SacramentProgramComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sacrament Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Presiding:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Conducting:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Chorister:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Organist:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Opening Song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Invocation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sacrament Song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Administration of Sacrament");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SacramentProgramComponent_div_0_div_61_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SacramentProgramComponent_div_0_div_62_Template, 9, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SacramentProgramComponent_div_0_div_63_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Closing Song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Benediction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "blockquote", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " \u201CGathering [ Israel on both sides of the veil ] is the greatest challenge, the greatest cause, and the greatest work on earth today!\u201D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "President Russell M. Nelson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 23, ctx_r0.program.date), ", ", ctx_r0.program.startTime, " to ", ctx_r0.program.endTime, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.program.address.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.address.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.presiding.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.conducting.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.chorister.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.organist.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.program.openingSong.title, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.program.openingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.program.openingSong.page, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.invocation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.program.sacramentSong.title, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.program.sacramentSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.program.sacramentSong.page, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.speakersBeforeRestHymn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.program.restSong);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.speakersAfterRestHymn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.program.closingSong.title, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.program.closingSong.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.program.closingSong.page, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.program.benediction.name);
} }
class SacramentProgramComponent {
    ngOnInit() {
        this.speakersBeforeRestHymn = this.program ? this.program.speakers.filter(s => s.beforeRestHymn).sort(s => s.index) : [];
        this.speakersAfterRestHymn = this.program ? this.program.speakers.filter(s => !s.beforeRestHymn).sort(s => s.index) : [];
    }
}
SacramentProgramComponent.ɵfac = function SacramentProgramComponent_Factory(t) { return new (t || SacramentProgramComponent)(); };
SacramentProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SacramentProgramComponent, selectors: [["app-sacrament-program"]], inputs: { program: "program" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "mb-2", "mt-4", "text-center"], [1, "h2", "mb-0"], ["target", "_blank", 3, "href"], [1, "col-12", "mb-2"], [1, "d-flex", "justify-content-between"], [1, "text-right"], [1, "col-12", "mb-4"], ["class", "col-12 mb-2", 4, "ngFor", "ngForOf"], ["class", "col-12 mb-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngFor", "ngForOf"], [1, "col-12", "mb-2", "text-center"], [1, "blockquote"], [1, "mb-0"], [1, "blockquote-footer"]], template: function SacramentProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SacramentProgramComponent_div_0_Template, 86, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.program);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SacramentProgramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sacrament-program',
                template: `
    <div class="row" *ngIf="program">

      <div class="col-12 mb-2 mt-4 text-center">
        <h1 class="h2 mb-0">
          Sacrament Program
        </h1>
        <small>
          {{ program.date | date }}, {{ program.startTime }} to {{ program.endTime }},
          <a [href]="program.address.link" target="_blank">{{ program.address.reference }}</a>
        </small>

        <hr>
      </div>

      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Presiding:</span>
          <span class="text-right">{{ program.presiding.name }}</span>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="d-flex justify-content-between">
          <span>Conducting:</span>
          <span class="text-right">{{ program.conducting.name }}</span>
        </div>
      </div>

      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Chorister:</span>
          <span class="text-right">{{ program.chorister.name }}</span>
        </div>
      </div>
      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Organist:</span>
          <span class="text-right">{{ program.organist.name }}</span>
        </div>
      </div>
      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Opening Song:</span>
          <span class="text-right">
            {{ program.openingSong.title }}
            (<a [href]="program.openingSong.link" target="_blank">#{{program.openingSong.page}}</a>)
          </span>
        </div>
      </div>
      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Invocation:</span>
          <span class="text-right">{{ program.invocation.name }}</span>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="d-flex justify-content-between">
          <span>Sacrament Song:</span>
          <span class="text-right">
            {{ program.sacramentSong.title }}
            (<a [href]="program.sacramentSong.link" target="_blank">#{{program.sacramentSong.page}}</a>)
          </span>
        </div>
      </div>

      <div class="col-12 mb-4">
        <strong>Administration of Sacrament</strong>
      </div>

      <div class="col-12 mb-2" *ngFor="let speaker of speakersBeforeRestHymn">
        <div class="d-flex justify-content-between">
          <span>Speaker:</span>
          <span class="text-right">{{ speaker.person.name }}</span>
        </div>
      </div>
      <div class="col-12 mb-2" *ngIf="program.restSong">
        <div class="d-flex justify-content-between">
          <span>Rest Song:</span>
          <span class="text-right">
            {{ program.restSong.title }}
            (<a [href]="program.restSong.link" target="_blank">#{{program.restSong.page}}</a>)
          </span>
        </div>
      </div>
      <div class="col-12 mb-4" *ngFor="let speaker of speakersAfterRestHymn">
        <div class="d-flex justify-content-between">
          <span>Speaker:</span>
          <span class="text-right">{{ speaker.person.name }}</span>
        </div>
      </div>

      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Closing Song:</span>
          <span class="text-right">
            {{ program.closingSong.title }}
            (<a [href]="program.closingSong.link" target="_blank">#{{program.closingSong.page}}</a>)
          </span>
        </div>
      </div>
      <div class="col-12 mb-2">
        <div class="d-flex justify-content-between">
          <span>Benediction:</span>
          <span class="text-right">{{ program.benediction.name }}</span>
        </div>
      </div>

      <div class="col-12 mb-2 text-center">
        <hr>
        <blockquote class="blockquote">
          <p class="mb-0">
            “Gathering [ Israel on both sides of the veil ] is the greatest challenge, the greatest cause, and the greatest work on earth
            today!”
          </p>
          <footer class="blockquote-footer">President Russell M. Nelson</footer>
        </blockquote>
      </div>
    </div>
  `
            }]
    }], null, { program: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/safe-sacrament/safe-sacrament.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/safe-sacrament/safe-sacrament.component.ts ***!
  \******************************************************************************/
/*! exports provided: SafeSacramentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSacramentComponent", function() { return SafeSacramentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SafeSacramentComponent_ngb_carousel_8_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tip_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r5.description);
} }
function SafeSacramentComponent_ngb_carousel_8_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SafeSacramentComponent_ngb_carousel_8_1_ng_template_0_Template, 5, 2, "ng-template", 7);
} }
function SafeSacramentComponent_ngb_carousel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeSacramentComponent_ngb_carousel_8_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tips1);
} }
function SafeSacramentComponent_ngb_carousel_13_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tip_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r9.description);
} }
function SafeSacramentComponent_ngb_carousel_13_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SafeSacramentComponent_ngb_carousel_13_1_ng_template_0_Template, 5, 2, "ng-template", 7);
} }
function SafeSacramentComponent_ngb_carousel_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeSacramentComponent_ngb_carousel_13_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tips2);
} }
function SafeSacramentComponent_ngb_carousel_18_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tip_r13.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r13.description);
} }
function SafeSacramentComponent_ngb_carousel_18_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SafeSacramentComponent_ngb_carousel_18_1_ng_template_0_Template, 5, 2, "ng-template", 7);
} }
function SafeSacramentComponent_ngb_carousel_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeSacramentComponent_ngb_carousel_18_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tips3);
} }
function SafeSacramentComponent_ngb_carousel_23_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tip_r17.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r17.description);
} }
function SafeSacramentComponent_ngb_carousel_23_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SafeSacramentComponent_ngb_carousel_23_1_ng_template_0_Template, 5, 2, "ng-template", 7);
} }
function SafeSacramentComponent_ngb_carousel_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeSacramentComponent_ngb_carousel_23_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tips4);
} }
class SafeSacramentComponent {
    constructor(config) {
        this.tips = [
            {
                imageUrl: './assets/images/safe-sacrament/all-wear-mask.jpg',
                description: 'All members are expected to wear a mask',
                group: 1
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-blessers-clean-hands-01.jpg',
                description: 'Those assigned to bless the sacrament will be expected to sanitize their hands before breaking bread',
                group: 2
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-blessers-clean-hands-02.jpg',
                description: 'Those assigned to bless the sacrament will be expected to sanitize their hands before breaking bread',
                group: 2
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-blessers-wear-mask.jpg',
                description: 'Those assigned to bless the sacrament will be expected to also wear a mask',
                group: 2
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-preparation.jpg',
                description: 'yeah',
                group: 6
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-bread-spaced-01.jpg',
                description: 'Sacrament bread will be spaced when broken',
                group: 2
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-bread-spaced-02.jpg',
                description: 'Sacrament bread will be spaced when broken',
                group: 2
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-passers-extra-tray-01.jpg',
                description: 'Sacrament cups are to be disposed in a separate tray',
                group: 3
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-passers-extra-tray-02.jpg',
                description: 'Sacrament cups are to be disposed in a separate tray',
                group: 3
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-passers-hold-trays-all-times-01.jpg',
                description: 'Passers of the sacrament will retain 6ft distance between each other',
                group: 3
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-passers-hold-trays-all-times-02.jpg',
                description: 'Sacrament trays will be handled by those passing only',
                group: 3
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-passers-wash-hands.jpg',
                description: 'Those passing the sacrament will sanitize their hands before handling the sacrament',
                group: 3
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-seating-01.jpg',
                description: 'Every other row in the chapel will have to be left empty',
                group: 4
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-seating-02.jpg',
                description: 'Where ever you sit please keep a 6ft distance from the other family or individual next to you',
                group: 4
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-seating-03.jpg',
                description: 'If your family can fit in the side piers please do so',
                group: 4
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-seating-05.jpg',
                description: 'Keep the first two row empty',
                group: 4
            },
            {
                imageUrl: './assets/images/safe-sacrament/sacrament-seating-07.jpg',
                description: 'All leaders will be maintaining 6ft distance',
                group: 4
            }
        ];
        this.tips1 = this.tips.filter(f => f.group === 1);
        this.tips2 = this.tips.filter(f => f.group === 2);
        this.tips3 = this.tips.filter(f => f.group === 3);
        this.tips4 = this.tips.filter(f => f.group === 4);
        config.pauseOnHover = true;
        config.showNavigationIndicators = false;
        config.interval = 10000;
    }
}
SafeSacramentComponent.ɵfac = function SafeSacramentComponent_Factory(t) { return new (t || SafeSacramentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
SafeSacramentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SafeSacramentComponent, selectors: [["app-safe-sacrament"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], decls: 24, vars: 4, consts: [[1, "row", "mb-4", "mt-2"], [1, "col-12"], [1, "h2", "mb-0"], [1, "row", "mb-4"], [1, "h4"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["alt", "Random first slide", 1, "card-img-top", "l41-img-thumbnail", 3, "src"], [1, "carousel-caption"]], template: function SafeSacramentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Safety Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wear Mask at All Times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SafeSacramentComponent_ngb_carousel_8_Template, 2, 1, "ngb-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sacrament Administration: Blessing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SafeSacramentComponent_ngb_carousel_13_Template, 2, 1, "ngb-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sacrament Administration: Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SafeSacramentComponent_ngb_carousel_18_Template, 2, 1, "ngb-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Seating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SafeSacramentComponent_ngb_carousel_23_Template, 2, 1, "ngb-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tips1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tips2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tips3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tips4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { padding: 0; margin: 0;}", ".carousel-caption[_ngcontent-%COMP%] { text-align: left; padding: 5px; margin: 0; bottom: 0; right: 0; left: 0; }", ".carousel-caption[_ngcontent-%COMP%]:before { content: ''; position: absolute; top: 0; right: 0; left:0; bottom: 0; background: black; z-index: -9; opacity: 0.5 }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeSacramentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-safe-sacrament',
                styles: [
                    '.carousel-caption p { padding: 0; margin: 0;}',
                    '.carousel-caption { text-align: left; padding: 5px; margin: 0; bottom: 0; right: 0; left: 0; }',
                    '.carousel-caption:before { content: \'\'; position: absolute; top: 0; right: 0; left:0; bottom: 0; background: black; z-index: -9; opacity: 0.5 }',
                ],
                template: `
    <div class="row mb-4 mt-2">
      <div class="col-12">
        <h1 class="h2 mb-0">Safety Tips</h1>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h4">Wear Mask at All Times</h1>
        <ngb-carousel *ngIf="tips1">
          <ng-template *ngFor="let tip of tips1" ngbSlide>
            <div>
              <img [src]="tip.imageUrl" alt="Random first slide" class="card-img-top l41-img-thumbnail">
            </div>
            <div class="carousel-caption">
              <p>{{ tip.description}}</p>
            </div>
          </ng-template>
        </ngb-carousel>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h4">Sacrament Administration: Blessing</h1>
        <ngb-carousel *ngIf="tips2">
          <ng-template *ngFor="let tip of tips2" ngbSlide>
            <div>
              <img [src]="tip.imageUrl" alt="Random first slide" class="card-img-top l41-img-thumbnail">
            </div>
            <div class="carousel-caption">
              <p>{{ tip.description}}</p>
            </div>
          </ng-template>
        </ngb-carousel>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h4">Sacrament Administration: Passing</h1>
        <ngb-carousel *ngIf="tips3">
          <ng-template *ngFor="let tip of tips3" ngbSlide>
            <div>
              <img [src]="tip.imageUrl" alt="Random first slide" class="card-img-top l41-img-thumbnail">
            </div>
            <div class="carousel-caption">
              <p>{{ tip.description}}</p>
            </div>
          </ng-template>
        </ngb-carousel>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h4">Seating</h1>
        <ngb-carousel *ngIf="tips4">
          <ng-template *ngFor="let tip of tips4" ngbSlide>
            <div>
              <img [src]="tip.imageUrl" alt="Random first slide" class="card-img-top l41-img-thumbnail">
            </div>
            <div class="carousel-caption">
              <p>{{ tip.description}}</p>
            </div>
          </ng-template>
        </ngb-carousel>
      </div>
    </div>
  `,
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/zoom-list/zoom-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/zoom-list/zoom-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ZoomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomListComponent", function() { return ZoomListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/app/shared/data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ZoomListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Link: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zoomItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", zoomItem_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", zoomItem_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zoomItem_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Meeting Id: ", zoomItem_r1.meetingId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Passcode: ", zoomItem_r1.passcode, " ");
} }
class ZoomListComponent {
    constructor() {
        this.zoomList = _data__WEBPACK_IMPORTED_MODULE_1__["ZOOM_LINKS"];
    }
}
ZoomListComponent.ɵfac = function ZoomListComponent_Factory(t) { return new (t || ZoomListComponent)(); };
ZoomListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomListComponent, selectors: [["app-zoom-list"]], decls: 7, vars: 4, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-calendar-day"], [1, "ml-4", "mt-2"], [1, "h6", "font-weight-bold"], ["target", "_blank", 3, "href"]], template: function ZoomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ZoomListComponent_li_3_Template, 16, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zoomList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.zoomList));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3pvb20tbGlzdC96b29tLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoom-list',
                styleUrls: ['./zoom-list.component.scss'],
                template: `
    <div class="row mb-4">
      <div class="col-12">
        <ul class="list-group list-group-flush">
          <li class="list-group-item ml-0 pl-0 mr-0 pr-0" *ngFor="let zoomItem of zoomList">

            <div class="d-flex justify-content-start">
              <div class="text-center">
                <div class="fa-3x">
                  <i class="fas fa-calendar-day"></i>
                </div>
              </div>
              <div class="ml-4 mt-2">
                <h2 class="h6 font-weight-bold">
                  {{ zoomItem.label }}
                </h2>
                <p>
                  Link: <a href="{{ zoomItem.link}}" target="_blank">{{ zoomItem.link }}</a><br/>
                  Meeting Id: {{ zoomItem.meetingId }}<br/>
                  Passcode: {{ zoomItem.passcode }}
                </p>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <pre>{{ zoomList | json }}</pre>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/data.ts":
/*!********************************!*\
  !*** ./src/app/shared/data.ts ***!
  \********************************/
/*! exports provided: PEOPLE, ADDRESSES, HYMNS, ZOOM_LINKS, ANNOUNCEMENTS, SACRAMENT_PROGRAMS, RELEASES, SUSTAININGS, NEW_MEMBERS, BAPTISMS, CHEAT_SHEETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEOPLE", function() { return PEOPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESSES", function() { return ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYMNS", function() { return HYMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_LINKS", function() { return ZOOM_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOUNCEMENTS", function() { return ANNOUNCEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SACRAMENT_PROGRAMS", function() { return SACRAMENT_PROGRAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASES", function() { return RELEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUSTAININGS", function() { return SUSTAININGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_MEMBERS", function() { return NEW_MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAPTISMS", function() { return BAPTISMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEAT_SHEETS", function() { return CHEAT_SHEETS; });
/* harmony import */ var _enums_zone_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/zone.enum */ "./src/app/shared/enums/zone.enum.ts");

const PEOPLE = {
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
    saaneQoro: { name: 'Saane Qoro' }
};
const ADDRESSES = {
    chapel: {
        reference: '220 W 200 S, Lehi, UT 84043',
        link: 'https://goo.gl/maps/UCX6H9QWRjoZPNTt9'
    }
};
const HYMNS = {
    7: {
        title: 'Israel, Israel, God Is Calling',
        page: 7,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/israel-israel-god-is-calling?lang=eng'
    },
    19: {
        title: 'We Thank Thee, O God, for a Prophet',
        page: 19,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/we-thank-thee-o-god-for-a-prophet?lang=eng'
    },
    83: {
        title: 'Guide Us, O Thou Great Jehovah',
        page: 83,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/guide-us-o-thou-great-jehovah?lang=eng'
    },
    85: {
        title: 'How Firm a Foundation',
        page: 85,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/how-firm-a-foundation?lang=eng'
    },
    136: {
        title: 'I Know That My Redeemer Lives',
        page: 136,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/i-know-that-my-redeemer-lives?lang=eng'
    },
    194: {
        title: 'There Is a Green Hill Far Away',
        page: 194,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-a-green-hill-far-away?lang=eng'
    },
    227: {
        title: 'There Is Sunshine in My Soul Today',
        page: 227,
        link: 'https://www.churchofjesuschrist.org/music/library/hymns/there-is-sunshine-in-my-soul-today?lang=eng'
    }
};
const ZOOM_LINKS = [
    {
        label: 'Today at 1pm - Zoom - Elders Quorum Meeting',
        link: 'https://us02web.zoom.us/j/86281296866?pwd=SnN2Q25pWE9FSFRLdm5hU1g1ODZ5QT09',
        passcode: '434644',
        meetingId: '862 8129 6866'
    },
    {
        label: 'Today at 1pm - Zoom - Young Women Meeting',
        link: 'https://us02web.zoom.us/j/85330586967?pwd=VUlDanBoWTA5YVFaNzRPallKNnVOZz09',
        passcode: 'strivetobe',
        meetingId: '853 3058 6967'
    },
    {
        label: 'Today at 1pm - Zoom - Young Men Meeting',
        link: 'https://us02web.zoom.us/j/85330586967?pwd=VUlDanBoWTA5YVFaNzRPallKNnVOZz09',
        passcode: '434644',
        meetingId: '862 8129 6866'
    }
];
const ANNOUNCEMENTS = [
    // {
    //   title: 'Today at 1pm - Zoom - Elders Quorum Meeting',
    //   description: 'Details as follows: Meeting ID: 862 8129 6866, Passcode: 434644, Join Zoom Meeting: https://us02web.zoom.us/j/86281296866?pwd=SnN2Q25pWE9FSFRLdm5hU1g1ODZ5QT09'
    // },
    // {
    //   title: 'Today at 1pm - Zoom - Young Women Meeting',
    //   description: 'Details as follows: Meeting ID: 853 3058 6967, Passcode: strivetobe, Join Zoom Meeting: https://us02web.zoom.us/j/85330586967?pwd=VUlDanBoWTA5YVFaNzRPallKNnVOZz09'
    // },
    // {
    //   title: 'Today at 1pm - Zoom - Young Men Meeting',
    //   description: 'Details as follows: Meeting ID: 862 8129 6866, Passcode: 434644, Join Zoom Meeting: https://us02web.zoom.us/j/88585159016?pwd=MnRaa1Q3cUlFcDhhN1VwcDlKVnJQdz0'
    // },
    {
        title: 'Thurs 15 Oct - Food Bank',
        description: 'Saratoga Spring 12 Branch Parking Lot, 8:00am, 1149 North 300 West Lehi.'
    },
    {
        title: 'Thurs 31 Oct - Stake Baptisms',
        description: 'Lehi YSA Stake Building 1550 South 1100 West, Lehi.'
    }
];
const SACRAMENT_PROGRAMS = [
    {
        id: 1,
        zone: _enums_zone_enum__WEBPACK_IMPORTED_MODULE_0__["Zone"].South,
        date: new Date(2020, 7, 23),
        startTime: '10:30 AM',
        endTime: '11:10 AM',
        address: ADDRESSES.chapel,
        presiding: PEOPLE.memberOfBishopric,
        conducting: PEOPLE.memberOfBishopric,
        chorister: PEOPLE.chorister,
        organist: PEOPLE.organist,
        invocation: PEOPLE.tbd,
        openingSong: HYMNS['227'],
        sacramentSong: HYMNS['194'],
        speakers: [
            {
                person: PEOPLE.memberOfBishopric,
                index: 1,
                beforeRestHymn: true
            }
        ],
        closingSong: HYMNS['7'],
        benediction: PEOPLE.tbd
    },
    {
        id: 2,
        zone: _enums_zone_enum__WEBPACK_IMPORTED_MODULE_0__["Zone"].Central,
        date: new Date(2020, 7, 23),
        startTime: '12:00 PM',
        endTime: '12:40 PM',
        address: ADDRESSES.chapel,
        presiding: PEOPLE.memberOfBishopric,
        conducting: PEOPLE.memberOfBishopric,
        chorister: PEOPLE.chorister,
        organist: PEOPLE.organist,
        invocation: PEOPLE.tbd,
        openingSong: HYMNS['227'],
        sacramentSong: HYMNS['194'],
        speakers: [
            {
                person: PEOPLE.memberOfBishopric,
                index: 1,
                beforeRestHymn: true
            }
        ],
        closingSong: HYMNS['7'],
        benediction: PEOPLE.tbd
    },
    {
        id: 3,
        zone: _enums_zone_enum__WEBPACK_IMPORTED_MODULE_0__["Zone"].North,
        date: new Date(2020, 7, 23),
        startTime: '1:30 PM',
        endTime: '2:10 PM',
        address: ADDRESSES.chapel,
        presiding: PEOPLE.memberOfBishopric,
        conducting: PEOPLE.memberOfBishopric,
        chorister: PEOPLE.chorister,
        organist: PEOPLE.organist,
        invocation: PEOPLE.tbd,
        openingSong: HYMNS['227'],
        sacramentSong: HYMNS['194'],
        speakers: [
            {
                person: PEOPLE.memberOfBishopric,
                index: 1,
                beforeRestHymn: true
            }
        ],
        closingSong: HYMNS['7'],
        benediction: PEOPLE.tbd
    },
    {
        id: 4,
        zone: _enums_zone_enum__WEBPACK_IMPORTED_MODULE_0__["Zone"].North,
        date: new Date(2020, 9, 26),
        startTime: '10:30 AM',
        endTime: '11:10 AM',
        presiding: PEOPLE.samBrown,
        conducting: PEOPLE.samBrown,
        invocation: PEOPLE.mekeFinau,
        openingSong: HYMNS['85'],
        speakers: [
            {
                person: PEOPLE.adamChase,
                index: 1,
                beforeRestHymn: true
            }
        ],
        closingSong: HYMNS['83'],
        benediction: PEOPLE.saaneQoro
    }
];
const RELEASES = [];
const SUSTAININGS = [];
const NEW_MEMBERS = [
    { name: 'Ana Salt' },
    { name: 'Eric Salt' },
    { name: 'Sioeli Salt' },
    { name: 'Maloni Mataele' },
    { name: 'Elesi Adele' }
];
const BAPTISMS = [];
const CHEAT_SHEETS = [
    {
        sacrament: SACRAMENT_PROGRAMS[0],
        stakeVisitors: [],
        stakeBusinessAssignment: PEOPLE.jasonFaga,
        announcements: ANNOUNCEMENTS,
        releases: RELEASES,
        sustainings: SUSTAININGS,
        newMembers: NEW_MEMBERS,
        baptisms: BAPTISMS
    },
    {
        sacrament: SACRAMENT_PROGRAMS[1],
        stakeVisitors: [],
        announcements: ANNOUNCEMENTS,
        releases: RELEASES,
        sustainings: SUSTAININGS,
        newMembers: NEW_MEMBERS,
        baptisms: BAPTISMS
    },
    {
        sacrament: SACRAMENT_PROGRAMS[2],
        stakeVisitors: [],
        announcements: ANNOUNCEMENTS,
        releases: RELEASES,
        sustainings: SUSTAININGS,
        newMembers: NEW_MEMBERS,
        baptisms: BAPTISMS
    },
    {
        sacrament: SACRAMENT_PROGRAMS[3],
        stakeVisitors: [],
        stakeBusinessAssignment: PEOPLE.keliiUnga,
        announcements: ANNOUNCEMENTS,
        releases: RELEASES,
        sustainings: SUSTAININGS,
        newMembers: NEW_MEMBERS,
        baptisms: BAPTISMS
    },
];


/***/ }),

/***/ "./src/app/shared/enums/zone.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/enums/zone.enum.ts ***!
  \*******************************************/
/*! exports provided: Zone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
var Zone;
(function (Zone) {
    Zone["North"] = "North Zone";
    Zone["Central"] = "Central Zone";
    Zone["South"] = "South Zone";
})(Zone || (Zone = {}));


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");



class AuthService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    login(username, password) {
        const authenticated = username === 'admin' && password === 'fataha';
        this.cookieService.set('authenticated', authenticated ? 'true' : 'false');
        return authenticated;
    }
    isLoggedIn() {
        return this.cookieService.get('authenticated') === 'true';
    }
    logout() {
        this.cookieService.delete('authenticated');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sacrament-program/sacrament-program.component */ "./src/app/shared/components/sacrament-program/sacrament-program.component.ts");
/* harmony import */ var _components_sacrament_program_list_sacrament_program_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sacrament-program-list/sacrament-program-list.component */ "./src/app/shared/components/sacrament-program-list/sacrament-program-list.component.ts");
/* harmony import */ var _components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/announcement-list/announcement-list.component */ "./src/app/shared/components/announcement-list/announcement-list.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/shared/components/navigation/navigation.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/safe-sacrament/safe-sacrament.component */ "./src/app/shared/components/safe-sacrament/safe-sacrament.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cheat-sheet/cheat-sheet.component */ "./src/app/shared/components/cheat-sheet/cheat-sheet.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component */ "./src/app/shared/components/cheat-sheet-zoom-testimony/cheat-sheet-zoom-testimony.component.ts");
/* harmony import */ var _components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component */ "./src/app/shared/components/cheat-sheet-zoom-sacrament/cheat-sheet-zoom-sacrament.component.ts");
/* harmony import */ var _components_zoom_list_zoom_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/zoom-list/zoom-list.component */ "./src/app/shared/components/zoom-list/zoom-list.component.ts");


















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"]
    ], imports: [[
            // Modules
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            // Components
            // Pipes
            // Directives
        ], 
        // Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementListComponent"],
        _components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CheatSheetComponent"],
        _components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_14__["CheatSheetZoomTestimonyComponent"],
        _components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_15__["CheatSheetZoomSacramentComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_3__["SacramentProgramComponent"],
        _components_sacrament_program_list_sacrament_program_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentProgramListComponent"],
        _components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_8__["SafeSacramentComponent"],
        _components_zoom_list_zoom_list_component__WEBPACK_IMPORTED_MODULE_16__["ZoomListComponent"]], imports: [
        // Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        // Components
        // Pipes
        // Directives
    ], exports: [
        // Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        // Components
        _components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementListComponent"],
        _components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CheatSheetComponent"],
        _components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_14__["CheatSheetZoomTestimonyComponent"],
        _components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_15__["CheatSheetZoomSacramentComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_3__["SacramentProgramComponent"],
        _components_sacrament_program_list_sacrament_program_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentProgramListComponent"],
        _components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_8__["SafeSacramentComponent"],
        _components_zoom_list_zoom_list_component__WEBPACK_IMPORTED_MODULE_16__["ZoomListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementListComponent"],
                    _components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CheatSheetComponent"],
                    _components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_14__["CheatSheetZoomTestimonyComponent"],
                    _components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_15__["CheatSheetZoomSacramentComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                    _components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_3__["SacramentProgramComponent"],
                    _components_sacrament_program_list_sacrament_program_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentProgramListComponent"],
                    _components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_8__["SafeSacramentComponent"],
                    _components_zoom_list_zoom_list_component__WEBPACK_IMPORTED_MODULE_16__["ZoomListComponent"],
                ],
                imports: [
                    // Modules
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
                    // Components
                    // Pipes
                    // Directives
                ],
                exports: [
                    // Modules
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    // Components
                    _components_announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementListComponent"],
                    _components_cheat_sheet_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CheatSheetComponent"],
                    _components_cheat_sheet_zoom_testimony_cheat_sheet_zoom_testimony_component__WEBPACK_IMPORTED_MODULE_14__["CheatSheetZoomTestimonyComponent"],
                    _components_cheat_sheet_zoom_sacrament_cheat_sheet_zoom_sacrament_component__WEBPACK_IMPORTED_MODULE_15__["CheatSheetZoomSacramentComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                    _components_sacrament_program_sacrament_program_component__WEBPACK_IMPORTED_MODULE_3__["SacramentProgramComponent"],
                    _components_sacrament_program_list_sacrament_program_list_component__WEBPACK_IMPORTED_MODULE_4__["SacramentProgramListComponent"],
                    _components_safe_sacrament_safe_sacrament_component__WEBPACK_IMPORTED_MODULE_8__["SafeSacramentComponent"],
                    _components_zoom_list_zoom_list_component__WEBPACK_IMPORTED_MODULE_16__["ZoomListComponent"],
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshtune/workspace/fataha/fataha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map