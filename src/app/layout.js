import { Merriweather, Poppins } from "next/font/google";
import "./../styles/globals.css"; // Note o caminho relativo, ajuste se necessário

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
        {/* Aqui virá o Header no futuro */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        {/* Aqui virá o Footer no futuro */}
      </body>
    </html>
  );
}
