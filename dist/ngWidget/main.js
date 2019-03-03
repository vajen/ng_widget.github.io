(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <div class=\"element-left\" *ngIf=\"(hotels$ | async) as hotels; else loadingGif\">\n    <app-item [hotels]=\"hotels\" (change)=\"onCardClick($event)\" ></app-item>\n  </div>\n  <div class=\"element-right\" *ngIf=\"(hotels$ | async) as hotels; else loadingGif\">\n    <app-weather [hotel]=\"currentHotel || hotels[0]\"></app-weather>\n    <app-social [hotel]=\"currentHotel || hotels[0]\"></app-social>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by <a href=\"http://w3layouts.com/\" target=\"_blank\">\n    W3layouts </a></p>\n</div>\n<ng-template #loadingGif>\n  ..... .loading\n</ng-template>\n"

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
/* harmony import */ var _common_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/mock/data */ "./src/app/common/mock/data.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.hotels$ = _common_mock_data__WEBPACK_IMPORTED_MODULE_2__["data$"];
    }
    onCardClick(hotel) {
        this.currentHotel = hotel;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _uniq_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uniq-type.pipe */ "./src/app/uniq-type.pipe.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hotels-filter.pipe */ "./src/app/hotels-filter.pipe.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _social_social_component__WEBPACK_IMPORTED_MODULE_6__["SocialComponent"],
            _uniq_type_pipe__WEBPACK_IMPORTED_MODULE_7__["UniqTypePipe"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            _hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["HotelsFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/mock/data.ts":
/*!*************************************!*\
  !*** ./src/app/common/mock/data.ts ***!
  \*************************************/
/*! exports provided: data, data$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data$", function() { return data$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

const data = [
    {
        img: "https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/SaoJorgeGreen.jpg",
        country: "Azores islands",
        address: "Sed perspiciatis\nEt harum quidem",
        phone: 1285111685,
        weather: {
            title: "Good weather!",
            icon: "",
            water: 20,
            temperature: 25
        },
        social_info: {
            title: "Ponta Del Gada",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0DGOmQyMxZF5eZY0ltiZCsN7ObwjySpI2Ej06QnPNxTQMML0",
            followers: 2850,
            following: 675
        },
        type: "Apartment"
    },
    {
        img: "https://cdn.traveltalktours.com/wp-content/uploads/2017/01/Highlights-of-Spain-Portugal-thumb-360x225.jpg",
        country: "Spain",
        address: "Madrid, Principe Pio",
        phone: 1285000685,
        weather: {
            title: "Et harum quidem",
            icon: "http://www.myiconfinder.com/uploads/iconsets/256-256-5f39e3ad56ab078d4ab55e4ad54db113-cloud.png",
            water: 21,
            temperature: 30
        },
        social_info: {
            title: "Madrid",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5Y9_pSbyQmT8YKANo2xlVdQdc4dVG6QSvnycsrOcwzJqP7jz",
            followers: 2110,
            following: 105
        },
        type: "hotel"
    },
    {
        img: "https://www.thekharkivtimes.com/wp-content/uploads/2016/09/93345.jpg",
        country: "Russia",
        address: "Санкт-Петербург\nНевский пр.",
        phone: 1285968685,
        weather: {
            title: "Облачно!",
            icon: "/assets/images/cloudy.png",
            water: 10,
            temperature: 18
        },
        social_info: {
            title: "Санкт-Петербург",
            img: "http://saint-petersburg.ru/i/msg/0348/0852/ph32.jpg",
            followers: 5850,
            following: 5750
        },
        type: "hotel"
    },
    {
        img: "https://www.fly4free.com/wp-content/uploads/2016/12/FuerteventuraCanary-Islands.png",
        country: "Canary islands",
        address: "Sed perspiciatis\nEt harum quidem",
        phone: 1285968685,
        weather: {
            title: "Normal",
            icon: "/assets/images/cloudy.png",
            water: 22,
            temperature: 27
        },
        social_info: {
            title: "Tenerife",
            img: "https://tripway.com/blog/wp-content/uploads/2018/07/es-calo-des-moro-beach.jpg",
            followers: 500,
            following: 250
        },
        type: "villa"
    },
    {
        img: "https://cdn.traveltalktours.com/wp-content/uploads/2017/01/best-thailand-cambodia-thumb-360x225.jpg",
        country: "Cambodia",
        address: "Phnom Penh\nParadise Villas",
        phone: 1285968685,
        weather: {
            title: "Normal",
            icon: "/assets/images/cloudy.png",
            water: 21,
            temperature: 31
        },
        social_info: {
            title: "phnom penh",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7vC4CyUJU_6fV6qJOhIbKfpiJOpGFhV3ixkNBFHGOqLczmxb",
            followers: 500,
            following: 250
        },
        type: "villa"
    }
];
const data$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);


/***/ }),

/***/ "./src/app/hotels-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/hotels-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: HotelsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsFilterPipe", function() { return HotelsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelsFilterPipe = class HotelsFilterPipe {
    transform(hotels, searchtext) {
        if (!searchtext) {
            return hotels;
        }
        return hotels.filter((hotel) => {
            return hotel.type.toLowerCase().includes(searchtext.toLowerCase());
        });
    }
};
HotelsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hotelsFilter'
    })
], HotelsFilterPipe);



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\">\n  <img [src]=\"currentHotel?.img || hotels[0].img\" alt=\"\" class=\"img-responsive\"/>\n</div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <app-menu *ngFor=\"let hotel of hotels | uniqType: hotels\"\n                [type]=\"hotel\"\n                (search)=\"type = $event\">\n      </app-menu>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <div class=\"activity-row\" *ngFor=\"let currentHotel of hotels | hotelsFilter: type\"\n             (click)=\"selectHotel(currentHotel)\">\n          <div class=\"activity-desc\">\n            <h5>{{currentHotel.country}}!</h5>\n            <p>{{currentHotel.address}}</p>\n            <h6>Tel:+{{currentHotel.phone}}</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img [src]=\"currentHotel.img\" alt=\"\"/></li>\n              <li><img [src]=\"currentHotel.social_info.img\" alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemComponent = class ItemComponent {
    constructor() {
        this.type = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    selectHotel(hotel) {
        this.currentHotel = hotel;
        this.change.emit(hotel);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ItemComponent.prototype, "hotels", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ItemComponent.prototype, "change", void 0);
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-item",
        template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
        styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li><a href=\"#\" (click)=\"searchBy(type)\">{{ type }}</a></li>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    searchBy(type) {
        this.search.emit(type);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MenuComponent.prototype, "search", void 0);
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu",
        template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{hotel.social_info.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img src=\"{{hotel.social_info.img}}\" alt=\"\" class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3 [innerText]=\"hotel.social_info.followers\"></h3>\n        <p>Followers</p>\n      </li>\n      <li><h3 [innerText]=\"hotel.social_info.following\"></h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialComponent = class SocialComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialComponent.prototype, "hotel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialComponent.prototype, "social", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialComponent.prototype, "activeHotel", void 0);
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
        styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SocialComponent);



/***/ }),

/***/ "./src/app/uniq-type.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/uniq-type.pipe.ts ***!
  \***********************************/
/*! exports provided: UniqTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqTypePipe", function() { return UniqTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UniqTypePipe = class UniqTypePipe {
    //transform(value: string): string {
    // TODO
    /*if (!this._uniqTypes.includes(value)) {
    // if (this._uniqTypes.indexOf(value) < 0) {
      this._uniqTypes.push(value);
      return value;
    }*/
    transform(hotels) {
        const types = hotels.map((hotel) => {
            return hotel.type;
        });
        return Array.from(new Set(types));
    }
};
UniqTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'uniqType'
    })
], UniqTypePipe);



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{hotel.weather.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2><span [innerText]=\"hotel.weather.temperature\"></span><sup class=\"degree\">°</sup></h2>\n  <h6>Water <span [innerText]=\"hotel.weather.water\"></span><sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherComponent = class WeatherComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeatherComponent.prototype, "hotel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeatherComponent.prototype, "weather", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeatherComponent.prototype, "activeHotel", void 0);
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
        styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WeatherComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vajen/ng_widget/ng_widget/ngWidget/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map