import { urlFor } from '@/sanity/lib/image'
import React from 'react'

const Card = ({item} :any)=> {
  return (
    <div  key={item._id}>
      <div>
       <h1 className=" font-bold text-black">{item.productName}</h1>
              <p className=" font-bold"> $ {item.price}</p>
              <p> {item.description}</p>
       </div>
              <img src={urlFor(item.image).url()} alt={item.productName} className='w-[700] h-[500]'/>
             
    </div>
  )
}

export default Card