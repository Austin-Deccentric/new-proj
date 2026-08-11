import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Career", path: "/career" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const router = useRouter();

  const linkClass = (path: string) =>
    router.pathname === path
      ? "font-semibold text-primary"
      : "font-normal text-base-content";

  return (
    <div className="flex justify-between items-center sticky top-0 z-50">
      <div className="navbar bg-[#49BBBD] px-4 lg:px-32">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={linkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop auth buttons */}
        <div className="navbar-end gap-2">
          <button className="btn shadow-none border border-white bg-white text-[#5B5B5B] rounded-full w-[110px] h-[40px] hidden md:flex">
            Login
          </button>
          <button className="btn shadow-none border border-white/30 bg-white/30 text-white rounded-full w-[110px] h-[40px] hidden md:flex">
            Sign Up
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CiMenuBurger className="size-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] p-2 shadow
                       fixed left-0 right-0 w-screen max-w-screen
                       lg:hidden bg-[#49BBBD]"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={linkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <div className="flex gap-2 p-0">
                <button className="btn shadow-none border border-white bg-white text-[#5B5B5B] rounded-full w-[110px] h-[40px] md:hidden">
                  Login
                </button>
                <button className="btn shadow-none border border-white/30 bg-white/30 text-white rounded-full w-[110px] h-[40px] md:hidden">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;