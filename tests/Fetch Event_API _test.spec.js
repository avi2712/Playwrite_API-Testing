import { test,expect } from "@playwright/test";

test('Get events', async ({request})=>{
    
    const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
        {
          data:{
            'email':'test297@gmail.com',
            'password':'test25081997'
          }     
        }
      );
    
    
      // testing
      const responseBody = await response.json();
      const token = responseBody.token;
      console.log(token);

    const response1 = await request.get('https://api.eventhub.rahulshettyacademy.com/api/events?category=Conference&city=Bangalore&page=1&limit=10',
        {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'accept': 'application/json'
            }
          }
    );

    // expect(response1.ok()).toBeTruthy();
    const data = await response1.json();
    console.log(data);
});