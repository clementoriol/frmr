import { ControllerError } from "./errors";

// HashTable containing controllers name/handler key/value pari
let controllersTable = new Map();

// Constants
const defaultControllerOrder = 9999;

/* Private functions */
const _sortTable = (
  [, { order: orderA = defaultControllerOrder }],
  [, { order: orderB = defaultControllerOrder }]
) => {
  return orderA - orderB;
};

const _addToTable = (controllerName, { order, handler }) => {
  controllersTable.set(controllerName, { order, handler });
  if (typeof order !== undefined) {
    controllersTable = new Map(
      [...controllersTable.entries()].sort(_sortTable)
    );
  }
  console.log(controllersTable);
};

const _isCorrectPage = () => true;

const _runAll = () => {
  for (let [controllerName, { handler }] of controllersTable) {
    if (_isCorrectPage(controllerName)) {
      handler();
    }
  }
};

/* Public functions */
const registerController = (controllerName, handler, order) => {
  if (typeof controllerName !== "string") {
    throw new ControllerError("argument controllerName should be a string");
  }

  if (typeof handler !== "function") {
    throw new ControllerError("argument handler should be a function");
  }

  if (controllersTable.get(controllerName)) {
    throw new ControllerError(
      `you're trying to register more than one "${controllerName}" controller`
    );
  }

  _addToTable(controllerName, { order, handler });
  return publicAPI;
};

const registerGlobalController = handler => {
  if (typeof controllerName === "string") {
    throw new ControllerError(
      "registerGlobalController takes a function as only argument"
    );
  }

  registerController("global", handler, 0);
  return publicAPI;
};

const reset = () => {
  controllersTable = new Map();
  return publicAPI;
};

const run = controllerName => {
  if (!controllerName) {
    _runAll();
  } else {
    try {
      const { handler } = controllersTable.get(controllerName);
      handler();
    } catch (e) {
      throw new ControllerError(
        `${controllerName} does not exists, cannot be run.`
      );
    }
  }
};

const publicAPI = {
  registerController,
  registerGlobalController,
  reset,
  run,
};

export default publicAPI;
