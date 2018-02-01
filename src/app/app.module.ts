import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeComponent } from './bike/bike.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikesComponent } from './bikes/bikes.component';


@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    BikeInfoComponent,
    BikesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
