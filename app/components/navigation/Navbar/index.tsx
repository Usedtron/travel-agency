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
      <div className="navbar-start ">
        <div className="flex items-center">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Image
            className="logoimage"
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <a href="/#home" className="btn btn-ghost text-base md:text-xl font-bold ">
            PARA AQUELES QUE AMAM VIAJAR
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex w-1/6">
        <details className="dropdown ">
          <summary className="btn bg-orange-400 text-white border-white btn-MD flex rounded xl:w-36 lg:w-36 p-2 lx:font-bold">RESERVAR ONLINE</summary>
          <ul className="p-2 shadow menu-vertical dropdown-content z-[1] bg-base-100 ">
            <li>
              {" "}
              <a
                href="/form"
                className="btn bg-gray-200 text-[#3CAFA0] border-white btn-sm flex rounded-none w-32"
              >
                ORÇAMENTO
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://paraaquelesqueamamviajar.traveltool.pt/"
                className="btn bg-orange-400 text-white border-white btn-sm flex rounded-none "
              >
                RESERVAR
              </a>
            </li>
            <li>
              {" "}
              <a
                href="/vouchers"
                className="btn bg-gray-200 text-[#3CAFA0] border-white btn-sm flex rounded-none w-32"
              >
                VOUCHER
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-end hidden lg:flex w-2/5">
        <ul className="menu menu-horizontal  text-gray-600">
          <li>
            <a href="/#destinos" className="hover:text-orange-500">
              Destinos
            </a>
          </li>
          <li>
            <a href="/#quemsomos" className="hover:text-orange-500 ">
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
