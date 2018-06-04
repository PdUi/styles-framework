import { AfterContentInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { ITabDefinition, DisplayStrategy } from '../../projects/ng-pd/src/public_api';

@Component({
  selector: 'app-tabs',
  template: `
  <ng-template #tab let-data>
    <i>&#1421;</i> Hello ({{data}})
  </ng-template>
  <pd-tabs [tabDefinitions]="tabDefinitions"></pd-tabs>
  `
})
export class TabsComponent implements AfterContentInit {
  @ViewChild('tab') tabTemplate: TemplateRef<any>;

  tabDefinitions: ITabDefinition[];

  ngAfterContentInit(): void {
    this.tabDefinitions = [
      {
        displayStrategy: new DisplayStrategy(this.tabTemplate),
        data: 'world!'
      },
      {
        displayStrategy: new DisplayStrategy('Hello there!')
      }
    ];
  }
}
