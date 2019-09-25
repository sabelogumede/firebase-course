import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    // valueChanges observable gives us  a live connection to the firestore database
    this.db.collection('courses').valueChanges()
      .subscribe(val => console.log(val));
  }

}
