import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDepartment } from '../types/department';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  apiUrl = 'https://localhost:7148';
  constructor() { }

  getDepartments() {
    return this.http.get<IDepartment[]>("https://localhost:7148/api/Department");
  }

  addDepartment(name: string) {
    return this.http.post(this.apiUrl + "/api/Department", {
      name: name,
    });
  }

  updateDepartment(id: number, name: string) {
    return this.http.put(this.apiUrl + "/api/Department/" + id, {
      name: name,
    });
  }

  deleteDepartment(id: number) {
    return this.http.delete(this.apiUrl + '/api/Department/' + id);
  }
}
