import { ICountState } from './count/count.state.interface';

export interface IAppState {
  count: ICountState;
}

export const selectCount = (state: IAppState) => state.count;
