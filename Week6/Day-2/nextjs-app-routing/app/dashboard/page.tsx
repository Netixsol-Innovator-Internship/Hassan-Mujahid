const DashboardPage = () => {
  async function sayHello() {
    "use server";
    console.log("Hello from NextJS severside!!");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <form action={sayHello}>
        <input name="email" type="email" placeholder="Email" />
        <button type="submit">submit</button>
      </form>
      ;
    </>
  );
};

export default DashboardPage;
