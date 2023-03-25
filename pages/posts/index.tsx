import { GetStaticProps, NextPage } from 'next';
import { getPosts } from '@/lib/posts/posts';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <>
      <h1>Pages Index</h1>
      {posts.map((p) => (
        <Link key={p.id} href={`/posts/${p.id}`}>
          <div>{p.title}</div>
        </Link>
      ))}
    </>
  );
};

export default PostsIndex;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};
