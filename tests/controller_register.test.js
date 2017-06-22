import Controllers from "lib/controller_registrer";
import { ControllerError } from "lib/errors";
import { flatten } from "lodash";

const noOop = () => {};

beforeEach(() => {
  Controllers.reset();
});

test("Controllers can be registered and run", () => {
  const mockedFn = jest.fn();
  const controllerA = () => mockedFn("a");
  const controllerB = () => mockedFn("b");
  const controllerGlobal = () => mockedFn("global");

  Controllers.registerGlobalController(controllerGlobal)
    .registerController("a", controllerA)
    .registerController("b", controllerB)
    .run();

  expect(flatten(mockedFn.mock.calls)).toEqual(["global", "a", "b"]);
  expect(mockedFn.mock.calls.length).toBe(3);
});

test("Controllers can be passed an order describing when to be run", () => {
  const mockedFn = jest.fn();
  const controllerA = () => mockedFn("a");
  const controllerB = () => mockedFn("b");
  const controllerC = () => mockedFn("c");
  const controllerD = () => mockedFn("d");
  const controllerE = () => mockedFn("e");
  const controllerGlobal = () => mockedFn("global");

  Controllers.registerController("a", controllerA, 3)
    .registerController("b", controllerB, 1)
    .registerController("c", controllerC, 7)
    .registerGlobalController(controllerGlobal)
    .registerController("d", controllerD)
    .registerController("e", controllerE, 2)
    .run();

  // Expect to be run in the following order
  expect(flatten(mockedFn.mock.calls)).toEqual([
    "global",
    "b",
    "e",
    "a",
    "c",
    "d",
  ]);
  expect(mockedFn.mock.calls.length).toBe(6);
});

test("A single controller can be run", () => {
  const mockedFn = jest.fn();
  const controllerA = () => mockedFn("controllerA");
  Controllers.registerController("a", controllerA).run("a");

  expect(flatten(mockedFn.mock.calls)).toEqual(["controllerA"]);
  expect(mockedFn.mock.calls.length).toBe(1);
});

/* Testing error handling */
test("registerController should throw when passing wrong arguments", () => {
  expect(() => Controllers.registerController(3, noOop)).toThrow();
  expect(() => Controllers.registerController("test", 3)).toThrow();
  expect(() => Controllers.registerController("test", noOop)).not.toThrow();
});

test("registerGlobalController should throw when passing wrong arguments", () => {
  expect(() => Controllers.registerGlobalController("test", noOop)).toThrow();
  expect(() => Controllers.registerGlobalController(noOop)).not.toThrow();
});
