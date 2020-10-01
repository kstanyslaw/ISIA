import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from "../store/app.reducer";
import * as SettingsActions from "./store/settings.actions";
import { Subscription } from 'rxjs';
import { Settings } from './settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {

  settingsForm: FormGroup;
  private formChangeSub: Subscription;
  private storeSub: Subscription;
  private loadedSettings: Settings;

  constructor(private store: Store<fromRoot.AppState>) {
  }

  ngOnInit(): void {
    this.storeSub = this.store.select('settings').subscribe(stateData => {
      this.loadedSettings = stateData.settings;
    });

    this.initForm();

    this.formChangeSub = this.settingsForm.valueChanges.subscribe(newValue => {
      console.log(newValue);
      this.updateSettings(newValue);
    });
  }

  initForm(): void {
    this.settingsForm = new FormGroup({
      theme: new FormControl(this.loadedSettings.theme),
      appLanguage: new FormControl(this.loadedSettings.appLanguage),
      multilanguage: new FormControl(false),
      translateLanguage: new FormControl(this.loadedSettings.appLanguage === 'en-US' ? 'ru' : 'en-US')
    });
  }

  updateSettings(newValue = this.loadedSettings) {
    const newSettings = new Settings(
      newValue.theme,
      newValue.appLanguage,
      newValue.multilanguage,
      newValue.translateLanguage
    );
    this.store.dispatch(SettingsActions.updateSettings({newSettings}));
  }

  ngOnDestroy(): void {
    this.formChangeSub.unsubscribe();
    this.storeSub.unsubscribe();
  }
}
