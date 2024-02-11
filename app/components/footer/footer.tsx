import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 p-10 ">
      <div className="container mx-auto justify-center space-x-3  flex flex-row">
        <Link href="https://www.livroreclamacoes.pt/Inicio/" target="_blank">
          <p>
            <Image
              src="/reclamacao.png"
              alt="Livro de reclamações"
              width={80}
              height={80}
            />
          </p>
        </Link>
        <Link
          href="http://www.turismodeportugal.pt/pt/Paginas/homepage.aspx"
          target="_blank"
        >
          <p>
            <Image
              src="/turismo.png"
              alt="Turismo de Portugal"
              width={80}
              height={80}
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
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Para Aqueles que Amam Viajar |
            RNAVT n.º 11.332
            <br />
            Rua do Movimento Republicano, 16, 1.º Esquerdo Parque Luso 2855-716
            Corroios
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
