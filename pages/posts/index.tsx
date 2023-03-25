import { NextPage } from 'next';
import { usePosts } from '@/hooks/usePosts';

const PostsIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePosts();

  return (
    <>
      <h1>Pages Index</h1>
      {isLoading ? (
        <h2>加载中 </h2>
      ) : isEmpty ? (
        <div>列表为空</div>
      ) : (
        posts.map((post) => <div key={post.id}>{post.title}</div>)
      )}
    </>
  );
};

export default PostsIndex;
