import { Component } from '@angular/core';

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
    Hello World!
  </dialog>
  `
})
export class DialogComponent {
  DialogSize = DialogSize;

  private size: DialogSize;
  isOpen = false;

  openDialog(size: DialogSize) {
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
