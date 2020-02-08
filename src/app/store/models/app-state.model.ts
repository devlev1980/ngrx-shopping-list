import {ShoppingItem} from './shopping-item';

export interface AppStateModel {
  readonly shopping: Array<ShoppingItem>;
}
