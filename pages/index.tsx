import { GetServerSidePropsContext } from 'next';
import { getDatabaseConnection } from '@/lib/getDBConnection';
import { Post } from '@/src/entity/Post';
import Link from 'next/link';

type Props = {
  posts: PostType[];
};

export default function Home(props: Props) {
  const { posts } = props;

  return (
    <>
      <h1>This is MAIN PAGE</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div key={post.id}>{post.title}</div>
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const connection = await getDatabaseConnection();
  const posts = await connection.manager.find(Post);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
