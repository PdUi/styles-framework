import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  Position
} from './position.enum';

@Component({
  selector: 'pd-dialog',
  template: `
  <dialog [open]="open" (close)="closeDialog()" [ngClass]="getPosition()">
    <i class="close" (click)="closeDialog()">x</i>
    <ng-content select="header"></ng-content>
    <ng-content select="main"></ng-content>
    <ng-content select="footer"></ng-content>
  </dialog>
  `
})
export class PdDialogComponent {
  @Input() open: boolean;
  @Input() position = Position.Center;
  @Output() close = new EventEmitter();

  closeDialog() {
    this.open = false;
    this.close.emit();
  }

  getPosition() {
    return {
      'top': this.position === Position.Top || this.position === Position.TopRight || this.position === Position.TopLeft,
      'right': this.position === Position.Right || this.position === Position.TopRight || this.position === Position.BottomRight,
      'bottom': this.position === Position.Bottom || this.position === Position.BottomRight || this.position === Position.BottomLeft,
      'left': this.position === Position.Left || this.position === Position.TopLeft || this.position === Position.BottomLeft,
    };
  }
}
