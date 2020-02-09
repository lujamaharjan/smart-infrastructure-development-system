import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { User } from "../models/Users"
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection("users", ref => ref.orderBy('username', 'asc'));
  }

  getUsers(): Observable<User[]> {
    this.users = this.userCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as User;
          data.id = action.payload.doc.id;
          return data;
        })
      }));
    return this.users;
  }
}
