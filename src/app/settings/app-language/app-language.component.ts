import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from "../../store/app.reducer";

@Component({
  selector: 'app-app-language',
  templateUrl: './app-language.component.html',
  styleUrls: ['./app-language.component.scss'],
})
export class AppLanguageComponent implements OnInit {

  icons = {
    'ru': "../../../assets/icon/language/002-russia.svg",
    'en': "../../../assets/icon/language/003-united-states.svg",
    'de': "../../../assets/icon/language/001-germany.svg"
  }

  multilanguage: boolean;
  appLanguage: string;
  translateLanguage: string;

  @Input() settingsForm: FormGroup;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.select('settings').subscribe((stateData) => {
      this.multilanguage = stateData.settings.multilanguage;
      this.appLanguage = stateData.settings.appLanguage;
      this.translateLanguage = stateData.settings.translateLanguage;
    });
  }

}
