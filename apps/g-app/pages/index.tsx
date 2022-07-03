import Link from 'next/link';
import { Layout } from '../components/Layout';

export function Index() {
  // TODO GCL : i18n
  return (
    <Layout title='Welcome g-app'>
      <div>
        <span className="capitalize title">welcome g-app</span>
      </div>
      <div>
        <Link href='/posts'><span className="capitalize link">go to posts</span></Link>
      </div>
      <div>
        <Link href='/posts/detail'><span className="capitalize link">go to post detail</span></Link>
      </div>
    </Layout>
  );
}

export default Index;
