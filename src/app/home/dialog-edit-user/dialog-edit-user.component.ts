import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  
  user!: User;
  userId!: string;
  loading = false;
  birthdate = Date;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,//necessary to close dialog
    private firestore: AngularFirestore //necessary for saveUser()
  ) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }

}
