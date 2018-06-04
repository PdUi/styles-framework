import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgPdModule } from '../../projects/ng-pd/src/ng-pd.module';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { TabsComponent } from './tabs.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    NgPdModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
