import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { allDetailsReducer } from "../reducers/allDetailsReducer"

const configureStore=()=>{
    const store=createStore(combineReducers({
        allDetails:allDetailsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore