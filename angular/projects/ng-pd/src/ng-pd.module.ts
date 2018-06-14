import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdTabsComponent } from './tabs/tabs.component';
import { PdDialogDirective } from './dialog/dialog.directive';
import { PdDialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PdDialogComponent,
    PdDialogDirective,
    PdTabsComponent
  ],
  exports: [
    PdDialogComponent,
    PdDialogDirective,
    PdTabsComponent
  ]
})
export class NgPdModule { }
