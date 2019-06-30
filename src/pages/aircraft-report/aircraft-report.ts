import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-aircraft-report',
  templateUrl: 'aircraft-report.html',
})
export class AircraftReportPage {

  private title: string;
  private aircraftModel: string;
  private gate: string;
  private issue: string;
  private comments: string;
  public reportType = "aircraft";

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad AircraftReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
      aircraftModel: this.aircraftModel,
      gate: this.gate,
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
