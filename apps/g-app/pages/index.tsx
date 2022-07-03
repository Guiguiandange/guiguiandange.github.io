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
        <Link href='/posts'>Go To Posts</Link>
      </div>
      <div>
        <Link href='/posts/detail'>Go To Post Detail</Link>
      </div>
    </Layout>
  );
}

export default Index;
