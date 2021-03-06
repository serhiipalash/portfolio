/*
 *
 * Configure Store
 *
 */

import { combineReducers, createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import thunkMiddleware from 'redux-thunk'
// import loggerMiddleware from '@/app/middlewares/logger'

import appReducer from '@/app/reducer'
import { routerReducer } from 'preact-router-redux'

const rootReducer = combineReducers({
  app: appReducer,
  projects: (state = {}) => state,
  routing: routerReducer,
})

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export const configureStore = initialState => {
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunkMiddleware
      // ,loggerMiddleware
    )
  )

  return createStore(rootReducer, initialState, enhancer)
}
