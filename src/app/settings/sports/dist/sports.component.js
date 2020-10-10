"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SportsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SportsComponent = /** @class */ (function () {
    function SportsComponent() {
    }
    SportsComponent.prototype.ngOnInit = function () {
        // this.sportsArray = this.settingsForm.get('sports') as FormArray;
        console.log(this.sportsArray);
    };
    Object.defineProperty(SportsComponent.prototype, "sportsArray", {
        get: function () {
            return this.settingsForm.get('sports');
        },
        enumerable: false,
        configurable: true
    });
    SportsComponent.prototype.onAddSport = function () {
        this.sportsArray.push(new forms_1.FormGroup({
            sport: new forms_1.FormControl(null),
            level: new forms_1.FormControl(null)
        }));
    };
    __decorate([
        core_1.Input()
    ], SportsComponent.prototype, "settingsForm");
    SportsComponent = __decorate([
        core_1.Component({
            selector: 'app-sports',
            templateUrl: './sports.component.html',
            styleUrls: ['./sports.component.scss']
        })
    ], SportsComponent);
    return SportsComponent;
}());
exports.SportsComponent = SportsComponent;
