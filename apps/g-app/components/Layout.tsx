export function Layout({ children }) {
  // TODO GCL : i18n
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {children}
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}
