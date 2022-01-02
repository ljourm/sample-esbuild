import { add } from "./";

describe("add", () => {
  it("should return 2 when it gives 1,1", () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
  it("should return 15 when it gives 5,10", () => {
    const result = add(5, 10);
    expect(result).toBe(15);
  });
});
