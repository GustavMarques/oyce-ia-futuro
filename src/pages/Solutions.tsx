import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, FileText, BarChart3, Workflow, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atendimento WhatsApp Multimodal',
      description: 'Agentes de IA que compreendem texto, voz, imagens e documentos. Atendimento 24/7 com respostas personalizadas e escalabilidade infinita.',
      features: ['Processamento de texto e voz', 'Análise de imagens', 'Integração com CRM', 'Relatórios detalhados'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Gestão de Faturas e Cobranças',
      description: 'Automatização completa do ciclo de faturamento, desde geração até cobrança inteligente com múltiplos canais de comunicação.',
      features: ['Geração automática de faturas', 'Cobrança multicanal', 'Controle de inadimplência', 'Relatórios financeiros'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Dashboards Power BI & Relatórios',
      description: 'Visualização inteligente de dados com insights automáticos. Dashboards personalizados que se atualizam em tempo real.',
      features: ['Dashboards personalizados', 'Insights automáticos', 'Relatórios agendados', 'Análise preditiva'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Integração Completa',
      description: 'Conectamos todos os seus sistemas: CRM, planilhas, e-mail, bancos de dados. Uma única plataforma para gerenciar tudo.',
      features: ['Integração com CRMs', 'Sincronização de planilhas', 'Automação de e-mail', 'APIs personalizadas'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossas Soluções
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme seus processos com nossas soluções de automação inteligente. 
            Cada solução é projetada para entregar resultados mensuráveis e ROI comprovado.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center`}>
                      <solution.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-primary">Principais recursos:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Saiba Mais
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso processo estruturado garante implementação eficiente e resultados rápidos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análise', description: 'Mapeamos seus processos atuais e identificamos oportunidades' },
              { step: '02', title: 'Estratégia', description: 'Desenvolvemos uma estratégia personalizada de automação' },
              { step: '03', title: 'Implementação', description: 'Criamos e implantamos as soluções de IA' },
              { step: '04', title: 'Otimização', description: 'Monitoramos e otimizamos continuamente os resultados' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem transformar seu negócio
          </p>
          <Button 
            size="lg" 
            className="btn-brand text-accent-foreground font-semibold px-8 py-4 text-lg"
          >
            Falar com Especialista
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;