"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThemeComponent = void 0;
var core_1 = require("@angular/core");
var ThemeComponent = /** @class */ (function () {
    function ThemeComponent() {
    }
    ThemeComponent.prototype.ngOnInit = function () { };
    ThemeComponent.prototype.update = function () {
        document.body.classList.toggle('dark', this.settingsForm.value.theme);
    };
    __decorate([
        core_1.Input()
    ], ThemeComponent.prototype, "settingsForm");
    ThemeComponent = __decorate([
        core_1.Component({
            selector: 'app-theme',
            templateUrl: './theme.component.html',
            styleUrls: ['./theme.component.scss']
        })
    ], ThemeComponent);
    return ThemeComponent;
}());
exports.ThemeComponent = ThemeComponent;
