import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {}

  getData()
  {
  	return this.storage.get('reportID');
  }

  save(data)
  {
  	this.storage.set('reportID', data);
  }

  saveImg(key, imgData)
  {
  	console.log('saveImg called', key, 'with', imgData.substring(0,100));
  	this.storage.set('img' + key, imgData)
  	this.storage.keys().then((ks) =>
  	{
  		if(ks) console.log('ReportIDs after saveImg: ', JSON.stringify(ks));
  	});
  }

  getImg(key)
  {
  	console.log('getImg called for ReportID: ', key);
  	this.storage.get('img' + key).then((imgData) =>
  	{
  		console.log('getImg retrieval started ', JSON.stringify(imgData).substring(0, 100));
  		return imgData;
  	});
  }
}
