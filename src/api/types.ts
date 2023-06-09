export interface IBaseRequestQueries {
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface IBaseRequestBody {
  [key: string]: any;
}

export interface IBaseResponse<T> {
  data: T;
}

export interface IBaseErrorResponse {
  code: string;
  status: number;
  message: string;
}
