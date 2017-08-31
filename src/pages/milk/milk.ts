import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-milk',
  templateUrl: 'milk.html'
})
export class MilkPage {
  coffee: any;
  milk: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coffee = 1;
    this.milk = 1;
  }
  
  ngOnInit() {
    this.coffee = this.navParams.data.coffee
    console.log(this.navParams.data.coffee)
  }

  redirectToCoffee() {
    this.navCtrl.pop();
  }

}
