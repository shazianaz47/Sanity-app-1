import { client } from "@/sanity/lib/client";
import Card from "./components/Card";



interface Item {
  _id:string,
  productName:string,
  price:number,
  description:string
  
}


export default async function Home() {
  const data:Item[] =await client.fetch(`*[_type == 'product']`);
   //console.log(data);

  return (
    
    <>
    
        {data.map((item:Item) => {
          return(
           <Card key={item._id} item={item}/>
          );
        })
        }
    </> 
  );
}
