import { AxiosError } from 'axios';
import type { DefaultApiError } from '@/shared/dtos/global/DefaultApiError';

export class GenericUtils {
  static getFirstLetter(name: string): string {
    return name.charAt(0);
  }

  static getErrorObject(error: DefaultApiError | Error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data?.message || 'Erro inesperado.',
        status: error.response?.data?.status || error.status || 500,
        info: error.response?.data?.info || 'Sem informações adicionais.',
      };
    }

    return {
      message: error.message || 'Erro inesperado.',
      status: 500,
      info: 'Sem informações adicionais.',
    };
  }
}
