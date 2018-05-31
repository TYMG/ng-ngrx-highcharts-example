import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const school =
            {
                schoolId: 123,
                schoolName: 'Dr Nick\'s Med School',
                year: 2018,
                schoolData: [
                    { fieldName: 'Military Experience', value: 100 },
                    { fieldName: 'DACA Status', value: 1030 },
                    { fieldName: 'Rural Indicator - HS County', value: 7200 },
                    { fieldName: 'Submitted Applications', value: 9200 },
                    { fieldName: 'SES', value: 132 },
                    { fieldName: 'Rural Indicator - Birth County', value: 7200 },
                    { fieldName: 'First Gen Student', value: 9200 },
                    { fieldName: 'Fee Assistance', value: 132 }
                ]
            }
        return { school };
    }
}