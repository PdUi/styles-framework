import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef
} from '@angular/core';

import { DisplayStrategyType } from '../common/display-strategy';
import { ITabDefinition } from './tab-definition';
import { Orientation } from '../common/orientation.enum';

/*
  TODO:
    look into aria-labelledby
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
    look into aria-describedby
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
*/
@Component({
  selector: 'pd-tabs',
  template: `
  <a
    *ngFor="let tabDefinition of tabDefinitions"
    role="tab"
    tabindex="0"
    [ngSwitch]="tabDefinition.displayStrategy.displayStrategyType"
    [ngClass]="{ 'active': tabDefinition === currentTab, 'stacked': orientation === Orientation.Vertical }"
    [attr.aria-selected]="tabDefinition === currentTab"
    (click)="switchTab(tabDefinition)">
    <ng-container
      *ngSwitchCase="DisplayStrategyType.Template"
      [ngTemplateOutlet]="tabDefinition.displayStrategy.content"
      [ngTemplateOutletContext]="{ $implicit: tabDefinition.data }">
    </ng-container>
    <ng-container *ngSwitchCase="DisplayStrategyType.String">
      {{tabDefinition.displayStrategy.content}}
    </ng-container>
  </a>
  `,
  preserveWhitespaces: false
})
export class PdTabsComponent {
  DisplayStrategyType = DisplayStrategyType;
  Orientation = Orientation;

  private _tabDefinitions: ITabDefinition[];
  @Input() set tabDefinitions(tabDefinitions: ITabDefinition[]) {
    const currentTab = tabDefinitions.find(tabDefinition => tabDefinition.isCurrent);

    if (!!currentTab) {
      this.currentTab = currentTab;
    }

    this._tabDefinitions = tabDefinitions;
  }
  get tabDefinitions(): ITabDefinition[] {
    return this._tabDefinitions;
  }
  @Input() orientation = Orientation.Horizontal;
  @Output() tabSelect = new EventEmitter<ITabDefinition>();
  currentTab: ITabDefinition;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'tabpanel');
  }

  switchTab(tab: ITabDefinition) {
    this.currentTab = tab;
    this.tabSelect.emit(tab);
  }
}
