import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.use({storageState:'auth2.json'})


test('test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.waitForLoadState();
    await page.getByRole('link', { name: 'Test Login Page' }).click
   // const bb = await page.getByRole('link', { name: 'Test Login Page' }).textContent();
   // console.log(bb);

   
    //await page.getByRole('button', {name:'Try it out'}).click();
    await page.pause();

   



})