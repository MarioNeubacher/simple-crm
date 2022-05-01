import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User(); //model assigned to var 
  birthdate!: Date; //necessary bc type number/date in user model doesnt give number back 
  loading = false;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
    ) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthdate = this.birthdate.getTime(); //necessary bc type number/date in user model doesnt give number back 
    console.log('Current user is', this.user);
    this.loading = true;

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('Adding user finished', result);
        this.dialogRef.close();
      });
  }

}
