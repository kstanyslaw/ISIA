import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualContentPagePageRoutingModule } from './manual-content-page-routing.module';

import { ManualContentPagePage } from './manual-content-page.page';
import { ManualContentComponentComponent } from '../manual-content-component/manual-content-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualContentPagePageRoutingModule
  ],
  declarations: [
    ManualContentPagePage,
    ManualContentComponentComponent
  ]
})
export class ManualContentPagePageModule {}
