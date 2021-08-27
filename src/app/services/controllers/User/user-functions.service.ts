import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserFunctionsService {

  constructor(
    private db: AngularFirestore,
    private authetication: AngularFireAuth
  ) { }


  toGetTokeCredentialUser(uid: String) {
    const tokenUser: any =  this.db.collection('users')

    console.log(tokenUser);
  }
}
