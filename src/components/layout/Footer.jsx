import { siteContent } from '@/data/content';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-urban-moss text-urban-sand pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold mb-2">{siteContent.header.logo}</h2>
            <p className="opacity-80 text-sm max-w-xs mx-auto md:mx-0">Levando a natureza para dentro do seu lar, com sofisticação e cuidado.</p>
          </div>

          <div className="flex gap-6">
             {/* Ícones sociais meramente ilustrativos para o layout */}
             <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20}/></a>
             <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Mail size={20}/></a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
          <p>{siteContent.footer.copyright}</p>
          <p>{siteContent.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
