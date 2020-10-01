import { ActionReducerMap } from "@ngrx/store";
import * as fromSettings from "../settings/store/settings.reducer";

export interface AppState {
  settings: fromSettings.State
}

export const appReducer: ActionReducerMap<AppState> = {
  settings: fromSettings.reducer
}