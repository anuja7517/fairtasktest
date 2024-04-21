import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairCardComponent } from './sheard/components/fair-card/fair-card.component';
import { FairDetailsComponent } from './sheard/components/fair-details/fair-details.component';
import { FairBasbordComponent } from './sheard/components/fair-basbord/fair-basbord.component';

@NgModule({
  declarations: [
    AppComponent,
    FairCardComponent,
    FairDetailsComponent,
    FairBasbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
