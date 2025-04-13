const { test, expect} = require ("@playwright/test");
var userId
test.skip('testapiget', async({request})=>{

    const response = await request.get('https://reqres.in/api/users?page=2');
    await expect (response.status()).toBe(200);
   var responseJson = await response.json();
    expect(responseJson.data[1].first_name).toBe("Lindsay");
    console.log(responseJson.data[1].first_name);
})

test('testapipost', async({request})=>{
   var user = {
        "name": "morpheusunchanged",
         "job": "leaderunchanged"
    } 

    const response = await request.post('https://reqres.in/api/users',{
        data:user,
        headers:{"ACCEPT": "application/JSON"}
    });
    await expect (response.status()).toBe(201);
   var responsepostJson = await response.json();
    expect(responsepostJson.job).toBe("leaderunchanged");
    console.log(responsepostJson);
    userId = responsepostJson.id;

})

test('testapiput', async({request})=>{
    var user = {
         "name": "changed",
         "job": "changed"
     } 
 
     const response = await request.put('https://reqres.in/api/users/'+userId,{
         data:user,
         headers:{"ACCEPT": "application/JSON"}
     });
     await expect(response.status()).toBe(200);
    var responsepostJson = await response.json();
     expect(responsepostJson.job).toBe("changed");
     console.log(responsepostJson);
 });
 test('testapidelete', async({request})=>{
 
     const response2 = await request.delete('https://reqres.in/api/users/'+userId
     );
     await expect(response2.status()).toBe(204eghinsv);
     console.log(await request.get('https://reqres.in/api/users/'+userId));
 });