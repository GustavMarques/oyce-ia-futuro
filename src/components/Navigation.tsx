import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '#home' },
    { name: 'Sobre', path: '#sobre' },
    { name: 'Soluções', path: '#solucoes' },
    { name: 'Pacotes', path: '#pacotes' },
    { name: 'Tecnologia', path: '#tecnologia' },
    { name: 'Cases', path: '#cases' },
    { name: 'Contato', path: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-sticky' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d6da3037-e643-4706-9155-c569e5502c5a.png" 
              alt="Barron Royce" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Barron Royce</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Intelligent Automation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground"
              >
                {item.name}
              </a>
            ))}
            <Button variant="brand" className="font-semibold">
              Solicitar Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-sm font-medium transition-colors duration-200 text-foreground"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="brand" className="font-semibold mt-4">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;