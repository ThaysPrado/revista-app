import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

	myGroup: FormGroup;

  email: string = ''
  password: string = ''

	constructor(private navCtrl: NavController,
							private auth: AuthService,
							private formBuilder: FormBuilder) {
		this.myGroup = this.formBuilder.group({
			email:  new FormControl('',[]),
			password: new FormControl('', [])
	 	});
	}
  

  login() {
		let credentials = {
			email: this.email,
			password: this.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.navigateRoot('/home')
      );
	}

}
