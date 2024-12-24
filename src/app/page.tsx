import { client } from "@/sanity/lib/client";


interface Item {
  productName:string,
  price:number,
  description:string
  
}


export default async function Home() {
  const data:Item[] =await client.fetch(`*[_type == 'product']`);
  // console.log(data);

  return (
    <div>
      <section>
        {data.map((item:Item, i:number) => {
          return(
            <div className="font-bold gap-3 grid grid-cols-3" key={i}>
              <h1>{item.productName}</h1>
              <p className=" font-bold"> $ {item.price}</p>
              <p> {item.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
