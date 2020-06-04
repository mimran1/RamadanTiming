import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public declanationAngle: number
  public sinD: number
  public customValue: number
  constructor() { }

  ngOnInit(): void {
    this.declanationAngle = 0

  }

  onCaclulateClick(){
    this.sinD = Number(this.declanationAngle) + 10;
  }
}
