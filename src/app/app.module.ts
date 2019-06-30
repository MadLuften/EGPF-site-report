import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { Flashlight } from '@ionic-native/flashlight';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateReportPage } from '../pages/create-report/create-report';
import { AircraftReportPage } from '../pages/aircraft-report/aircraft-report';
import { VehicleReportPage } from '../pages/vehicle-report/vehicle-report';
import { RunwayReportPage } from '../pages/runway-report/runway-report';
import { GroundReportPage } from '../pages/ground-report/ground-report';
import { InteriorReportPage } from '../pages/interior-report/interior-report';
import { OtherReportPage } from '../pages/other-report/other-report';
import { ExistingReportsPage } from '../pages/existing-reports/existing-reports';
import { ReportDetailPage } from '../pages/report-detail/report-detail';
import { EditReportPage } from '../pages/edit-report/edit-report';
import { CompassPage } from '../pages/compass/compass';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Data } from '../providers/data/data';
import { BrowserProvider } from '../providers/browser/browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateReportPage,
    AircraftReportPage,
    VehicleReportPage,
    RunwayReportPage,
    GroundReportPage,
    InteriorReportPage,
    ExistingReportsPage,
    ReportDetailPage,
    OtherReportPage,
    EditReportPage,
    CompassPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateReportPage,
    AircraftReportPage,
    VehicleReportPage,
    RunwayReportPage,
    GroundReportPage,
    InteriorReportPage,
    ExistingReportsPage,
    ReportDetailPage,
    OtherReportPage,
    EditReportPage,
    CompassPage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    Keyboard,
    Flashlight,
    Camera,
    Geolocation,
    DeviceOrientation,
    InAppBrowser,
    BrowserProvider
  ]
})
export class AppModule {}
