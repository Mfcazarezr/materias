import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';
import { CsPage } from '../cs/cs';
import { PyePage } from '../pye/pye';
import { CalculoPage } from '../calculo/calculo';
import { PaapsPage } from '../paaps/paaps';
import { MiPage } from '../mi/mi';
import { RoboPage } from '../robo/robo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  dibujo=DibujoPage;
  com=ComPage;
  cs=CsPage;
  pye=PyePage;
  calculo=CalculoPage;
  paaps=PaapsPage;
  mi=MiPage;
  robo= RoboPage;

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
  clickcs()
  {
    this.navCtrl.push(this.cs);
  }
  clickpye()
  {
    this.navCtrl.push(this.pye);
  }
  clickcalculo()
  {
    this.navCtrl.push(this.calculo);
  }
  clickpaaps()
  {
    this.navCtrl.push(this.paaps);
  }
  clickmi()
  {this.navCtrl.push(this.mi);

  }
  clickrobo()
  {
    this.navCtrl.push(this.robo);

  }
}
