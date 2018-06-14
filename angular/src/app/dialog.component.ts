import {
  Component
} from '@angular/core';

import * as lorem from 'lorem-ipsum';

import { Position } from '../../projects/ng-pd/src/dialog/position.enum';

enum DialogSize {
  Standard = 0,
  Small = 1,
  Large = 2,
  FullScreen = 3
}

@Component({
  selector: 'app-dialog',
  template: `
  <button (click)="openDialog(DialogSize.Small)">Open Small Dialog</button>
  <button (click)="openDialog(DialogSize.Standard)">Open Standard Dialog</button>
  <button (click)="openDialog(DialogSize.Large)">Open Large Dialog</button>
  <button (click)="openDialog(DialogSize.FullScreen)">Open Full Screen Dialog</button>

  <pd-dialog [open]="isOpen" (close)="isOpen = false" [position]="position">
    <header>{{loremHeader}}</header>
    <main>{{loremMain}}</main>
    <footer>{{loremFooter}}</footer>
  </pd-dialog>
  `
})
export class DialogComponent {
  DialogSize = DialogSize;

  private size: DialogSize;

  isOpen = false;
  loremHeader = '';
  loremMain = '';
  loremFooter = '';
  position = Position.Center;

  openDialog(size: DialogSize) {
    this.loremMain = lorem({
      count: 3,
      units: 'paragraphs',
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      format: 'plain'
    });

    this.loremHeader = lorem({
        count: 1,
        units: 'paragraphs',
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        paragraphLowerBound: 3,
        paragraphUpperBound: 7,
        format: 'plain'
    });

    this.loremFooter = lorem({
      count: 2,
      units: 'paragraphs',
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      format: 'plain'
    });

    this.size = size;
    this.isOpen = true;
    this.position = this.position === Position.TopLeft ? Position.Center : <Position> this.position + 1;
  }

  closeDialog() {
    this.isOpen = false;
  }

  getDialogSize() {
    return {
      'small': this.size === DialogSize.Small,
      'large': this.size === DialogSize.Large,
      'full-screen': this.size === DialogSize.FullScreen
    };
  }
}
