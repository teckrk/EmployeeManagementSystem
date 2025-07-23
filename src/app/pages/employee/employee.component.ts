import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TableComponent } from '../../components/table/table.component';
import { IEmployee } from '../../types/employee';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  imports: [
    TableComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  httpService = inject(HttpService);
  employeeList: IEmployee[] = [];
  showCOL = ['id', 'name', 'email', 'phone', 'action'];
  ngOnInit() {
    this.getLatestData();
  }

  getLatestData() {
    this.httpService.getEmployeeList().subscribe((result) => {
      this.employeeList = result;
    });
  }
  edit(employee: IEmployee) {
    // console.log('Employee passed to edit:', employee);
    let ref = this.dialog.open(EmployeeFormComponent, {
      panelClass: 'm-auto',
      data: {
        employeeId: employee.id,
      }
    });
    ref.afterClosed().subscribe(result => {
      this.getLatestData();
    })
  }
  delete(employee: IEmployee) {
    this.httpService.deleteEmployee(employee.id).subscribe(() => {
      alert("Record Deleted..");
      this.getLatestData();
    });
  }

  add() {
    this.openDialog();
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    let ref = this.dialog.open(EmployeeFormComponent, {
      panelClass: 'm-auto',
      data: {
        
      }
    });
    ref.afterClosed().subscribe(result => {
      this.getLatestData();
    })
  }
}
