import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-runway-report',
  templateUrl: 'runway-report.html',
})
export class RunwayReportPage {

  private title: string;
  private runOrTaxi: string;
  private runwayArea: string;
  private taxiNo: string;
  private issue: string;
  private comments: string;
  public reportType = "runway";

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad RunwayReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
      runOrTaxi: this.runOrTaxi,
      runwayArea: this.runwayArea,
      taxiNo: this.taxiNo,
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
