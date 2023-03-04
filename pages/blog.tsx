import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
  <section className='text-xl pt-1 flex items-center flex-col'>
    <h2 className='text-4xl my-4 mx-0 font-extrabold'>Blog</h2>
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
  </section>;
}
