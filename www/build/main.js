webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milk_milk__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.coffee = 1;
    }
    HomePage.prototype.test = function () {
        console.log(this.coffee);
    };
    HomePage.prototype.redirectToMilk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__milk_milk__["a" /* MilkPage */], {
            coffee: this.coffee
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/home/home.html"*/'<ion-header>\n    <ion-title>\n      Coffee\n    </ion-title>\n</ion-header>\n\n<ion-content padding>\n  {{coffee}}\n  <img style="margin-bottom: -350px" src="assets/images/coffee_fill-{{coffee}}.png" />\n  <ion-item no-lines style="background-color: transparent; margin-top: 350px">\n    <ion-label class="range"> Coffee </ion-label>\n    <ion-range class="range" pin="true" min="1" max="5" [(ngModel)]="coffee" [ngModel]="coffee" (ngModelChange)="test()" color="cream">\n      <ion-label range-left> Min </ion-label>\n      <ion-label range-right> Max </ion-label>\n    </ion-range>\n  </ion-item>\n  <button class="range" ion-button style="margin-top: 0px; margin-left: 180px; height: 40px; width: 140px" color="cream" (click)="redirectToMilk()">Add Milk</button>\n</ion-content>'/*ion-inline-end:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_submit__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MilkPage = (function () {
    function MilkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.overfill_frames = 1;
        this.coffee = 1;
        this.milk = 1;
        this.coffee_0 = false;
        this.coffee_1 = false;
        this.coffee_2 = false;
        this.coffee_3 = false;
        this.coffee_4 = false;
        this.overfill = false;
    }
    MilkPage.prototype.ngOnInit = function () {
        //carry amount of coffee over from previous page
        this.coffee = this.navParams.data.coffee;
        if (this.coffee === 1) {
            //coffee_0 is milk fill with no coffee
            this.coffee_0 = true;
        }
        else if (this.coffee === 2) {
            //coffee_1 is milk fill with 1 coffee
            this.coffee_1 = true;
        }
        else if (this.coffee === 3) {
            //coffe_2 is milk fill with 2 coffee
            this.coffee_2 = true;
        }
        else if (this.coffee === 4) {
            //coffee_3 is milk fill with 3 coffee
            this.coffee_3 = true;
        }
        else if (this.coffee === 5) {
            this.coffee_4 = true;
        }
    };
    MilkPage.prototype.check = function () {
        var _this = this;
        if ((this.coffee + this.milk) >= 7) {
            if (this.coffee === 1) {
                this.coffee_0 = false;
            }
            if (this.coffee === 2) {
                this.coffee_1 = false;
            }
            if (this.coffee === 3) {
                this.coffee_2 = false;
            }
            if (this.coffee === 4) {
                this.coffee_3 = false;
            }
            if (this.coffee === 5) {
                this.coffee_4 = false;
            }
            this.overfill = true;
            clearInterval(this.overfill_animate);
            //animation for overfill start
            this.overfill_animate = setInterval(function () {
                if (_this.overfill_frames >= 23) {
                    _this.overfill_frames = 1;
                }
                else {
                    _this.overfill_frames++;
                }
            }, 40);
        }
        else {
            //turn off overfill animation, bring image back
            if ((this.coffee + this.milk) < 7) {
                if (this.coffee === 1) {
                    this.coffee_0 = true;
                }
                if (this.coffee === 2) {
                    this.coffee_1 = true;
                }
                if (this.coffee === 3) {
                    this.coffee_2 = true;
                }
                if (this.coffee === 4) {
                    this.coffee_3 = true;
                }
                if (this.coffee === 5) {
                    this.coffee_4 = true;
                }
                this.overfill = false;
            }
        }
    };
    MilkPage.prototype.redirectToCoffee = function () {
        this.navCtrl.pop();
    };
    MilkPage.prototype.redirectToSubmit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submit_submit__["a" /* SubmitPage */], {
            coffee: this.coffee,
            milk: this.milk
        });
    };
    return MilkPage;
}());
MilkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-milk',template:/*ion-inline-start:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/milk/milk.html"*/'<ion-header>\n    <ion-title>\n      Milk\n    </ion-title>\n</ion-header>\n\n<ion-content padding>\n  {{milk}}\n  <img *ngIf="coffee_0" style="margin-bottom: -350px" src="assets/images/possible/milk_fill-{{milk}}.png" />\n  <img *ngIf="coffee_1" style="margin-bottom: -350px" src="assets/images/coffee_1/coffee_1-{{milk}}.png" />\n  <img *ngIf="coffee_2" style="margin-bottom: -350px" src="assets/images/coffee_2/coffee_2-{{milk}}.png" />\n  <img *ngIf="coffee_3" style="margin-bottom: -350px" src="assets/images/coffee_3/coffee_3-{{milk}}.png" />\n  <img *ngIf="coffee_4" style="margin-bottom: -350px" src="assets/images/coffee_4/coffee_4-{{milk}}.png" />\n  <img *ngIf="overfill" style="margin-bottom: -350px" src="assets/images/overfill/overfill-{{overfill_frames}}.png" />\n  <ion-item no-lines style="background-color: transparent; margin-top: 350px">\n    <ion-label class="range"> Milk </ion-label>\n    <ion-range class="range" pin="true" min="1" max="5" [(ngModel)]="milk" [ngModel]="milk" (ngModelChange)="check()" color="cream">\n      <ion-label range-left> Min </ion-label>\n      <ion-label range-right> Max </ion-label>\n    </ion-range>\n  </ion-item>\n  <button class="range" ion-button style="margin-left: 30px; height: 40px; width: 140px" color="cream" (click)="redirectToCoffee()">Back</button>\n  <button class="range" ion-button style= "margin-left: 5px; height: 40px; width: 140px" color="cream" (click)="redirectToSubmit()">Submit</button>\n</ion-content>'/*ion-inline-end:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/milk/milk.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
], MilkPage);

var _a, _b;
//# sourceMappingURL=milk.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_milk_milk__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_submit_submit__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_milk_milk__["a" /* MilkPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_submit_submit__["a" /* SubmitPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_milk_milk__["a" /* MilkPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_submit_submit__["a" /* SubmitPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jayhongvarivatana/apps/coffee_mockup/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jayhongvarivatana/apps/coffee_mockup/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmitPage = (function () {
    function SubmitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coffee = this.navParams.data.coffee;
        this.milk = this.navParams.data.milk;
    }
    SubmitPage.prototype.test = function () {
    };
    return SubmitPage;
}());
SubmitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submit',template:/*ion-inline-start:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/submit/submit.html"*/'<ion-header>\n    <ion-title>\n      Submit\n    </ion-title>\n</ion-header>\n\n<ion-content padding>\n  <h1>{{coffee}}</h1>\n  <h1>{{milk}}</h1>\n</ion-content>'/*ion-inline-end:"/Users/jayhongvarivatana/apps/coffee_mockup/src/pages/submit/submit.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
], SubmitPage);

var _a, _b;
//# sourceMappingURL=submit.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map