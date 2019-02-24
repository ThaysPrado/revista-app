import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MagazineService } from '../../services/magazine.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  magazineList = [
    {
			id: 0,
			cover: '',
			edition: '',
			date: '',
			value: '',
			bought: false
		}
  ];

  constructor(private magazineService: MagazineService, private navCtrl: NavController) {
    this.magazineList = this.magazineService.listMagazine();
  }

  ngOnInit() {

  }

  goToSettings() {
    this.navCtrl.navigateRoot('/settings');
  }

  goToMagazinePage() {
    this.navCtrl.navigateRoot('/magazine');
  }

}
