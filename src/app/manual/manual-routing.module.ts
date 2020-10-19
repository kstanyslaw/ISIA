import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualChapterResolver } from './manual-chapter-resolver';

import { ManualPage } from './manual.page';

const routes: Routes = [
  {
    path: '',
    // component: ManualPage
    redirectTo: 'content',
    pathMatch: 'full'
  },
  {
    path: 'content',
    loadChildren: () => import('./manual-content-page/manual-content-page.module').then( m => m.ManualContentPagePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./manual-chapter/manual-chapter.module').then( m => m.ManualChapterPageModule),
    resolve: {chapter: ManualChapterResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualPageRoutingModule {}
