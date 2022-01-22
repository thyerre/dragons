import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() parentForm: FormGroup = {} as FormGroup;
  @Input() nameControl: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() class: string = "default";
  @Input() label: string = "";
}
