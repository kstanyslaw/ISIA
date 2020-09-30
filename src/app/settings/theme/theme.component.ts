import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {

  isDark: boolean;

  constructor() { }

  ngOnInit() {}

  update() {
    document.body.classList.toggle('dark', this.isDark);    
  }


}
