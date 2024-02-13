import React from "react";
import Link from "next/link";
import Logo from "./Logo.png";
import Image from "next/image"; // Import next/image

type Props = {
  toggleSidebar: () => void;
};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-white text-orange-400 py-2 fixed w-full top-0 z-10 shadow-md h-6">
      <div className="w-3/6 flex justify-between ">
        <div className="flex items-center">
          <Image
            className="logoimage"
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
          <a
            href="/#home"
            className="btn btn-ghost text-sm md:text-xl font-bold"
          >
            PARA AQUELES QUE AMAM VIAJAR
          </a>
          <div className="lg:hidden navbar-end">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden navbar-center lg:flex">
        <a href="/form" className="btn bg-orange-300 text-white btn-sm">
          Enviar Pedido
        </a>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">
          <li>
            <a href="/#destinos" className="hover:text-orange-500">
              Destinos
            </a>
          </li>
          <li>
            <a href="/#quemsomos" className="hover:text-orange-500">
              Quem Somos
            </a>
          </li>

          <li>
            <a href="/#testemunhos" className="hover:text-orange-500">
              Testemunhos
            </a>
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
