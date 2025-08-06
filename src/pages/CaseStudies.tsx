import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      title: 'E-commerce: Automação de Atendimento',
      client: 'Empresa de Varejo Online',
      industry: 'E-commerce',
      challenge: 'Alto volume de consultas repetitivas no WhatsApp causando sobrecarga da equipe de atendimento e demora nas respostas.',
      solution: 'Implementamos um agente de IA multimodal capaz de responder consultas sobre produtos, pedidos e políticas. Integração completa com o sistema de estoque e CRM.',
      results: [
        { metric: 'Redução no tempo de resposta', value: '85%', icon: Clock },
        { metric: 'Aumento na satisfação do cliente', value: '92%', icon: Users },
        { metric: 'Economia operacional mensal', value: 'R$ 15.000', icon: TrendingUp }
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'A automação da Barron Royce revolucionou nosso atendimento. Conseguimos responder 10x mais clientes com a mesma equipe.',
      author: 'Maria Silva, Diretora de Operações'
    },
    {
      title: 'Fintech: Gestão Inteligente de Cobranças',
      client: 'Empresa de Serviços Financeiros',
      industry: 'Fintech',
      challenge: 'Processo manual de cobrança resultava em baixa eficiência e altas taxas de inadimplência.',
      solution: 'Desenvolvemos um sistema de cobrança automatizada com múltiplos canais (WhatsApp, SMS, e-mail) e estratégias personalizadas por perfil de cliente.',
      results: [
        { metric: 'Redução na inadimplência', value: '67%', icon: TrendingUp },
        { metric: 'Aumento na eficiência', value: '150%', icon: Clock },
        { metric: 'ROI em 6 meses', value: '340%', icon: TrendingUp }
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'O sistema de IA mudou completamente nossa gestão financeira. Resultados surpreendentes em poucos meses.',
      author: 'Carlos Mendes, CEO'
    },
    {
      title: 'Consultoria: Dashboard Inteligente',
      client: 'Consultoria Empresarial',
      industry: 'Consultoria',
      challenge: 'Dificuldade em consolidar dados de múltiplas fontes para gerar insights estratégicos para clientes.',
      solution: 'Criamos dashboards automatizados no Power BI com conexões em tempo real e relatórios inteligentes que se atualizam automaticamente.',
      results: [
        { metric: 'Tempo de geração de relatórios', value: '-90%', icon: Clock },
        { metric: 'Precisão dos dados', value: '99.5%', icon: TrendingUp },
        { metric: 'Satisfação dos clientes', value: '96%', icon: Users }
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'Agora nossos clientes recebem insights em tempo real. Nossa consultoria se tornou muito mais valiosa.',
      author: 'Ana Costa, Sócia Fundadora'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCaseData = cases[currentCase];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cases de Sucesso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça como transformamos negócios com automação inteligente. 
            Resultados reais de empresas que confiaram na nossa expertise.
          </p>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCase ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={prevCase}>
                  <ChevronLeft size={16} />
                </Button>
                <Button variant="outline" size="sm" onClick={nextCase}>
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>

            {/* Current Case */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {currentCaseData.industry}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {currentCaseData.client}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                      {currentCaseData.title}
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Desafio</h4>
                        <p className="text-muted-foreground text-sm">
                          {currentCaseData.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solução</h4>
                        <p className="text-muted-foreground text-sm">
                          {currentCaseData.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">Dashboard Preview</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentCaseData.results.map((result, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <result.icon className="text-accent-foreground" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {result.value}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {result.metric}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial */}
            <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg text-primary italic mb-4">
                  "{currentCaseData.testimonial}"
                </blockquote>
                <p className="text-muted-foreground font-medium">
                  — {currentCaseData.author}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Números que demonstram o impacto real das nossas soluções
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2.000+', label: 'Fluxos Automatizados' },
              { number: '85%', label: 'Redução de Custos Média' },
              { number: '99.9%', label: 'Uptime Garantido' },
              { number: '48h', label: 'Tempo Médio de Implementação' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quer ser nosso próximo caso de sucesso?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar seus processos
          </p>
          <Button 
            size="lg" 
            className="btn-brand text-accent-foreground font-semibold px-8 py-4 text-lg"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;