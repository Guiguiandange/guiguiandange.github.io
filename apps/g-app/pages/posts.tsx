import { Layout } from '../components/Layout';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { replaceDatesWithTimestamp } from '../lib/lib';
import { getAllPosts } from '../collections/posts';


export const getServerSideProps: GetServerSideProps = async function() {
  const posts = await getAllPosts();
  return { props: { posts: replaceDatesWithTimestamp(posts) } };
};

export function Posts({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // TODO GCL : i18n, sub-title
  return (
    <Layout title={'Posts'}>
      <div>
        <span className="capitalize title">Posts</span>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id} className="bg-red-500 mt-4">
            <div>
              <span className="capitalize sub-title">{post.title}</span>
            </div>
            <div>
              <span>{post.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link href='/'><span className="capitalize link">Home</span></Link>
      </div>
    </Layout>
  );
}

export default Posts;
