import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {COUNTRIES} from '../../constants/shared';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() dropDownData!: any;
  @Input() actionType!: string;
  @Output() selectedItemEvent = new EventEmitter<any>();

  public regionsForm = new FormGroup({
    userControl: new FormControl(COUNTRIES.BLANK_VALUE)
  });

  public getSelectedOption(): void {
    this.selectedItemEvent.emit(this.regionsForm.controls['userControl'].value);
  };

}
