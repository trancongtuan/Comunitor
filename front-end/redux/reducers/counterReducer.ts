import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { SAGA_ACTION_SUCCESS } from "../saga/counterSaga";
import { INCREMENT_COUNTER } from "redux/actions/counterActions";

export interface State {
  page: string;
  count: number;
}

export const initialState: State = { page: "", count: 0 };

function rootReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case SAGA_ACTION_SUCCESS:
      return { ...state, page: action.data };
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}

export default rootReducer;
