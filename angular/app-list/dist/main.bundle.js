webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#app {\r\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n}\r\n\r\n.container {\r\n    margin-top: 3em;\r\n    width: 80%;\r\n}\r\n\r\n.collection-item {\r\n    text-align: left;\r\n}\r\n\r\n.item-email {\r\n    padding-top: 10px;\r\n}\r\n\r\n.App {\r\n    text-align: center;\r\n}\r\n\r\n.App-logo {\r\n    -webkit-animation: App-logo-spin infinite 20s linear;\r\n            animation: App-logo-spin infinite 20s linear;\r\n    height: 80px;\r\n}\r\n\r\n.App-header {\r\n    background-color: #222;\r\n    height: 200px;\r\n    padding: 20px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.App-title {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.App-intro {\r\n    font-size: large;\r\n}\r\n\r\n@-webkit-keyframes App-logo-spin {\r\n    from {\r\n        -webkit-transform: rotateY(0deg);\r\n                transform: rotateY(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n    from {\r\n        -webkit-transform: rotateY(0deg);\r\n                transform: rotateY(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotateY(360deg);\r\n                transform: rotateY(360deg);\r\n    }\r\n}\r\n\r\n/* card */\r\n\r\n.card-header {\r\n    background: #e4e4e4;\r\n    text-align: center;\r\n    padding-top: 3em;\r\n    border-bottom: 1.5px solid #a0a0a094;\r\n}\r\n\r\n.card-header img {\r\n  height: 100px;\r\n  width: 100px;\r\n  margin-bottom: -50px;\r\n  padding: 3px;\r\n  background: white;\r\n  border-radius: 50%;\r\n  border: 1.5px solid #c7c7c7;\r\n  border-style: solid;\r\n}\r\n\r\n.card-body {\r\n    padding: 4rem 1rem 3rem 1rem;\r\n    font-family: 'roboto';\r\n    text-align: center;\r\n}\r\n\r\n.card-body i{\r\n  vertical-align: middle;\r\n  margin-right: 5px;\r\n}\r\n\r\n.card-info {\r\n    color: #656565;\r\n    margin-top: 0;\r\n}\r\n\r\n.card-user {\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-bottom: 1em;\r\n  font-weight: bold;\r\n  color: #797979;\r\n  font-size: 1.5rem;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <header class=\"App-header\">\n    <img width=\"300\" class=\"App-logo\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    <h1 class=\"App-title\">Friends Application - Angular</h1>\n  </header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l4\">  \n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img src='https://placeimg.com/100/100/people' class=\"\" alt=\"logo\" />\n          </div>\n          <div class=\"card-body\">\n            <p class=\"card-user\">\n              My First Name\n            </p>\n            <p><i class=\"material-icons\">local_phone</i>&#32;&#32;345 - 4654...</p>\n            <p><i class=\"material-icons\">mail</i>&#32;&#32;userprofile@testemail.com</p>\n            <p><i class=\"material-icons\">link</i>&#32;&#32;www.usertestblog.com</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m12 l8\">\n        <friend-list [list]=\"friendList\"></friend-list>\n      </div>\n    </div>\n    <add-friend [list]=\"friendList\"></add-friend>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'app';
        this.friendList = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getFriends().subscribe(function (data) {
            _this.friendList = data.data;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_friendList_friendList_component__ = __webpack_require__("./src/app/components/friendList/friendList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_addFriend_addFriend_component__ = __webpack_require__("./src/app/components/addFriend/addFriend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_addFriend_addFriend_component__["a" /* AddFriend */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_friendList_friendList_component__["a" /* FriendList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getFriends = function () {
        console.log('API CALL');
        return this.http.get('assets/friends.json');
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/addFriend/addFriend.component.css":
/***/ (function(module, exports) {

module.exports = "\n#plusButton {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n}\n\n.no-margin{\n  margin:  0 !important;\n}\n\n.modal-content h4{\n  text-transform: uppercase;\n}\n\n.alert-danger{\n  color: #f21a1a;\n}\n\n#modalAddFriend h4{\n  font-weight: bold;\n  padding: 0 .75rem;\n  /* border-bottom: 1px solid gray; */\n}"

/***/ }),

/***/ "./src/app/components/addFriend/addFriend.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a id=\"plusButton\" (click)=\"openModal()\" class=\"btn-floating btn-large waves-effect waves-light red btn modal-trigger\" href=\"javacsript:void(0)\">\n        <i class=\"material-icons\">add</i>\n    </a>\n    \n    <!-- Modal Structure -->\n    <div id=\"modalAddFriend\" class=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"row no-margin\">\n                <h4>Add new friend</h4>\n                <form class=\"col s12\" #friendForm=\"ngForm\" (ngSubmit)=\"onSubmit(friendForm)\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <input type=\"text\" class=\"form-control no-margin\" minlength=\"3\" id=\"first_name\" required [(ngModel)]=\"friend.name\" name=\"name\"\n                                #name=\"ngModel\">\n                            <label for=\"first_name\">*First Name</label>\n                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"name.errors.required\">\n                                    Name is required.\n                                </div>\n                                <div *ngIf=\"name.errors.minlength\">\n                                    Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <input type=\"text\" minlength=\"3\" class=\"form-control no-margin\" id=\"last_name\" required [(ngModel)]=\"friend.lastName\" name=\"lastName\"\n                                #lastName=\"ngModel\">\n                            <label for=\"last_name\">*Last Name</label>\n                            <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"lastName.errors.required\">\n                                    Last Name is required.\n                                </div>\n                                <div *ngIf=\"lastName.errors.minlength\">\n                                    Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12\">\n                            <div class=\"input-field\">\n                                <input id=\"email\" type=\"email\" required class=\"form-control no-margin\" [(ngModel)]=\"friend.email\" name=\"email\" #email=\"ngModel\"\n                                 email >\n                                 <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                                    <div *ngIf=\"email.errors.required\">\n                                        email is required.\n                                    </div>\n                                    <div *ngIf=\"email.hasError('email')\">\n                                        Invalid email\n                                    </div>\n                                </div>\n                                <label for=\"email\" data-error=\"wrong\" data-success=\"right\">*Email</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12\">\n                            <div id=\"genderSelect\" class=\"input-field\">\n                                <select class=\"form-control\" id=\"gender\" [(ngModel)]=\"friend.gender\" name=\"gender\">\n                                    <option value=\"\" disabled selected>Choose your option</option>\n                                    <option *ngFor=\"let item of genders\" [attr.data-icon]=\"getImagepath(item)\" [value]=\"item\">{{item}}</option>\n                                </select>\n                                <label for=\"gender\">Gender</label>\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!friendForm.form.valid\">Submit</button>\n                </form>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/addFriend/addFriend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friend__ = __webpack_require__("./src/app/components/friend.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFriend = /** @class */ (function () {
    function AddFriend() {
        this.genders = ['male', 'female'];
        this.friend = {};
    }
    AddFriend.prototype.createFriend = function () {
        this.genderElement = document.querySelector('#genderSelect input.select-dropdown');
        var newFriend = new __WEBPACK_IMPORTED_MODULE_1__friend__["a" /* Friend */](this.friend.name, this.friend.lastName, 23, this.friend.email, this.genderElement.value);
        console.log('createFriend ' + JSON.stringify(newFriend));
        this.list.push(newFriend);
    };
    AddFriend.prototype.getImagepath = function (path) {
        return "./assets/img/" + path + ".png";
    };
    AddFriend.prototype.onSubmit = function (form) {
        this.createFriend();
        $('#modalAddFriend').modal('close');
        form.reset();
        this.genderElement.value = "";
    };
    AddFriend.prototype.openModal = function () {
        console.log('modal open');
        $('#modalAddFriend').modal('open');
    };
    AddFriend.prototype.ngOnInit = function () {
        // init Material modal 
        $('#modalAddFriend').modal({
            dismissible: true,
            ready: function (modal, trigger) {
                // console.log('Modal ready');
            },
            complete: function () {
                // console.log('Modal closed');
            }
        });
        // init Material select 
        $(document).ready(function () {
            $('select').material_select();
        });
        console.log("Component Add-Friend ready");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], AddFriend.prototype, "list", void 0);
    AddFriend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-friend',
            template: __webpack_require__("./src/app/components/addFriend/addFriend.component.html"),
            styles: [__webpack_require__("./src/app/components/addFriend/addFriend.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddFriend);
    return AddFriend;
}());



/***/ }),

/***/ "./src/app/components/friend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friend; });
var Friend = /** @class */ (function () {
    function Friend(name, lastName, age, email, gender) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }
    return Friend;
}());



/***/ }),

/***/ "./src/app/components/friendList/friendList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendList = /** @class */ (function () {
    function FriendList() {
        this.title = 'FriendList app';
        this.removeItem = function (el) {
            console.log('remove item ' + el.name);
            console.log(this.list.indexOf(el));
            if (this.list.indexOf(el) > -1) {
                this.list.splice(this.list.indexOf(el), 1);
            }
        };
    }
    FriendList.prototype.ngOnInit = function () {
        console.log("Component Friend-List ready");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], FriendList.prototype, "list", void 0);
    FriendList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'friend-list',
            template: __webpack_require__("./src/app/components/friendList/friendlist.component.html"),
            styles: [__webpack_require__("./src/app/components/friendList/friendlist.component.css")]
        })
    ], FriendList);
    return FriendList;
}());



/***/ }),

/***/ "./src/app/components/friendList/friendlist.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/*customs*/\r\n\r\n.container {\r\n    margin-top: 3em;\r\n    width: 80%;\r\n}\r\n\r\n.collection-item {\r\n    text-align: left;\r\n}\r\n\r\n.item-email {\r\n    padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/friendList/friendlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <ul id=\"friendsList\" class=\"collection\">\n    <li class=\"collection-item avatar\" *ngFor=\"let item of list\">\n      <i class=\"material-icons circle green\">insert_chart</i>\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <span class=\"title\" *ngIf=\"item.gender === 'female'; else isMr\">Mss</span>\n          <ng-template #isMr>\n            <span class=\"title\">Mr</span>\n          </ng-template>\n          <span>{{item.name}}</span>\n          <span>{{item.lastName}}</span>\n          <p class=\"item-email\">{{item.email}}</p>\n        </div>\n        <!-- <div class=\"col s4\"> -->\n          <!-- <div class=\"item-age\"><span>age: {{item.age}}</span></div> -->\n        <!-- </div> -->\n      </div>\n      <a href=\"#!\" class=\"secondary-content\" (click)=\"removeItem(item)\">\n        <i class=\"material-icons\">delete</i>\n      </a>\n\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map