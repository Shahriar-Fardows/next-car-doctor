import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {menuItems.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <li className="menu-title">
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">
                        <Image src="/assets/logo.svg" alt="Logo" width={50} height={50} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <li className="menu-title text-gray-800">
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/' className="btn border-[#FF3811] text-[#FF3811] ">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;