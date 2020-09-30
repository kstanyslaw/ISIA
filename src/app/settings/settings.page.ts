import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {

  settingsForm: FormGroup;
  private formChangeSub: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.settingsForm = new FormGroup({
      theme: new FormControl(null),
      appLanguage: new FormControl('ru')
    });

    this.formChangeSub = this.settingsForm.valueChanges.subscribe(newValue => console.log(newValue));
  }

  ngOnDestroy(): void {
    this.formChangeSub.unsubscribe();
  }
}
