"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppLanguageComponent = void 0;
var core_1 = require("@angular/core");
var AppLanguageComponent = /** @class */ (function () {
    function AppLanguageComponent(store) {
        this.store = store;
        this.icons = {
            'ru': "../../../assets/icon/language/002-russia.svg",
            'en': "../../../assets/icon/language/003-united-states.svg",
            'de': "../../../assets/icon/language/001-germany.svg"
        };
    }
    AppLanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('settings').subscribe(function (stateData) {
            _this.multilanguage = stateData.settings.multilanguage;
            _this.appLanguage = stateData.settings.appLanguage;
            _this.translateLanguage = stateData.settings.translateLanguage;
        });
    };
    __decorate([
        core_1.Input()
    ], AppLanguageComponent.prototype, "settingsForm");
    AppLanguageComponent = __decorate([
        core_1.Component({
            selector: 'app-app-language',
            templateUrl: './app-language.component.html',
            styleUrls: ['./app-language.component.scss']
        })
    ], AppLanguageComponent);
    return AppLanguageComponent;
}());
exports.AppLanguageComponent = AppLanguageComponent;
