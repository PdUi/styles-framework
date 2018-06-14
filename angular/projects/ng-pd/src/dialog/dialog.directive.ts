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

  constructor(
    private el: ElementRef,
    renderer: Renderer2
  ) {
    dialogPolyfill.registerDialog(el.nativeElement);
    renderer.listen(el.nativeElement, 'click', (e: MouseEvent) => {
      const dialog = <HTMLElement> el.nativeElement;
      if (this.clickOutsideDialogWidth(dialog, e) || this.clickOutsideDialogHeight(dialog, e)) {
        this.close.emit();
        this.el.nativeElement.close();
      }
    });
  }

  private clickOutsideDialogWidth(dialog: HTMLElement, e: MouseEvent) {
    const isOnLeft = dialog.classList.contains('left');
    const isOnRight = dialog.classList.contains('right');
    const effectiveLeftBoundary = isOnLeft ? 0 : (dialog.offsetLeft - (isOnRight ? dialog.offsetWidth : (dialog.offsetWidth / 2)));
    const effectiveRightBoundary = effectiveLeftBoundary + dialog.offsetWidth;

    if (effectiveLeftBoundary <= e.clientX && e.clientX <= effectiveRightBoundary) {
      return false;
    }

    return dialog === e.currentTarget;
  }

  private clickOutsideDialogHeight(dialog: HTMLElement, e: MouseEvent) {
    const isOnTop = dialog.classList.contains('top');
    const isOnBottom = dialog.classList.contains('bottom');
    const effectiveTopBoundary = isOnTop ? 0 : (dialog.offsetTop - (isOnBottom ? dialog.offsetHeight : (dialog.offsetHeight / 2)));
    const effectiveBottomBoundary = effectiveTopBoundary + dialog.offsetHeight;

    if (effectiveTopBoundary <= e.clientY && e.clientY <= effectiveBottomBoundary) {
      return false;
    }

    return dialog === e.currentTarget;
  }
}
