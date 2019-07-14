import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AppService {
  private planetsURL = 'https://findfalcone.herokuapp.com/planets';  // URL to get Planets
  private vehiclesURL = 'https://findfalcone.herokuapp.com/vehicles';  // URL to get vehicles
  private tokenURL = 'https://findfalcone.herokuapp.com/token';  // URL to init token (Post)
  private findURL = 'https://findfalcone.herokuapp.com/find';  // URL to find falcone (Post)

  constructor(private http: HttpClient) { }

  /** GET data from the server */
  getPlanets(): Observable<any> {
    return this.http.get(this.planetsURL);
  }
  getVehicles(): Observable<any> {
    return this.http.get(this.vehiclesURL);
  }
  getToken(): Observable<any> {
    return this.http.post(this.tokenURL, null, { headers: { 'Accept': 'application/json' } });
  }
  findFalcone(postData: {}): Observable<any> {
    return this.http.post(this.findURL, postData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }
}
