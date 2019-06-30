import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Platform } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';
import { CompassPage } from '../compass/compass';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private torch: Flashlight, private platform: Platform) {} 

  createReport(): void
  {
    console.log("createReport called");
    this.navCtrl.push(CreateReportPage);
  }

  viewExistingReports(): void
  {
  	console.log("viewExistingReports called");
  	this.navCtrl.push(ExistingReportsPage);
  }

  toggleTorch(): void
  {
    console.log("toggleTorch called");
    this.platform.ready().then(() =>
    {
      this.torch.toggle();
    });
  }

  openCompass(): void
  {
    this.navCtrl.push(CompassPage);
  }

  openAbout(): void
  {
    this.navCtrl.push(AboutPage);
  }

  openContact(): void
  {
    this.navCtrl.push(ContactPage);
  }
}
