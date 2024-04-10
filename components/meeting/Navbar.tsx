import Link from 'next/link';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-teal-950 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zchat
        </p>
      </Link>
      <div className="flex-between gap-5">

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
