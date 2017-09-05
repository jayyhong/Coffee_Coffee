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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coffee = this.navParams.data.coffee;
    this.milk = this.navParams.data.milk;
  }

  test() {

  }


}
