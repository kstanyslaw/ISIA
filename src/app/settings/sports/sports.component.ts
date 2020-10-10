import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {
  @Input() settingsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // this.sportsArray = this.settingsForm.get('sports') as FormArray;
    console.log(this.sportsArray);
  }

  get sportsArray(): FormArray {
    return this.settingsForm.get('sports') as FormArray;
  }

  onAddSport() {
    this.sportsArray.push(new FormGroup({
      sport: new FormControl(null),
      level: new FormControl(null),
    }));
  }

}
