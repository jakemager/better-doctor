import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctor;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.doctorService.getDoctor(id).subscribe(res => {
      this.doctor = res;
    });
  }
}
