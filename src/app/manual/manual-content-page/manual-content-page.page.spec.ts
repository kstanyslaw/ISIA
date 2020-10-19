import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualContentPagePage } from './manual-content-page.page';

describe('ManualContentPagePage', () => {
  let component: ManualContentPagePage;
  let fixture: ComponentFixture<ManualContentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualContentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualContentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
