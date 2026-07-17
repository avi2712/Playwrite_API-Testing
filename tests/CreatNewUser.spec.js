
import { test, expect } from '@playwright/test';

test('Create New User Successful', async ({ request }) => {

    const response = await request.post('http://localhost:8081/api/customers', {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },

        data: {
            fullName: 'Avinash Chougule',
            email: 'avichaugule001@gmail.com',
            mobileNumber: '+91 54128568546',
            address: 'Moshi, Pune'
        }
    });

    // expect(response.status()).toBe(201);

    console.log(response.status());
console.log(await response.text());

    const responseBody = await response.json();

    console.log(responseBody);
});
