import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheoryPage } from './theory.page';

describe('TheoryPage', () => {
  let component: TheoryPage;
  let fixture: ComponentFixture<TheoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
