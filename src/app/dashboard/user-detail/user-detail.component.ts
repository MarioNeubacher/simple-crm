import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from 'app/dashboard/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from 'app/dashboard/dialog-edit-user/dialog-edit-user.component';
import { User } from 'models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = '';
  user: User = new User();

  constructor(
    private Route:ActivatedRoute, //necessary to get id from url to retrieve on data from firebase 
    private firestore: AngularFirestore, //necessary to get data from database 
    public dialog: MatDialog) { } //neccessary to open dialog component 

  //get id from url to retrieve on data from database 
  ngOnInit(): void {
    this.Route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.user = new User(user);
    })
  }

  //open dialog with the existing information
  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); //link global var "user" from UserDetailComponent to global var "user" from DialogEditUserComponent
    //right part creates a copy of object so that ngModule doesnt save changes when dialog closed  
    dialog.componentInstance.userId = this.userId;
  }

  //open dialog with the existing information
  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); //link global var "user" from UserDetailComponent to global var "user" from DialogEditUserComponent
    //right part creates a copy of object so that ngModule doesnt save changes when dialog closed
    dialog.componentInstance.userId = this.userId;                
  }
  
}