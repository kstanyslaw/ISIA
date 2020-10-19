import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ManualContent } from 'src/assets/manual.content';
import * as fromRoot from "../../store/app.reducer";

@Component({
  selector: 'app-manual-content-component',
  templateUrl: './manual-content-component.component.html',
  styleUrls: ['./manual-content-component.component.scss'],
})
export class ManualContentComponentComponent implements OnInit {

  content: Content;
  appLanguage: string;
  private storeSub: Subscription;

  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.storeSub = this.store.select('settings').subscribe(storeData => {
      this.appLanguage = storeData.settings.appLanguage;
      this.content = ManualContent[this.appLanguage];
    });
  }

}

interface Content {
  en: string[];
  ru: string[];
  de: string[];
}
