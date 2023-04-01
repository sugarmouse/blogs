import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import { UAParser } from 'ua-parser-js';
import { getDatabaseConnection } from '@/lib/getDBConnection';
import { Post } from '@/src/entity/Post';

type Props = {
  posts: PostType[];
};

export default function Home(props: Props) {
  const { posts } = props;

  return (
    <>
      <main className={styles.main}>
        <h1>This is MAIN PAGE</h1>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </main>
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
