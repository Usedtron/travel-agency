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
        className={`fixed top-0 left-0 h-full w-64 bg-white bg-opacity-85 backdrop-blur-sm shadow-lg z-50 transform transition-transform duration-300 ${
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
          <li className="">
            <div>
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
          <li>
            <div>
              <h2>Marta Silva</h2>
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
          <li>
            <a href="/#destinos" className="hover:">
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
        <a
          href="/form"
          className="btn bg-orange-300 text-white btn-sm flex rounded-none"
        >
          Enviar Pedido
        </a>
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
