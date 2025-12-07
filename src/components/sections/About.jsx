import { siteContent } from '@/data/content';
import Button from '../ui/Button';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-urban-sand/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Foto da Fernanda */}
        <div className="relative">
           <div className="aspect-[3/4] rounded-t-full bg-urban-moss/10 relative overflow-hidden border-4 border-white shadow-xl">
             {/* Placeholder para foto */}
             <div className="w-full h-full bg-urban-clay flex items-center justify-center text-urban-bark/50">
               Foto Fernanda
             </div>
             {/* <Image src="/images/about/fernanda.webp" alt={siteContent.about.imageAlt} fill className="object-cover" /> */}
           </div>
           {/* Elemento decorativo */}
           <div className="absolute -bottom-6 -right-6 bg-urban-moss text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hidden md:block">
             <p className="font-serif font-bold text-xl">10+ Anos</p>
             <p className="text-xs opacity-80">de experiência</p>
           </div>
        </div>

        {/* Texto */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-urban-moss mb-6 font-bold">{siteContent.about.title}</h2>
          <p className="text-urban-bark/80 leading-relaxed mb-8 text-lg">
            {siteContent.about.description}
          </p>
          <Button variant="secondary" href={siteContent.header.whatsappLink}>
            Falar com a Fernanda
          </Button>
        </div>
      </div>
    </section>
  );
}
