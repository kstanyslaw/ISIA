import { createAction, props } from "@ngrx/store";

export const setAppLanguage = createAction('[Settings Page] Set App Language', props<{ newLanguage: string }>());