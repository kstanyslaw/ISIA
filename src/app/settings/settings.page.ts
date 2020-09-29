import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isDark: boolean;

  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = prefersColor.matches;
    this.update();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.isDark = mediaQuery.matches;
        this.update();
      }
    );
  }

  ngOnInit() {
  }

  update() {
    document.body.classList.toggle('dark', this.isDark);    
  }

}
