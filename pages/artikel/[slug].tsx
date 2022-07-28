import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPost } from "../../lib/api";
import { NextPageWithLayout } from "../_app";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getPost(context.params?.slug);
  console.log(data);

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
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>NRH Trauma - {post.title}</title>
        <meta name="description" content="NRH Trauma Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </main>
    </div>
  );
};

Article.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Article;
