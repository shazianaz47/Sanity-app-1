import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

// Define the type for the item prop
interface ItemType {
  _id: string;
  productName: string;
  price: number;
  description: string;
  image: any; // If the image type is more specific, replace `any` with the correct type.
}

const Card = ({item} :{item:ItemType})=> {
  const imageUrl = urlFor(item.image).width(700).height(500).url();
  return (
    <div  key={item._id}className="border p-4 rounded-md shadow-md" >
      <div>
       <h1 className=" font-bold text-black text-lg">{item.productName}</h1>
       <p className=" font-bold text-gray-700"> $ {item.price}</p>
      <p> {item.description}</p>
       </div>
       {imageUrl ? (
              <Image
               src={urlFor(item.image).url()} 
               alt={item.productName}
               height={500}
               width={700}
               layout='responsive'
                className='w-full h-auto object-cover mt-4'
                />
       ):(
        <p>Image not available</p>
       )}
             
    </div>
  )
}

export default Card