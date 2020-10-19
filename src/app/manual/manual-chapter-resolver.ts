import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { title } from 'process';
import { Chapter } from './chapter.model';

@Injectable({ providedIn: 'root' })
export class ManualChapterResolver implements Resolve<Chapter> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return new Chapter(
      id,
      'Dummy content'
    );
  }
}
