import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const ADD_USER = '[User] Add User';

/**
 * Add Book to Collection Actions
 */
export class AddUserAction implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}


export type Actions =
  | AddUserAction;
