import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-milk',
  templateUrl: 'milk.html'
})
export class MilkPage {
  coffee: any;
  milk: any;
  coffee_0: boolean;
  coffee_1: boolean
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coffee = 1;
    this.milk = 1;
    this.coffee_0 = false;
    this.coffee_1 = false;
  }
  
  ngOnInit() {
    this.coffee = this.navParams.data.coffee
    if (this.coffee === 1) {
      this.coffee_0 = true;
    }
    if (this.coffee === 2) {
      this.coffee_1 = true;
    }
  }

  check() {
    if (this.coffee === 2 && this.milk === 5) {
      console.log("Overflowed")
    }
  }

  redirectToCoffee() {
    this.navCtrl.pop();
  }

}
