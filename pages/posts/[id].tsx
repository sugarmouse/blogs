import { GetServerSideProps } from 'next';
import { getDatabaseConnection } from '@/lib/getDBConnection';
import { Post } from '@/src/entity/Post';

type Props = {
  post: PostType;
};

export default function BlogContent(props: Props) {
  const { post } = props;

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async (context) => {
  const connection = await getDatabaseConnection();
  const post = await connection.manager.findOne(Post, {
    where: {
      id: parseInt(context.params.id),
    },
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
};
