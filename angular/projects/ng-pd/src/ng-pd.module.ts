import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdTabsComponent } from './tabs/tabs.component';
import { PdDialogDirective } from './dialog/dialog.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PdDialogDirective,
    PdTabsComponent
  ],
  exports: [
    PdDialogDirective,
    PdTabsComponent
  ]
})
export class NgPdModule { }
