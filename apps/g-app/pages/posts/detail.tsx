import { Layout } from '../../components/Layout';
import Link from 'next/link';

function PostDetail() {
  // TODO GCL : i18n
  return (
    <Layout title={'First Page'}>
      <div>
        <span className="capitalize title">First Page</span>
      </div>
      <div>
        <Link href='/'><span className="capitalize link">Home</span></Link>
      </div>
    </Layout>
  );
}

export default PostDetail;
