import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { docsifyReducer, docsifySlice } from './docsify/reducer'
import { localifyReducer, localifySlice } from './localify/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    docsify: docsifyReducer,
    localify: localifyReducer,
  })

  const preloadedState = {
    app: appSlice,
    docsify: docsifySlice,
    localify: localifySlice,
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