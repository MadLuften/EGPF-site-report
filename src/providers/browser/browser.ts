import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Injectable } from '@angular/core';

/*
  Generated class for the BrowserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrowserProvider {

	browserOptions: InAppBrowserOptions = 
	{
		location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only 
	}

  constructor(private iab: InAppBrowser) {
    console.log('Hello BrowserProvider Provider');
  }

  openWithInAppBrowser(url: string)
  {
  	let target ="_blank";
  	this.iab.create(url, target, this.browserOptions);
  }

}
