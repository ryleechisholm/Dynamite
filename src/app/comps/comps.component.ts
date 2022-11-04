import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comps',
  templateUrl: './comps.component.html',
  styleUrls: ['./comps.component.css']
})
export class CompsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "250px";
    // @ts-ignore
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "0";
    // @ts-ignore
    document.getElementById("main").style.marginLeft= "0";
  }

}
