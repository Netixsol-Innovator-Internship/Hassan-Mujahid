# Grocery App

This project is a Grocery App Schema, built using Mongoose. It provides schemas to manage different entities such as Buyers, Owners, Stores, Products, Orders, and Images. These schemas define the structure of the data and ensure seamless interaction with a MongoDB database.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Schemas](#schemas)
   - [Buyer Schema](#buyer-schema)
   - [Order Schema](#order-schema)
   - [Owner Schema](#owner-schema)
   - [Product Schema](#product-schema)
   - [Store Schema](#store-schema)
   - [Image Schema](#image-schema)

---

## Features

- **Buyer Management**: Buyers can register, manage their carts, and place orders.
- **Owner Management**: Owners can register, manage stores, and add products.
- **Store Management**: Each store is linked to an owner and can have multiple products.
- **Order Management**: Orders contain items from the buyer's cart and are linked to a specific buyer.
- **Product Management**: Products are linked to stores, can have associated images, and can be managed by the store owner.
- **Image Management**: Images are stored with details like path, size, and MIME type and are linked to products.

---

## Schemas

### Buyer Schema

```javascript
const buyerSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: {
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
  },
  createdAt: { type: Date, default: Date.now },
});
```

- **Fields**:
  - `name`: Buyer's name (required).
  - `email`: Unique email address (required).
  - `password`: Buyer's password (required).
  - `cart`: Contains product items and their quantities.
  - `createdAt`: Timestamp of buyer creation.

---

### Order Schema

```javascript
const orderSchema = Schema({
  items: [
    {
      product: {
        type: Object,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Completed", "Canceled"],
  },
  user: {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Buyer",
    },
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
```

- **Fields**:
  - `items`: Array of products and their quantities.
  - `status`: Status of the order (`Pending` by default, options are `Pending`, `Completed`, and `Canceled`).
  - `user`: Contains buyer's ID and a reference to the user.
  - `createdAt`: Timestamp of order creation.

---

### Owner Schema

```javascript
const ownerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  storeId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

- **Fields**:
  - `name`: Owner's name (required).
  - `email`: Unique email address (required).
  - `password`: Owner's password (required).
  - `storeId`: Reference to the store owned by this owner.
  - `createdAt`: Timestamp of owner creation.

---

### Product Schema

```javascript
const productSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  storeId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  Image: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Image",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
```

- **Fields**:
  - `name`: Product name (required).
  - `price`: Product price (required).
  - `stock`: Quantity available in stock (required).
  - `storeId`: Reference to the store selling this product.
  - `Image`: Reference to the image associated with this product.
  - `createdAt`: Timestamp of product creation.

---

### Store Schema

```javascript
const storeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  ownerId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Owner",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

- **Fields**:
  - `name`: Store name (required).
  - `address`: Store location (required).
  - `ownerId`: Reference to the owner of this store.
  - `createdAt`: Timestamp of store creation.

---

### Image Schema

```javascript
const imageSchema = new Schema({
  originalName: {
    type: String, // Original file name
    required: true,
  },
  path: {
    type: String, // File path or URL
    required: true,
  },
  ContentType: {
    type: String, // MIME type (e.g., "image/jpeg")
    required: true,
  },
  size: {
    type: Number, // File size in bytes
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imageSchema);
```

- **Fields**:
  - `originalName`: The original name of the uploaded file (required).
  - `path`: File path or URL where the image is stored (required).
  - `ContentType`: The MIME type of the image (e.g., "image/jpeg") (required).
  - `size`: Size of the file in bytes.
  - `createdAt`: Timestamp of image creation.

---
