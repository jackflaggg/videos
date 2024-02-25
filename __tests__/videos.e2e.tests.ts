import supertest from "supertest";
import {app} from "../src/app";
import {describe, it} from "node:test";

const req = supertest(app);

describe('/videos', () => {
    beforeAll(async () => {
        await req.delete('testing/all-data').expect(204);
    });

    afterAll(async () => {
    })

    it('GET videos = []', async () => {
        const res = await req
            //берем запрос, который создали, затем дергаем эндпоинт - видеос и ожидаем статус код 200
            .get('/videos')
            .expect(200)

        console.log(res.body);
        expect(res.body.length).toBe(0)
    })
})
