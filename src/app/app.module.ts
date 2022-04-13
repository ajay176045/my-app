import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesContainerComponent } from './components/countries-container/countries-container.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {CountriesEffects} from './app-store/countries.effects';
import {reducers} from './app-store/reducers';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CountriesContainerComponent,
    CountryDetailsComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CountriesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }): [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
