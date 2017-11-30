import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatMenuModule, MatSidenavModule, MatListModule, MatIconModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatProgressBarModule, MatRadioModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import 'hammerjs';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatProgressBarModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatProgressBarModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
})
export class MaterialModule { }
