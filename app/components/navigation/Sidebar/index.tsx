import Image from "next/image";
import Link from "next/link";
import React from "react";
type SidebarProps = {
  toggleSidebar: () => void;
  isOpen: boolean;
};

const Sidebar = (props: SidebarProps) => {
  const { isOpen, toggleSidebar } = props;
  return (
    <div className="flex items-center">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white bg-opacity-85 backdrop-blur-sm shadow-lg z-50 transform transition-transform duration-300 overflow-visible ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Sidebar content */}
        <ul className="mt-16 flex flex-col items-center gap-4">
          <div className=" w-64 flex justify-center mb-10">
            <Image
              className="logoside"
              src="/logo2.png"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>
          <a
            href="/form"
            className="btn bg-orange-400 text-white btn-sm flex rounded-none w-64"
          >
            Enviar Pedido
          </a>
          <li>
            <a href="/#destinos" className="">
              Destinos
            </a>
          </li>
          <li>
            <a href="/#quemsomos" className="">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="/#testemunhos" className="">
              Testemunhos
            </a>
          </li>
          <li className="mb-10">
            <a href="/contacts" className="">
              Contactos
            </a>
          </li>
          <li className="border-t-2 border-gray-100 w-64 flex justify-center ">
            <div className="mt-20">
              <h2 className="">Marcia Santos</h2>
              <div className="flex flex-row gap-2">
                <Link
                  target="_blank"
                  href="https://wa.me/351966420212?text=Ola%20Para Aqueles que Amam Viajar,%20tenho%20uma%20consulta%20..."
                >
                  <p>
                    <Image
                      src="/whatsapp.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100072803705563"
                  target="_blank"
                >
                  <p>
                    <Image
                      src="/facebook.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
                <Link
                  href="https://www.instagram.com/paraaquelesqueamamviajar/"
                  target="_blank"
                >
                  <p>
                    <Image
                      src="/instagram.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
              </div>
            </div>
          </li>
          <li className="">
            <div className="">
              <h2>Marta Silva</h2>
              <div className="flex flex-row gap-2">
                <Link
                  target="_blank"
                  href="https://wa.me/351966296251?text=Ola%20Para Aqueles que Amam Viajar,%20tenho%20uma%20consulta%20..."
                >
                  <p>
                    <Image
                      src="/whatsapp.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100072803705563"
                  target="_blank"
                >
                  <p>
                    <Image
                      src="/facebook.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
                <Link
                  href="https://www.instagram.com/para_aqueles_que_amam_viajar?igsh=MXI1NnU0NW1haW02eA=="
                  target="_blank"
                >
                  <p>
                    <Image
                      src="/instagram.svg"
                      alt="Turismo de Portugal"
                      width={30}
                      height={30}
                    />
                  </p>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden flex justify-end">
        <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
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
  );
};

export default Sidebar;
