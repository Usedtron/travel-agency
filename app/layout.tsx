import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Para aqueles que amam Viajar",
  description: "Para aqueles que amam Viajar",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <head><link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="tipo_contenido" httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <title>Entre Consulte e Reserva a sua Viagem Para Aqueles que Amam Viajar</title>
          <meta name="description" content="PARA AQUELES QUE AMAM VIAJAR" />
          
          <meta name="keywords" content="Vigem, Reservas, Para Aqueles que Amam Viajar, agência de viagens, Traveltool, voos low cost, ofertas low cost, viagens, ofertas, reservas, pacotes, voos, cruzeiros, hotéis, férias, turismo, barato, promoções, económicas, viagens, oferta, reserva, pacote, voo, cruzeiro, hotel , promoção, económico, barato, preços baixos" />
          {/* Open Graph */}
          <meta property="og:title" content="Entre Consulte e Reserva a sua Viagem Para Aqueles que Amam Viajar" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.paraaquelesqueamamviajar.pt/" />
          <meta property="og:site_name" content="Para Aqueles que Amam Viajar" />
          <meta property="og:description" content="PARA AQUELES QUE AMAM VIAJAR" />
          <meta property="fb:app_id" content="" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Entre Consulte e Reserva a sua Viagem Para Aqueles que Amam Viajar" />
          <meta name="twitter:description" content="PARA AQUELES QUE AMAM VIAJAR" />
          <meta name="twitter:site" content="http://www.paraaquelesqueamamviajar.pt/" />
          {/* Additional Meta Data */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
      <body className={inter.className}>
      <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}