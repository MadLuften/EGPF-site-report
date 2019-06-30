import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-ground-report',
  templateUrl: 'ground-report.html',
})
export class GroundReportPage {

  private title: string;
  private rampNo: string;
  private issue: string;
  private comments: string;
  public reportType = "ground";

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad GroundReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
      rampNo: this.rampNo,
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
