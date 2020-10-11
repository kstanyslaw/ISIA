import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sport-form-group',
  templateUrl: './sport-form-group.component.html',
  styleUrls: ['./sport-form-group.component.scss'],
})
export class SportFormGroupComponent implements OnInit {
  @Input() sportFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {}

}
