import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { UserDialogComponent } from './userDialog.component';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
  imports: [ DashboardRouting, SharedModule ],
  declarations: [ DashboardComponent, UserDialogComponent ],
  entryComponents: [
    DashboardComponent,
    UserDialogComponent
  ]
})

export class DashboardModule {}
