import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubmitPage } from '../submit/submit';
import { OverfilledPage } from '../overfilled/overfilled';

@Component({
  selector: 'page-milk',
  templateUrl: 'milk.html'
})
export class MilkPage {
  name: any;
  coffee: any;
  milk: any;
  coffee_0: boolean;
  coffee_1: boolean;
  coffee_2: boolean;
  coffee_3: boolean;
  coffee_4: boolean;
  overfill: boolean;
  overfill_frames: any;
  overfill_animate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.data.name;
    this.overfill_frames = 1;
    this.coffee = 1;
    this.milk = 1;
    this.coffee_0 = false;
    this.coffee_1 = false;
    this.coffee_2 = false;
    this.coffee_3 = false;
    this.coffee_4 = false;
    this.overfill = false;
  }

  ngOnInit() {
    //carry amount of coffee over from previous page
    this.coffee = this.navParams.data.coffee
    if (this.coffee === 1) {
      //coffee_0 is milk fill with no coffee
      this.coffee_0 = true;
    } else if (this.coffee === 2) {
      //coffee_1 is milk fill with 1 coffee
      this.coffee_1 = true;
    } else if (this.coffee === 3) {
      //coffe_2 is milk fill with 2 coffee
      this.coffee_2 = true;
    } else if (this.coffee === 4) {
      //coffee_3 is milk fill with 3 coffee
      this.coffee_3 = true;
    } else if (this.coffee === 5) {
      this.coffee_4 = true;
    }
  }

  check() {
    if ((this.coffee + this.milk) >= 7) {
      if (this.coffee === 1) {
        this.coffee_0 = false;
      }
      if (this.coffee === 2) {
        this.coffee_1 = false;
      }
      if (this.coffee === 3) {
        this.coffee_2 = false;
      }
      if (this.coffee === 4) {
        this.coffee_3 = false;
      }
      if (this.coffee === 5) {
        this.coffee_4 = false;
      }
      this.overfill = true;
      clearInterval(this.overfill_animate)
      //animation for overfill start
      this.overfill_animate = setInterval(() => {
        if (this.overfill_frames >= 23) {
          this.overfill_frames = 1
        } else {
          this.overfill_frames++
        }
      }, 40)

    } else {
      //turn off overfill animation, bring image back
      if ((this.coffee + this.milk) < 7) {
        if (this.coffee === 1) {
          this.coffee_0 = true;
        }
        if (this.coffee === 2) {
          this.coffee_1 = true;
        }
        if (this.coffee === 3) {
          this.coffee_2 = true;
        }
        if (this.coffee === 4) {
          this.coffee_3 = true;
        }
        if (this.coffee === 5) {
          this.coffee_4 = true;
        }
        this.overfill = false;
      }
    }
  }

  redirectToCoffee() {
    this.navCtrl.pop({ animate: false });
  }

  redirectToOverfilled() {
    this.navCtrl.push(OverfilledPage,{},{animate: false})
  }

  redirectToSubmit() {
    if (this.overfill === true) {
      this.redirectToOverfilled()
    } else {
      this.navCtrl.push(SubmitPage, {
        coffee: this.coffee,
        milk: this.milk,
        name: this.name
      }, { animate: false })
    }
  }

}
