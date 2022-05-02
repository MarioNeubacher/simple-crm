import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  /* tabIndex: TabIndex = {index: 0}; */

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  openApp() {
    this.router.navigateByUrl('/home/dashboard');
  }

}