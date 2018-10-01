import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  dibujo=DibujoPage;
  com=ComPage;

  constructor(public navCtrl: NavController) {

  }
  clickHistori()
  {
    this.navCtrl.push(this.historia);
  }
  clickdibujo()
  {
    this.navCtrl.push(this.dibujo);
  }
  clickcom()
  {
    this.navCtrl.push(this.com);
  }

}
