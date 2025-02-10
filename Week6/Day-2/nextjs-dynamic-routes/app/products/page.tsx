import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-6">
      <h1 className="font-bold text-3xl text-center">Products</h1>
      <ul className="flex gap-4 mt-4 justify-center w-full">
        <Link href={"/products/1"} className="hover:underline">
          <li>Product 1</li>
        </Link>
        <Link href={"/products/2"} className="hover:underline">
          <li>Product 2</li>
        </Link>
        <Link href={"/products/3"} className="hover:underline">
          <li>Product 3</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProductPage;
