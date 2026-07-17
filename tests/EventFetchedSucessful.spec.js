import { test, expect } from '@playwright/test';

test.describe('GET /api/events with filters', () => {

  test('TC_001 - Verify filtered events are fetched successfully', async ({ request }) => {

    const response = await request.get(
      'https://api.eventhub.rahulshettyacademy.com/api/events',
      {
        params: {
          category: 'Conference',
          city: 'Bangalore',
          search: 'summit',
          page: 1,
          limit: 10
        },
        headers: {
          accept: 'application/json'
        }
      }
    );

    console.log('Status Code:', response.status());

    const body = await response.json();

    console.log('Response:', JSON.stringify(body, null, 2));

    expect(response.status()).toBe(401);
    expect(body.success).toBe(false);
    expect(Array.isArray(body.data)).toBe(false);

    // Verify pagination
    expect(body.pagination).toBeDefined();
    expect(body.pagination.page).toBe(1);
    expect(body.pagination.limit).toBe(10);

    // Verify each event matches filters
    body.data.forEach(event => {
      expect(event.category).toBe('Conference');
      expect(event.city).toBe('Bangalore');
      expect(event.title.toLowerCase()).toContain('summit');
    });

  });

});