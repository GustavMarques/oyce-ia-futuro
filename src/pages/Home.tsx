import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Zap, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-animation">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Automação Inteligente. <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Resultados Reais.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformamos processos manuais em agentes de IA autônomos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="brand"
                size="lg" 
                className="font-semibold px-8 py-4 text-lg"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                asChild
              >
                <Link to="/pacotes">Ver Pacotes</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que escolher a Barron Royce?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa abordagem única combina tecnologia de ponta com expertise em automação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-hover bg-card rounded-lg border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Automação Inteligente</h3>
              <p className="text-muted-foreground">
                Agentes de IA que aprendem e se adaptam aos seus processos
              </p>
            </div>
            
            <div className="text-center p-6 card-hover bg-card rounded-lg border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Resultados Mensuráveis</h3>
              <p className="text-muted-foreground">
                ROI comprovado com métricas claras e dashboards detalhados
              </p>
            </div>
            
            <div className="text-center p-6 card-hover bg-card rounded-lg border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Suporte Dedicado</h3>
              <p className="text-muted-foreground">
                Equipe especializada para garantir o sucesso da sua automação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar seus processos?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como nossa IA pode revolucionar seu negócio
          </p>
          <Button 
            variant="brand"
            size="lg" 
            className="font-semibold px-8 py-4 text-lg"
          >
            Agendar Demonstração Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;