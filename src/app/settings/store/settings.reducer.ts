import { Action, createReducer, on } from "@ngrx/store";
import { Settings } from '../settings.model';
import * as SettingsActions from "./settings.actions";

export interface State {
  settings: Settings
}

export const initialState: State = {
  settings: null
}

const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.updateSettings, (state, { newSettings }) => ({
    ...state,
    settings: newSettings
  })),
  on(SettingsActions.setAppLanguage, (state, { newLanguage }) => ({
    ...state,
    settings: {...state.settings, appLanguage: newLanguage}
  })),
  on(SettingsActions.setTheme, (state, { newTheme }) => ({
    ...state,
    settings: {...state.settings, theme: newTheme}
  })),
  on(SettingsActions.setSports, (state, { newSports }) => ({
    ...state,
    settings: {...state.settings, sports: newSports}
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return settingsReducer(state, action);
}