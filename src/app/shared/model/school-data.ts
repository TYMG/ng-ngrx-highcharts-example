export class SchoolData {
  schoolId: number;
  schoolName: string;
  year:number;
  schoolData: DataField[];
}

class DataField {
    fieldName:string
    value:number;
}