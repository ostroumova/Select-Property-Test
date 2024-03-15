const request = require("supertest");
const app = require("./src/app");

describe("GET /properties", () => {
  it("responds with a list of properties", async () => {
    const response = await request(app).get("/properties");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
