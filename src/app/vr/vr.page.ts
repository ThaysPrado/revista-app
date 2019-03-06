import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vr',
  templateUrl: 'vr.page.html',
  styleUrls: ['vr.page.scss'],
})
export class VRPage {
  
  magazine = {
    id: 6,
    cover: '../../assets/covers/cover-7.jpg',
    edition: 'ed 2618',
    date: '06/12/2018',
    value: '14,90',
    bought: true
  };

  photo: String = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {

  }

  goBack(){
    this.navCtrl.navigateRoot('/magazine');
  }

  /*
  takePicture() {
    this.photo = '';
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }
  */

  //base64
  /*
  identifyImage(imageData){

    //const Clarifai = require('clarifai');

    const app = new Clarifai.App({
      apiKey: '495a917ccb944ef1888f33628ec03eee'
    }); 

    // Identify the image
    app.models.predict(Clarifai.GENERAL_MODEL, {base64: imageData})
        .then((response) => this.displayAnswer(response.outputs[0].data.concepts[0].name))
        .catch((err) => alert(err))
  }
  */

  displayAnswer(name) {
    console.log('name', name);
  }


}
