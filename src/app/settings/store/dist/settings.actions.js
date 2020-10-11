"use strict";
exports.__esModule = true;
exports.setSports = exports.setTheme = exports.setAppLanguage = exports.updateSettings = void 0;
var store_1 = require("@ngrx/store");
exports.updateSettings = store_1.createAction('[Settings Page] Update Settings', store_1.props());
exports.setAppLanguage = store_1.createAction('[Settings Page] Set App Language', store_1.props());
exports.setTheme = store_1.createAction('[Settings Page] Set Theme', store_1.props());
exports.setSports = store_1.createAction('[Settings Page] Set Sports', store_1.props());
