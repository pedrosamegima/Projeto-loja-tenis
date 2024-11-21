import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Air 270', price: 50.0, image_url: './nike270.png', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Nike Air max', price: 50.0, image_url: './nikeAir.png', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Nike Air Force', price: 50.0, image_url: './nikeForce.png', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
