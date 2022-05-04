import { configureStore, combineReducers, createReducer } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import menuReducer from './features/menu'
import currentUserReducer from './features/currentUser'
import addMinisterReducer from './features/addMinister'
import ministersReducer from './features/getMinisters'
import ministerReducer from './features/getMinister'




const combinedReducers = combineReducers({
    menu: menuReducer,
    currentUser: currentUserReducer,
    addMinister: addMinisterReducer,
    ministers: ministersReducer,
    minister: ministerReducer,
});

const rootReducer = createReducer(combinedReducers(undefined, { type: "" }), (builder) => {
    builder
        .addCase("__NEXT_REDUX_WRAPPER_HYDRATE__", (state, action) => ({ ...state, ...action.payload }))
        .addDefaultCase(combinedReducers);
});

const initStore = () => {
    const store = configureStore({
        reducer: rootReducer,
    })
    return store
}

export const wrapper = createWrapper(initStore)