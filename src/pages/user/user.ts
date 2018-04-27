import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarksProvider } from '../../providers/marks/marks';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {
  options; // selects where google map starts
  overlays: any[]; // red marks on the google map
  comment; // comment list
  Selected = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private marksProvider: MarksProvider) {
  }
  ngOnInit() {
    this.options = this.marksProvider.options;
    this.overlays = this.marksProvider.overlays
  }

  setCity(event) {
    this.Selected = true;
    this.comment = this.getCity(event.overlay.title);
  }
  getCity(city) {
    let tempCity;
    this.marksProvider.marks.forEach(e => {
      if (city === e.name) {
        tempCity = e;
      }
    });
    return tempCity
  }


}
