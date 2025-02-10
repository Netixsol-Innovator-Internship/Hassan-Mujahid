const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

const userPage = async () => {
  await waitFor(6);
  return <h1>USER</h1>; //This is the page that get's rendered automatically by NEXTJS App router when we are http://localhost:3000/dashboard
  //As we are using parallel routes in this case the path would not be http://localhost:3000/dashboard/user
};

export default userPage;
