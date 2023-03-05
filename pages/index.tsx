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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-xl flex items-center flex-col justify-center mt-11'>
        <Image
          priority
          src='/images/sun.jpg'
          className='rounded-t-full rounded-b-full'
          height={200}
          width={200}
          alt=''
        />
        <h1 className='text-[#E90064] md:text-5xl font-extrabold tracking-tighter mt-4 mx-0 mb-8 text-3xl'>
          Hi! I'm Ryutaro Yagi👋
        </h1>
        <p className='font-bold'>
          I'm a software engineer in Japan\uD83C\uDDEF\uD83C\uDDF5
        </p>
        <p className='font-bold'>
          I mainly develop Android applications\uD83E\uDDD1\uD83C\uDFFB
        </p>
        <p className='font-bold'>
          I'm interested in cross-platform application development👀
        </p>
        <div className='mt-7 text-sm'>
          <h3 className='text-3xl mb-3 text-[#DDAA00] text-center'>Career</h3>
          <p className='md:text-base'>
            2001{' '}
            <span className='ml-5 md:text-lg text-base'>Born in Nagasaki.</span>
          </p>
          <p className='md:text-base'>
            2020{' '}
            <span className='ml-5 md:text-lg text-base'>
              Graduated from Nagasaki Nihon University High School.
            </span>
          </p>
          <p className='md:text-base'>
            2020{' '}
            <span className='ml-5 md:text-lg text-base'>
              Entered Nihon University.
            </span>
          </p>
          <p className='md:text-base'>
            2021 <span className='ml-5 md:text-lg text-base'>42Tokyo</span>
          </p>
          <p className='md:text-base'>
            2021{' '}
            <span className='ml-5 md:text-lg text-base'>
              Android engineer at ALC, Inc.
            </span>
          </p>
          <p className='md:text-base'>
            2022{' '}
            <span className='ml-5 md:text-lg text-base'>
              Android Engineer at CyberAgent Inc. (AbemaTV Inc.)
            </span>
          </p>
        </div>
        <div className='mt-9 text-sm'>
          <h3 className='text-3xl mb-3 text-[#DDAA00] text-center'>Personal</h3>
          <p className='md:text-base'>
            Hobby{' '}
            <span className='ml-5 md:text-lg text-base'>
              Watching dramas (especially Korean ones) and listening to K-POP🇰🇷
            </span>
          </p>
          <p className='md:text-base'>
            Develop{' '}
            <span className='ml-5 md:text-lg text-base'>
              Kotlin, Swift, C, TypeScript
            </span>
          </p>
        </div>
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
