import {ActionReducerMap} from '@ngrx/store';
// import { localStorageSync } from 'ngrx-store-localstorage';

// App Reducers for ngRx
import * as userReducer from './user.reducer';
// import {auth} from './auth.reduce';

// create reducers obj for compose function
// const reducers = {
// //   auth: auth,
//   session,
//   userProfile,
//   userProfilesLoaded
// };


// compose added to localStorageSync and reducers
// localStorageSync uses a config object
// const productionReducer: ActionReducer<any> = compose(
// 	localStorageSync({ keys: ['session'], rehydrate:true }),
// 	combineReducers)(reducers);


// export function APP_REDUCERS(state: any, action: any) {
//     return productionReducer(state, action);
// }

export interface State {
  users: userReducer.State;
}

export const APP_REDUCERS: ActionReducerMap<any> = {
  users: userReducer.reducer,
};
