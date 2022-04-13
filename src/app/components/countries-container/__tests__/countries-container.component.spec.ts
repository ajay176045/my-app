import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContainerComponent } from '../countries-container.component';
import {Store, StoreModule} from '@ngrx/store';

describe('CountriesContainerComponent', () => {
  let component: CountriesContainerComponent;
  let fixture: ComponentFixture<CountriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesContainerComponent ],
      imports: [StoreModule.forRoot({})],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CountriesContainerComponent', () => {
    expect(component).toBeTruthy();
  });
});
