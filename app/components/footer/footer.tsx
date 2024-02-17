import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 p-6">
    <div className="container mx-auto justify-center space-x-3 flex flex-row md:m-2">
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
    </div>
    <div className="container mx-auto">
    <div className="text-xs flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
       <div className="flex flex-col md:flex-row space-x-4">
       <br />
        <Link href="/legal-notice">
          <p>Aviso Legal</p>
        </Link>
        <Link href="/conditions">
          <p>Condições Gerais</p>
        </Link>
        <Link href="/cookies">
          <p>Política de Cookies</p>
        </Link>
        <Link href="/privacy-policy">
          <p>Política de Privacidade</p>
        </Link>
        <Link href="/contacts">
          <p>Contatos</p>
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Para Aqueles que Amam Viajar |
        RNAVT n.º 11332
        <br />
        Rua do Movimento Republicano, 16, 1.º Esquerdo Parque Luso 2855-716
        Corroios
      </p>
     
    </div>
  </div>
</footer>

  );
};

export default Footer;
