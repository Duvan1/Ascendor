import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScorePipe } from '../lib/pipes/score.pipe';
import { ListingComponent } from './components/listing/listing.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

@NgModule({
  declarations: [AppComponent, ScorePipe, ListingComponent, FilteringComponent, SuggestionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
