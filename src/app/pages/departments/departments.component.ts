import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IDepartment } from '../../types/department';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  httpService = inject(HttpService);
  departments: IDepartment[] = [];
  isFormOpen = false;
  departmentName!: string;

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this.httpService.getDepartments().subscribe((result) => {
      this.departments = result;
    });
  }

  addDepartment() {
    if (!this.departmentName?.trim()) {
      alert("Please enter a department name.");
      return;
    }

    this.httpService.addDepartment(this.departmentName).subscribe(() => {
      alert("Record Saved...");
      this.departmentName = '';     // Clear input
      this.isFormOpen = false;      // Close form
      this.getDepartments();        // 🔁 Refresh list
    });
  }

  editId = 0;
  editDepartment(department: IDepartment) {
    this.departmentName = department.name;
    this.isFormOpen = true;
    this.editId = department.id;
  }

  updateDepartment() {
    this.httpService.updateDepartment(this.editId, this.departmentName).subscribe(() => {
      alert("Record Saved..");
      this.isFormOpen = false;
      this.getDepartments();
    })
  }

  delete(id: number) {
    this.httpService.deleteDepartment(id).subscribe(() => {
      alert("Record Deleted..");
      this.getDepartments();
    })
  }
}












