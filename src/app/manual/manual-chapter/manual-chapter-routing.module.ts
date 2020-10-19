import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualChapterPage } from './manual-chapter.page';

const routes: Routes = [
  {
    path: '',
    component: ManualChapterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualChapterPageRoutingModule {}
