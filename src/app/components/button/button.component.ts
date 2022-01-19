import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title: string = ""
  @Input() type: string = ""
  @Input() disabled: boolean = false
  @Output() emiterActionButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emiterAction(): void {
    this.emiterActionButton.emit(true);
  }

}
