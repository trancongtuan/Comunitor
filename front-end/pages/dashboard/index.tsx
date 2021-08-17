import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import Loading from "@components/common/loading";
import { Layout } from "@components/Layout/Default";
import { InferGetStaticPropsType } from "next";
export default function DashBoard({name}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    console.log('name', name)
  }, [])
  return (
    <Fragment>
      <h1>My Homepage</h1>
      <Image
        src={"/icon-512x512.png"}
        alt="Picture of the author"
        width={200}
        height={200}
        layout="fixed"
        quality="85"
      />
      <p>Welcome to my homepage!</p>
    </Fragment>
  );
}

DashBoard.Layout = Layout;

export async function getStaticProps() {
  return {
    props: {
      name: process.env.NEXT_PUBLIC_ANALYTICS_ID
    }
  }
}
