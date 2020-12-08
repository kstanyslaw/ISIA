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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt modi porro animi unde, aliquid, pariatur repellat quaerat tempore, consequatur molestiae magnam possimus? Adipisci aperiam quaerat, autem, praesentium pariatur enim officiis atque libero magnam tempore et dolor, vitae harum temporibus a quibusdam. Nostrum minima, autem ducimus itaque quod corrupti in? Eligendi tenetur mollitia aut voluptates, exercitationem suscipit, sapiente ut quaerat odit perspiciatis repellendus molestiae doloribus nemo rerum vel, magnam aperiam quod! Quo rerum ipsum id assumenda quaerat. Quaerat voluptates architecto unde fugit vero culpa eligendi ut assumenda nulla, iure necessitatibus nostrum nobis ipsum facere! Voluptates iusto atque iure? Quam, fugit?'
    );
  }
}
