"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManualContentPagePageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var manual_content_page_routing_module_1 = require("./manual-content-page-routing.module");
var manual_content_page_page_1 = require("./manual-content-page.page");
var manual_content_component_component_1 = require("../manual-content-component/manual-content-component.component");
var ManualContentPagePageModule = /** @class */ (function () {
    function ManualContentPagePageModule() {
    }
    ManualContentPagePageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                manual_content_page_routing_module_1.ManualContentPagePageRoutingModule
            ],
            declarations: [
                manual_content_page_page_1.ManualContentPagePage,
                manual_content_component_component_1.ManualContentComponentComponent
            ]
        })
    ], ManualContentPagePageModule);
    return ManualContentPagePageModule;
}());
exports.ManualContentPagePageModule = ManualContentPagePageModule;
