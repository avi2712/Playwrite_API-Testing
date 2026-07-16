import { test, expect } from '@playwright/test';

test('TC_004 Create Event with missing title', async ({ request }) => {

  // Login
  const loginResponse = await request.post(
    'https://api.eventhub.rahulshettyacademy.com/api/auth/login',
    {
      data: {
        email: 'test297@gmail.com',
        password: 'test25081997'
      }
    }
  );

  const loginBody = await loginResponse.json();
  const token = loginBody.token;

  // Create Event with missing title
  const response = await request.post(
    'https://api.eventhub.rahulshettyacademy.com/api/events',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      data: {
        // title is intentionally missing
        description: 'A premier technology conference.',
        // category: 'Conference',
        venue: 'Bangalore International Centre',
        city: 'Bangalore',
        eventDate: '2026-08-15T09:00:00.000Z',
        price: 1500,
        totalSeats: 500,
        imageUrl: 'https://example.com/banner.jpg'
      }
    }
  );

  expect(response.status()).toBe(400);

  const umeshRes = await response.json();

  console.log(umeshRes);

  expect(umeshRes.success).toBe(false);
  expect(umeshRes.error).toBe('Validation failed');

  expect(umeshRes.details.length).toEqual(2);
  expect(umeshRes.details[0].field).toBe('title');
  expect(umeshRes.details[1].message).toBe('Category is required');
});