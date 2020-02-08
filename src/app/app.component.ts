import {Component, OnInit} from '@angular/core';
import {AppStateModel} from './store/models/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ShoppingItem} from './store/models/shopping-item';
import {AddItemAction, RemoveItemAction} from './store/actions/shopping-actions';
import {v4 as uuid} from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItem$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};

  constructor(private store: Store<AppStateModel>) {

  }

  ngOnInit(): void {
    this.shoppingItem$ = this.store.select(store => store.shopping);

    // setTimeout(() => {
    //   this.onAddItem();
    // }, 3000);
  }

  onAddItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }

  onRemoveItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
