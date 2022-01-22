import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title: string = ""
  @Input() type: string = ""
  @Input() disabled: boolean = false
  @Output() emiterActionButton = new EventEmitter();

  emiterAction(): void {
    this.emiterActionButton.emit(true);
  }
}
