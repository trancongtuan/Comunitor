import { TypeCount } from './../type';
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counterActions';

export const INITIAL_COUNT = {
    value: 0
}

const counterReducer = (state: TypeCount = INITIAL_COUNT, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;