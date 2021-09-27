import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <div>
        <ul>
          {data.map((post) => (
            <li key={post.index}>{post.productName}</li>
          ))}
        </ul>
       </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const req = await fetch('http://localhost:3000/products.json');
  const data = await req.json();

  return {
      props: { data },
  }
}
