import { CountActions, GetCountSuccess, GET_COUNT_SUCCESS, GET_COUNT_ERROR, GET_COUNT } from './count.actions';
import { ICountState } from './count.state.interface';

const initialState: ICountState = { error: false, isActive: false, value: 0 };

export const countReducer = (state: ICountState = initialState, action: CountActions): ICountState => {
  switch (action.type) {
    case GET_COUNT_SUCCESS:
      return { ...state, value: action.payload.count, isActive: false };
    case GET_COUNT_ERROR:
      return { ...state, error: true, isActive: false };
    case GET_COUNT:
      return { ...state, error: false, isActive: true };
    default:
      return state;
  }
};
