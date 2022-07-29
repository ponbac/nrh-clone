import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPost } from "../../lib/api";
import { NextPageWithLayout } from "../_app";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getPost(context.params?.slug as string);
  //console.log(data);

  return {
    props: {
      post: data,
    },
    revalidate: 60 * 60,
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: any) => `/artikel/${node.slug}`) || [],
    fallback: true,
  };
}

const Article: NextPageWithLayout = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <div>Error!</div>;
  }

  if (router.isFallback && !post) {
    return <div>Loading...</div>;
  }

  if (post.title == null) {
    post.title = "";
  }

  return (
    <div>
      <Head>
        <title>NRH Trauma - {post.title}</title>
        <meta name="description" content="NRH Trauma Clone" />
        {/* <link rel="stylesheet" href="/styles/fusion-styles.css" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl text-center">{post.title}</h1>
          <Script src="/fa.js"></Script>
          <div
            className="p-4 lg:px-24"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
    </div>
  );
};

Article.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Article;
