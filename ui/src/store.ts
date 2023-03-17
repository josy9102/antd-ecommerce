/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import createReducer from './reducers';
// idea: https://www.pluralsight.com/guides/code-splitting-your-redux-application
const store: any = {
  ...configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== 'production',
  }),
  asyncReducers: {},
};

export default function createStore(): any {
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (asyncReducers: any) => {
    const newAsyncReducers = { ...store.asyncReducers, ...asyncReducers };
    store.replaceReducer(createReducer(newAsyncReducers));
  };

  //let init = false;
  /*store.startAllStores = async () => {
    if (init === true) return;
    init = true;
    let reducers = {};
    if (process.env.REACT_APP_FEATURE_ATSMESSAGES === 'true') {
      const atsMessagesReducers = (await import('./mfes/atsMessages/store'))
        .default;
      reducers = { ...reducers, ...atsMessagesReducers };
    }
    if (process.env.REACT_APP_FEATURE_FLIGHTLIST === 'true') {
      const flightListReducers = (await import('./mfes/flightList/store'))
        .default;
      reducers = { ...reducers, ...flightListReducers };
    }
    if (process.env.REACT_APP_FEATURE_FLIGHTHISTORY === 'true') {
      const flightHistoryReducers = (await import('./mfes/flightHistory/store'))
        .default;
      reducers = { ...reducers, ...flightHistoryReducers };
    }
    if (process.env.REACT_APP_FEATURE_MESSAGESLIST === 'true') {
      const messageListReducers = (await import('./mfes/messageList/store'))
        .default;
      reducers = { ...reducers, ...messageListReducers };
    }
    if (process.env.REACT_APP_FEATURE_NOTIFICATIONS === 'true') {
      const notificationReducers = (await import('./mfes/notifications/store'))
        .default;
      reducers = { ...reducers, ...notificationReducers };
    }
    if (process.env.REACT_APP_FEATURE_MESSAGES === 'true') {
      const messagesReducers = (await import('./mfes/messages/store')).default;
      reducers = { ...reducers, ...messagesReducers };
    }
    if (process.env.REACT_APP_FEATURE_TEMPLATES === 'true') {
      const templatesReducers = (await import('./mfes/templates/store'))
        .default;
      reducers = { ...reducers, ...templatesReducers };
    }
    store.replaceReducer(createReducer(reducers));
  };*/

  // Return the modified store
  return store;
}

export function getStore() {
  return store;
}/*

export type RootState = ReturnType<typeof store.getState>;*/
