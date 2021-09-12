import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuActive: boolean =  false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.menuActive = !this.menuActive;
  }

}
