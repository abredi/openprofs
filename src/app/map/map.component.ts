import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 8;
  lat = 40.730610;
  lng = -73.935242;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];

  constructor() { }

  clickedMarker(label: string, index: number): void {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit(): void {
  }

}


interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
