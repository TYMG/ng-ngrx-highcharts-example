import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const schools =[
            {
                schoolId: 123,
                schoolName: 'Dr Nick\'s Med School',
                year: 2018,
                schoolData: [
                    { fieldName: 'Military Experience', value: 100 },
                    { fieldName: 'DACA Status', value: 1030 },
                    { fieldName: 'Rural Indicator - HS County', value: 7200 },
                    { fieldName: 'Submitted Applications', value: 200 },
                    { fieldName: 'SES', value: 132 },
                    { fieldName: 'Rural Indicator - Birth County', value: 7200 },
                    { fieldName: 'First Gen Student', value: 200 },
                    { fieldName: 'Fee Assistance', value: 632 }
                ]
            },
            {
                schoolId: 0,
                schoolName: 'National Avg',
                year: 2018,
                schoolData: [
                    { fieldName: 'Military Experience', value: 160 },
                    { fieldName: 'DACA Status', value: 1020 },
                    { fieldName: 'Rural Indicator - HS County', value: 6700 },
                    { fieldName: 'Submitted Applications', value: 500 },
                    { fieldName: 'SES', value: 132 },
                    { fieldName: 'Rural Indicator - Birth County', value: 7100 },
                    { fieldName: 'First Gen Student', value: 500 },
                    { fieldName: 'Fee Assistance', value: 332 }
                ]
            }]

        return { schools };
    }
}