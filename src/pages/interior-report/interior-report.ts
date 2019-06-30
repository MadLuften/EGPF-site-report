import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { CreateReportPage } from '../create-report/create-report';
import { ExistingReportsPage } from '../existing-reports/existing-reports';

@Component({
  selector: 'page-interior-report',
  templateUrl: 'interior-report.html',
})
export class InteriorReportPage {

  private title: string;
  private roomNo: string;
  private healthHazard: string;
  private issue: string;
  private comments: string;
  public reportType = "interior";

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {}

  //ionViewDidLoad() { console.log('ionViewDidLoad InteriorReportPage'); }

  saveReport(): void
  {
    let newReport = 
    {
      reportType: this.reportType,
      title: this.title,
      roomNo: this.roomNo,
      healthHazard: this.healthHazard,
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
