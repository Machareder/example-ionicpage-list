import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  items: any[] = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    for(var i = 0; i < 200; i++){
      this.items.push(i);
    }
  }


  clicked(){
    this.navCtrl.push('Page1Page');
  }
}