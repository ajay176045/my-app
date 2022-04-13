import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from '../country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create countryDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleDetails method', () => {

    it("should return false OnInit, when the selectedOption property equals ''", () => {
      component.selectedOption = '';
      expect(component.toggleDetails()).toBe(false);
    });

    it("should return false if the selectedOption property equals 'Asia'", () => {
      component.selectedOption = 'Asia';
      expect(component.toggleDetails()).toBe(false);
    });

    it("should return true if the selectedOption property is a country", () => {
      component.selectedOption = 'India';
      expect(component.toggleDetails()).toBe(true);
    });
  });
});
