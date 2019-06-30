import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';

import { AircraftReportPage } from '../aircraft-report/aircraft-report';
import { VehicleReportPage } from '../vehicle-report/vehicle-report';
import { GroundReportPage } from '../ground-report/ground-report';
import { RunwayReportPage } from '../runway-report/runway-report';
import { InteriorReportPage } from '../interior-report/interior-report';
import { OtherReportPage } from '../other-report/other-report';

@Component({
  selector: 'page-create-report',
  templateUrl: 'create-report.html',
})
export class CreateReportPage {

  public reports = [];
  //public lat;
  //public long;
  private cameraOptions: CameraOptions;
  //private geoOptions: GeolocationOptions;

  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, 
              private dataService: Data, private camera: Camera) {

    this.dataService.getData().then((data) =>
    {
      if(data)
      {
        this.reports = data;
      }
    });

    this.cameraOptions = 
    {
       quality: 30,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       correctOrientation: true,
       saveToPhotoAlbum: true
    }

    /*this.geoOptions =
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }*/
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad CreateReportPage');
    //this.reportType = this.navParams.get('report').reportType;
  }

  createAircraftReport(): void
  {
  	console.log("createAircraftReport called");
  	let addAirReport = this.modalCtrl.create(AircraftReportPage);
    
    addAirReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("AIR " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);        
      }
    });

    addAirReport.present();
  }

  createVehicleReport(): void
  {
  	console.log("createGroundReport called");
  	let addVehicleReport = this.modalCtrl.create(VehicleReportPage);
    
    addVehicleReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("VEH " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);       
      }
    });

    addVehicleReport.present();
  }

  createGroundReport(): void
  {
  	console.log("createGroundReport called");
  	let addGroundReport = this.modalCtrl.create(GroundReportPage);
    
    addGroundReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("GRND " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);
      }
    });

    addGroundReport.present();
  }

  createRunwayReport(): void
  {
    console.log("createRunwayReport called");
    let addRunwayReport = this.modalCtrl.create(RunwayReportPage);
    
    addRunwayReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("RUNW " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);
      }
    });

    addRunwayReport.present();
  }

  createInteriorReport(): void
  {
  	console.log("createInteriorReport called");
  	let addInteriorReport = this.modalCtrl.create(InteriorReportPage);
     
    addInteriorReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("INTR " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);
      }
    });

    addInteriorReport.present();
  }

  createOtherReport(): void
  {
  	console.log("createOtherReport called");
  	let addOtherReport = this.modalCtrl.create(OtherReportPage);
    
    addOtherReport.onDidDismiss((report) =>
    {
      if(report)
      {
        report.id = ("OTH " + new Date().getTime());
        report.lat = "#####";
        report.long = "#####";
        report.image = "";
        this.saveReport(report);
        //this.updateLocation(report);
        this.updatePhoto(report);
      }
    });

    addOtherReport.present();
  }

  saveReport(report)
  {
    this.reports.push(report);
    this.dataService.save(this.reports);
  }

  removeReport(report) 
  {
    console.log("remove record by key", report.key, "from length", this.reports.length);
    this.reports = this.reports.filter(i => i.id != report.id);
    console.log("length now", this.reports.length);
    this.dataService.save(this.reports);
  }

  /*updateLocation(report)
  {
    console.log("updateLocation triggered");
    this.geolocation.getCurrentPosition(this.geoOptions).then((resp) => 
    {
      console.log("location retrieved")
      report.lat = resp.coords.latitude.toString()
      report.long = resp.coords.longitude.toString()
      console.log("lat: ", report.lat, "long: ", report.long);
      this.removeReport(report);
      this.saveReport(report);
    }).catch((geoError) => 
    {
      console.log("Error getting location", geoError.toString(),
        geoError.code.toString(), geoError.message);
      this.lat = geoError.code.toString();
      this.long = geoError.message;
    });
  }*/

  updatePhoto(report)
  {
    console.log("camera triggered");
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.dataService.saveImg(report.id, 'data:image/jpeg;base64,' + imageData);
  }, (camError) =>
    {
      console.log("updatePhoto camera error" + JSON.stringify(camError));
    });    
  }
}
