import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MilkPage } from '../milk/milk';

@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html'
})
export class SubmitPage {
  coffee: any;
  milk: any;
  sugar: any;
  sugar_animate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coffee = this.navParams.data.coffee;
    this.milk = this.navParams.data.milk;
    this.sugar = 1;
  }

  addSugar() {
    clearInterval(this.sugar_animate)
    this.sugar_animate = setInterval(() => {
      if (this.sugar >= 13) {
        this.sugar = 1;
        clearInterval(this.sugar_animate)
      } else {
        this.sugar++
      }
    }, 30)
  }


}
