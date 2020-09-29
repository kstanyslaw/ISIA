import { Action, createReducer, on } from "@ngrx/store";
import * as SettingsActions from "./settings.actions";

export interface State {
  appLanguage: string
}

export const initialState: State = {
  appLanguage: null
}

const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.setAppLanguage, (state, { newLanguage }) => ({
    ...state,
    appLanguage: newLanguage
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return settingsReducer(state, action);
}