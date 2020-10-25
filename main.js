(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshtune/workspace/lehi41/apps/client/src/main.ts */"zUnb");


/***/ }),

/***/ "5wG6":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "iIrt");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "KDA1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");







class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
                exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");








class LoginPageComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["lehi41-login-page"]], decls: 13, vars: 1, consts: [[1, "l41-container", "pt-4", "mrg-horizon-auto"], [3, "formGroup"], [1, "mt-4", "mb-4", "text-center"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], [1, "form-group"], ["type", "text", "formControlName", "username", "id", "user-username", "aria-describedby", "usernameHelp", "placeholder", "Username", 1, "form-control"], ["type", "password", "id", "user-password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "text-right"], [1, "btn", "btn-secondary", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["form[_ngcontent-%COMP%] { max-width: 300px; margin: 0 auto;}", ".logo[_ngcontent-%COMP%] { height: 50px; width: 50px; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-login-page',
                styles: [
                    'form { max-width: 300px; margin: 0 auto;}',
                    '.logo { height: 50px; width: 50px; }',
                ],
                template: `
    <div class="l41-container pt-4 mrg-horizon-auto">
      <form [formGroup]="loginForm">
        <section class="mt-4 mb-4 text-center">
          <img src="./assets/logo.png" class="logo" />
          <span class="ml-2">Lehi Fataha</span>
        </section>

        <div class="form-group">
          <input
            type="text"
            formControlName="username"
            class="form-control"
            id="user-username"
            aria-describedby="usernameHelp"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="user-password"
            formControlName="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group text-right">
          <button (click)="login()" class="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  `,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const config = __webpack_require__(/*! ../../../../.config.env.json */ "DUA9");
const environment = {
    production: false,
    firebaseConfig: config.firebaseConfig,
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

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "IYfF");




class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "DUA9":
/*!*********************************************************!*\
  !*** /Users/joshtune/workspace/lehi41/.config.env.json ***!
  \*********************************************************/
/*! exports provided: firebaseConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"firebaseConfig\":{\"apiKey\":\"AIzaSyDA1u2jKZj4oUS-PrelGx2ydZrn08UiIRI\",\"authDomain\":\"lehi41.firebaseapp.com\\\",\",\"databaseURL\":\"https://lehi41.firebaseio.com\\\",\",\"projectId\":\"lehi41\\\",\",\"storageBucket\":\"lehi41.appspot.com\\\",\",\"messagingSenderId\":\"1013729335532\\\",\",\"appId\":\"1:1013729335532:web:53a666427e5b11af95edc9\\\",\",\"measurementId\":\"G-VFV4136BY6\"}}");

/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "2JYy");




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
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function HomePageComponent_li_8_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zoomItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Passcode: ", zoomItem_r2.passcode, "");
} }
function HomePageComponent_li_8_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomePageComponent_li_8_span_15_Template, 2, 1, "span", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Meeting ID: ", zoomItem_r2.meetingId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", zoomItem_r2.passcode.length);
} }
function HomePageComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
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
    const announcement_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, announcement_r5.date, "d MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", announcement_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r5.description);
} }
class HomePageComponent {
    constructor() {
        this.zoomLinks = [
            {
                active: true,
                label: 'Sunday 10:30am - Zoom - Sacrament',
                link: 'https://us02web.zoom.us/j/89646695998',
                passcode: '',
                meetingId: '896 4669 5998',
            },
            {
                active: false,
                label: 'Sunday 12:30pm - Zoom - Tongan - Gospel Doctrine',
                link: 'https://zoom.us/j/6740059762?pwd=cTB0dkl4S3hmb0NOa2o0N1FFeTdOZz09',
                passcode: 'FATAHA',
                meetingId: '674 005 9762',
            },
            {
                active: false,
                label: 'Sunday 1:00pm - Zoom - Gospel Doctrine',
                link: 'https://us02web.zoom.us/j/84878042125',
                passcode: '391307',
                meetingId: '848 7804 2125',
            },
            {
                active: false,
                label: 'Sunday 1:00pm - Zoom - Youth Sunday School Class',
                link: 'https://us02web.zoom.us/j/4614041790',
                passcode: '7M0uSP',
                meetingId: '461 404 1790',
            },
            {
                active: true,
                label: 'Sunday 1:00pm - Zoom - Elders Quorum Meeting',
                link: 'https://us02web.zoom.us/j/87291506083?pwd=dUlZckNRMXdqWlFGakdUUlNVeHNJQT09',
                passcode: '680378',
                meetingId: '872 9150 6083',
            },
            {
                active: true,
                label: 'Sunday 1:00pm - Zoom - Relief Society',
                link: 'https://us02web.zoom.us/j/8016280153?pwd=R0xKL0tQTnZhVkV4UFgxR2hlMllXUT09',
                passcode: 'lehifataha',
                meetingId: '801 628 0153',
            },
            {
                active: true,
                label: 'Sunday 1:00pm - Zoom - Young Women Meeting',
                link: 'https://us02web.zoom.us/j/2101834721?pwd=UEl4NCt4SUx2TXpsVUtWbThqWUpuZz09',
                passcode: 'strivetobe',
                meetingId: '210 183 4721',
            },
            {
                active: true,
                label: 'Sunday 1:00pm - Zoom - Young Men Meeting',
                link: 'https://us02web.zoom.us/j/85330586967?pwd=VUlDanBoWTA5YVFaNzRPallKNnVOZz09',
                passcode: '434644',
                meetingId: '862 8129 6866',
            },
        ];
        this.announcements = [
            {
                title: 'Thurs 29 Oct - Food Bank',
                description: 'Saratoga Spring 12 Branch Parking Lot, 8:00am, 1149 North 300 West Lehi.',
            },
            {
                title: 'Thurs 30 Oct - Stake Baptisms',
                description: 'Lehi YSA Stake Building 1550 South 1100 West, Lehi.',
            },
            {
                title: 'Sun 1 Nov - Fast Sunday',
                description: '',
            },
        ];
        this.zoomItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.zoomLinks.filter((z) => z.active));
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["lehi41-home-page"]], decls: 14, vars: 4, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-light"], ["src", "./assets/images/safe-sacrament/sacrament-seating-01.jpg", "alt", "Announcements Thumbnail", 1, "card-img-top", "l41-img-thumbnail"], [1, "card-body"], [1, "h4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ml-0 pl-0 mr-0 pr-0", 4, "ngFor", "ngForOf"], [1, "list-group-item", "ml-0", "pl-0", "mr-0", "pr-0"], [1, "d-flex", "justify-content-start"], [1, "text-center"], [1, "fa-3x"], [1, "fas", "fa-calendar-day"], [1, "ml-4", "mt-2"], [1, "h6", "font-weight-bold"], ["target", "_blank", 3, "href"], [4, "ngIf"], [1, "far", "fa-calendar"], [1, "text-uppercase", "font-weight-bold", "font-size-10"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Meeting Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePageComponent_li_8_Template, 16, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Announcements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomePageComponent_li_13_Template, 13, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.zoomItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-home-page',
                styleUrls: ['./home-page.component.scss'],
                template: `
    <div class="row mb-4">
      <div class="col-12">
        <div class="card border-light">
          <img
            class="card-img-top l41-img-thumbnail"
            src="./assets/images/safe-sacrament/sacrament-seating-01.jpg"
            alt="Announcements Thumbnail"
          />
          <div class="card-body">
            <h1 class="h4">Meeting Links</h1>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item ml-0 pl-0 mr-0 pr-0"
                *ngFor="let zoomItem of zoomItems$ | async"
              >
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
                      Link:
                      <a href="{{ zoomItem.link }}" target="_blank">{{
                        zoomItem.link
                      }}</a
                      ><br />
                      Meeting ID: {{ zoomItem.meetingId }}<br />
                      <span *ngIf="zoomItem.passcode.length"
                        >Passcode: {{ zoomItem.passcode }}</span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <h1 class="h4">Announcements</h1>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item ml-0 pl-0 mr-0 pr-0"
                *ngFor="let announcement of announcements"
              >
                <div class="d-flex justify-content-start">
                  <div class="text-center">
                    <div class="fa-3x">
                      <i class="far fa-calendar"></i>
                    </div>
                    <span
                      class="text-uppercase font-weight-bold font-size-10"
                      >{{ announcement.date | date: 'd MMM' }}</span
                    >
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
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "KDA1":
/*!************************************************************!*\
  !*** ./src/app/layouts/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");










function NavigationComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.label);
} }
function NavigationComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setDocTitle("Lehi Fataha | Home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(authService, router, titleService) {
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
        this.linksList = [
            {
                protected: true,
                active: false,
                routerLink: '/meet',
                label: 'Meet',
            },
            {
                protected: true,
                active: true,
                routerLink: '/cheat-sheet',
                label: 'Cheat Sheet',
            },
            {
                protected: true,
                active: false,
                routerLink: '/zoom-meeting',
                label: 'Zoom Meeting',
            },
        ];
        this.links$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.linksList.filter((l) => l.active && !l.protected));
    }
    ngOnInit() {
        this.authenticated = this.authService.isLoggedIn();
        if (this.authenticated) {
            const links = this.linksList.filter((l) => l.active);
            this.links$.next(links);
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/home');
        this.authenticated = false;
        this.links$.next(this.linksList.filter((l) => l.active && !l.protected));
    }
    setDocTitle(title) {
        this.titleService.setTitle(title);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["lehi41-navigation"]], decls: 15, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "mt-3"], [1, "container", "l41-container"], ["routerLink", "/home", 1, "navbar-brand", "d-flex", "align-items-center", 3, "click"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar-items", "aria-controls", "navbar-items", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar-items", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-item nav-link", "routerLink", "/login", 3, "click", 4, "ngIf"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "routerLink"], ["routerLink", "/login", 1, "nav-item", "nav-link", 3, "click"], [1, "nav-item", "nav-link", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_li_10_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavigationComponent_a_13_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavigationComponent_a_14_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx.links$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".logo[_ngcontent-%COMP%] { height: 50px; width: 50px;}", ".nav-item[_ngcontent-%COMP%] { cursor: pointer; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-navigation',
                styles: [
                    '.logo { height: 50px; width: 50px;}',
                    '.nav-item { cursor: pointer; }',
                ],
                template: `
    <nav class="navbar navbar-expand-lg navbar-light mt-3">
      <div class="container l41-container">
        <a
          class="navbar-brand d-flex align-items-center"
          (click)="setDocTitle('Lehi Fataha | Home')"
          routerLink="/home"
        >
          <img src="./assets/logo.png" class="logo" />
          <span class="ml-2">Lehi Fataha</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-items">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" *ngFor="let link of links$ | async">
              <a class="nav-item nav-link" routerLink="{{ link.routerLink }}">{{
                link.label
              }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-item nav-link"
                (click)="setDocTitle('Lehi Fataha | Home')"
                routerLink="/login"
                *ngIf="!authenticated"
                >Login</a
              >
              <a
                class="nav-item nav-link"
                *ngIf="authenticated"
                (click)="logout()"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "LY56":
/*!*********************************************************************************************!*\
  !*** /Users/joshtune/workspace/lehi41/libs/firebase-api/src/lib/services/person.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "Czmw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





class PersonService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    get() {
        return this.firestore
            .collection('people')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((d) => {
            const people = [];
            d.forEach((dd) => {
                people.push({
                    id: dd.payload.doc.id,
                    // @ts-ignore
                    name: dd.payload.doc.data().name,
                });
            });
            return people;
        }));
    }
    create(person) {
        return this.firestore.collection('people').add(person);
    }
    update(person) {
        delete person.id;
        this.firestore.doc('people/' + person.id).update(person);
    }
    delete(id) {
        this.firestore.doc('people/' + id).delete();
    }
}
PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "NcZ/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "2JYy");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lehi41/firebase-api */ "tqFo");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/video/video.component */ "kEUT");











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _lehi41_firebase_api__WEBPACK_IMPORTED_MODULE_8__["FirebaseApiModule"],
                    _components_video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"],
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Rdo6":
/*!***********************************************************************************!*\
  !*** /Users/joshtune/workspace/lehi41/libs/firebase-api/src/lib/models/person.ts ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");





class AppComponent {
    constructor(http) {
        this.http = http;
        this.hello$ = this.http.get('/api/hello');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["lehi41-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-root',
                template: ` <router-outlet></router-outlet> `,
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XGxd":
/*!*****************************************************************************************!*\
  !*** /Users/joshtune/workspace/lehi41/libs/firebase-api/src/lib/firebase-api.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: FirebaseApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseApiModule", function() { return FirebaseApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



class FirebaseApiModule {
}
FirebaseApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirebaseApiModule });
FirebaseApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirebaseApiModule_Factory(t) { return new (t || FirebaseApiModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "hQU3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "xBdF");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/layouts.module */ "5wG6");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "JFIp");
/* harmony import */ var _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found-page/page-not-found-page.component */ "ecl7");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "6V8c");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundPageComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                    _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundPageComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
                exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ecl7":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-not-found-page/page-not-found-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPageComponent", function() { return PageNotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class PageNotFoundPageComponent {
    constructor() { }
    ngOnInit() { }
}
PageNotFoundPageComponent.ɵfac = function PageNotFoundPageComponent_Factory(t) { return new (t || PageNotFoundPageComponent)(); };
PageNotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundPageComponent, selectors: [["lehi41-page-not-found-page"]], decls: 1, vars: 0, template: function PageNotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Page Not Found Page ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLXBhZ2UvcGFnZS1ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-page-not-found-page',
                styleUrls: ['./page-not-found-page.component.scss'],
                template: ` Page Not Found Page `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iIrt":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["lehi41-footer"]], decls: 3, vars: 0, consts: [["id", "footer", 1, "container", "l41-container", "mrg-btm-150", "text-right"], ["src", "./assets/logo.png", 1, "footer-logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 Sept 2020 | Lehi Fataha Bishopric ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {position: relative; min-height: 200px; margin-top: 80px;}", "img.footer-logo[_ngcontent-%COMP%] {opacity: 0.09; position: absolute; right: 0; top: -23px;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-footer',
                styles: [
                    '#footer {position: relative; min-height: 200px; margin-top: 80px;}',
                    'img.footer-logo {opacity: 0.09; position: absolute; right: 0; top: -23px;}',
                ],
                template: `
    <div class="container l41-container mrg-btm-150 text-right" id="footer">
      <img src="./assets/logo.png" class="footer-logo" />
      &#169; Sept 2020 | Lehi Fataha Bishopric
    </div>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "kEUT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/video/video.component.ts ***!
  \************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class VideoComponent {
    constructor() {
        this.width = 320;
        this.height = 240;
        this.type = 'video/mp4';
        this.notSupportedMessage = 'Your browser does not support the video tag.';
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["lehi41-video"]], inputs: { width: "width", height: "height", type: "type", source: "source", title: "title", notSupportedMessage: "notSupportedMessage" }, decls: 6, vars: 6, consts: [[1, "video"], [1, "title"], ["controls", "", 3, "width", "height"], [3, "src", "type"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notSupportedMessage, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-video',
                styleUrls: ['./video.component.scss'],
                template: `
    <div class="video">
      <div class="title">{{ title }}</div>
      <video width="{{ width }}" height="{{ height }}" controls>
        <source src="{{ source }}" type="{{ type }}" />
        {{ notSupportedMessage }}
      </video>
    </div>
  `,
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notSupportedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rQ7a":
/*!**************************************************************!*\
  !*** ./src/app/layouts/main-layout/main-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "KDA1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "iIrt");





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["lehi41-main"]], decls: 4, vars: 0, consts: [[1, "l41-container", "container", "pt-4", "mrg-horizon-auto"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lehi41-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "lehi41-footer");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lehi41-main',
                template: `
    <lehi41-navigation></lehi41-navigation>
    <div class="l41-container container pt-4 mrg-horizon-auto">
      <router-outlet></router-outlet>
    </div>
    <lehi41-footer></lehi41-footer>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tqFo":
/*!***********************************************************************!*\
  !*** /Users/joshtune/workspace/lehi41/libs/firebase-api/src/index.ts ***!
  \***********************************************************************/
/*! exports provided: FirebaseApiModule, PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_firebase_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/firebase-api.module */ "XGxd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseApiModule", function() { return _lib_firebase_api_module__WEBPACK_IMPORTED_MODULE_0__["FirebaseApiModule"]; });

/* harmony import */ var _lib_services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/person.service */ "LY56");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return _lib_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]; });

/* harmony import */ var _lib_models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/person */ "Rdo6");
/* empty/unused harmony star reexport */
// services

// models



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "ecl7");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");









const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
    },
    {
        path: '',
        component: _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
        children: [
            {
                path: 'home',
                component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
            },
            {
                path: 'meet',
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | features-meet-meet-module */ "features-meet-meet-module").then(__webpack_require__.bind(null, /*! ./features/meet/meet.module */ "0rqF")).then((m) => m.MeetModule),
            },
            {
                path: 'cheat-sheet',
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | features-cheat-sheet-cheat-sheet-module */ "features-cheat-sheet-cheat-sheet-module").then(__webpack_require__.bind(null, /*! ./features/cheat-sheet/cheat-sheet.module */ "/gp7")).then((m) => m.CheatSheetModule),
            },
            {
                path: 'zoom-meeting',
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | features-zoom-meeting-zoom-meeting-module */ "features-zoom-meeting-zoom-meeting-module").then(__webpack_require__.bind(null, /*! ./features/zoom-meeting/zoom-meeting.module */ "pRuw")).then((m) => m.ZoomMeetingModule),
            },
        ],
    },
    {
        path: '**',
        component: _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundPageComponent"],
    },
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map