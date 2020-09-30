import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  @Input() settingsForm: FormGroup;

  constructor() { }

  ngOnInit() {  }

}
