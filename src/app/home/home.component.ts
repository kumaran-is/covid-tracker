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
    { field: 'country', sortable: true, filter: true, resizable: true },
    { field: 'cases', headerName: 'Total Cases', width: 120, sortable: true, resizable: true },
    { field: 'todayCases', headerName: 'New Cases', width: 120, sortable: true, resizable: true},
    { field: 'deaths', headerName: 'Total Deaths', width: 120, sortable: true, resizable: true },
    { field: 'todayDeaths', headerName: 'New Deaths', width: 120, sortable: true, resizable: true},
    { field: 'recovered', headerName: 'Total Recovered', width: 120, sortable: true, resizable: true },
    { field: 'todayRecovered', sortable: true, width: 120, resizable: true},
    { field: 'active', sortable: true, width: 120, resizable: true },
    { field: 'critical', sortable: true, width: 120, resizable: true},
    { field: 'tests', headerName: 'Total Tests', width: 120, sortable: true, resizable: true }
];

public rowData$: Observable<Covid[]>;

constructor(private covidService: CovidService) { }

ngOnInit(): void {
  this.rowData$ = this.covidService.getAllCountryCovidReports();
}

}
