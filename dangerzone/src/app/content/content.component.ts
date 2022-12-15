import { Component, OnInit } from '@angular/core';
import { TripModel } from '../../models/trip.model';
import jsonTrips from '../../assets/trips.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  trips: TripModel[] = jsonTrips.trips;

ngOnInit() {
  console.log(this.trips);
}


}
