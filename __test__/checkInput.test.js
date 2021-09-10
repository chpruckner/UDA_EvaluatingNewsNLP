import { checkInput } from "../src/client/js/checkInput";

describe("Testing URL validity checker", () => {
  test("Testing 'https://udacity.com' to be true", () => {
    expect(checkInput("https://udacity.com")).toBe(true);
  });

  test("Testing 'www.udacity.com' to be false", () => {
    expect(checkInput("www.udacity.com")).toBe(false);
  });
});
