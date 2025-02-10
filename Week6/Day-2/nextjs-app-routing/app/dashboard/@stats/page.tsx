const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

const userPage = async () => {
  await waitFor(12);
  return <h1>stats page</h1>;
};

export default userPage;
