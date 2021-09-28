import Head from 'next/head';
import MainPanel from "../components/MainPanel/MainPanel";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPanel products={data}/>
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
