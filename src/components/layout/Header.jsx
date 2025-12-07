'use client'; // Necessário porque usa "useState" (interatividade)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { siteContent } from '@/data/content';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para mudar a cor do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <span className="text-urban-moss transform group-hover:rotate-12 transition-transform duration-500">
             <Leaf size={28} />
           </span>
           <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-urban-moss' : 'text-urban-moss md:text-urban-bark'}`}>
             {siteContent.header.logo}
           </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {['Serviços', 'Sobre', 'Galeria'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} // Ex: Galeria -> galeria
              className="text-sm font-medium text-urban-bark hover:text-urban-moss transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button href={siteContent.header.whatsappLink} target="_blank" className="!px-6 !py-2 !text-sm">
            {siteContent.header.ctaButton}
          </Button>
        </nav>

        {/* Botão Mobile */}
        <button 
          className="md:hidden text-urban-moss p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile (Abre ao clicar) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-urban-sand shadow-xl py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <Link href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-urban-moss">Nossos Serviços</Link>
          <Link href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-urban-moss">Conheça a Fernanda</Link>
          <Link href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-urban-moss">Projetos Realizados</Link>
          <Button href={siteContent.header.whatsappLink} target="_blank" className="w-full justify-center">
            {siteContent.header.ctaButton}
          </Button>
        </div>
      )}
    </header>
  );
}
