import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Users, Gift, ArrowRight } from 'lucide-react';

const Packages = () => {
  const faqs = [
    {
      question: 'O que está incluído no Projeto Completo?',
      answer: 'O Projeto Completo inclui análise completa dos processos, desenvolvimento de agentes de IA personalizados, integração com sistemas existentes, treinamento da equipe e documentação completa.'
    },
    {
      question: 'Como funciona a manutenção mensal?',
      answer: 'A manutenção inclui monitoramento 24/7, ajustes e otimizações, suporte técnico prioritário, atualizações de segurança e relatórios mensais de performance.'
    },
    {
      question: 'Posso cancelar a manutenção a qualquer momento?',
      answer: 'Sim, o contrato de manutenção pode ser cancelado com 30 dias de antecedência. No entanto, recomendamos manter a manutenção para garantir o funcionamento otimizado dos sistemas.'
    },
    {
      question: 'Como funcionam os descontos por indicação?',
      answer: 'Para cada cliente indicado que fechar um projeto, você recebe 5% de desconto no valor do seu próximo projeto. A cada 10 indicações efetivadas, você ganha 1 mês gratuito de manutenção.'
    },
    {
      question: 'Qual o prazo de implementação?',
      answer: 'O prazo varia conforme a complexidade do projeto, mas em média são de 4 a 8 semanas para projetos completos. Projetos simples podem ser entregues em 2-3 semanas.'
    },
    {
      question: 'Oferecem garantia?',
      answer: 'Sim, oferecemos 30 dias de garantia para ajustes após a entrega. Além disso, durante os primeiros 3 meses, oferecemos suporte estendido para adaptações.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pacotes Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de automação inteligente com suporte dedicado e resultados garantidos
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Projeto Completo */}
            <Card className="card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-accent-light text-accent-foreground px-4 py-2 text-sm font-semibold">
                Mais Popular
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="text-accent" size={24} />
                  <CardTitle className="text-2xl text-primary">Projeto Completo</CardTitle>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary">R$ 25.000</span>
                  <span className="text-muted-foreground">única</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Automação completa dos seus processos com agentes de IA personalizados
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Análise completa de processos',
                    'Desenvolvimento de agentes de IA',
                    'Integração com sistemas existentes',
                    'Treinamento da equipe',
                    'Documentação completa',
                    'Dashboards personalizados',
                    'Suporte na implementação',
                    'Garantia de 30 dias'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="text-accent flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-brand text-accent-foreground font-semibold">
                  Contratar Projeto
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            {/* Manutenção Mensal */}
            <Card className="card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="text-primary" size={24} />
                  <CardTitle className="text-2xl text-primary">Manutenção Mensal</CardTitle>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary">R$ 1.200</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Suporte contínuo e otimização para máxima performance dos seus sistemas
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Monitoramento 24/7',
                    'Suporte técnico prioritário',
                    'Ajustes e otimizações',
                    'Atualizações de segurança',
                    'Relatórios mensais',
                    'Backup automático',
                    'Acesso ao portal do cliente',
                    'Consultoria estratégica'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="text-primary flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" variant="outline">
                  Contratar Manutenção
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Descontos por Indicação */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Programa de Indicações
              </h2>
              <p className="text-lg text-muted-foreground">
                Indique clientes e ganhe benefícios exclusivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Gift className="text-accent" size={24} />
                    <CardTitle className="text-xl text-primary">Desconto no Projeto</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">5%</div>
                    <p className="text-muted-foreground mb-4">
                      de desconto no valor do seu próximo projeto para cada cliente indicado
                    </p>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      Por indicação efetivada
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="text-primary" size={24} />
                    <CardTitle className="text-xl text-primary">Manutenção Gratuita</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1 Mês</div>
                    <p className="text-muted-foreground mb-4">
                      de manutenção gratuita a cada 10 indicações efetivadas
                    </p>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Benefício acumulativo
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="btn-brand text-accent-foreground font-semibold px-8">
                Saiba Mais Sobre Indicações
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Esclareça suas dúvidas sobre nossos pacotes e serviços
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-primary">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma proposta personalizada
          </p>
          <Button 
            size="lg" 
            className="btn-brand text-accent-foreground font-semibold px-8 py-4 text-lg"
          >
            Solicitar Proposta
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;