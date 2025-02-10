# Next.js App Router Project

## Overview

This is a Next.js project that explores the **App Router** functionality, particularly focusing on parallel routes and server actions. The project consists of a **dashboard** route that contains a form utilizing a server action and two parallel routes (**user** and **stats**) that handle errors and loading states.

## Project Structure

```
/app
  ├── dashboard
  │     ├── page.tsx
  │     ├── layout.tsx
  │     ├── user
  │     │     ├── page.tsx
  │     │     ├── loading.tsx
  │     │     ├── error.tsx
  │     ├── stats
  │     │     ├── page.tsx
  │     │     ├── loading.tsx
  │     │     ├── error.tsx
```

### Dashboard Route (`/dashboard`)

- The `dashboard/page.tsx` file contains an `<h1>` element displaying **Dashboard**.
- It also includes a `<form>` element that submits a request to a **server action** using the `use server` function.
- The server function logs **"Hello from NEXTJS server!"** in the console when the form is submitted.

### Server Action

```tsx
async function sayHello() {
    "use server";
    console.log("Hello from NextJS severside!!");
  }
```

- This function is passed as the `action` prop in the form inside `dashboard/page.tsx`.

### Parallel Routes (`user` and `stats`)

- The **User Route** (`/dashboard/user`) and **Stats Route** (`/dashboard/stats`) are set up as **parallel routes**.
- Each of these routes has:
  - `page.tsx` - Renders the main content for the respective route.
  - `loading.tsx` - Displays a loading indicator when the route is being fetched.
  - `error.tsx` - Handles errors that occur while rendering the route.

### Dashboard Layout (`dashboard/layout.tsx`)

- This file extracts `user` and `stats` from `props.children` and renders them inside the dashboard layout.
- This allows both routes to load **independently and in parallel** inside the dashboard.

## How It Works

1. Navigate to `/dashboard`, and the **Dashboard page** is displayed with a form.
2. Submitting the form triggers the **server action**, logging **"Hello from NEXTJS server!"**.
3. The **User and Stats routes** load in parallel, each with their own loading and error handling.
4. If there's an error in either route, the respective `error.tsx` will handle it.
5. If the data is still loading, the respective `loading.tsx` will show a loading state.

## Conclusion

This project demonstrates how to:

- Use the **App Router** in Next.js.
- Implement **server actions**.
- Set up **parallel routes**.
- Handle **loading** and **error** states for routes.
