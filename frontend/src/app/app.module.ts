import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.services';
import { AddstationComponent } from './components/addstation/addstation.component';
import { InfostationComponent } from './components/infostation/infostation.component';



@NgModule({
  declarations: [AppComponent,
    InfostationComponent,
    AddstationComponent,
    
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
