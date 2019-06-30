import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { Data } from '../../providers/data/data';
import { ReportDetailPage } from '../report-detail/report-detail';
import { EditReportPage } from '../edit-report/edit-report';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-existing-reports',
  templateUrl: 'existing-reports.html',
})
export class ExistingReportsPage {

	public reports = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, 
              private dataService: Data, private modalCtrl: ModalController) {
  
  	this.dataService.getData().then((data) =>
  	{
  		if(data)
  		{
  			this.reports = data;
  		}
  	});

  }

  //ionViewDidLoad() { console.log('ionViewDidLoad ExistingReportsPage'); }

  viewReport(report)
  {
    this.navCtrl.push(ReportDetailPage, {
      report: report
    });
  }

  removeReport(report) 
  {
    console.log("remove record by key", report.key, "from length", this.reports.length);
    this.reports = this.reports.filter(i => i.id != report.id);
    console.log("length now", this.reports.length);
    this.dataService.save(this.reports);
  }

  editReport(report) 
  {
    console.log("within home.ts", JSON.stringify(report))
    let editModal = this.modalCtrl.create(EditReportPage,{ report: report });

    editModal.onDidDismiss((report) => {

      if(report){
        console.log("item in existing-reports.ts", JSON.stringify(report));
        this.removeReport(report);
        console.log("remove-save gap");
        this.saveReport(report);        
        console.log("Edit item in existing-reports.ts")
      }
    });

    editModal.present();
  }

  saveReport(report)
  {
    console.log("saveReport called");
    this.reports.push(report);
    this.dataService.save(this.reports);
    console.log("report saved");
  }

  goHome()
  {
    this.navCtrl.setRoot(HomePage);
  }
}
