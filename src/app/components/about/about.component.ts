import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  urlPhoto: string;

  constructor() { 

    this.urlPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9ho0lI0YvJexoiXfCuKSVGaDDq5LanKzAA&usqp=CAU";
  }

  ngOnInit(): void {
  }

}
