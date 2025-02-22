import {test, expect} from '@playwright/test'

test('Retrieve products', async({request})=>{
    const response = await request.get('https://dummyjson.com/products')
    expect(response.status()).toBe(200)
})

test('Add a product', async({request})=>{
    const response = await request.post('https://dummyjson.com/products/add',{
        data:{
            title: "Moji's Journal"
        }
    })
    expect(response.status()).toBe(201)
    const responseBody = await response.json()
    expect(responseBody.title).toBe("Moji's Journal")

})

test('Update product details', async({request})=>{
    const response = await request.put('https://dummyjson.com/products/3',{
        data:{
            title: "Moji's Bag"
        }
    })
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.title).toBe("Moji's Bag")

})

test('Delete a product', async({request})=>{
    const response = await request.delete('https://dummyjson.com/products/4')
    expect(response.status()).toBe(200)
})