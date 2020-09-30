import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
      // this.isDark = prefersColor.matches;
      // this.update();

      // prefersColor.addEventListener(
      //   'change',
      //   mediaQuery => {
      //     this.isDark = mediaQuery.matches;
      //     this.update();
      //   }
      // );
    });
  }
}
