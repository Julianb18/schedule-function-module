const rewire = require("rewire");

const scheduleModule = rewire("../ScheduleFunctions.js");

const storedFunctions = scheduleModule.__get__("storedFunctions");
const functionResults = scheduleModule.__get__("functionResults");

describe("ScheduleFunction Module", () => {
  // given example functions that should work
  const sum = jest.fn((a, b, c) => a + b + c);
  const subtract = jest.fn((a, b) => a - b);
  const multiply = jest.fn((a, b) => a * b);
  const concat = jest.fn((a, b, c) => `${a}${b}${c}`);

  describe("StoreFuncsAndArgs function", () => {
    test("stores given arguments correctly", () => {
      scheduleModule.StoreFuncsAndArgs(sum, 1, 2, 3);
      scheduleModule.StoreFuncsAndArgs(subtract, 2, 1);
      scheduleModule.StoreFuncsAndArgs(multiply, 2, 2);
      scheduleModule.StoreFuncsAndArgs(concat, 1, 2, 3);

      expect(storedFunctions).toEqual([
        { storedArgs: [1, 2, 3], storedFunc: sum },
        { storedArgs: [2, 1], storedFunc: subtract },
        { storedArgs: [2, 2], storedFunc: multiply },
        { storedArgs: [1, 2, 3], storedFunc: concat },
      ]);
    });
  });

  describe("CallStoredFunctions function", () => {
    test("executes the stored functions with their stored arguments in the order that they were stored", () => {
      scheduleModule.CallStoredFunctions(storedFunctions);

      expect(functionResults).toEqual([6, 1, 4, "123"]);
    });
  });
});
