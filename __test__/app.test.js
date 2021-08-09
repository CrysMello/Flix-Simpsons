const request= require("supertest");

const app = require("../app");

test("deve responder na raiz", () => {
    return request(app).get("/")
        .then(res => {
            expect(res.status).toBe(200)
        })
})