"use client";
import React from "react";
// import {prodCard, TProdCard} from '@/component/blog/prodData';
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsResponse } from "@/component/blog/prodData";
import Image from "next/image";

export const baseUrl = "https://dummyjson.com";

const Blog = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get<ProductsResponse>(`${baseUrl}/products`);
      return response.data.products;
    },
  });

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 py-20 w-full items-center justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex w-96 flex-col gap-4">
          <div className="skeleton h-48 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        ))}
      </div>
    );


  if (isError)
    return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-full items-center justify-center">
        
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              <p>Failed to fetch data</p>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center gap-10 bg-blue-500 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-full items-center justify-center">
        {products?.slice(0, 5)?.map((product) => (
          <div key={product.id}>
            <div className="card bg-base-100 w-96 shadow-sm">
              <Link href={`/blog/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover rounded-t-lg"
                  priority={true}
                />
              </Link>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <Link href={`/blog/${product.id}`}>Buy Now</Link>
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
