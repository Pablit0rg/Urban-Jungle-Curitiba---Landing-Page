import { Merriweather, Poppins } from "next/font/google";
import "../styles/globals.css"; // << Caminho corrigido com ../

// Configurando as fontes otimizadas do Next.js
const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Urban Jungle Curitiba | Consultoria Botânica",
  description: "Transforme sua casa em Curitiba com cactos e suculentas. Consultoria especializada, paisagismo e manutenção por Fernanda.",
  keywords: ["paisagismo curitiba", "cactos", "suculentas", "consultoria botânica", "plantas ornamentais"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} ${poppins.variable}`}>
      <body className="bg-urban-sand text-urban-bark font-sans antialiased selection:bg-urban-moss selection:text-white">
        {/* O Header e o Footer já estão sendo chamados no page.js, mas idealmente ficariam aqui */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
