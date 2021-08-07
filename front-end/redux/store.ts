import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { TypeCount } from "./type";
import { createStore, combineReducers, applyMiddleware, StoreEnhancer, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import counterReducer, { INITIAL_COUNT } from "./reducers/counterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState {
  counter: TypeCount;
}

const INITIAL_STATE: AppState = {
  counter: INITIAL_COUNT,
};
const reducers = combineReducers({
  counter: counterReducer,
});

function* rootSaga() {
    // yield spawn(authWatcher);
    // yield spawn(contactSaga);
    // yield spawn(chatSaga);
  }

  export function configureStore(preloadedState = INITIAL_STATE) {
    const sagaMiddleware = createSagaMiddleware();
  
    const middlewares = [sagaMiddleware];
  
    const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  
    const enhancers: StoreEnhancer[] = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = compose(...enhancers);
  
    const store = createStore(reducers, preloadedState, composedEnhancers);
  
    sagaMiddleware.run(rootSaga);
  

    return store;
  }
