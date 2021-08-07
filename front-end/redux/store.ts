import { createWrapper} from 'next-redux-wrapper';
import { TypeCount } from "./type";
import { createStore, combineReducers, applyMiddleware, StoreEnhancer, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import counterReducer, { initialState } from "./reducers/counterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootCounter } from './saga/counterSaga'

export interface AppState {
  counter: TypeCount;
  
}

const INITIAL_STATE: AppState = {
  counter: initialState,
};
const reducers = combineReducers({
  counter: counterReducer,
});

function* rootSaga() {
    yield spawn(rootCounter);
    // yield spawn(contactSaga);
    // yield spawn(chatSaga);
  }

  function configureStore(preloadedState = INITIAL_STATE) {
    const sagaMiddleware = createSagaMiddleware();
  
    const middlewares = [sagaMiddleware];
  
    const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  
    const enhancers: StoreEnhancer[] = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = compose(...enhancers);
  
    const store = createStore(reducers, preloadedState, composedEnhancers);
  
    sagaMiddleware.run(rootSaga);
  

    return store;
  }
  export const wrapper = createWrapper(configureStore as any);
