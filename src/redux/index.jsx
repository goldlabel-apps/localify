import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { individualReducer, individualSlice } from './individual/reducer'
import { mapboxReducer, mapboxSlice } from './mapbox/reducer'
import { authReducer, authSlice } from './auth/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    individual: individualReducer,
    mapbox: mapboxReducer,
    auth: authReducer,
  })

  const preloadedState = {
    app: appSlice,
    individual: individualSlice,
    mapbox: mapboxSlice,
    auth: authSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore