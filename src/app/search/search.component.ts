import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  doctors;
  searchForm;

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      name: '',
      insurance: '',
      location: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSearch() {
    const searchForm = this.searchForm.value;

    this.router.navigate(['/findDoctor'], {
      queryParams: {
        name: searchForm.name,
        insurance: searchForm.insurance,
        location: searchForm.location
      }
    });
  }
}
