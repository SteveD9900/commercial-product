import Head from "next/head";
import { useEffect, useState } from "react";

import MainPanel from "../components/MainPanel/MainPanel";
import ToolBar from "../components/ToolBar/ToolBar";
import { GET_PRODUCTS } from "../store/actions/actionTypes";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import productHelper from "../utils/helper.js";

export default function Home({ data }) {
  const dispatch = useAppDispatch();
  const { filteredProducts } = useAppSelector((state) => state.products);
  const action = { type: GET_PRODUCTS, payload: data };
  const [ typeOptions ] = useState(productHelper.getAvailableTypes(data));

  useEffect(() => {
    dispatch(action);
  }, [data, dispatch]);

  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToolBar typeList={typeOptions} />
        <MainPanel products={filteredProducts} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/products.json");
  const data = await req.json();

  return {
    props: { data },
  };
}
