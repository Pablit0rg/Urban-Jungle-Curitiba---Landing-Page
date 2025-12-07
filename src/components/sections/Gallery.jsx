import { siteContent } from '@/data/content';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-urban-moss text-urban-sand">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 font-bold">{siteContent.gallery.title}</h2>
            <p className="opacity-80">{siteContent.gallery.description}</p>
          </div>
        </div>

        {/* Grid estilo "Masonry" (Mosaico) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
           {/* Item Grande */}
           <div className="col-span-2 row-span-2 bg-urban-sand/10 rounded-2xl hover:bg-urban-sand/20 transition-colors duration-500 overflow-hidden relative group">
              <span className="absolute bottom-4 left-4 font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity">Projeto Residencial</span>
           </div>
           {/* Itens Menores */}
           <div className="bg-urban-sand/10 rounded-2xl hover:bg-urban-sand/20 transition-colors duration-500"></div>
           <div className="bg-urban-sand/10 rounded-2xl hover:bg-urban-sand/20 transition-colors duration-500"></div>
           <div className="col-span-2 bg-urban-sand/10 rounded-2xl hover:bg-urban-sand/20 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
