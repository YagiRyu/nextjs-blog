import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <section className='text-xl pt-1 flex items-center flex-col'>
        <h2 className='text-6xl my-9 mx-0 font-extrabold text-white'>Blog</h2>
        <ul className='p-0 m-0 list-none'>
          {allPostsData.map(({ id, title, date }) => (
            <li className='mt-0 mx-0 mb-5' key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className='text-[#666]'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
