import { createStore } from 'redux'
import {shopReducer} from '../reducer/reducer'
 let store = createStore(shopReducer)

 export default store