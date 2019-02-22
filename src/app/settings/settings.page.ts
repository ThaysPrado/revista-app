import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MagazineService } from '../../services/magazine.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {

  showPrefer = false;

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

  segmentChanged(ev: any) {
    if (ev['detail']['value'] === 'conta') {
      this.showPrefer = false;
    } else {
      this.showPrefer = true;
    }
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

}
