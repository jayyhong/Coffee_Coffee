import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MilkPage } from '../milk/milk';

@Component ({
  selector: 'page-overfilled',
  templateUrl: 'overfilled.html'
})
export class OverfilledPage {
  overfill_frames: any;
  overfill_animate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.overfill_frames= 1
  }

  ngOnInit(){
    setInterval(()=> {
      if (this.overfill_frames >= 23) {
        this.overfill_frames = 1
      } else {
        this.overfill_frames ++
      }
    }, 30)
  }

  redirectToMilk(){
    this.navCtrl.pop({animate: false})
  }

}