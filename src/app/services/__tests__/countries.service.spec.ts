import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { CountriesService } from '../countries.service';
import {Country} from '../../models/country';
import {of} from 'rxjs';

const mockCountries = <Country[]>[
  {
    name: 'Belgium',
    capital: "Brussels",
    flag: "https://flagcdn.com/bel.svg",
    currencies: [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    name: 'Bulgarian',
    capital: "Sofia",
    flag: { "svg": "https://flagcdn.com/bg.svg"},
    currencies: [
      {
        "code": "BGN",
        "name": "Bulgarian lev",
        "symbol": "лв"
      },
    ]
  }
];
class MockCountriesService {
  getCountries(region:string):any {
    return of(mockCountries);
  }
}

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: CountriesService,
          useClass: MockCountriesService,
        },
      ]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created CountriesService', () => {
    expect(service).toBeTruthy();
  });

  it('Should call the getCountries api and return the dummy countries', () => {
    service.getCountries('Europe').subscribe(
      response => {
        expect(response.length).toBe(2);
        expect(response).withContext('should return dummy countries'), fail;
      });
  });
});
