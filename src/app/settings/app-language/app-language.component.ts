import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-language',
  templateUrl: './app-language.component.html',
  styleUrls: ['./app-language.component.scss'],
})
export class AppLanguageComponent implements OnInit {

  @Input() settingsForm: FormGroup;

  constructor() { }

  ngOnInit() {}

}
