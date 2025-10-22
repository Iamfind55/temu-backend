export interface Error {
  message: string;
  code?: number;
  details?: any;
}

export interface Response<T> {
  success: boolean;
  total?: Number | null;
  data?: T;
  message?: string;
  error?: Error | null;
}
