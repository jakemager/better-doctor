import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(name, insurance, location) {
    return this.http.get(
      'https://api.betterdoctor.com/2016-03-01/doctors?name=' +
        name +
        '&sort=distance-asc&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=25&user_key=64cbfd02c30775e2a7f1347d8c7d220d'
    );
  }

  getDoctor(id) {
    return this.http.get(
      'https://api.betterdoctor.com/2016-03-01/doctors/' +
        id +
        '?user_key=64cbfd02c30775e2a7f1347d8c7d220d'
    );
  }
}
