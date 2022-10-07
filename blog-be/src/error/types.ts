export type BaseErrorType = {
  name?: string;
  message: string | undefined;
  date: Date;
  stack?: any;
};

export type ErrorType = Pick<BaseErrorType, "message" | "stack">;
