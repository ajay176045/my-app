import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Region} from '../../models/region';
import {Country} from '../../models/country';
import * as fromCountries from '../../../app/app-store/reducers';
import {CountriesActions, CountryActions} from '../../app-store/actions';
import {COUNTRIES} from '../../constants/shared';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss']
})
export class CountriesContainerComponent {
  public regions$: Observable<Region[]>;
  public countries$!: Observable<Country[]>;
  public currentCountry$!: Observable<Country>;
  public currentOption: string = COUNTRIES.BLANK_VALUE;

  public constructor(private store: Store) {
    this.regions$ = store.select(fromCountries.selectRegions);
  }

  public getCurrentOption(option: string): void {
    if (option.toUpperCase() !== COUNTRIES.LITERALS.ASIA &&
      option.toUpperCase() !== COUNTRIES.LITERALS.Europe &&
      option !== COUNTRIES.BLANK_VALUE) {
      this.getCountryDetails(option);
    } else {
      this.getAllCountries(option);
    }
    this.currentOption = option;
  };

  public getAllCountries(region: string) {
    this.store.dispatch(CountriesActions.getCountries({region}));
    this.countries$ = this.store.select(fromCountries.selectCountries);
  };

  public getCountryDetails(name: string) {
    this.store.dispatch(CountryActions.getCountry({name}));
    this.currentCountry$ = this.store.select(fromCountries.selectSelectedCountry);
  };
}
