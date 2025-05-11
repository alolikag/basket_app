import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.scss']
})
export class BasketItemsComponent {
  items: string[] = ['Apple', 'Banana', 'Melon', 'Lime'];
  basket: Record<string, number> = {};
  totalPrice: string = '£0.00';
  itemPrice: Record<string, number> = {Apple: 35, Banana: 20, Melon: 50, Lime: 15};
  itemImages: Record<string, string> = {
    Apple: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
    Banana: 'https://cdn-icons-png.flaticon.com/512/590/590682.png',
    Melon: 'https://cdn-icons-png.flaticon.com/128/7315/7315500.png',
    Lime: 'https://cdn-icons-png.flaticon.com/128/1791/1791346.png'
  };

  originalPrice: string = '£0.00';
  discountedPrice: string = '£0.00';
  savings: string = '£0.00';

  constructor(private basketService: BasketService) {
    this.items.forEach(item => this.basket[item] = 0);
  }

  addItem(item: string): void {
    this.basket[item]++;
    this.updateTotalPrice();
  }

  removeItem(item: any): void {
    if (this.basket[item] && this.basket[item] > 0) {
      this.basket[item]--;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice(): void {
    const { originalTotal, discountedTotal } = this.basketService.calculateTotalPrice(this.basket);

    this.originalPrice = this.basketService.formatPrice(originalTotal);
    this.discountedPrice = this.basketService.formatPrice(discountedTotal);
    this.savings = this.basketService.formatPrice(originalTotal - discountedTotal);
  }
}
