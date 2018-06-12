import { Component } from '@angular/core';

import * as lorem from 'lorem-ipsum';

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

  <dialog [open]="isOpen" (close)="isOpen = false" [ngClass]="getDialogSize()">
    <i class="close" (click)="closeDialog()">x</i>
    <p>{{lorem}}</p>
  </dialog>
  `,
  styles: [
    `p { height: calc(100% - 16px); }`,
    `p { overflow-y: auto; }`,
    `p { margin: 16px 0 0; }`,
    `p { word-break: break-all; }`,
    `p { word-break: break-word; }`
  ]
})
export class DialogComponent {
  DialogSize = DialogSize;

  private size: DialogSize;

  isOpen = false;
  lorem = '';

  openDialog(size: DialogSize) {
    this.lorem = lorem({
      count: 7                      // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'           // Generate words, sentences, or paragraphs.
    , sentenceLowerBound: 5         // Minimum words per sentence.
    , sentenceUpperBound: 15        // Maximum words per sentence.
    , paragraphLowerBound: 3        // Minimum sentences per paragraph.
    , paragraphUpperBound: 7        // Maximum sentences per paragraph.
    , format: 'plain'               // Plain text or html
  });
    this.size = size;
    this.isOpen = true;
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
