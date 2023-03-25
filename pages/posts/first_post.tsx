import Head from 'next/head';

export default function X() {
  return (
    <>
      <h1>First Page</h1>

      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </>
  );
}
