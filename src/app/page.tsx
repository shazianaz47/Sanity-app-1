import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { client } from "@/sanity/lib/client";
import Card from "./components/Card";



interface Item {
  _id: string;
  productName: string;
  price: number;
  description: string;
  image:any;
}

export default async function Home() {
  //Fetch Product data from sanity
  const data: Item[] = await client.fetch(`*[_type == 'product']`);
    console.log(data)
    
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item: Item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
