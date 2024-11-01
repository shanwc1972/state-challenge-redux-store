import { createStore } from 'redux';

import { reducer } from './reducers';

// Create a Redux store and export it as the default export
const store = createStore(reducer);

export default store;