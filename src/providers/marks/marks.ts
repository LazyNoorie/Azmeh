import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare var google: any;


@Injectable()
export class MarksProvider {


  options = { // postion to start on google maps
    center: {
      lat: 31.898043,
      lng: 35.204269
    },
    zoom: 12
  };
  overlays = [ // red marks on google maps
    new google.maps.Marker({ position: { lat: 31.903764, lng: 35.203418 }, title: "Manarah" }),
    new google.maps.Marker({ position: { lat: 31.862691, lng: 35.228029 }, title: "Kalandia" }),
    new google.maps.Marker({ position: { lat: 31.906095, lng: 35.192819 }, title: "Al-Tira" }),
    new google.maps.Marker({ position: { lat: 31.912573, lng: 35.221696 }, title: "Al-Bireh" }),
    new google.maps.Marker({ position: { lat: 31.974913, lng: 35.196336 }, title: "Bizeit" }),
  ];
  marks = [ // data to be shared over the application
    {
      name: 'Kalandia',
      comments: [
        {
          time: "11/4/2018-16:30",
          comment: "traffic"
        }
      ]
    },
    {
      name: 'Manarah',
      comments: [
        {
          time: "12/4/2018-16:30",
          comment: "No traffic"
        }
      ]
    },
    {
      name: 'Al-Tira',
      comments: [
        {
          time: "13/4/2018-16:30",
          comment: "traffic"
        }
      ]
    },
    {
      name: 'Al-Bireh',
      comments: [
        {
          time: "11/3/2018-16:00",
          comment: "No traffic"
        }
      ]
    },
    {
      name: 'Bizeit',
      comments: [
        {
          time: "12/3/2018-16:30",
          comment: "traffic"
        }
      ]
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello MarksProvider Provider');
  }

}
