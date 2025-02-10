const DashboardPage = () => {
  async function sayHello() {
    "use server";
    console.log("Hello from NextJS severside!!");
  } //In this the functions cannot be passed directly to the client side components so we need to explicitly render them on server side by explicilty setting "use server" inside of it, so that browser cannot access it and any sensitive information do not go to the client side

  return (
    <>
      <h1>Dashboard</h1>
      <form action={sayHello}>
        <input name="email" type="email" placeholder="Email" />
        <button type="submit">submit</button>
      </form>
      ;
    </> //In this the action inside the form is setting an ActionId for the fucntion and from the client side it sends the POST request on the same route with the data, so that the function can be triggered from the server side
  );
};

export default DashboardPage;
