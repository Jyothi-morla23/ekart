import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  public addToCart: number = 0;
  Product = {
    name: 'iPhone',
    price: 45000,
    color: 'black',
    discount: 10,
    inStock: 15,
    pImage: '/assets/images/iphoneimage.jpeg',
  };

  getDiscountPrice() {
    return (
      this.Product.price - (this.Product.price * this.Product.discount) / 100
    );
  }

  decreamentCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  increamentCartValue() {
    if (this.addToCart < this.Product.inStock) {
      this.addToCart++;
    }
  }
}
