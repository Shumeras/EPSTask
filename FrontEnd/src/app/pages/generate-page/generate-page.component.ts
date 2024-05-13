import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { DiscountCodeService } from '../../services/discount-code.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './generate-page.component.html',
  styleUrl: './generate-page.component.scss'
})
export class GeneratePageComponent {

  @ViewChild('dialogTemplate', { static: true })
    dialogTemplate!: TemplateRef<any>;

  paginatorSettings = {
    length: 0,
    pageIndex: 0,
    pageSize: 100,
    pageSizeOptions: [10, 100, 1000]
  }

  private dataFetched = false;

  columnsToDisplay: string[] = ['position', 'code'];
  tableData: {position: number, code: string}[] = [];

  codeLength: number = 7;
  codeCount: number = 1;
  code: string  = '';

  constructor(
    private _discountCodeService: DiscountCodeService, 
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  // Not doing front-end validation so we can see back-end errors better

  generateButtonClicked(): void {
    this._discountCodeService.createDiscountCodes(this.codeLength, this.codeCount)
      .then(
        (response) => {
          if (response.getSuccess()) {
            this._snackBar.open('Discount code(s) generated successfully', 'Close', { duration: 8000, verticalPosition: 'top'});
          }
          else
          {
            this._snackBar.open('Server returned unsucessfull response', 'Close', { duration: 8000, verticalPosition: 'top'});
          }
        },
        (error) => {
          this._snackBar.open(`Error(${error.status}): ${error.message}`, 'Close', { duration: 8000, verticalPosition: 'top'});
        }
    );
  }

  useButtonClicked(): void {
    this._discountCodeService.useDiscountCode(this.code)
      .then(
        (response) => {
          if (response.getResult() == 0) {
            this._snackBar.open('Discount code used successfully', 'Close', { duration: 8000, verticalPosition: 'top'});
            this.paginatorSettings.length -= 1;
            this.pageChanged({length: this.paginatorSettings.length, pageIndex: this.paginatorSettings.pageIndex, pageSize: this.paginatorSettings.pageSize});
          }
          else
          {
            this._snackBar.open(`Server returned unsucessfull response: code - ${response.getResult()}`, 'Close', { duration: 8000, verticalPosition: 'top'});
          }
        },
        (error) => {
          this._snackBar.open(`Error(${error.status}): ${error.message}`, 'Close', { duration: 8000, verticalPosition: 'top'});
        }
    );
  }

  refreshButtonClicked(): void {
    this._discountCodeService.getDiscountCodesCount()
      .then(
        (response) => {
          this.dataFetched = true;
          this.pageChanged({length: response.getCount(), pageIndex: 0, pageSize: this.paginatorSettings.pageSize});
        },
        (error) => {
          this._snackBar.open(`Error on retrieving entry count(${error.status}): ${error.message}`, 'Close', { duration: 8000, verticalPosition: 'top'});
        }
    );
  }

  clearButtonClicked(): void {
    this._dialog.open(this.dialogTemplate);
  }

  clearConfirmed(): void {
    this._discountCodeService.clearDiscountCodes()
      .then(
        (response) => {
          if (response.getSuccess()) {
            this._snackBar.open('Discount codes cleared successfully', 'Close', { duration: 8000, verticalPosition: 'top'});
            this.refreshButtonClicked();
          }
          else
          {
            this._snackBar.open('Server returned unsucessfull response', 'Close', { duration: 8000, verticalPosition: 'top'});
          }
        },
        (error) => {
          this._snackBar.open(`Error(${error.status}): ${error.message}`, 'Close', { duration: 8000, verticalPosition: 'top'});
        }
    );
  }

  pageChanged(event: any): void {
    this.paginatorSettings.length = event.length;
    this.paginatorSettings.pageIndex = event.pageIndex;
    this.paginatorSettings.pageSize = event.pageSize;

    if ( !this.dataFetched ) {
      this.refreshButtonClicked();
      return;
    }

    
    this._discountCodeService.getDiscountCodes(this.paginatorSettings.pageIndex * this.paginatorSettings.pageSize, this.paginatorSettings.pageSize)
      .then(
        (response) => {
          this.updateTableData(response.getCodesList());
          this._snackBar.open('Entries retrieved successfully', 'Close', { duration: 8000, verticalPosition: 'top'});
        },
        (error) => {
          this._snackBar.open(`Error on retrieving entries(${error.status}): ${error.message}`, 'Close', { duration: 8000, verticalPosition: 'top'});
        }
      );

  }

  updateTableData(newData: string[]): void {
    this.tableData = newData.map(
      (value, index) => {
        return {position: this.paginatorSettings.pageSize * this.paginatorSettings.pageIndex + index +1, code: value} 
      } 
    );
  }
}
