import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  imports: [MatDialogModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})

export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }
 }