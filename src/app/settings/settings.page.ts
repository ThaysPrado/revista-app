import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MagazineService } from '../../services/magazine.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {

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

  constructor(private magazineService: MagazineService) {
    this.magazineList = this.magazineService.listMagazine();
  }

  ngOnInit() {

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
