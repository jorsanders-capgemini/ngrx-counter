import { Action } from '@ngrx/store';

export const GET_COUNT = '[COUNT] GET';
export const GET_COUNT_ERROR = '[COUNT] GET_ERROR';
export const GET_COUNT_SUCCESS = '[COUNT] GET_SUCCESS';

/** Action to get the count from an API */
export class GetCount implements Action {
  public readonly type = GET_COUNT;
}

/** Action to indicate getting the count is success */
export class GetCountSuccess implements Action {
  public readonly type = GET_COUNT_SUCCESS;
  public readonly payload: {
    count: number;
  };
  constructor(count: number) {
    this.payload = {
      count
    };
  }
}

/** Action to indicate the getting of count failed */
export class GetCountError implements Action {
  public readonly type = GET_COUNT_ERROR;
}

export type CountActions = GetCount | GetCountSuccess | GetCountError;
