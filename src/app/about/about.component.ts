import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../model/course';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // query the collection by name
    // valueChanges returns an Observable that we subscribe to
    // valueChanges observable gives us a live connection to the firestore database
    // it is advised to use it only if you want to display data.

    // this.db.collection('courses').valueChanges()
    //   .subscribe(val => console.log(val));

    // snapshotChanges and its api
    // span contain both type & payload
    // type is a string and has three values: add,remove or modify
    // payload contains the document that belongs to the collection being query
    // payload contains a doc -> inside
    // doc contains both Id and Data
    // this.db.collection('courses').snapshotChanges()
    //    .subscribe(snaps => {
    //      const courses: Course[] = snaps.map(snap => {
    //        return <Course> {
    //          id: snap.payload.doc.id,
    //          ...snap.payload.doc.data()
    //        };
    //      });
    //      console.log(courses);
    //    });

    // stateChanges: gives back only the modification changes of doc being made
    // this.db.collection('courses').stateChanges()
    //    .subscribe(snaps => {
    //       console.log(snaps);
    //      const courses: Course[] = snaps.map(snap => {
    //        return <Course> {
    //          id: snap.payload.doc.id,
    //          ...snap.payload.doc.data()
    //        };
    //      });
    //      console.log(courses);
    //    });

  }

}
