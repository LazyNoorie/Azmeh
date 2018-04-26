import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  homePage: any = HomePage;
  userPage: any = UserPage;

  passwordFlag = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(user, password) {
    switch (user) {
      case 'admin':
        if (password === 'admin') {
          this.navCtrl.push(this.homePage);
          this.passwordFlag = false;
        } else {
          this.passwordFlag = true;
        }
        break;
      case 'user':
        if (password === 'user') {
          this.navCtrl.push(this.userPage);
          this.passwordFlag = false;
        } else {
          this.passwordFlag = true;
        }
        break;
      default:
        this.passwordFlag = true;
        break;
    }
  }
}
