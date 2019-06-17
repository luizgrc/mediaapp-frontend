import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatMenuModule, MatDividerModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,    
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
