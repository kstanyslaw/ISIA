import { createAction, props } from "@ngrx/store";
import { Settings } from '../settings.model';

export const updateSettings = createAction('[Settings Page] Update Settings', props<{ newSettings: Settings }>());
export const setAppLanguage = createAction('[Settings Page] Set App Language', props<{ newLanguage: string }>());
export const setTheme = createAction('[Settings Page] Set Theme', props<{ newTheme: boolean }>());