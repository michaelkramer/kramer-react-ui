import classNames from "classnames";

describe("ExampleComponent", () => {
  it("is truthy", () => {
    const a = classNames("something", "anotherthing");

    expect(a).toHaveLength(22);
  });
});
