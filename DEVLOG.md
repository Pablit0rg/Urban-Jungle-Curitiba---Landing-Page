# DEVLOG MASTER: URBAN JUNGLE CURITIBA
Data: 07 de Dezembro de 2025
Versão: 1.0.2 (Stable Release)
Status: Produção (Vercel)
Desenvolvedor: Pablo Rosa Gomes

## 1. VISÃO GERAL DO PROJETO
Landing Page desenvolvida para consultoria botânica (Cactos e Suculentas). O objetivo foi criar uma interface de alta performance, com design minimalista "clean" (focada em tons de areia e verde musgo), fugindo do padrão dark mode, para transmitir leveza e sofisticação.

## 2. ARQUITETURA TÉCNICA

### Stack Tecnológica
- Core: Next.js 14 (App Router)
- Estilização: Tailwind CSS 3.3
- Linguagem: JavaScript (ES6+)
- Ícones: Lucide React
- Deploy: Vercel

### Design System (Tokens)
Definimos uma identidade visual personalizada no arquivo tailwind.config.js para garantir consistência:

1. Paleta de Cores:
   - Primary: Urban Moss (#2C4A34) - Usado em títulos e botões principais.
   - Background: Urban Sand (#F3F0E7) - Base de todo o site para evitar o branco absoluto.
   - Secondary: Urban Clay (#E0D8C8) - Elementos decorativos sutis.
   - Text: Urban Bark (#3D342B) - Substituto suave para o preto puro.

2. Tipografia:
   - Serif: Merriweather (Títulos e sofisticação).
   - Sans: Poppins (Corpo de texto e interface moderna).

## 3. IMPLEMENTAÇÃO DE COMPONENTES

### Estrutura de Diretórios
A arquitetura foi modularizada para escalabilidade:
src/
 ├── app/ (Roteamento e Layout Global)
 ├── components/ (Dividido em layout, sections e ui)
 ├── data/ (Separação total entre dados e interface)
 └── styles/ (Configurações globais do CSS)

### Detalhamento dos Módulos

A. Layout Global (layout.js)
- Implementação das fontes Google (Merriweather e Poppins) via next/font.
- Configuração de metadados para SEO (Title, Description, Keywords).
- Correção crítica de importação do CSS Global para compatibilidade com Vercel.

B. Header (Header.jsx)
- Navegação responsiva com lógica de estado (useState).
- Efeito "Glassmorphism" ao rolar a página (detectado via useEffect no eixo Y).
- Menu Mobile com animação de entrada e fechamento automático ao clicar.

C. Hero Section (Hero.jsx)
- Layout em Grid (2 colunas em desktop, 1 em mobile).
- Uso de formas geométricas CSS (divs com border-radius) para criar placeholders visuais enquanto as imagens finais não são produzidas.
- Botão de CTA (Call to Action) integrado.

D. Serviços (Services.jsx + Card.jsx)
- Renderização dinâmica baseada em array de objetos (src/data/content.js).
- Componente Card reutilizável com injeção dinâmica de ícones da biblioteca Lucide.
- Efeitos de Hover: Mudança de cor da borda e elevação (shadow-xl).

E. Dados (content.js)
- Centralização de todo o texto do site em um único arquivo.
- Facilita manutenção futura: o cliente pode alterar preços ou descrições sem tocar na lógica do React.
- Links de WhatsApp pré-formatados com mensagens personalizadas.

## 4. RESOLUÇÃO DE PROBLEMAS (TROUBLESHOOTING)

### Incidente: Falha no Carregamento de Estilos no Vercel
- Sintoma: O site carregava o HTML puro, sem as classes do Tailwind, apresentando fontes padrão e layout quebrado.
- Diagnóstico: O compilador de produção do Vercel teve dificuldades em resolver o alias de caminho absoluto (@/styles/globals.css) dentro do arquivo layout.js.
- Solução (Hotfix): Alteração da importação para caminho relativo.
  - De: import "@/styles/globals.css";
  - Para: import "../styles/globals.css";
- Resultado: O CSS foi compilado corretamente e a estilização foi aplicada em produção.

## 5. PRÓXIMOS PASSOS (ROADMAP)

1. Assets Visuais:
   - Substituir os placeholders coloridos (divs) pelas imagens finais de alta resolução (formato WebP).
   - Aplicar o componente next/image para otimização automática.

2. Refinamento de SEO:
   - Adicionar favicon personalizado.
   - Criar arquivo sitemap.xml e robots.txt.

3. Testes Finais:
   - Validação de responsividade em dispositivos iOS (Safari).
   - Teste de performance (Lighthouse).
