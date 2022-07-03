import Link from 'next/link';

export function Index() {
  // TODO GCL : i18n
  return (
    <>
      <div>
        <h1>Welcome g-app</h1>
      </div>
      <div>
        <Link href='/posts/first'>Go To Post</Link>
      </div>
    </>
  );
}

export default Index;
