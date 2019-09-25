import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
// course model interface
import { Course } from '../model/course';

const firebaseConfig = {
  apiKey: "AIzaSyD5EEBzLtHAWPovZcLu3n0q6r0msrRlSh8",
  authDomain: "fir-course-f970f.firebaseapp.com",
  databaseURL: "https://fir-course-f970f.firebaseio.com",
  projectId: "fir-course-f970f",
  storageBucket: "fir-course-f970f.appspot.com",
  messagingSenderId: "501260201422",
  appId: "1:501260201422:web:2e2755048920b398d40f9f",
  measurementId: "G-S0NTEG8SP5"
};
// passing our config to the sdk using the firebase object
firebase.initializeApp(firebaseConfig);
// firestore db refrence
const db = firebase.firestore();
//
// const settings = {timestampsInSnapshots: true};
// db.settings(settings);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // db object used to query firestore doc'
    // it takes the path & uniqe id ref of each doc
    // gets and returns a promise with a doc snapshort

    // db.doc('courses/3cnonA5KPtFzxz3y2zGy')
    //     .get()
    //     .then(snap => console.log(snap.data()));

    db.collection('courses')
        .get()
        .then(snaps => {

          const courses: Course[] = snaps.docs.map(snap => {
              return <Course>{
                id: snap.id,
                ...snap.data()
              };
            });

          console.log(courses);

        });
  }

}
