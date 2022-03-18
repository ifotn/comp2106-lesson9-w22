import { Component, OnInit } from '@angular/core';

// create an Employer class (strongly-typed)
export class Employer {
  id: number | undefined;
  name: string | undefined;
  location: string | undefined;
}

// mock a list of employers to display 
const EMPLOYERS: Employer[] = [
  { id: 100, name: 'Pavliks', location: 'Barrie' },
  { id: 200, name: 'Element 6', location: 'Barrie' },
  { id: 300, name: 'Treefrog', location: 'Newmarket' },
  { id: 400, name: 'LabX', location: 'Midland'}
]

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  // make list available to the html view
  employers = EMPLOYERS

  selectedEmployer: Employer | undefined

  onSelect(employer: Employer): void {
    this.selectedEmployer = employer
  }

  resetForm(): void {
    this.selectedEmployer = undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
