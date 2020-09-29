import { ActionReducerMap } from "@ngrx/store";
import * as formSettings from "../settings/store/settings.reducer";

export interface AppState {
  settings: formSettings.State
}

export const appReducer: ActionReducerMap<AppState> = {
  settings: formSettings.reducer
}