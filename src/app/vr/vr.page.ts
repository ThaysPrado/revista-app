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

  constructor(private navCtrl: NavController) {}

  ngOnInit() {

  }

  goBack(){
    this.navCtrl.navigateRoot('/magazine');
  }


}
