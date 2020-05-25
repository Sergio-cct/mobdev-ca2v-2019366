(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Details {{ episode?.title }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"noStatusEpisode()\" *ngIf=\"isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-sharp\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"likeEpisode()\" *ngIf=\"!isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"noStatusEpisode()\" *ngIf=\"isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-sharp\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"dislikeEpisode()\" *ngIf=\"!isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"episode\">\n\n\t<ion-card *ngIf=\"episode\" class=\"film-card\">\n\t\t<ion-card-header>Season {{ episode.season }} ==> Episode {{ episode.episode }}</ion-card-header>\n\n\t\t<ion-item class=\"film-info\">\n\t\t\t<ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\tTitle: {{ episode.title }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"film-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"videocam-outline\" slot=\"start\"></ion-icon>\n\t\t\tSerie: {{ episode.series }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"film-info\">\n\t\t\t<ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n\t\t\t<p>Characters: {{ episode.characters }}</p>\n\t\t</ion-item>\n\n\t\t<ion-item class=\"film-info\">\n\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\tRelease Date: {{ episode.air_date }}\n\t\t</ion-item>\n\n\n\n\t</ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EpisodeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function() { return EpisodeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");




const routes = [
    {
        path: '',
        component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }
];
let EpisodeDetailsPageRoutingModule = class EpisodeDetailsPageRoutingModule {
};
EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodeDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function() { return EpisodeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episode-details-routing.module */ "./src/app/pages/episode-details/episode-details-routing.module.ts");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");







let EpisodeDetailsPageModule = class EpisodeDetailsPageModule {
};
EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]
        ],
        declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })
], EpisodeDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
  \***************************************************************/
/*! exports provided: EpisodeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function() { return EpisodeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let EpisodeDetailsPage = class EpisodeDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.episodeId = null;
    }
    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });
        this.favouriteService.isFavouriteE(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }
};
EpisodeDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-episode-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episode-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episode-details.page.scss */ "./src/app/pages/episode-details/episode-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], EpisodeDetailsPage);



/***/ })

}]);
//# sourceMappingURL=episode-details-episode-details-module-es2015.js.map