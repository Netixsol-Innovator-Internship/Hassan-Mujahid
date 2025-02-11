# Next.js Projects Collection

## Overview

This repository contains three Next.js projects designed to explore **App Router**, **Dynamic Routes**, **Server Actions**, **Caching**, and **Data Fetching**. Each project focuses on a different aspect of Next.js functionality, providing a hands-on learning experience.

## Projects

### 1. Next.js App Router Project

#### **Features:**

- Implements the **App Router** for routing management.
- Includes a **Dashboard** route (`/dashboard`) with a form that submits a request using a **server action**.
- Uses **parallel routes** (`/dashboard/user` and `/dashboard/stats`) to load content independently.
- Handles **loading** and **error** states within parallel routes.

#### **Key Files:**

- `/app/dashboard/page.tsx` – Displays dashboard content and form submission.
- `/app/dashboard/layout.tsx` – Extracts and renders parallel routes.
- `/app/dashboard/user` and `/app/dashboard/stats` – Contains `page.tsx`, `loading.tsx`, and `error.tsx` for independent loading.

### 2. Next.js Dynamic Routes Project

#### **Features:**

- Demonstrates **Dynamic Routes** using `[id]` in `/products/[id]`.
- Displays a **Products** list (`/products`) with links to product details pages.
- Extracts the product ID from the URL and dynamically renders content.

#### **Key Files:**

- `/app/products/page.tsx` – Displays the product list with links.
- `/app/products/[id]/page.tsx` – Dynamically renders product details based on the ID.

### 3. Next.js Dynamic Routes, Caching, and Data Fetching Project

#### **Features:**

- Uses **Dynamic Routes** in `/repo/[name]` to display repository details.
- Fetches and displays repository information based on the dynamic route parameter.
- Dynamically updates **page metadata (title)** based on the repository name.

#### **Key Files:**

- `/app/about/page.tsx` – Displays a simple About page.
- `/app/repo/[name]/page.tsx` – Extracts repository name from the URL and updates metadata dynamically.

## Conclusion

Each project in this repository explores different aspects of Next.js:

- **App Router & Parallel Routes**
- **Dynamic Routing & Server Actions**
- **Metadata Handling & Caching**
