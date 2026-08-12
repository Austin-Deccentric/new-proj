import React from 'react'
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import {prodCard, Product, TProdCard} from '@/component/blog/prodData';

const ProdDetails = () => {
  const router = useRouter();
  const { prodId } = router.query;
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData<Product[]>(['products'])?.find((_product) => _product.id === Number(prodId) );


  console.log("Router Object:", router.query);
  return (product &&
    <div>
      <div className="flex">
        <img
         src={product.thumbnail} 
         alt={product.title} 
         />
        <div className="ml-4">
         <h1 className="text-2xl font-bold">{product.title}</h1>
          
        </div>
      </div>

  
    </div>
  )
}

export default ProdDetails
