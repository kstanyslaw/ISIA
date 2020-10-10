import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { ThemeComponent } from './theme/theme.component';
import { AppLanguageComponent } from './app-language/app-language.component';
import { SportsComponent } from './sports/sports.component';
import { SportFormGroupComponent } from './sports/sport-form-group/sport-form-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SettingsPage,
    ThemeComponent,
    AppLanguageComponent,
    SportsComponent,
    SportFormGroupComponent
  ]
})
export class SettingsPageModule {}
