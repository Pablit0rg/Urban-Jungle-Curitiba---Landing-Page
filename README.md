# Urban Jungle Curitiba - Landing Page

> **Status:** Em Desenvolvimento
> **Cliente:** Fernanda | Especialista Botânica

## Sobre o Projeto
Landing Page "clean" e minimalista desenvolvida para uma consultoria especializada em plantas (Cactos e Suculentas) em Curitiba. O foco é transmitir leveza, organizar os serviços (que antes eram feitos via WhatsApp) e justificar o valor premium da consultoria.

## Tecnologias Utilizadas
- **Front-end:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS (Paleta: Tons de Areia, Branco e Verde Musgo)
- **Ícones:** Lucide React
- **Performance:** Otimização de imagens com `next/image`

## Diferenciais Técnicos
1. **Design Orgânico:** Interface visual que foge do padrão "dark", focada em luz e tons terrosos.
2. **WhatsApp Inteligente:** Botões de ação (CTA) que direcionam para o WhatsApp com mensagens pré-formatadas.
3. **Alta Performance:** Carregamento instantâneo de fotos de alta resolução.

## Workflow de Desenvolvimento (Regra de Ouro)
**Instrução para Manutenção e Edição:**
Para manter a integridade do código e facilitar ajustes rápidos, toda solicitação de alteração no código deve seguir o padrão:
- **Identificação Precisa:** O desenvolvedor deve indicar o arquivo exato.
- **Localização:** Descrever o bloco de código específico.
- **Busca Rápida:** Fornecer o trecho exato da linha para ser localizado via `Ctrl + F`.

## Como Rodar o Projeto

```bash
# 1. Instalar dependências
npm install

# 2. Rodar servidor de desenvolvimento
npm run dev

Estrutura de Diretórios: Projeto Urban Jungle

urban-jungle-cwb/
├── public/                 # Onde ficam os arquivos estáticos (Briefing: Fotos de alta qualidade)
│   ├── images/
│   │   ├── hero-banner.webp   # A foto principal "clean"
│   │   ├── services/          # Fotos dos serviços (Consultoria, Paisagismo)
│   │   └── about/             # Foto da Fernanda
│   └── icons/              # Ícones personalizados (folhas, plantas)
│
├── src/
│   ├── app/                # O "Coração" do Next.js (App Router)
│   │   ├── layout.js       # Estrutura base (importa fontes e metadados)
│   │   └── page.js         # Apenas monta os blocos da página principal
│   │
│   ├── components/         # A "Fabrica de Peças" (Aqui dividimos para não ficar gigante)
│   │   ├── layout/         # Peças que repetem
│   │       ├── Header.jsx  # Menu de navegação transparente/branco
│   │       └── Footer.jsx  # Rodapé com contatos
│   │   ├── sections/       # As "fatias" do site (baseado no briefing)
│   │       ├── Hero.jsx    # A primeira dobra com a promessa de valor
│   │       ├── Services.jsx# O catálogo (3 serviços da Fernanda)
│   │       ├── Gallery.jsx # A galeria de projetos (Next/Image otimizado)
│   │       └── CTA.jsx     # Chamada para ação final
│   │   └── ui/             # Pequenos elementos reutilizáveis
│   │       ├── Button.jsx  # O botão de WhatsApp inteligente
│   │       └── Card.jsx    # O card padrão dos serviços
│   │
│   ├── data/               # O SEGREDO DA ORGANIZAÇÃO
│   │   └── content.js      # Aqui ficam os TEXTOS da Fernanda.
│   │                       # Se ela quiser mudar um preço ou texto, mudamos SÓ aqui,
│   │                       # sem mexer no código complexo.
│   │
│   └── styles/             # Estilização
│       └── globals.css     # Configurações globais do Tailwind
│
├── .gitignore              # O que não sobe pro GitHub
├── next.config.js          # Configuração de otimização
├── package.json            # Dependências
├── tailwind.config.js      # Onde definimos as cores "Areia" e "Verde Musgo"
└── README.md               # O manual do projeto
