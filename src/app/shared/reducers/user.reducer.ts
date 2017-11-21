import * as userActions from './user.actions';
import { User } from '../models/user.model';

export interface State {
  users: User[];
}

const initialState: State = {
  users: [],
};

export function reducer (state = initialState.users, action: userActions.Actions) {
    switch (action.type) {
      case userActions.ADD_USER:
        return [...state, action.payload];

      default:
        return state;
    }
  };
