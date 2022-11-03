import { describe } from "@jest/globals";
import add from "../components/Sample";

describe("Sample is correct", () => {
  test("Add 1 + 2 equals 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
