
import Link from 'next/link';
import NavLinksEnd from './NavLinksEnd';
import NavLinks from './NavLinks';
import CartIcon from './CartIcon';

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
            <div className="navbar-end mr-10">
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
