import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HomePage } from '../home/home';
declare var swal: any

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = null;
  }

  redirectToCoffee() {
    swal({
      title: 'Welcome, ' + this.name + '!',
      text: 'To get started, use the slider to select the desired amount of coffee',
      imageUrl: '../../assets/images/overfill/overfill-1.png',
      imageWidth: 150,
      animation: false
    })
    this.navCtrl.push(HomePage, {
      name: this.name
    }, { animate: false })
  }

}
