import {test,expect} from '@playwright/test'

test('Account Creat For Customer', async ({request}) => {

const response = await request.post ('http://localhost:8081/api/accounts',

         {
            headers:  {
                'access': '*/*',
                'content-Type': 'application/json',
            },
            
            data: {
               'customerId': 7 ,
               'accountType': 'SAVINGS',
               'openingBalance': 60000
            }
         }
);


  expect((await response).status()).toBe(201)

  const responseBody = await response.json();
  console.log(responseBody);



});