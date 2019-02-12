import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = ''
  password: string = ''

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
	) { }
  

  login() {
    this.navCtrl.navigateRoot('/home')
    /*
		let credentials = {
			email: this.email,
			password: this.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.navigateRoot('home')
      );
    */
	}

}
