import React from 'react'
import { useRouter } from 'next/router'
import {prodCard, TProdCard} from '@/component/blog/prodData';

const ProdDetails = () => {
  const router = useRouter();
  const { prodId } = router.query;
  const product = prodCard.find((item: TProdCard) => item.id === Number(prodId));

  console.log("Router Object:", router.query);
  return (
    <div>
      <h1>{prodId}</h1>
      <div className="flex">
        <img src={product?.img} alt={product?.title} />
        <div className="ml-4">
         <h1 className="text-2xl font-bold">{product?.title}</h1>
          
        </div>
      </div>

  
    </div>
  )
}

export default ProdDetails
