import * as Icons from 'lucide-react'; // Importa todos os ícones para escolhermos dinamicamente

export default function Card({ title, description, iconName }) {
  // Pega o ícone pelo nome (ex: "Sprout") ou usa um padrão se não achar
  const IconComponent = Icons[iconName] || Icons.Sprout; 

  return (
    <div className="group bg-white p-8 rounded-3xl border border-urban-sand hover:border-urban-moss/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-start">
      <div className="bg-urban-sand/50 p-4 rounded-2xl mb-6 text-urban-moss group-hover:bg-urban-moss group-hover:text-white transition-colors duration-500">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-bold text-urban-moss mb-3">{title}</h3>
      <p className="text-urban-bark/80 leading-relaxed text-sm font-light">{description}</p>
    </div>
  );
}
