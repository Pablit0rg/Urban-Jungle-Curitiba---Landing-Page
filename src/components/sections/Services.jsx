import { siteContent } from '@/data/content';
import Card from '../ui/Card';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-urban-leaf font-medium tracking-widest text-sm uppercase">O que fazemos</span>
          <h2 className="font-serif text-3xl md:text-4xl text-urban-moss mt-3 font-bold">{siteContent.services.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteContent.services.items.map((service) => (
            <Card 
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
