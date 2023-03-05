import Link from 'next/link';
import Layout from '../components/layout';

const Custom404 = () => {
  return (
    <div className='flex items-center flex-col justify-center px-4 py-0 mb-24 mx-auto text-white h-screen'>
      <h1 className='text-white text-7xl'>Page not found.....\uD83E\uDD72</h1>
      <Link href='/' className='mt-5 text-2xl'>
        Back to home
      </Link>
    </div>
  );
};

export default Custom404;
