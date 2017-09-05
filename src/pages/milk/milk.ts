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
  overfill: boolean;
  overfill_frames: any;
  overfill_animate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.overfill_frames = 1;
    this.coffee = 1;
    this.milk = 1;
    this.coffee_0 = false;
    this.coffee_1 = false;
    this.overfill = false;
  }

  ngOnInit() {
    //carry amount of coffee over from previous page
    this.coffee = this.navParams.data.coffee
    if (this.coffee === 1) {
      //coffee_0 is milk fill with no coffee
      this.coffee_0 = true;
    }
    if (this.coffee === 2) {
      //coffee_1 is milk fill with 1 coffee
      this.coffee_1 = true;
    }
  }

  check() {
    if ((this.coffee + this.milk) === 7) {
      //remove coffee image, replace with overfill animation
      this.coffee_1 = false;
      this.overfill = true;
      //clearInterval will stop animation so it doesn't keep stacking
      clearInterval(this.overfill_animate)
      //animation for overfill start
      this.overfill_animate = setInterval(() => {
        if (this.overfill_frames >= 23) {
          this.overfill_frames = 1
        } else {
          this.overfill_frames++
        }
      }, 30)

    } else {
      //turn off overfill animation, bring image back
      this.coffee_1 = true;
      this.overfill = false;
    }
  }

  redirectToCoffee() {
    this.navCtrl.pop();
  }

}
