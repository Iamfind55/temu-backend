import { Response } from "./response.types";

export const handleError = (
  message: string,
  code: number,
  details?: any
): Response<null> => {

  return {
    success: false,
    error: {
      message,
      code,
      details,
    },
    data: null,
  };
};
