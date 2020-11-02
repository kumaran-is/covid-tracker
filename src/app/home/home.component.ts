import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid } from './../core/models/covid';
import { CovidService } from './../core/services/covid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public columnDefs = [
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

public rowData$: Observable<Covid[]>;

constructor(private covidService: CovidService) { }

ngOnInit(): void {
  this.rowData$ = this.covidService.getAllCountryCovidReports();
}

}
