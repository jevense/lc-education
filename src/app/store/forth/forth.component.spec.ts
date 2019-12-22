import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForthComponent } from './forth.component';

describe('ForthComponent', () => {
  let component: ForthComponent;
  let fixture: ComponentFixture<ForthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
