import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input()
  product = {};

  @Output()
  increment = new EventEmitter<void>();
  @Output()
  decrement = new EventEmitter<void>();

  public decrementProductInCart() {}
  public incrementProductInCart() {
    this.increment.emit();
  }
}
