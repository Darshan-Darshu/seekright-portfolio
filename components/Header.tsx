function Header() {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8 h-[60px] md:h-[70px] lg:h-[80px] header-bg'>
      <img
        src='https://seekright.com/new/images/logo-r.png'
        alt='seekright-logo'
        className='w-24 md:w-36 lg:w-48 object-contain'
      />
      <ul className='flex items-center space-x-4 md:space-x-10 lg:space-x-20 text-gray-300 cursor-pointer  font-light text-base header-font uppercase'>
        <li className='hover:text-white'>About</li>
        <li className='hidden md:inline-block'>Product</li>
        <li className='hidden md:inline-block'>
          Deployment
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
