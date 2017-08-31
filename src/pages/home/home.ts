import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MilkPage } from '../milk/milk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coffee: any;
  constructor(public navCtrl: NavController) {
    this.coffee = 1;
  }

  test() {
    console.log(this.coffee)
  }

  redirectToMilk() {
    this.navCtrl.push(MilkPage, {
      coffee: this.coffee
    })
  }

}
