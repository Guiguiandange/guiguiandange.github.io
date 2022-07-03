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
  // TODO GCL : i18n
  return (
    <Layout title={'Posts'}>
      <div>
        <h1>Posts</h1>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <span>{post.content}</span>
          </div>
        ))}
      </div>
      <div>
        <Link href='/'>Home</Link>
      </div>
    </Layout>
  );
}

export default Posts;
