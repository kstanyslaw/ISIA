"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var SettingsActions = require("./settings/store/settings.actions");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, store, locale) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.store = store;
        this.locale = locale;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.getSystemTheme();
        this.setSystemLanguage();
    };
    AppComponent.prototype.getSystemTheme = function () {
        var _this = this;
        // Use matchMedia to check the user preference
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        var isDark = prefersDark.matches;
        this.toggleTheme(isDark);
        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addListener(function (mediaQuery) { return _this.toggleTheme(mediaQuery.matches); });
    };
    AppComponent.prototype.toggleTheme = function (newTheme) {
        document.body.classList.toggle('dark', newTheme);
        this.store.dispatch(SettingsActions.setTheme({ newTheme: newTheme }));
    };
    AppComponent.prototype.setSystemLanguage = function () {
        var newLanguage = this.locale;
        this.store.dispatch(SettingsActions.setAppLanguage({ newLanguage: newLanguage }));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        }),
        __param(4, core_1.Inject(core_1.LOCALE_ID))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
