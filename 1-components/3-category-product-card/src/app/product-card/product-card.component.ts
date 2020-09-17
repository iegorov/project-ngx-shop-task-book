import {
  Component,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Input()
  public product: IProduct = {} as IProduct;

  @Output()
  public addToCart: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public goToProduct: EventEmitter<string> = new EventEmitter<string>();

  public addToBasket(): void {
    this.addToCart.emit('Вы добавили товар в корзину');
  }
  public redirectTo(): void {
    this.goToProduct.emit('Переход на компонент товара');
  }

}
