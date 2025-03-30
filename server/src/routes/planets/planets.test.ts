import request from "supertest";
import { expect, test } from "@jest/globals";

import app from "../../app.ts";
import { loadPlanetsData } from "../../model/planets.ts";

describe("Test GET /planets", function () {
  beforeAll(async function () {
    await loadPlanetsData();
  });

  const habitablePlanet = {
    kepler_name: "Kepler-1652 b",
    koi_disposition: "CONFIRMED",
  };

  test("It should return 200 status code", async function () {
    const response = await request(app)
      .get("/planets")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("It should return a list of habitable planets", async function () {
    const response = await request(app)
      .get("/planets")
      .expect("Content-Type", /json/);

    expect(response.body[0]).toMatchObject(habitablePlanet);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
