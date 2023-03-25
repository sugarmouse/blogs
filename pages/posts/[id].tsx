import { getPost, getPostIds } from '@/lib/posts/posts';
import { GetStaticPropsContext, NextPage } from 'next';

type Props = {
  post: PostWithContent;
};

const BlogContent: NextPage<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </>
  );
};

export default BlogContent;

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const post = await getPost(id);

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const idList = await getPostIds();

  idList.map((id) => {
    return {
      params: { id },
    };
  });

  return {
    paths: idList.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
}
