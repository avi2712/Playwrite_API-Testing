import { test, expect } from '@playwright/test';

test('CreateEventAPI Test 3',async ({request}) => {

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
  console.log(token);

//   Create Event
  const createEventResponse = await request.post(
    'https://api.eventhub.rahulshettyacademy.com/api/events',
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      data: {
        title: "Tech Avinash 2026",
        description: "A premier technology conference.",
        category: "Conference",
        venue: "Bangalore International Centre",
        city: "Bangalore",
        eventDate: "2026-08-15T09:00:00.000Z",
        price: 1500,
        totalSeats: 500,
        imageUrl: "https://example.com/banner.jpg"
      }
    }
  );

  // Step 3: Verify Response
  expect(createEventResponse.status()).toBe(201);

  const responseBody3 = await createEventResponse.json();

  console.log(responseBody3);

  expect(responseBody3.success).toBe(true);
  expect(responseBody3.message).toContain("Event created");
});