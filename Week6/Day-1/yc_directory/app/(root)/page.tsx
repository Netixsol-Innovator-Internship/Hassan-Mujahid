import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

type Query = {
  searchParams: Promise<{ query?: string }>;
};
export default async function Home({ searchParams }: Query) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Adrian aggresste" },
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading !max-w-3xl">
          Pitch your startups, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="card_grid">
          {posts?.map((post: StartupCardType, index: number) => {
            return <StartupCard key={post._id} post={post} />;
          })}
        </ul>
      </section>
    </>
  );
}
