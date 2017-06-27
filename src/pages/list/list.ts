import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

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