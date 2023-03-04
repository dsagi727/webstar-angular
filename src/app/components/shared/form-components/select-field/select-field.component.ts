import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() class!: string;
  @Input() label!: string;
  @Input() selected!: string;
  @Input() options: {value: string, name: string }[] = [];
  @Input() controllerName!: string;
  @Input() validation?: boolean;
  @Input() validationLabel!: string;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = true;
  @Input() hidden: boolean = true;
  @Input() select: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
