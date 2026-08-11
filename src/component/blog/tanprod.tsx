// import React from 'react'
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const baseUrl = "https://dummyjson.com";
// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// const Blog = () => {
//   const { data: products, isLoading, isError } = useQuery({
//     queryKey: ['prodCard'],
//     queryFn: async () => {
//       const response = await axios.get(`${baseUrl}/products`);
//       console.log(response.data.products);
//       return response.data.products as Product[]; 
//     }
//   });

//   if (isLoading) return <div>Loading fake products...</div>;
//   if (isError) return <div>Failed to fetch data</div>;

//   return (
//     <div>
//       {products?.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const baseUrl = "https://dummyjson.com";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  thumbnail: string;
}

const Blog = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["prodCard"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/products`);
      return response.data.products as Product[];
    },
  });

  if (isLoading)
    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-base-100 shadow-sm">
              <div className="skeleton h-48 w-full rounded-t-2xl" />
              <div className="space-y-3 p-5">
                <div className="skeleton h-4 w-2/3" />
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );

  if (isError)
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center">
        <p className="text-lg font-semibold text-error">
          We couldn&apos;t load the products.
        </p>
        <p className="mt-1 text-sm text-base-content/60">
          Check your connection and try again.
        </p>
      </section>
    );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-base-content">
          Featured <span className="text-[#49BBBD]">Products</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-base-content/60">
          Hand-picked items fetched live, cached, and kept fresh by TanStack
          Query.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl bg-base-100 shadow-sm ring-1 ring-base-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden bg-base-200">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.discountPercentage > 10 && (
                <span className="absolute left-3 top-3 rounded-full bg-[#49BBBD] px-3 py-1 text-xs font-semibold text-white shadow">
                  -{Math.round(product.discountPercentage)}%
                </span>
              )}
            </div>

            <div className="p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-[#49BBBD]">
                {product.category}
              </span>

              <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-base-content">
                {product.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-sm text-base-content/60">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-base-content">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-amber-400">★</span>
                  <span className="font-medium text-base-content/80">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              <button className="btn mt-4 w-full rounded-full border-none bg-[#49BBBD] text-white shadow-none hover:bg-[#3aa9ab]">
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;