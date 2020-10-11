import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportsComponent } from './sports.component';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
