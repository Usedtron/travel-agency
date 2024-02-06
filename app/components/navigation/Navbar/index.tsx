import React from "react";
import Link from "next/link";
import Logo from "./Logo.png";
import Image from "next/image"; // Import next/image

type Props = {
  toggleSidebar: () => void;
};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-white text-orange-700 py-2 fixed w-full top-0 z-10 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-dvw"
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 11</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
          <div className="flex items-center">
            <img
              className="logoimage"
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
            {/*<Image src={Logo} alt="Logo" width={150} height={150} />*/}

            <a className="btn btn-ghost text-xl">
              Para Aqueles que Amam Viajar
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <a  href="/form" className="btn bg-orange-300 text-white btn-sm">Enviar Pedido</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">
          <li>
            <a href="/#quemsomos" className="hover:text-orange-500">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="/#testemunhos" className="hover:text-orange-500">Testemunhos</a>
          </li>

          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/contacts" className="hover:text-orange-500">
              Contactos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
