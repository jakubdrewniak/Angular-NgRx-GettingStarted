import * as fromRoot from '../../state/app.state'
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user';

export interface State extends fromRoot.State {
  user: UserState;
}
export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export function reducer(state = initialState, action): UserState {
  switch (action.type) {

    case 'TOGGLE_MASK':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
