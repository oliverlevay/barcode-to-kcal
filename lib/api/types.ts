type ApiResult<T> = {
  data?: T;
  message?: string;
  error?: string;
  status?: number;
};