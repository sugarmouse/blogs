import { GetStaticProps, NextPage } from 'next';
import { getPosts } from '@/lib/posts/posts';
import Link from 'next/link';

const PostsIndex: NextPage = (props) => {
  return (
    <>
      <h1>Pages Index</h1>
    </>
  );
};

export default PostsIndex;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
