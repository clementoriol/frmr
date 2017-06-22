export class ControllerError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "ControllerError";
  }
}
