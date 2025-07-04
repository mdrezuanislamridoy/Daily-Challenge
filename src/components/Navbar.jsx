import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 relative">
      <h2 className="text-gray-700 font-semibold text-3xl">RR_PK</h2>
      <ul className="gap-4 hidden md:flex">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`font-medium px-2 py-1 rounded transition-colors duration-200 ${
                path === link.path
                  ? "text-gray-600 bg-gray-300"
                  : "text-gray-700 hover:text-gray-600 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {!isSignedIn ? (
          <button
            className=" bg-blue-950 rounded-full cursor-pointer text-white px-4 py-1 "
            onClick={() => openSignIn()}
          >
            Sign In
          </button>
        ) : (
          <UserButton />
        )}
      </ul>
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsShowNav(!isShowNav)}
      >
        {isShowNav ? (
          <FontAwesomeIcon icon={faClose} className="text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        )}
      </button>

      {isShowNav && (
        <ul className="absolute top-16 left-0 w-full bg-gray-700 text-white p-4 md:hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setIsShowNav(false)}
                className={`block p-2 rounded transition-colors duration-200 ${
                  path === link.path
                    ? "bg-gray-300 text-gray-700"
                    : "hover:bg-gray-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {!isSignedIn ? (
            <button
              className="text-white pxs-2 bg-blue-950 rounded-full  px-4 py-1  cursor-pointer"
              onClick={() => openSignIn()}
            >
              Sign In
            </button>
          ) : (
            <UserButton />
          )}
        </ul>
      )}
    </div>
  );
}
