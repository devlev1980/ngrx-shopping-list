import {ShoppingItem} from '../models/shopping-item';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping-actions';

const initialState: Array<ShoppingItem> = [
  {
    id: '7415dfe5-562d-154t-a667-08547fgt4j4k4',
    name: 'IMac'
  },
  {
    id: '7420dfe5-562d-154r-a668-08547fgt4j4k4',
    name: 'IPad Pro'
  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case  ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
