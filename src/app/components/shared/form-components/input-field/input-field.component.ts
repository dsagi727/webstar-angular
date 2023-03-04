import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

 @Input() form!: FormGroup;
 @Input() class!: string;
 @Input() label!: string;
 @Input() type!: string;
 @Input() placeholder!: string;
 @Input() controllerName!: string;
 @Input() validation?: boolean;
 @Input() validationLabel!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
