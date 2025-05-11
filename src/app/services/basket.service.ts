import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  itemPrice: any = {Apple: 35, Banana: 20, Melon: 50, Lime: 15};

  constructor() { } 

  calculateTotalPrice(items: Record<string, number>) {
    const counts: Record<string, number> = {};
  
    let originalTotal = 0;
    let discountedTotal = 0;
  
    Object.entries(items).forEach(([item, count]) => {

       const unitPrice = this.itemPrice[item];

      const originalPrice = count * unitPrice;
      let discountedPrice = originalPrice;

      switch (item) {
        case 'Melon':
         discountedPrice = Math.ceil(count / 2) * unitPrice;
          break;
        case 'Lime':
          discountedPrice = (count - Math.floor(count / 3)) * unitPrice;
          break;
        default:
          // total += count * (this.itemPrice[item] || 0);
      }
      originalTotal += originalPrice;
      discountedTotal += discountedPrice;
    });
  
    return { originalTotal, discountedTotal };
  }

  formatPrice(total: number): string {
    return `£${(total / 100).toFixed(2)}`;
  }
}
