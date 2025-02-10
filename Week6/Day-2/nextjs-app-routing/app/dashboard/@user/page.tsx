const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

const userPage = async () => {
  await waitFor(6);
  return <h1>USER</h1>;
};

export default userPage;
