import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {

  @Input() settingsForm: FormGroup;

  isDark: boolean;

  constructor() { }

  ngOnInit() {}

  update() {
    document.body.classList.toggle('dark', this.settingsForm.value.theme);
  }
}
