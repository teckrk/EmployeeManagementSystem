import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IDepartment } from '../../../types/department';
import { HttpService } from '../../../services/http.service';
import { IEmployee } from '../../../types/employee';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-form',
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatCardModule, MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  fb = inject(FormBuilder);
  @Input() employeeId!: number;
  employeeForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    gender: ['', Validators.required],
    departmentId: ['', Validators.required],
    jobTitle: ['', [Validators.required]],
    joiningDate: [null as Date | null, Validators.required],
    lastWorkingDate: [null as Date | null],
    dateOfBirth: [null as Date | null, Validators.required],
  });

  departments: IDepartment[] = [];
  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getDepartments().subscribe((result) => {
      this.departments = result;
    })

    console.log("here", this.data);
    if (this.data.employeeId) {
      this.httpService.getEmployeeById(this.data.employeeId).subscribe((result) => {
        console.log('Result from API:', result);

        this.employeeForm.patchValue({
          id: result.id,
          name: result.name,
          email: result.email,
          phone: result.phone,
          gender: result.gender === 1 ? 'Male' : 'Female',
          departmentId: result.departmentId?.toString(),
          jobTitle: result.jobTitle,
          joiningDate: result.joiningDate && !result.joiningDate.startsWith('0001') ? new Date(result.joiningDate) : null,
          lastWorkingDate: result.lastWorkingDate && !result.lastWorkingDate.startsWith('0001') ? new Date(result.lastWorkingDate) : null,
          dateOfBirth: result.dateOfBirth && !result.dateOfBirth.startsWith('0001') ? new Date(result.dateOfBirth) : null,
        });
        // this.employeeForm.get('dateOfBirth')?.disable();
        // this.employeeForm.get('joiningDate')?.disable();
        // this.employeeForm.get('gender')?.disable();


      });
    } else {

    }
  }

  dialogRef = inject(MatDialogRef<EmployeeFormComponent>);
  data = inject<{ employeeId: number }>(MAT_DIALOG_DATA);

  onSubmit() {
    if (this.employeeForm.valid) {
      const raw = this.employeeForm.value;

      const payload: IEmployee = {
        id: raw.id ?? 0,
        name: raw.name ?? '',
        email: raw.email ?? '',
        phone: raw.phone ?? '',
        jobTitle: raw.jobTitle ?? '',
        gender: raw.gender === 'Male' ? 1 : 2, // assuming Gender is number enum (1 = Male, 2 = Female)
        departmentId: Number(raw.departmentId),
        joiningDate: raw.joiningDate ? new Date(raw.joiningDate).toISOString() : null,
        lastWorkingDate: raw.lastWorkingDate ? new Date(raw.lastWorkingDate).toISOString() : null,
        dateOfBirth: raw.dateOfBirth ? new Date(raw.dateOfBirth).toISOString() : null
      };

      console.log("Sending to API:", payload);

      if (this.data.employeeId) {
        this.httpService.updateEmployee(this.data.employeeId, payload).subscribe(() => {
          alert("Employee Updated");
          this.dialogRef.close();
        });
      } else {
        this.httpService.addEmployee(payload).subscribe(() => {
          alert("Employee Saved");
          this.dialogRef.close();
        });
      }
    } else {
      console.log('Form Invalid');
    }
  }


  // onSubmit() {
  //   if (this.data.employeeId) {
  //     if (this.employeeForm.valid) {
  //       const raw = this.employeeForm.value;

  //       const payload: IEmployee = {
  //         id: raw.id ?? 0,
  //         name: raw.name ?? '',
  //         email: raw.email ?? '',
  //         phone: raw.phone ?? '',
  //         jobTitle: raw.jobTitle ?? '',
  //         gender: raw.gender === 'Male' ? 1 : 2, // assuming Gender is number enum (1 = Male, 2 = Female)
  //         departmentId: Number(raw.departmentId),
  //         joiningDate: raw.joiningDate ? new Date(raw.joiningDate).toISOString() : null,
  //         lastWorkingDate: raw.lastWorkingDate ? new Date(raw.lastWorkingDate).toISOString() : null,
  //         dateOfBirth: raw.dateOfBirth ? new Date(raw.dateOfBirth).toISOString() : null
  //       };

  //       console.log("Sending to API:", payload);

  //       this.httpService.updateEmployee(this.data.employeeId, payload).subscribe(() => {
  //         alert("Employee Updated..");
  //         this.dialogRef.close();
  //       });
  //     } else {
  //       console.log('Form Invalid');
  //     }else {
  //       if (this.employeeForm.valid) {
  //         const raw = this.employeeForm.value;

  //         const payload: IEmployee = {
  //           id: raw.id ?? 0,
  //           name: raw.name ?? '',
  //           email: raw.email ?? '',
  //           phone: raw.phone ?? '',
  //           jobTitle: raw.jobTitle ?? '',
  //           gender: raw.gender === 'Male' ? 1 : 2, // assuming Gender is number enum (1 = Male, 2 = Female)
  //           departmentId: Number(raw.departmentId),
  //           joiningDate: raw.joiningDate ? new Date(raw.joiningDate).toISOString() : null,
  //           lastWorkingDate: raw.lastWorkingDate ? new Date(raw.lastWorkingDate).toISOString() : null,
  //           dateOfBirth: raw.dateOfBirth ? new Date(raw.dateOfBirth).toISOString() : null
  //         };

  //         console.log("Sending to API:", payload);

  //         this.httpService.addEmployee(payload).subscribe(() => {
  //           alert("Employee Saved");
  //           this.dialogRef.close();
  //         });
  //       } else {
  //         console.log('Form Invalid');
  //       }
  //     }
  //   }
}









