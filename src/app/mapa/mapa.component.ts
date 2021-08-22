import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  latitud: number;
  longitud: number;

  constructor() {
    this.latitud = 40;
    this.longitud = -3;
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      //console.log(position);
    })
  }
}
