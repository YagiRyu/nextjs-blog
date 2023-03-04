import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-xl flex items-center flex-col justify-center'>
        <p className='font-bold'>
          I'm a software engineer in Japan\uD83C\uDDEF\uD83C\uDDF5
        </p>
        <p className='font-bold'>
          I mainly develop Android applications and I'm also interested in
          developing iOS applications\uD83E\uDDD1\uD83C\uDFFB
        </p>
        <p className='font-bold'>
          I love Kotlin and mobile app development\uD83D\uDC9A
        </p>
      </section>
      <section className='flex items-center justify-center mt-7'>
        <a href='https://twitter.com/yagiryuuu'>
          <Image
            src='/images/twitter.png'
            alt='Twitter Logo'
            className='mr-10'
            width={30}
            height={30}
          />
        </a>
        <a href='https://github.com/YagiRyu'>
          <Image
            src='/images/github.png'
            alt='Github Logo'
            className='mr-10'
            width={30}
            height={30}
          />
        </a>
        <a href='https://zenn.dev/yagiryuuu'>
          <Image
            src='/images/zenn.png'
            alt='zenn Logo'
            className='mr-10'
            width={30}
            height={30}
          />
        </a>
      </section>
    </Layout>
  );
}
