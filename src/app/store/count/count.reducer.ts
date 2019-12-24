import { CountActions, GET_COUNT_SUCCESS, GET_COUNT_ERROR, GET_COUNT, INCREMENT_COUNT } from './count.actions';
import { ICountState } from './count.state.interface';

const initialState: ICountState = { error: null, isActive: false, value: 0 };

export const countReducer = (state: ICountState = initialState, action: CountActions): ICountState => {
  switch (action.type) {
    case GET_COUNT_SUCCESS:
      return { ...state, isActive: false, error: null, value: action.payload.count };
    case GET_COUNT_ERROR:
      return { ...state, isActive: false, error: action.error };
    case GET_COUNT:
      return { ...state, isActive: true, error: null };
    case INCREMENT_COUNT:
      return { ...state, value: ++state.value };
    default:
      return state;
  }
};
