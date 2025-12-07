import Image from 'next/image';
import { siteContent } from '@/data/content';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Fundo decorativo (Abstrato/Cor para carregar rápido antes da foto) */}
      <div className="absolute inset-0 bg-urban-sand z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center h-full">
        {/* Texto */}
        <div className="order-2 md:order-1 flex flex-col items-start gap-6 animate-in slide-in-from-left-10 duration-700">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-urban-moss leading-tight">
            {siteContent.hero.title}
          </h1>
          <p className="text-lg text-urban-bark/80 font-light max-w-md">
            {siteContent.hero.subtitle}
          </p>
          <Button href={siteContent.header.whatsappLink} target="_blank" className="mt-2">
            {siteContent.hero.cta}
          </Button>
        </div>

        {/* Imagem (Placeholder até você subir a foto real) */}
        <div className="order-1 md:order-2 relative w-full h-[50vh] md:h-full flex items-center justify-center">
            {/* Círculo decorativo atrás da imagem */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-urban-clay/30 rounded-full blur-3xl -z-10" />
            
            {/* Espaço para a foto hero-banner.webp */}
            <div className="relative w-full h-full max-h-[600px] rounded-b-[100px] md:rounded-bl-[200px] overflow-hidden shadow-2xl">
              {/* Usando uma div colorida enquanto não temos a imagem real na pasta public */}
              <div className="w-full h-full bg-urban-leaf/20 flex items-center justify-center text-urban-moss font-serif">
                 <span className="opacity-50">Foto Hero Banner Aqui</span>
                 {/* Quando tiver a foto, descomente a linha abaixo e remova este span */}
                 {/* <Image src="/images/hero-banner.webp" alt="Urban Jungle" fill className="object-cover" priority /> */}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
