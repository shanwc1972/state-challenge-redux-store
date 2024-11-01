import { createStore } from 'redux';
import reducers from './reducers';

// Create a Redux store and export it as the default export
const store = createStore(reducers);

export default store;