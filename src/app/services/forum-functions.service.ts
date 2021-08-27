import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumFunctionsService {

  constructor(
    public db: AngularFirestore,
    public authentication: AngularFireAuth,
    private router: Router,
  ) {
  }

  async toCreateAccountUser(first_name: string, last_name: string, email: string, phone: string, confirm_terms: boolean, password: string) {
    await this.authentication.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.authentication.signInWithEmailAndPassword(email, password)
          .then(userCredential => {
            const token: any = userCredential.user;

            this.db.collection('users').add({
              name: first_name + " " + last_name,
              id: token.uid,
              email: email,
              phone: phone,
              confirm_terms: confirm_terms,
              password: password,
            })
            window.location.href = "/panel?id=" + token.uid;
          })
      })
  }

  toSignWithEmailAndPassword(email: string, password: string) {
    this.authentication.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const token: any = userCredential.user;
        window.location.href = "/panel?id=" + token.uid;
      })
  }

  toGetAllPosts() {
    return this.db.collection('posts')
      .snapshotChanges()
      .pipe(mergeMap((snapshot) => this.db.collection('posts').valueChanges().pipe(map(((values) => (values as Record<string, string>[]).map((value, index) => ({
          ...value,
          _id: snapshot[index].payload.doc.id
        }))
      )))))
  }
}
