
import Image from 'next/image';
import Link from 'next/link';
import NavLinksEnd from './navbar/NavLinksEnd';
import NavLinks from './navbar/NavLinks';

const Navbar = () => {
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <NavLinks />
                </div>
                <Link href='/' className="btn btn-ghost text-xl">Gadgitz</Link>
            </div>
            <NavLinksEnd />
            <div className="navbar-end">
                <div className='avatar'>
                    <Image
                        className='rounded-full'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                        width={20}
                        height={20}
                        alt='profile'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
