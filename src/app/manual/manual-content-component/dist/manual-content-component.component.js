"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManualContentComponentComponent = void 0;
var core_1 = require("@angular/core");
var manual_content_1 = require("src/assets/manual.content");
var ManualContentComponentComponent = /** @class */ (function () {
    function ManualContentComponentComponent(store) {
        this.store = store;
    }
    ManualContentComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSub = this.store.select('settings').subscribe(function (storeData) {
            _this.appLanguage = storeData.settings.appLanguage;
            _this.content = manual_content_1.ManualContent[_this.appLanguage];
        });
    };
    ManualContentComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-manual-content-component',
            templateUrl: './manual-content-component.component.html',
            styleUrls: ['./manual-content-component.component.scss']
        })
    ], ManualContentComponentComponent);
    return ManualContentComponentComponent;
}());
exports.ManualContentComponentComponent = ManualContentComponentComponent;
