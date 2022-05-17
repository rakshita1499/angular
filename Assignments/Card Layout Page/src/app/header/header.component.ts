import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = localStorage.getItem('current') != null ?
    JSON.parse(localStorage.getItem('current') as string)[0].username : null;
  logout() {
    localStorage.removeItem('current');
  }
}
