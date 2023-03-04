import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Ryutaro Yagi';
export const siteTitle = 'Ryutaro Yagi';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className='flex items-center flex-col justify-center px-4 py-0 mb-24 mx-auto text-white h-screen'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='flex items-center flex-col'>
        {home ? (
          <>
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
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/sun.jpg'
                className='rounded-t-full rounded-b-full'
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className='text-2xl my-4 mx-0'>
              <Link href='/' className='text-inherit'>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 mx-0 mb-0'>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
}
