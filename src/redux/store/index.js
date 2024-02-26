import { createStore } from 'redux';
import rootReducer from './reducer/index'; // You'll create this later

const store = createStore(rootReducer);

export default store;