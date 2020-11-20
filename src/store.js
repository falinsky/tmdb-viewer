import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = loadState();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
  });
});

export default store;
