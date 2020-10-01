"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SettingsPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SettingsActions = require("./store/settings.actions");
var settings_model_1 = require("./settings.model");
var SettingsPage = /** @class */ (function () {
    function SettingsPage(store) {
        this.store = store;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSub = this.store.select('settings').subscribe(function (stateData) {
            _this.loadedSettings = stateData.settings;
        });
        this.initForm();
        this.formChangeSub = this.settingsForm.valueChanges.subscribe(function (newValue) {
            console.log(newValue);
            _this.updateSettings(newValue);
        });
    };
    SettingsPage.prototype.initForm = function () {
        this.settingsForm = new forms_1.FormGroup({
            theme: new forms_1.FormControl(this.loadedSettings.theme),
            appLanguage: new forms_1.FormControl(this.loadedSettings.appLanguage)
        });
    };
    SettingsPage.prototype.updateSettings = function (newValue) {
        if (newValue === void 0) { newValue = this.loadedSettings; }
        var newSettings = new settings_model_1.Settings(newValue.theme, newValue.appLanguage);
        this.store.dispatch(SettingsActions.updateSettings({ newSettings: newSettings }));
    };
    SettingsPage.prototype.ngOnDestroy = function () {
        this.formChangeSub.unsubscribe();
        this.storeSub.unsubscribe();
    };
    SettingsPage = __decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss']
        })
    ], SettingsPage);
    return SettingsPage;
}());
exports.SettingsPage = SettingsPage;
