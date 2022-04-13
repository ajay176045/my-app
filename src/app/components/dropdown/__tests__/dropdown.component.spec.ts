import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from '../dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dropdown component', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit an event when an option is selected in the dropdown', () => {
    const selectedRegion = 'Asia';
    const select = component.regionsForm.controls['userControl'].setValue(selectedRegion);
    spyOn(component.selectedItemEvent, 'emit');
    component.getSelectedOption();
    expect(component.selectedItemEvent.emit).toHaveBeenCalledWith(selectedRegion);
  });
});
