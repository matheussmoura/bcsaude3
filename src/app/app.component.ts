import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-SplashScreen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RedessociaisPage } from '../pages/redessociais/redessociais';
import { AcademiaPage } from '../pages/academia/academia';
import { ClinicaPage } from '../pages/clinica/clinica';
import { InfoPage } from '../pages/info/info';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: InfoPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  inicio(){
    this.nav.setRoot(HomePage);
  }
  socias(){
    this.nav.setRoot(RedessociaisPage);
  }
  academia(){
    this.nav.setRoot(AcademiaPage);
  }
  clinica(){
    this.nav.setRoot(ClinicaPage);
  }
}
