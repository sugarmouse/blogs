import { GetServerSideProps } from 'next';

const NewPost = () => {
  return <div>New</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NewPost;
