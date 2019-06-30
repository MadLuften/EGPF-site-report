import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-report',
  templateUrl: 'edit-report.html',
})
export class EditReportPage {

	private id;
	private title: string;
	private aircraftModel: string;
	private gate: string;
  private vehicleType: string;
  private vehicleID: string;
  private rampNo: string;
  private roomNo: string;
  private healthHazard: string;
  private runOrTaxi: string;
  private runwayArea: string;
  private taxiNo: string;
	private issue: string;
	private comments: string;
	private reportType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() 
  {
    //console.log('ionViewDidLoad ReportDetailPage');
    this.id = this.navParams.get('report').id;
    this.title = this.navParams.get('report').title;
    this.aircraftModel = this.navParams.get('report').aircraftModel;
    this.gate = this.navParams.get('report').gate;
    this.vehicleType = this.navParams.get('report').vehicleType;
    this.vehicleID = this.navParams.get('report').vehicleID;
    this.rampNo = this.navParams.get('report').rampNo;
    this.roomNo = this.navParams.get('report').roomNo;
    this.healthHazard = this.navParams.get('report').healthHazard;
    this.runOrTaxi = this.navParams.get('report').runOrTaxi;
    this.runwayArea = this.navParams.get('report').runwayArea;
    this.taxiNo = this.navParams.get('report').taxiNo;
    this.issue = this.navParams.get('report').issue;
    this.comments = this.navParams.get('report').comments;
    this.reportType = this.navParams.get('report').reportType;
  }

  saveReport(): void
  {
    let newReport = 
    {
    	id: this.id,
    	reportType: this.reportType,
      title: this.title,
      aircraftModel: this.aircraftModel,
      gate: this.gate,
      vehicleType: this.vehicleType,
      vehicleID: this.vehicleID,
      rampNo: this.rampNo,
      roomNo: this.roomNo,
      healthHazard: this.healthHazard,
      runOrTaxi: this.runOrTaxi,
      taxiNo: this.taxiNo,
      issue: this.issue,
      comments: this.comments
    };

    this.view.dismiss(newReport);    
  }

  cancel(): void
  {
  	this.view.dismiss();
  }
}
