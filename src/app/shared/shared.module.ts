import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { ControlPushComponent } from './control-push';

import { } from './services/';
import { UserService } from './services/user.service';
import { ConfigService } from './services/config.service';

@NgModule({
  imports: [ CommonModule, MaterialModule ],
  declarations: [
    ControlPushComponent
  ],
  exports: [
    CommonModule,
    // RouterModule,
    FormsModule,
    MaterialModule,
  ]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ConfigService,
        UserService
      ]
    };
  }


}
