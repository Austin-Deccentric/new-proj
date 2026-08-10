import React from 'react'
import {prodCard, TProdCard} from '@/component/blog/prodData'
import Link from 'next/link';



const Blog = () => {
  return (
    <div className="flex items-center justify-center gap-10 bg-zinc-50 font-sans">
     
    {prodCard.map((item: TProdCard) => (
      <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={item.img} alt={item.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${item.id}`} className="btn btn-primary">
              Read More
            </Link>

          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Blog
