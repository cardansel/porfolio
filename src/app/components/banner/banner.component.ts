import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  urlImage: string;

  constructor() {
    this.urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbTiHUNCdsM2VuxwOJhK6wQhAyBJYdunJYQ&usqp=CAU";
   }

  ngOnInit(): void {
  }

}
