import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './views/user-dialog.html',
    styleUrls: ['./styles/user-dialog.scss']
})

export class UserDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    OnNoClick(): void {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

    saveCheckIn(): void {
        this.dialogRef.close();
    }

}
