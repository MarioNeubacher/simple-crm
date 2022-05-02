import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  dataset: any;
  name: any;
  value: any;
  title !: string;

  constructor(public router: Router) { }

  ngAfterViewInit(): void {
    this.codePen()  //important
  }

  ngOnInit(): void {

  }

  codePen() {
    ///////////////////////////////////////////
    // The click
    $(".burger").addClass("unToggled");
    $(".burger").on('click', function () {
      $(this).toggleClass("toggled");
      $(this).toggleClass("unToggled");
      // also open menu here...
    });
  }

}