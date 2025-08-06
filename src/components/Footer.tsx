import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/d6da3037-e643-4706-9155-c569e5502c5a.png" 
                alt="Barron Royce" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-bold">Barron Royce</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Transformamos processos manuais em agentes de IA autônomos. 
              Automação inteligente para resultados reais.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <MapPin size={16} />
              <span>São Paulo, Brasil</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sobre Nós</Link></li>
              <li><Link to="/solucoes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Soluções</Link></li>
              <li><Link to="/pacotes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pacotes</Link></li>
              <li><Link to="/cases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cases de Sucesso</Link></li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 mb-4">
              <p className="text-primary-foreground/80 text-sm">contato@barronroyce.com</p>
              <p className="text-primary-foreground/80 text-sm">+55 (11) 9 9999-9999</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/barronroyce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/barronroyce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Barron Royce. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;