type ProductImage = {
  src: string;
  alt: string;
};
type ProductItem = {
  href: string;
  title: string;
  description: string;
  thumbnail: ProductImage;
  productImage: ProductImage;
  discount: number;
  price: number;
  discountedPrice: number;
  totalPrice: number;
};

export const ProductItems: ProductItem[] = [
  {
    href: '',
    title: '',
    description: '',
    thumbnail: {
      src: '',
      alt: '',
    },
    productImage: {
      src: '',
      alt: '',
    },
    discount: 10,
    price: 15,
    discountedPrice: 1.5,
    totalPrice: 13.5,
  },
];
