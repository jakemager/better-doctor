import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  doctors;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.doctorService
        .getDoctors(params.name, params.insurance, params.location)
        .subscribe(res => {
          this.doctors = res;
          console.log(this.doctors);
        });
    });
  }

  getDistance(doctor) {
    if (doctor.practices.length) {
      let practices = doctor.practices.sort((a, b) => a.distance - b.distance);
      return Math.round(10 * practices[0].distance) / 10;
    } else return null;
  }
}
