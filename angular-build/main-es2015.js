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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <nav>\n    <a (click)=\"toggleEditor('validation')\">Cross field validation</a>\n    <a (click)=\"toggleEditor('group')\">Grouping form controls</a>\n  </nav>\n  <app-name-editor *ngIf=\"showValidation\"></app-name-editor>\n  <app-profile-editor *ngIf=\"showGroup\"></app-profile-editor>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/name-editor/name-editor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/name-editor/name-editor.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2>Cross field validation</h2>\n<form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit()\">\n  <div>\n    <label for=\"name\">\n      Name:\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" required>\n    </label>\n  </div>\n  <div *ngIf=\"heroName.errors?.required && (heroName.touched || heroName.dirty)\"\n    class=\"alert alert-danger\">\n    Name is required\n  </div>\n  <div>\n    <label for=\"alterEgo\">\n      alterEgo:\n      <input type=\"text\" class=\"form-control\" formControlName=\"alterEgo\" required>\n    </label>\n  </div>\n  <div *ngIf=\"heroAlterEgo.errors?.required && (heroAlterEgo.touched || heroAlterEgo.dirty)\"\n    class=\"alert alert-danger\">\n    AlterEgo is required\n  </div>\n  <div *ngIf=\"heroForm.errors?.identityRevealed && (heroForm.touched || heroForm.dirty)\"\n    class=\"cross-validation-error-message alert alert-danger\">\n    Name cannot match alter ego.\n  </div>\n  <div>\n    <label for=\"power\">Hero Power</label>\n    <select class=\"form-control\" id=\"power\" name=\"power\" formControlName=\"power\" required>\n      <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n    </select>\n    <button type=\"submit\" id=\"btn\" class=\"btn\" [disabled]=\"heroForm.invalid\">Submit</button>\n  </div>\n\n</form>\n<p>Status: {{heroForm.status}}</p>\n<div *ngIf=\"false\">\n  <h2>Single form control</h2>\n  <label>\n    Name:\n    <input type=\"text\" [formControl]=\"name\">\n  </label>\n  <p>\n    Value: {{name.value}}\n  </p>\n  <button class=\"btn\" (click)=\"updateName()\">Update Name</button>\n</div>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-editor/profile-editor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-editor/profile-editor.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2>Grouping form controls</h2>\n{{name.value | json}}\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  <div>\n    <label>\n      First Name:\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\n    </label>\n  </div>\n\n  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"name.errors.required\">\n      Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n      Name must be at least 4 characters long.\n    </div>\n    <div *ngIf=\"name.errors.forbiddenName\">\n      Name cannot be coward.\n    </div>\n  </div>\n  <div>\n    <label>\n      Last Name:\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n    </label>\n  </div>\n  <div *ngIf=\"name.errors?.identityRevealed && (name.touched || name.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\n    Name cannot match alter ego.\n</div>\n  <div formGroupName=\"address\">\n    <h3>Address</h3>\n    <div>\n      <label>\n        Street:\n        <input type=\"text\" class=\"form-control\" formControlName=\"street\">\n      </label>\n    </div>\n    <div>\n      <label>\n        City:\n        <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n      </label>\n    </div>\n    <div>\n      <label>\n        State:\n        <input type=\"text\" class=\"form-control\" formControlName=\"state\">\n      </label>\n    </div>\n    <div>\n      <label>\n        Zip Code:\n        <input type=\"text\" class=\"form-control\" formControlName=\"zip\">\n      </label>\n    </div>\n  </div>\n  <div formArrayName=\"aliases\">\n    <h3>Aliases</h3> <button (click)=\"addAlias()\">Add Alias</button>\n\n    <div *ngFor=\"let address of aliases.controls; let i=index\">\n      <!-- The repeated alias template -->\n      <div>\n        <label>\n          Alias:\n          <input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n        </label>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" id=\"btn\" class=\"btn\" (click)=\"updateProfile()\" [disabled]=\"profileForm.invalid\">Submit</button>\n</form>\n\n<p>\n  {{profileForm.value | json}}\n</p>\n<p>\n  Status: {{profileForm.status}}\n</p>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  box-sizing: border-box;\r\n  margin: 30px;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/* everywhere else */\r\n\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7RUFDekMsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn1cclxuXHJcbi8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xyXG4qIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-reactive-forms';
        this.editor = 'validation';
    }
    toggleEditor(type) {
        this.editor = type;
    }
    get showValidation() {
        return this.editor === 'validation';
    }
    get showGroup() {
        return this.editor === 'group';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./name-editor/name-editor.component */ "./src/app/name-editor/name-editor.component.ts");
/* harmony import */ var _profile_editor_profile_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-editor/profile-editor.component */ "./src/app/profile-editor/profile-editor.component.ts");
/* harmony import */ var _shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/forbidden-name.directive */ "./src/app/shared/forbidden-name.directive.ts");
/* harmony import */ var _shared_identity_revealed_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/identity-revealed.directive */ "./src/app/shared/identity-revealed.directive.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_5__["NameEditorComponent"],
            _profile_editor_profile_editor_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEditorComponent"],
            _shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_7__["ForbiddenNameDirective"],
            _shared_identity_revealed_directive__WEBPACK_IMPORTED_MODULE_8__["IdentityRevealedDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/name-editor/name-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/name-editor/name-editor.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* input[type=text] {\r\n  display: block;\r\n  padding: 5px;\r\n  font-size: 20px;\r\n}\r\nlabel:first-child {\r\n  color: #9e9999;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\nbutton {\r\n  background-color: #f1ecec;\r\n  color: #5a5858;\r\n  font-size: 15px;\r\n  padding: 7px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n}\r\nbutton:hover,\r\nbutton:active {\r\n  background-color: #c5c0c0;\r\n  color: #302f2f;\r\n  cursor: pointer;\r\n}\r\np{\r\n  color: #9e9999;\r\n}\r\nh2 {\r\n  color: #3b3a3a;\r\n} */\r\n\r\n#btn {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS1lZGl0b3IvbmFtZS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHOztBQUVIO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmFtZS1lZGl0b3IvbmFtZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxubGFiZWw6Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjOWU5OTk5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVjZWM7XHJcbiAgY29sb3I6ICM1YTU4NTg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYnV0dG9uOmhvdmVyLFxyXG5idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMGMwO1xyXG4gIGNvbG9yOiAjMzAyZjJmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5we1xyXG4gIGNvbG9yOiAjOWU5OTk5O1xyXG59XHJcbmgyIHtcclxuICBjb2xvcjogIzNiM2EzYTtcclxufSAqL1xyXG5cclxuI2J0biB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/name-editor/name-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/name-editor/name-editor.component.ts ***!
  \******************************************************/
/*! exports provided: NameEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameEditorComponent", function() { return NameEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_identity_revealed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/identity-revealed.directive */ "./src/app/shared/identity-revealed.directive.ts");




let NameEditorComponent = class NameEditorComponent {
    constructor() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    }
    updateName() {
        this.name.setValue('Nancy');
    }
    ngOnInit() {
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'alterEgo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'power': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }, { validators: _shared_identity_revealed_directive__WEBPACK_IMPORTED_MODULE_3__["identityRevealedValidator"] });
    }
    get heroName() {
        return this.heroForm.get('name');
    }
    get heroAlterEgo() {
        return this.heroForm.get('alterEgo');
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.heroForm.value);
    }
};
NameEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-name-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./name-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/name-editor/name-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./name-editor.component.css */ "./src/app/name-editor/name-editor.component.css")).default]
    })
], NameEditorComponent);



/***/ }),

/***/ "./src/app/profile-editor/profile-editor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile-editor/profile-editor.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* form {\r\n  margin-top: 30px;\r\n}\r\ninput[type=text] {\r\n  display: block;\r\n  padding: 5px;\r\n  font-size: 20px;\r\n}\r\nlabel {\r\n  color: #9e9999;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  display: block;\r\n  margin-bottom: 20px;\r\n}\r\nbutton {\r\n  background-color: #f1ecec;\r\n  color: #5a5858;\r\n  font-size: 15px;\r\n  padding: 7px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n}\r\nbutton:hover,\r\nbutton:active {\r\n  background-color: #c5c0c0;\r\n  color: #302f2f;\r\n  cursor: pointer;\r\n}\r\np{\r\n  color: #9e9999;\r\n\r\n}\r\nh3{\r\n  font-size: 200%;\r\n  color: #6b5f5f;\r\n}\r\nh2 {\r\n  color: #3b3a3a;\r\n  margin-top: 40px;\r\n} */\r\n\r\n#btn {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1lZGl0b3IvcHJvZmlsZS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q0c7O0FBRUg7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWVkaXRvci9wcm9maWxlLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzllOTk5OTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVjZWM7XHJcbiAgY29sb3I6ICM1YTU4NTg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYnV0dG9uOmhvdmVyLFxyXG5idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMGMwO1xyXG4gIGNvbG9yOiAjMzAyZjJmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5we1xyXG4gIGNvbG9yOiAjOWU5OTk5O1xyXG5cclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IDIwMCU7XHJcbiAgY29sb3I6ICM2YjVmNWY7XHJcbn1cclxuaDIge1xyXG4gIGNvbG9yOiAjM2IzYTNhO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0gKi9cclxuXHJcbiNidG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/profile-editor/profile-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile-editor/profile-editor.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditorComponent", function() { return ProfileEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/forbidden-name.directive */ "./src/app/shared/forbidden-name.directive.ts");




let ProfileEditorComponent = class ProfileEditorComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    Object(_shared_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_3__["forbiddenNameValidator"])(/coward/i)
                ]],
            lastName: [''],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['2345']
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ])
        });
    }
    get aliases() {
        return this.profileForm.get('aliases');
    }
    addAlias() {
        this.aliases.push(this.fb.control(''));
    }
    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Stanley',
            address: {
                state: 'Imo State'
            }
        });
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    }
    get name() {
        return this.profileForm.get('firstName');
    }
};
ProfileEditorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProfileEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-editor/profile-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-editor.component.css */ "./src/app/profile-editor/profile-editor.component.css")).default]
    })
], ProfileEditorComponent);



/***/ }),

/***/ "./src/app/shared/forbidden-name.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/forbidden-name.directive.ts ***!
  \****************************************************/
/*! exports provided: ForbiddenNameDirective, forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNameDirective", function() { return ForbiddenNameDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForbiddenNameDirective = class ForbiddenNameDirective {
    constructor() { }
};
ForbiddenNameDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appForbiddenName]'
    })
], ForbiddenNameDirective);

function forbiddenNameValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/shared/identity-revealed.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/identity-revealed.directive.ts ***!
  \*******************************************************/
/*! exports provided: IdentityRevealedDirective, identityRevealedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityRevealedDirective", function() { return IdentityRevealedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityRevealedValidator", function() { return identityRevealedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdentityRevealedDirective = class IdentityRevealedDirective {
    constructor() { }
};
IdentityRevealedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appIdentityRevealed]'
    })
], IdentityRevealedDirective);

/** A hero's name can't match the hero's alter ego */
const identityRevealedValidator = (control) => {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');
    return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OGBONNA\desktop\ng-reactive-forms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map