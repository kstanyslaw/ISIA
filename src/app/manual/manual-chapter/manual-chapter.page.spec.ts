import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualChapterPage } from './manual-chapter.page';

describe('ManualChapterPage', () => {
  let component: ManualChapterPage;
  let fixture: ComponentFixture<ManualChapterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualChapterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualChapterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
