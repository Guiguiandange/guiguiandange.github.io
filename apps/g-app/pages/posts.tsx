import { Layout } from '../components/Layout';
import Link from 'next/link';

export function Posts() {
  // TODO GCL : i18n
  return (
    <Layout title={'Posts'}>
      <div>
        <h1>Posts</h1>
      </div>
      <div>
        <Link href='/'>Home</Link>
      </div>
    </Layout>
  );
}

export default Posts;
