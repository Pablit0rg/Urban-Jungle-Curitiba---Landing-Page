import { Sprout, Ruler, Droplets } from 'lucide-react'; // Importando ícones para mapear depois

export const siteContent = {
  header: {
    logo: "Urban Jungle Curitiba",
    ctaButton: "Agendar Consultoria",
    whatsappLink: "https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20uma%20consultoria%20botânica." // Link pré-formatado
  },
  hero: {
    title: "Transforme seu espaço em um oásis urbano.",
    subtitle: "Consultoria botânica especializada em Cactos e Suculentas por Fernanda.",
    cta: "Agendar Consultoria via WhatsApp"
  },
  about: {
    title: "Conheça a Fernanda",
    description: "Fernanda é uma especialista botânica apaixonada por trazer vida aos lares de Curitiba. Com formação técnica e olhar artístico, ela desenvolve projetos verdes que transformam ambientes residenciais e comerciais em refúgios de bem-estar. A Urban Jungle Curitiba é sobre colocar vida em cada detalhe.",
    imageAlt: "Foto da Fernanda cuidando de plantas",
    cta: "Saiba mais sobre a Fernanda"
  },
  services: {
    title: "Nossos Serviços",
    items: [
      {
        id: 1,
        title: "Consultoria Personalizada",
        description: "Diagnóstico completo do seu ambiente e plano de cuidados específico para suas plantas prosperarem.",
        iconName: "Sprout"
      },
      {
        id: 2,
        title: "Projetos de Paisagismo",
        description: "Curadoria e arranjos exclusivos de cactos e suculentas para interiores, varandas e escritórios.",
        iconName: "Ruler"
      },
      {
        id: 3,
        title: "Manutenção e Curadoria",
        description: "Visitas periódicas para adubação, poda e cuidados técnicos, mantendo seu jardim sempre saudável.",
        iconName: "Droplets"
      }
    ]
  },
  gallery: {
    title: "Galeria de Projetos",
    description: "Um pouco do nosso toque verde em lares curitibanos."
    // As imagens serão mapeadas no componente, aqui fica o texto
  },
  footer: {
    copyright: "Urban Jungle Curitiba © 2024",
    location: "Curitiba, Paraná",
    instagram: "@urbanjunglecwb"
  }
};
