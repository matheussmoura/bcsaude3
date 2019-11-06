import { InfoPage } from './../pages/info/info';
import { AcademiaPage } from './../pages/academia/academia';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedessociaisPage } from '../pages/redessociais/redessociais';
import { ClinicaPage } from '../pages/clinica/clinica';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RedessociaisPage,
    AcademiaPage,
    ClinicaPage,
    InfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RedessociaisPage,
    AcademiaPage,
    ClinicaPage,
    InfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
