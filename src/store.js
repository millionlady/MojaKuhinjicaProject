import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducer
import rootReducer from './root-reducer';

const enhancers = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f);

export function configureStore() {

    let store = createStore(rootReducer, {}, enhancers);

    return { store };
}
