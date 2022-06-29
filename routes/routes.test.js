import request from "supertest";
import {describe, test, expect} from "@jest/globals"
import app from "../app.js"


test("checking GET method response is 200 OK", async function () {
    const response = await request(app).get("/user_table")

    expect(response.statusCode).toBe(200)
})