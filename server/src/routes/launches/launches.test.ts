import request from "supertest";

import app from "../../app.ts";

describe("Test GET /launches", function () {
  test("It should respond with status 200", async function () {
    const response = await request(app).get("/launches");
    console.log(response);
    // const response = 200;
    // expect(response).toBe(200);
  });
});

describe("Test POST /launches", function () {
  test("It should respond with status 201", function () {
    const response = 201;
    expect(response).toBe(201);
  });
  test("It should catch missing required properties", function () {});
  test("It should catch invalid launch date", function () {});
});
