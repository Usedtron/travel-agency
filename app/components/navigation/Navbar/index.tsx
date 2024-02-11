import React from "react";
import Link from "next/link";
import Logo from "./Logo.png";
import Image from "next/image"; // Import next/image

type Props = {
  toggleSidebar: () => void;
};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-white text-orange-700 py-2 fixed w-full top-0 z-10 shadow-md h-6">
      <div className="navbar-start">
          <div className="flex items-center">
            <Image
              className="logoimage"
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
            />           
            <a href="/#home" className="btn btn-ghost text-xl">
              Para Aqueles que Amam Viajar
            </a>
          </div>
        
      </div>

      <div className="navbar-center hidden lg:flex">
        <a  href="/form" className="btn bg-orange-300 text-white btn-sm">Enviar Pedido</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">
          <li>
            <a href="/#destinos" className="hover:text-orange-500">
              Destinos
            </a>
          </li>
          <li>
            <a href="/#quemsomos" className="hover:text-orange-500">Quem Somos</a>
          </li>

          <li>
          <a href="/#testemunhos" className="hover:text-orange-500">Testemunhos</a>
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
