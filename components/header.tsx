import Link from 'next/link';

const Header: React.FC = () => (
  <header className='flex justify-around items-center w-full py-5 bg-[#3d3d3d]'>
    <h3 className='font-bold md:text-3xl text-2xl text-[#DDAA00]'>
      Ryutaro Yagi
    </h3>
    <div className=''>
      <Link
        href='/'
        className='text-white md:text-2xl text-1xl hover:text-[#E90064] mr-9'
      >
        HOME
      </Link>
      <Link
        href='/blog'
        className='text-white md:text-2xl text-1xl hover:text-[#E90064] mr-9'
      >
        BLOG
      </Link>
      <Link
        href='/work'
        className='text-white md:text-2xl text-1xl hover:text-[#E90064]'
      >
        WORK
      </Link>
    </div>
  </header>
);

export default Header;
