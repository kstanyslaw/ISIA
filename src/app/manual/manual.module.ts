import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { IonicModule } from '@ionic/angular';

import { ManualPageRoutingModule } from './manual-routing.module';

import { ManualPage } from './manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualPageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ManualPage
  ]
})
export class ManualPageModule {}
