import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { ThemeComponent } from './theme/theme.component';
import { AppLanguageComponent } from './app-language/app-language.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [
    SettingsPage,
    ThemeComponent,
    AppLanguageComponent
  ]
})
export class SettingsPageModule {}
