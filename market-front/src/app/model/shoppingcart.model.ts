import {Product} from "./product.model";

export interface ShoppingcartInterface {
  id?: number;
  product: Product;
  quantity: number;

}
  export class ShoppingCart implements ShoppingcartInterface{
    public  id?: number;
    public  product: Product;
    public  quantity: number;


    constructor(shopCfg : ShoppingcartInterface) {
      this.id = shopCfg.id;
      this.product = shopCfg.product;
      this.quantity = shopCfg.quantity;

    }


  }
