import { test, expect } from '@playwright/test';

test('TC_002 Login happy path with valid data', async ({ request }) => {
 
  // dummhyh data 
  const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
    {
      data:{
        'email':'test297@gmail.com',
        'password':'test25081997'
      }     
    }
  );

  expect((await response).status()).toBe(200);

  const responseBody = await response.json();

  // const sucessCheck = responseBody.success;
  const successCheck = responseBody.success;
  expect(successCheck).toBe(true);

});

test('TC_003 Login sad path', async ({ request }) => {

  const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
    {
      data:{
        'email':'test29734534@gmail.com',
        'password':'test25081997'
      }     
    }
  );

  expect((await response).status()).toBe(400);
//validation
  const responseBody = await response.json();

  // const sucessCheck = responseBody.success;
  const successCheck = responseBody.success;
  expect(successCheck).toBe(false);

});