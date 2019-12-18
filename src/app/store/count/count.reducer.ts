import { CountActions, GET_COUNT_SUCCESS, GET_COUNT_ERROR, GET_COUNT } from './count.actions';
import { ICountState } from './count.state.interface';

const initialState: ICountState = { error: false, isActive: false, value: 0 };

export const countReducer = (state: ICountState = initialState, action: CountActions): ICountState => {
  switch (action.type) {
    case GET_COUNT_SUCCESS:
      return { ...state, isActive: false, error: false, value: action.payload.count };
    case GET_COUNT_ERROR:
      return { ...state, isActive: false, error: true, value: undefined };
    case GET_COUNT:
      return { ...state, isActive: true, error: false, value: undefined };
    default:
      return state;
  }
};
