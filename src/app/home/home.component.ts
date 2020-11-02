import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

columnDefs = [
    { field: 'country' },
    { field: 'cases' },
    { field: 'todayCases'},
    { field: 'deaths' },
    { field: 'todayDeaths'},
    { field: 'recovered' },
    { field: 'todayRecovered'},
    { field: 'active' },
    { field: 'critical'},
    { field: 'tests' },
    { field: 'date'}
];

rowData = [];

constructor() { }

  ngOnInit(): void {
  }

}
