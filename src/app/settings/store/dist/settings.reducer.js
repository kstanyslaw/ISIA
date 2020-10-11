"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.reducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var SettingsActions = require("./settings.actions");
exports.initialState = {
    settings: null
};
var settingsReducer = store_1.createReducer(exports.initialState, store_1.on(SettingsActions.updateSettings, function (state, _a) {
    var newSettings = _a.newSettings;
    return (__assign(__assign({}, state), { settings: newSettings }));
}), store_1.on(SettingsActions.setAppLanguage, function (state, _a) {
    var newLanguage = _a.newLanguage;
    return (__assign(__assign({}, state), { settings: __assign(__assign({}, state.settings), { appLanguage: newLanguage }) }));
}), store_1.on(SettingsActions.setTheme, function (state, _a) {
    var newTheme = _a.newTheme;
    return (__assign(__assign({}, state), { settings: __assign(__assign({}, state.settings), { theme: newTheme }) }));
}), store_1.on(SettingsActions.setSports, function (state, _a) {
    var newSports = _a.newSports;
    return (__assign(__assign({}, state), { settings: __assign(__assign({}, state.settings), { sports: newSports }) }));
}));
function reducer(state, action) {
    return settingsReducer(state, action);
}
exports.reducer = reducer;
