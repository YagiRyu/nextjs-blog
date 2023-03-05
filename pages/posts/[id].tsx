import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='mx-7 pt-9'>
        <h1 className='text-4xl font-bold tracking-tighter my-4 mx-0 text-[#DDAA00]'>
          {postData.title}
        </h1>
        <div className='text-[#666]'>
          <Date dateString={postData.date} />
        </div>
        <div
          className='mt-9'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <Link href='/blog' className='mt-9 text-bold text-2xl'>
        ← Back
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
