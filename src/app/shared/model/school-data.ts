export class SchoolData {
  schoolId: number;
  schoolName: string;
  year:number;
  schoolDataFields: DataField[];
}

export class DataField {
    fieldName:string
    value:number;
}