import { Component } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  imports: [MatDialogModule],
  template: `
  <main class="cus">
  <div class="container">
    <h2 class="rr" mat-dialog-title>Confirmação</h2>
    <mat-dialog-content>Deseja realmente excluir?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close class="cancl-button">Cancelar</button>
      <button mat-button [mat-dialog-close]="true" class="confirm-button">Confirmar</button>
    </mat-dialog-actions>
</div>
</main>
  `,

  styles: [`

  .container{
    font-family: 'Poppins', sans-serif;
  background-color: #ffffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 80px 200px rgba(0, 0, 0, 0.2);
  }

  .rr{
  color: #1889FF;
  }
   
    mat-dialog-content {
      color: #fd0000ff;
      font-size: 16px;
      padding: 10px 0;
    }


    mat-dialog-actions {
      justify-content: flex-end; 
      gap: 8px; 
    }
    
    
    .confirm-button {
      background-color: #1889FF;
      color: white;
      border-radius: 5px;
      border:none;
      padding: 0 16px;
      width: 90px;
      height: 30px;
     
    }

     .cancl-button {
      color:  #1889FF;
      border-radius: 5px;
      border: solid 1px  #1889FF ;
      padding: 0 16px;
      width: 90px;
      height: 30px;
     
    }

    .confirm-button:hover {
      background-color: #d32f2f;
    }
  `]
})

export class Modal { }