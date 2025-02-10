# Next.js Dynamic Routes Project

## Overview

This is a Next.js project that explores **Dynamic Routes** functionality. The project consists of a **products** route that displays a list of products, and a **dynamic route** that renders a dummy product details page based on the product ID.

## Project Structure

```
/app
  ├── products
  │     ├── page.tsx
  │     ├── [productId]
  │     │     ├── page.tsx
```

### Products Route (`/products`)

- The `products/page.tsx` file contains an `<h1>` element displaying **Products**.
- It includes a `<ul>` element containing links to various product detail pages.
- Clicking on a product link navigates to a **dynamic route** using the product ID.

### Dynamic Route (`/products/[id]`)

- The **dynamic folder** `[id]` inside the `products` folder contains a `page.tsx` file.
- This page dynamically fetches the `id` from the URL and displays a dummy product details page.

### Example Code

#### `products/page.tsx`

```tsx
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
```

#### `products/[productId]/page.tsx`

```tsx
const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params;

  return (
    <div className="w-full flex justify-center mt-6">
      <h1 className="font-bold text-3xl">Product {productId}</h1>
    </div>
  );
};

export default page;
```

## How It Works

1. Navigate to `/products`, and the **Products page** is displayed with a list of product links.
2. Clicking on a product link routes to `/products/[productId]`, where `[productId]` is dynamically replaced with the product ID.
3. The **Product Detail Page** extracts the `productId` from the URL and displays the respective product information.


## Conclusion

This project demonstrates how to:

- Use **Dynamic Routes** in Next.js.
- Extract route parameters using `params`.
- Navigate between pages using `Link`.


