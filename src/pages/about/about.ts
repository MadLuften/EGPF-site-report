import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserProvider } from '../../providers/browser/browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

	

  constructor(private navCtrl: NavController, private navParams: NavParams, private iab: BrowserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  moreInfo()
  {
  	this.iab.openWithInAppBrowser('https://www.glasgowairport.com/about-us/');
  }
  

}
