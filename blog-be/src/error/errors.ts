import { ErrorType, BaseErrorType } from "./types";

class BaseError extends Error {
  name: string;
  date: Date;
  stack?: any;

  constructor(name: string, message: string | undefined, date: Date, stack: any) {
    super(message);
    this.name = name;
    this.date = date;
    this.stack = stack;
  }
}

export class NotFoundError extends BaseError {
  constructor({ message, stack }: ErrorType) {
    super("Not Found", message, new Date(), stack);
  }
}

export class MissingParameterError extends BaseError {
  constructor({ message, stack }: ErrorType) {
    super("Parameter Missing", message, new Date(), stack);
  }
}

export class InvalidParameterError extends BaseError {
  constructor({ message, stack }: ErrorType) {
    super("Invalid Parameter", message, new Date(), stack);
  }
}
