import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserProvider } from '../../providers/browser/browser';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private iab: BrowserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  moreInfo()
  {
  	this.iab.openWithInAppBrowser('https://www.glasgowairport.com/contact-feedback-help-and-lost-luggage/');
  }

}
