import prodDetails from "@/pages/blog/[prodId]";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export interface ProductsResponse {
  products: Product[];
}
 

export type TProdCard = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
};

export const prodCard: TProdCard[] = [
  {
    id: 1,
    title: "Nike",
    description: "Nike is a global brand known for its athletic footwear, apparel, and equipment. It is recognized for its innovative designs and marketing strategies that appeal to athletes and sports enthusiasts worldwide.",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 100,
  },
  {
    id: 2,
    title: "Adidas",
    description: "Adidas is a German multinational corporation that designs and manufactures sports footwear, apparel, and accessories. It is one of the largest sportswear manufacturers in the world.",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 120
  },
  {
    id: 3,
    title: "Puma",
    description: "Puma is a German multinational company that designs and manufactures athletic and casual footwear, apparel, and accessories. It is known for its innovative products and collaborations with athletes and designers.",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 90
  }
]

