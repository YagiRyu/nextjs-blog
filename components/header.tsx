import Link from 'next/link';

const Header: React.FC = () => (
  <header className='flex justify-around w-full pt-5'>
    <Link
      href='/'
      className='text-white font-bold md:text-3xl text-2xl hover:text-[#E90064]'
    >
      HOME
    </Link>
    <Link
      href='/about'
      className='text-white font-bold md:text-3xl text-2xl hover:text-[#E90064]'
    >
      ABOUT
    </Link>
    <Link
      href='/blog'
      className='text-white font-bold md:text-3xl text-2xl hover:text-[#E90064]'
    >
      BLOG
    </Link>
    <Link
      href='/work'
      className='text-white font-bold md:text-3xl text-2xl hover:text-[#E90064]'
    >
      WORK
    </Link>
  </header>
);

export default Header;
