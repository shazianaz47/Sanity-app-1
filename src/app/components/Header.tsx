// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">H.W COLLECTIONS BLOGS</h1>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/shop">SHOP All</Link>
          <Link href="/rings">RINGS</Link>
          <Link href="/necklace">NECKLACE</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
