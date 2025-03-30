import request from "supertest";
import { expect, test } from "@jest/globals";

import app from "../../app.ts";

describe("Test GET /launches", function () {
  test("It should respond with status 200", async function () {
    await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", function () {
  const launchDataWithoutDate = {
    mission: "Super Star Destroyer",
    rocket: "Falcon 1",
    target: "Kepler-442 b",
  };

  const launchDataWithDate = {
    mission: "Super Star Destroyer",
    rocket: "Falcon 1",
    launchDate: "2028-08-05",
    target: "Kepler-442 b",
  };

  const launchDataWithInvalidDate = {
    mission: "Invalid date",
    rocket: "Falcon 1",
    launchDate: "2028-50-505",
    target: "Kepler-442 b",
  };

  test("It should respond with status 201 created", async function () {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithDate)
      .expect("Content-Type", /json/)
      .expect(201);

    const responseDate = new Date(response.body.launchDate).valueOf();
    const requestDate = new Date(launchDataWithDate.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("It should catch missing required properties", async function () {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("It should catch invalid launch date", async function () {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
