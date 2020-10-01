import { Component, Inject, LOCALE_ID } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import * as fromRoot from "./store/app.reducer";
import * as SettingsActions from "./settings/store/settings.actions";
import { Settings } from './settings/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  settings: Settings;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<fromRoot.AppState>,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.getSystemTheme();

    this.setSystemLanguage();
  }
  
  getSystemTheme() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    let isDark = prefersDark.matches;
    
    this.toggleTheme(isDark);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleTheme(mediaQuery.matches));
  }

  toggleTheme( newTheme: boolean) {
    document.body.classList.toggle('dark', newTheme);
    this.store.dispatch(SettingsActions.setTheme({ newTheme }));
  }

  setSystemLanguage() {
    const newLanguage: string = this.locale;
    this.store.dispatch(SettingsActions.setAppLanguage({ newLanguage }));
  }

}
