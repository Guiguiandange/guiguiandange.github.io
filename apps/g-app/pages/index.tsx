import Link from 'next/link';
import { Layout } from '../components/Layout';

export function Index() {
  // TODO GCL : i18n
  return (
    <Layout title='Welcome g-app'>
      <div>
        <h1>Welcome g-app</h1>
      </div>
      <div>
        <Link href='/posts/first'>Go To Post</Link>
      </div>
    </Layout>
  );
}

export default Index;
