const { test, expect } = require('@playwright/test');

test('GET API Test', async ({ request }) => {
    const response = await request.get('/posts/1'); // Example endpoint
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data).toHaveProperty('id', 1);
});


hello test check me to the domain from pc
