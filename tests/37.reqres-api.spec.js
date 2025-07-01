const { test, expect } = require("@playwright/test")

test("Api testing GET request", async ({ request }) => {
    const rawRes = await request.get('https://reqres.in/api/users?page=2', {
        headers: { "x-api-key": "reqres-free-v1", "Accept": "application/json" }
    })
    console.log(await rawRes.json())
    const response = await rawRes.json()
    expect(await response.page).toBe(2)
    expect(await response.total).toBe(12)
})

test("Api testing create post request", async ({ request }) => {
    const newUser = { "name": "tanish", "job": "leader" }
    const rawRes = await request.post('https://reqres.in/api/users', {
        headers: { "x-api-key": "reqres-free-v1", "Accept": "application/json" },
        //data : { "name": "dipanshu", "job": "leader"}
        data: newUser
    })
    console.log(await rawRes.json())
    const response = await rawRes.json()
    await expect(response.name).toBe(newUser.name)
    await expect(rawRes.status()).toBe(201)
    await expect(rawRes.statusText()).toBe("Created")
})

test("Api testing update put request", async ({ request }) => {
    const updateUser = { "name": "tanish chawde", "job": "leader" }
    const rawRes = await request.put('https://reqres.in/api/users/2', {
        headers: { "x-api-key": "reqres-free-v1", "Accept": "application/json" },
        //data : { "name": "dipanshu", "job": "leader"}
        data: updateUser
    })
    console.log(rawRes)
    const response = await rawRes.json()
    await expect(response.name).toBe(updateUser.name)
    await expect(rawRes.status()).toBe(200)
    await expect(rawRes.statusText()).toBe("OK")
})

test.only("Api testing delete request", async ({ request }) => {
    const rawRes = await request.delete('https://reqres.in/api/users/2', {
        headers: { "x-api-key": "reqres-free-v1", "Accept": "application/json" },
    })
    console.log(rawRes)
    await expect(rawRes.status()).toBe(204)
    await expect(rawRes.statusText()).toBe("No Content")
})