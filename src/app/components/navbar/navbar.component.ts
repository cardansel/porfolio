import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  urlImage: string;

  constructor() { 

    this.urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueYdmJeTMjJm12BaBeuNld77pbFoONEENPg&usqp=CAU";
  }

  ngOnInit(): void {
  }

}
