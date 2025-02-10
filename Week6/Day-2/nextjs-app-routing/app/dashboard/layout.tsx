export default function Layout({
  children,
  stats,
  user,
}: {
  children: React.ReactNode;
  stats: any;
  user: any;
}) {
  return (
    <>
      <div>
        <nav>
          <h1>NAVBAR</h1>
        </nav>
        <div>
          {children}
          {user}
          {stats}
        </div>
      </div>
    </> //This is the layout page the wraps all the rendered pages inside the dashboard folder and can be used to add common elements to all the pages
  );
}
