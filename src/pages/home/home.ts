import { InfoPage } from './../info/info';
import { AcademiaPage } from './../academia/academia';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedessociaisPage } from '../redessociais/redessociais'
import { ClinicaPage } from '../clinica/clinica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  inicio(){
    this.navCtrl.setRoot(HomePage);
  }
  socias(){
    this.navCtrl.setRoot(RedessociaisPage);
  }
  academia(){
    this.navCtrl.setRoot(AcademiaPage);
  }
  clinica(){
    this.navCtrl.setRoot(ClinicaPage);
  }
  info(){
    this.navCtrl.push(InfoPage);
  }
}





