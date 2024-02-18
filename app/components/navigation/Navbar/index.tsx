"use client";
import Link from "next/link";
import Logo from "./Logo.png";
import Image from "next/image"; // Import next/image
import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-white text-orange-500 py-2 fixed w-full top-0 z-10 shadow-md h-6">
      <div className="navbar-start">
        <div className="flex items-center">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Image
            className="logoimage"
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <a href="/#home" className="btn btn-ghost text-base md:text-xl font-bold">
            PARA AQUELES QUE AMAM VIAJAR
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <a href="/form" className="btn bg-orange-400 text-white btn-sm border-white">
          ORÇAMENTO
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
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
