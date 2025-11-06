import { Response } from "./response.types";

export const handleBoleanSuccess = <A>({
  data,
  message,
}: {
  data: A;
  message?: string;
}): Response<A> => {
  
  return {
    success: true,
    data,
    message,
    error: null,
  };
};


export const handleSuccess = <A>(data: A, message?: string): Response<A> => {
  return {
    success: true,
    data,
    message: message,
    error: null,
  };
};

export const handleSuccessWithTotalData = <A>(
  data: A,
  total: Number
): Response<A> => {
  return {
    success: true,
    total,
    data,
    error: null,
  };
};
