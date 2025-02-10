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
    </>
  );
}
