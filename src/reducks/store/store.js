import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';


import {ItemsReducer} from '../items/reducers';
import { CartsReducer } from '../carts/reducers';

export default function createStore(){
    return legacy_createStore(
        combineReducers({
            items: ItemsReducer,
            carts: CartsReducer,
        }),
        composeWithDevTools(
            applyMiddleware(
              
                thunk
            ),
        )
    )
}
