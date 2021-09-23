import {Category} from "./category.model";

 export interface ProductInterFace{
    id? : number;
    name: string;
    description : string;
    picture: string;
    price : number;
    availableQuantity: number;
    creationDate?: Date;
    creationTime?: Date;
    category : Category;
}

export class Product implements ProductInterFace{
  public id? : number;
  public name : string;
  public description : string;
  public picture : string;
  public price : number;
  public availableQuantity: number;
  public creationDate : Date;
  public creationTime : Date;
  public category : Category;


    constructor(productCfg : ProductInterFace) {
      this.id = productCfg.id;
      this.name = productCfg.name;
      this.description = productCfg.name;
      this.picture = productCfg.picture;
      this.price = productCfg.price;
      this.availableQuantity = productCfg.availableQuantity;
      this.creationDate= productCfg.creationDate;
      this.creationTime = productCfg.creationTime;
      this.category = productCfg.category;


    }
}
