export class Covid {
  country: string ;
  flag: string;
  continent: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  date: string;

  constructor() {

    this.country = '';
    this.flag = '';
    this.continent = '';
    this.cases = 0;
    this.todayCases = 0;
    this.deaths = 0;
    this.todayDeaths = 0;
    this.recovered = 0;
    this.todayRecovered = 0;
    this.active = 0;
    this.critical = 0;
    this.tests = 0;
    this.date = '';
 }
}
