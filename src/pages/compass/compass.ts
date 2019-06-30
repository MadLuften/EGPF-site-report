import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html',
})
export class CompassPage {

  private heading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceOrientation: DeviceOrientation) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompassPage');
  }

  useCompass(): void
  {
    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) =>
      this.heading = data.magneticHeading.toString());
  }

}
