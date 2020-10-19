import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualChapterPageRoutingModule } from './manual-chapter-routing.module';

import { ManualChapterPage } from './manual-chapter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualChapterPageRoutingModule
  ],
  declarations: [ManualChapterPage]
})
export class ManualChapterPageModule {}
