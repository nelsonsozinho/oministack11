const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('Shold be able a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'APPAD', 
                email: 'contato@teste.com', 
                whatsapp: '92989898988', 
                city: 'Rio Grande do Sul', 
                uf: 'SC'
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})