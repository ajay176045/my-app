import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../models/country';
import {COUNTRIES} from '../../constants/shared';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  @Input() countryDetails!: Country | any;
  @Input() selectedOption: string = COUNTRIES.BLANK_VALUE;

  public ngOnInit(): void {
    this.selectedOption = COUNTRIES.BLANK_VALUE;
  }

  public toggleDetails(): boolean {
    return (!(this.selectedOption.toUpperCase() === COUNTRIES.BLANK_VALUE ||
      this.selectedOption.toUpperCase() === COUNTRIES.LITERALS.ASIA ||
      this.selectedOption.toUpperCase() === COUNTRIES.LITERALS.Europe));
  };
}
