import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-other-report',
  templateUrl: 'other-report.html',
})
export class OtherReportPage {

  private title: string;
  private issue: string;
  private comments: string;
  public reportType = "other";

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad OtherReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
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
