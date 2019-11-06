import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

/**
 * Generated class for the RedessociaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redessociais',
  templateUrl: 'redessociais.html',
})
export class RedessociaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedessociaisPage');
  }
  inicio(){
    this.navCtrl.setRoot(HomePage);
  }
  socias(){
    this.navCtrl.setRoot(RedessociaisPage);
  }
}
