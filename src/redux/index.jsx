import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { docsifyReducer, docsifySlice } from './docsify/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    docsify: docsifyReducer,
  })

  const preloadedState = {
    app: appSlice,
    docsify: docsifySlice,
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