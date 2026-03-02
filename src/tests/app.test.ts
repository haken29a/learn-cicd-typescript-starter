import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

let headers: IncomingHttpHeaders = {
  "content-type": "application/json",
  "user-agent": "My-App/1.0",
  accept: "*/*",
};
headers["authorization"] = "test";
test("Testing to get API key", () => {
  expect(getAPIKey(headers)).toBeNull;
});
