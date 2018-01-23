import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegistrantComponent } from './registrant.component';
import { UserDialogComponent } from './userDialog.component';
import { RegistrantRouting } from './registrant.routing';

@NgModule({
  imports: [ RegistrantRouting, SharedModule ],
  declarations: [ RegistrantComponent, UserDialogComponent ],
  entryComponents: [
    RegistrantComponent,
    UserDialogComponent
  ]
})

export class RegistrantModule {}
