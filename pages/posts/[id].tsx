import { getPost, getPostIds } from '@/lib/posts/posts';
import { GetStaticPropsContext, NextPage } from 'next';
import parse from 'html-react-parser';

type Props = {
  post: PostWithContent;
};

export default function BlogContent(props: Props) {
  const { post } = props;

  return (
    <>
      <h1>{post.title}</h1>
      <article>{parse(post.htmlContent)}</article>
    </>
  );
}

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
