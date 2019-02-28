import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MagazineService } from '../../services/magazine.service';

@Component({
  selector: 'app-magazine',
  templateUrl: 'magazine.page.html',
  styleUrls: ['magazine.page.scss'],
})
export class MagazinePage {

  slideOpts = {
    effect: 'flip'
  };

  page = '../../assets/pages/Prancheta 8.png';
  logo = '../../assets/logo-vr.png';

  magazine = {
      id: 6,
			cover: '../../assets/covers/cover-7.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: true
    };

  constructor(private magazineService: MagazineService, private navCtrl: NavController) {
  }

  ngOnInit() {

  }

  goBack(){
    this.navCtrl.navigateRoot('/home');
  }

  goToVR() {
    this.navCtrl.navigateRoot('/vr');
  }

}
