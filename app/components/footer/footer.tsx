import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Para Aqueles que Amam Viajar | RNAVT n.º 11.332
            <br />Rua do Movimento Republicano, 16, 1.º Esquerdo Parque Luso 2855-716 Corroios
          </p>
          <div className="flex space-x-4">
            <Link href="/legal-notice">
              <p className="text-xs">Aviso Legal</p>
            </Link>
            <Link href="/conditions">
              <p className="text-xs">Condições Gerais</p>
            </Link>
            <Link href="/cookies">
              <p className="text-xs">Política de Cookies</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-xs">Política de Privacidade</p>
            </Link>
            <Link href="/contacts">
              <p className="text-xs">Contatos</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
