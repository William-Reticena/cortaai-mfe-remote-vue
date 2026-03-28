import type { AxiosError } from 'axios';

export type DefaultApiError = AxiosError<ApiErrorResponse>;

type ApiErrorResponse = {
  message: string;
  status: number;
  info: string;
};
