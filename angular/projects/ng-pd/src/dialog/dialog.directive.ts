import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2
} from '@angular/core';

import * as dialogPolyfill from 'dialog-polyfill';

@Directive({
  selector: 'dialog'
})
export class PdDialogDirective {
  @Input('open') set open(val: boolean) {
    if (val) {
      this.el.nativeElement.showModal();
    } else if (this.el.nativeElement.getAttribute('open') === '') {
      this.el.nativeElement.close();
      this.close.emit();
    }
  }

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef, renderer: Renderer2) {
    dialogPolyfill.registerDialog(el.nativeElement);
    renderer.listen(el.nativeElement, 'click', (e: MouseEvent) => {
      const dialog = <HTMLElement> el.nativeElement;
      if (this.clickOutsideDialogWidth(dialog, e) || this.clickOutsideDialogHeight(dialog, e)) {
        this.el.nativeElement.close();
        this.close.emit();
      }
    });
  }

  private clickOutsideDialogWidth(dialog: HTMLElement, e: MouseEvent) {
    const effectiveLeftBoundary = dialog.offsetLeft - (dialog.offsetWidth / 2);
    const effectiveRightBoundary = effectiveLeftBoundary + dialog.offsetWidth;
    if (effectiveLeftBoundary <= e.clientX && e.clientX <= effectiveRightBoundary) {
      return false;
    }

    return true;
  }

  private clickOutsideDialogHeight(dialog: HTMLElement, e: MouseEvent) {
    const effectiveTopBoundary = dialog.offsetTop - (dialog.offsetHeight / 2);
    const effectiveBottomBoundary = effectiveTopBoundary + dialog.offsetHeight;

    if (effectiveTopBoundary <= e.clientY && e.clientY <= effectiveBottomBoundary) {
      return false;
    }

    return true;
  }
}
