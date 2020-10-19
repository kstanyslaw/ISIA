import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../chapter.model';

@Component({
  selector: 'app-manual-chapter',
  templateUrl: './manual-chapter.page.html',
  styleUrls: ['./manual-chapter.page.scss'],
})
export class ManualChapterPage implements OnInit {
  chapter: Chapter;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.chapter = data.chapter;
    });
  }

}
