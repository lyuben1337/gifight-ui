import { AxiosError } from "axios";

export class ApiError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static fromResponse(error: unknown): ApiError {
    if (error instanceof AxiosError) {
      const status = error.response?.status ?? 500;
      const data = error.response?.data ?? {};
      const code = data.code || "Api.UnknownError";
      const message = data.message || "An unknown error occurred";

      return new ApiError(message, code, status);
    }

    return this.unknown();
  }

  static unknown(): ApiError {
    return new ApiError(
      "An unexpected error occurred",
      "Api.UnknownError",
      500,
    );
  }
}
