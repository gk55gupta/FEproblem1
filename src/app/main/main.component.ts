import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  planets = '';
  vehicles = [];
  token = { token: '' };
  data = {};
  result = '';

  vehicles_arr = [];

  planet1 = '';
  planet2 = '';
  planet3 = '';
  planet4 = '';
  vehicle1 = '';
  selectedPlanet = '';

  constructor(private appService: AppService) { }

  getPlanets(): void {
    this.appService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }
  getVehicles(): void {
    this.appService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles;
        this.vehicles_arr = vehicles;
      });
  }
  getToken(): void {
    this.appService.getToken()
      .subscribe(token => {
        this.token = token;
        this.data = {
          'token': this.token.token,
          'planet_names': [
            'Donlon',
            'Enchai',
            'Pingasor',
            'Sapir'
          ],
          'vehicle_names': [
            'Space pod',
            'Space rocket',
            'Space rocket',
            'Space rocket'
          ]
        };

        this.findFalcone(this.data);
      });
  }
  findFalcone(data): void {
    this.appService.findFalcone(data)
      .subscribe(result => this.result = result);
  }

  ngOnInit() {
    this.getPlanets();
    this.getVehicles();
    this.getToken();
  }

  planetChange(planet): void {
    console.log(this[planet]);
  }

  onVehicleSelect(vehicle): void {
    // console.log(this[vehicle]);
    const index = this.vehicles_arr.indexOf(this[vehicle]);
    let vehicleCount = this.vehicles_arr[index].total_no;
    if (vehicleCount > 0) {
      vehicleCount--;
    }
    // this.vehicles_arr[index].total_no = vehicleCount;
  }

}
