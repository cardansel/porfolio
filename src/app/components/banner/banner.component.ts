import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  urlImage: string;

  constructor() {
    this.urlImage = "https://us.123rf.com/450wm/krasyuk/krasyuk1601/krasyuk160100026/51359375-placa-de-circuito-electr%C3%B3nico-con-procesador-de-cerca-.jpg?ver=6";
   }

  ngOnInit(): void {
  }

}
