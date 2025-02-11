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
