# Next.js Dynamic Routes, Caching, and Data Fetching Project

## Overview

This Next.js project explores **Dynamic Routes**, **Caching**, and **Data Fetching**. The project consists of an **About** page and a **dynamic repo details page** that updates metadata dynamically based on the repository name entered in the URL.

## Project Structure

```
/app
  ├── about
  │     ├── page.tsx
  ├── repo
  │     ├── [name]
  │     │     ├── page.tsx
```

### About Route (`/about`)

- The `about/page.tsx` file contains an `<h1>` element displaying **About Page**.

### Dynamic Route for Repositories (`/repo/[name]`)

- The `repo/[name]/page.tsx` file dynamically fetches and displays the repository name from the URL parameters.
- The page updates the **title in metadata** dynamically based on the repository name entered.

### Example Code

#### `about/page.tsx`

```tsx
export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

#### `repo/[name]/page.tsx`

```tsx
type Repository = {
  full_name: string;
};

const getRepo = async (name: string): Promise<Repository> => {
  const res = await fetch(`https://api.github.com/repos/vercel/${name}`);
  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { name: string };
}) => {
  const { name } = params;
  const { full_name } = await getRepo(name);
  return {
    title: full_name,
  };
};

const page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  const repo = await getRepo(name);
  return <h1>Name: {repo.full_name}</h1>;
};

export default page;
```

## How It Works

1. Navigate to `/about`, and the **About page** is displayed.
2. Navigate to `/repo/[name]`, replacing `[name]` with a repository name (e.g., `/repo/next.js`).
3. The **Repo Detail Page** extracts the `name` from the URL and displays it dynamically.
4. The **page metadata (title)** updates dynamically to reflect the repository name.

## Conclusion

This project demonstrates how to:

- Implement **Dynamic Routes** in Next.js.
- Use **Metadata API** for dynamic page titles.
- Fetch data dynamically from URL parameters.

This approach enhances **SEO** and improves the **user experience** by dynamically updating content and metadata based on the page context.
