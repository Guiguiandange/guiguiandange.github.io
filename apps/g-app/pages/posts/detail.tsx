import { Layout } from '../../components/Layout';
import Link from 'next/link';

export function PostDetail() {
  // TODO GCL : i18n
  return (
    <Layout title={'First Page'}>
      <div>
        <h1>First Page</h1>
      </div>
      <div>
        <Link href='/'>Home</Link>
      </div>
    </Layout>
  );
}

export default PostDetail;
