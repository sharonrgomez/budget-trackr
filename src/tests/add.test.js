const add = (a, b) => a + b;
const greeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two given numbers", () => {
    const result = add(5, 6);
    expect(result).toBe(11);
});

test("should generate greeting from name", () => {
    const result = greeting("Juan");
    expect(result).toBe("Hello Juan!");
});

test("should generate greeting when no name given", () => {
    const result = greeting();
    expect(result).toBe("Hello Anonymous!");
});