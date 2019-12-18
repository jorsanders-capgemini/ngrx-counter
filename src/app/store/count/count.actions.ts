import { Action } from '@ngrx/store';

export const GET_COUNT = '[COUNT] GET';
export const GET_COUNT_ERROR = '[COUNT] GET_ERROR';
export const GET_COUNT_SUCCESS = '[COUNT] GET_SUCCESS';
export const INCREMENT_COUNT = '[COUNT] INCREMENT';

export class GetCount implements Action {
  public readonly type = GET_COUNT;
}

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

export class GetCountError implements Action {
  public readonly type = GET_COUNT_ERROR;
}

export class IncrementCount implements Action {
  public readonly type = INCREMENT_COUNT;
}

export type CountActions = GetCount | GetCountSuccess | GetCountError | IncrementCount;
