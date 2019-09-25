import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // define our data with a observable passing "Course array" returned from our query
  // courses$ observable will be used in our template
  courses$: Observable<Course[]>;
  // split our courses by category
  // define beginners Observable with Course type array
  beginnersCourses$: Observable<Course[]>;
  // define advance Observable with Course type array
  advancedCourses$: Observable<Course[]>;

    constructor(private db: AngularFirestore) {
    }

    ngOnInit() {

      this.courses$ = this.db.collection('courses').snapshotChanges()
       .pipe(map(snaps => {

          return snaps.map(snap => {
            return <Course> {
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            };
        });

       }));

      //  define the beginnersCourses$ observable with the existing courses$ observable
      // filter category by name "BEGINNER"
      this.beginnersCourses$ = this.courses$.pipe(
        map(courses => courses.filter(
          course => course.categories.includes("BEGINNER"))));
      // define advancedCourses$
      this.advancedCourses$ = this.courses$.pipe(
        map(courses => courses.filter(
          course => course.categories.includes("ADVANCED"))));



    }

}
