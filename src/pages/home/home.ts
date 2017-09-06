import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MilkPage } from '../milk/milk';
import { IntroPage } from '../intro/intro'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coffee: any;
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coffee = 1;
    this.name = this.navParams.data.name
  }

  redirectToMilk() {
    this.navCtrl.push(MilkPage, {
      coffee: this.coffee,
      name: this.name
    }, { animate: false })
  }

}
