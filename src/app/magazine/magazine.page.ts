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

  magazine = {
      id: 6,
			cover: '../../assets/covers/cover-7.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: true
		};

  constructor(private magazineService: MagazineService, private navCtrl: NavController) {
    //this.magazine = this.magazineService.getMagazine(1);
  }

  ngOnInit() {

  }

  goBack(){
    this.navCtrl.navigateRoot('/home');
  }

}
