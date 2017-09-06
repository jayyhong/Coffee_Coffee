import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MilkPage } from '../milk/milk';

@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html'
})
export class SubmitPage {
  name: any;
  coffee: any;
  milk: any;
  sugar: any;
  sugarAmount: any;
  sugarShow: any;
  sugar_animate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.data.name;
    this.coffee = this.navParams.data.coffee;
    this.milk = this.navParams.data.milk;
    this.sugar = 1;
    this.sugarAmount = 0;
    this.sugarShow = false;
  }

  addSugar() {
    this.sugarShow = true;
    clearInterval(this.sugar_animate)
    this.sugar_animate = setInterval(() => {
      if (this.sugar >= 10) {
        this.sugarAmount ++
        this.sugarShow = false;
        this.sugar = 1;
        clearInterval(this.sugar_animate)
      } else {
        this.sugar++
      }
    }, 30)
  }

  redirectToMilk() {
    this.navCtrl.pop({animate:false});
  }


}
