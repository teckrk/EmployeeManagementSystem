export interface IEmployee {
    id: number;
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    gender: Gender;
    departmentId: number;
    joiningDate: string | null;
    lastWorkingDate: string | null;
    dateOfBirth: string | null;
}


export enum Gender {
    Male = 1,
    Female = 2
}