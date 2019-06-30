import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-vehicle-report',
  templateUrl: 'vehicle-report.html',
})
export class VehicleReportPage {

  private title: string;
  private vehicleType: string;
  private vehicleID: string;
  private issue: string;
  private comments: string;
  public reportType = "vehicle";

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad VehicleReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
      vehicleType: this.vehicleType,
      vehicleID: this.vehicleID,
      issue: this.issue,
      comments: this.comments
    };

    this.view.dismiss(newReport); 
    this.navCtrl.push(ExistingReportsPage);   
  }

  cancel(): void
  {
  	this.view.dismiss();
  }

}
