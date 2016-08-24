import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarComponent } from './cars/car/car.component';



@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        CarListComponent,
        CarComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}