import { GetStaticProps, NextPage } from 'next';
import getPosts from '@/lib/posts/posts';

type Props = {
  posts: Post[];
};

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <>
      <h1>Pages Index</h1>
      {posts.map((p) => (
        <div key={p.id}>{p.title}</div>
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
