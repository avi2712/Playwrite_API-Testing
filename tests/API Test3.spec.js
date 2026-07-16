import { test, expect } from '@playwright/test';

test('test 3',async ({request}) => {

const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
    {
      data:{
        'email':'test297@gmail.com',
        'password':'test25081997'
      }     
    }
  );

  const responseBody = await response.json();
  const token = responseBody.token;
//   console.log(token);

  const response2 = await request.get('https://api.eventhub.rahulshettyacademy.com/api/auth/me',
    {
        headers: {
          Authorization: 'Bearer ${token}'
        }
    }
  );

  const responseBody2 = await response.json();

  console.log(responseBody2.user.email);


});
