import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-report-detail',
  templateUrl: 'report-detail.html',
})
export class ReportDetailPage {

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
  private imgData: string;
  //lat;
  //long;

  constructor(private navCtrl: NavController, private navParams: NavParams, private dataService: Data) {}

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
    //this.lat = this.navParams.get('report').lat;
    //this.long = this.navParams.get('report').long;
    this.dataService.storage.get("img" + this.id).then((imgData) => {
      if(imgData)
      {
        console.log("item detail img retrieved length: ",imgData.toString().length,"starting", JSON.stringify(imgData).substring(0,100));
        this.imgData = imgData;
      }
    });
  }

}
