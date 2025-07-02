const { test, expect } = require("@playwright/test")

test("Api testing e2e request", async ({ request }) => {
    const postPayload = {"name":"Dipanshu", "gender":"male", "email":`dipanshu${Date.now()}@gmail.com`, "status":"active"}
    const putPlayload ={"name":"dipanshu chawde ", "email":`dipanshuC${Date.now()}@gmail.com`, "status":"active"}
    const Auth_Headers = {
        "Authorization": "Bearer 2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e",
        "Content-Type":"application/json"
    }
    //post method-----------------
    let newUserid;
    const createResponse  = await request.post('https://gorest.co.in/public/v2/users',{
        data : postPayload,
        headers : Auth_Headers
    })
    const createRes = await createResponse.json()
    await expect(createRes.name).toBe(postPayload.name)
    await expect(createResponse.status()).toBe(201)
    await expect(createResponse.statusText()).toBe('Created')
    console.log('Create new user response -----------',createRes)
    newUserid= createRes.id
   console.log(newUserid)
    //put method------------------------
    const putResponse = await request.put(`https://gorest.co.in/public/v2/users/${newUserid}`, {
        data : putPlayload,
        headers : Auth_Headers
    })

    const putRes = await putResponse.json()
    console.log('Update user response -----------',putRes)
    await expect(putRes.name).toBe(putPlayload.name)
    await expect(putResponse.status()).toBe(200)
    await expect(putResponse.statusText()).toBe('OK')

    //list user --------------------------

    const getResponse = await request.get("https://gorest.co.in/public/v2/users",{
        headers : Auth_Headers
    })

    const getRes = await getResponse.json()
    console.log('List user response -----------',getRes)
    
    await expect(getResponse.status()).toBe(200)
    await expect(getResponse.statusText()).toBe('OK')

    //delete user ------------------------------

    const deleteResponse = await request.delete(`https://gorest.co.in/public/v2/users/${newUserid}`, {
        headers : Auth_Headers
    })

    // const deleteRes = await deleteResponse.json()
    console.log('Update user response -----------',deleteResponse)
    
    await expect(deleteResponse.status()).toBe(204)
    await expect(deleteResponse.statusText()).toBe("No Content")

 })