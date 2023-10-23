import request from 'supertest'
import { app } from '../src/index'
describe("Test Controllers", () => {

        it("Should Get the products", async () => {
            const response = await request(app).get('/produtos');
            expect(response.statusCode).toEqual(200);   
        });

        it("Should puting a buy in cart", async () => {
            const response = await request(app).post('/carrinho').send({
                url: 'www.imagetest.drive.com',
                produto:'Air Max',
                valor: '300'
            })
            expect(response.body).toHaveProperty('url') 
            expect(response.statusCode).toEqual(201)   
        });

        it("Should return products in cart", async () => {
            const response = await request(app).get('/carrinho')
            expect(response.statusCode).toEqual(200)   
        })

        it("Should Delete a product to cart", async () => {
            const response = await request(app).delete('/carrinho:id').send({
                id: 11
            })
            expect(response.statusCode).toEqual(200 && 404);
            expect(response).toMatchObject(/{msg:"item deleted"}i/);
        })

        it("Should Delete all products to cart", async () => {
            const response = await request(app).delete('/carrinho').send({
                msg: "all products deleted"
            })

            expect(response.body).toMatchObject(/msg: "all products deleted"i/);
            expect(response.statusCode).toEqual(404);
        })
})