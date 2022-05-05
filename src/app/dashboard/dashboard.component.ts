import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'app/services/firebase.service';
import { AuthService } from 'app/authentication/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  constructor(
    public firebaseService: FirebaseService,
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
