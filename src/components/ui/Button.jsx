import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  // Estilos base para todos os botões (arredondado, transição suave)
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base tracking-wide";
  
  // Variantes de estilo
  const variants = {
    primary: "bg-urban-moss text-white hover:bg-urban-leaf shadow-md hover:shadow-lg transform hover:-translate-y-0.5", // Verde Principal
    secondary: "bg-transparent border border-urban-moss text-urban-moss hover:bg-urban-sand", // Borda (Outline)
    outline: "bg-white text-urban-moss hover:bg-urban-sand shadow-sm", // Fundo branco
  };

  // Se tiver 'href', vira um Link. Se não, é um botão normal.
  const Component = href ? Link : 'button';

  return (
    <Component 
      href={href || ''} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
