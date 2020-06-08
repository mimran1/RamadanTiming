import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public declanationAngle: number
  public latitudeAngle: number
  public sinDec: number
  public cosLat: number
  public maxAmplitude: number
  public summerRise: number;
  public summerSet: number;
  public winterRise: number;
  public winterSet: number;
  public customValue: number;
  public riseDiff: number;
  public setDiff: number;
  public summerArc: number;
  public winterArc: number;
  constructor() { }

  ngOnInit(): void {;
    this.declanationAngle = 23.45;
    this.latitudeAngle = 40.65
  }

  onCaclulateClick(){
    var declanationAngleNumber = Number(this.declanationAngle);
    var latitudeAngleNumber = Number(this.latitudeAngle);
    var declanationRadians = declanationAngleNumber * (angularMath.getPi()/180);
    var latitudeRadians = latitudeAngleNumber * (angularMath.getPi()/180);
    this.sinDec = angularMath.sinNumber(Number(declanationRadians));
    this.cosLat = angularMath.cosNumber(Number(latitudeRadians));
    this.maxAmplitude = angularMath.asinNumber(this.sinDec/this.cosLat) * (180/angularMath.getPi());
    this.summerRise = 90 - this.maxAmplitude;
    this.summerSet = 270 + this.maxAmplitude;
    this.winterRise = 90 + this.maxAmplitude;
    this.winterSet = 270 - this.maxAmplitude;
    this.riseDiff = this.winterRise - this.summerRise;
    this.setDiff = this.summerSet - this.winterSet;
    this.summerArc = this.summerSet - this.summerRise;
    this.winterArc = this.winterSet - this.winterRise;
  }
}
