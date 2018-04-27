import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { MarksProvider } from '../../providers/marks/marks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  options; // selects where google map starts
  overlays: any[]; // red marks on the google map
  comment; // comment list
  Selected = false;
  constructor(public navCtrl: NavController,
    private marksProvider: MarksProvider) { }
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
  AddComment(input) {
    var datePipe = new DatePipe('en');
    let date = datePipe.transform(new Date(), 'dd/M/yyyy-hh:mm');
    this.comment.comments.push({
      time: date,
      comment: input
    });
  }
}
