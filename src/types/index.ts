export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  categoryId: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  totalPrice: number;
}

export interface IOrder {
  id: number;
  createdDate: Date;
  products: ICartProduct[];
  productQuantity: number;
  totalPrice: number;
}