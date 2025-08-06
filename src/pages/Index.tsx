import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Workflow,
  Eye,
  Heart,
  CheckCircle,
  TrendingUp,
  Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Index = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atendimento WhatsApp Multimodal',
      description: 'Agentes de IA que compreendem texto, voz, imagens e documentos. Atendimento 24/7 com respostas personalizadas.',
      features: ['Processamento de texto e voz', 'Análise de imagens', 'Integração com CRM', 'Relatórios detalhados'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Gestão de Faturas e Cobranças',
      description: 'Automatização completa do ciclo de faturamento, desde geração até cobrança inteligente.',
      features: ['Geração automática de faturas', 'Cobrança multicanal', 'Controle de inadimplência', 'Relatórios financeiros'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Dashboards Power BI & Relatórios',
      description: 'Visualização inteligente de dados com insights automáticos. Dashboards personalizados em tempo real.',
      features: ['Dashboards personalizados', 'Insights automáticos', 'Relatórios agendados', 'Análise preditiva'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Integração Completa',
      description: 'Conectamos todos os seus sistemas: CRM, planilhas, e-mail, bancos de dados em uma única plataforma.',
      features: ['Integração com CRMs', 'Sincronização de planilhas', 'Automação de e-mail', 'APIs personalizadas'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada automação é projetada para gerar valor mensurável e ROI comprovado para nossos clientes.'
    },
    {
      icon: Eye,
      title: 'Transparência Total',
      description: 'Processos claros, métricas visíveis e comunicação direta em todas as etapas do projeto.'
    },
    {
      icon: Heart,
      title: 'Paixão por Inovação',
      description: 'Combinamos tecnologia de ponta com criatividade para criar soluções únicas e eficazes.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Fundação da Barron Royce',
      description: 'Nascemos com a missão de democratizar a automação inteligente para empresas brasileiras',
      icon: CheckCircle
    },
    {
      year: '2024',
      title: 'Primeira Automação Entregue',
      description: 'Revolucionamos o atendimento ao cliente de nosso primeiro parceiro com IA multimodal',
      icon: TrendingUp
    },
    {
      year: '2024',
      title: 'Parcerias Estratégicas',
      description: 'Firmamos parcerias com líderes de mercado como OpenAI, Supabase e outras tecnologias',
      icon: Users
    },
    {
      year: '2024',
      title: 'Expansão e Crescimento',
      description: 'Consolidação como referência emergente em automação inteligente no mercado brasileiro',
      icon: Award
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Fashion',
      challenge: 'Atendimento manual sobrecarregado',
      solution: 'IA multimodal para WhatsApp',
      results: '85% redução no tempo de resposta'
    },
    {
      title: 'Consultoria Financeira',
      challenge: 'Gestão manual de cobranças',
      solution: 'Automação inteligente de faturas',
      results: '60% melhoria na taxa de recebimento'
    }
  ];

  const technologies = [
    { name: 'OpenAI', logo: '/api/placeholder/120/60' },
    { name: 'Supabase', logo: '/api/placeholder/120/60' },
    { name: 'PostgreSQL', logo: '/api/placeholder/120/60' },
    { name: 'Railway', logo: '/api/placeholder/120/60' },
    { name: 'Z-API', logo: '/api/placeholder/120/60' },
    { name: 'n8n', logo: '/api/placeholder/120/60' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-animation">
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
                onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Pacotes
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
      <section id="features" className="py-20 bg-muted/30">
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

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Barron Royce
            </h2>
            <p className="text-xl text-muted-foreground">
              Somos pioneiros em automação inteligente, transformando a maneira como empresas 
              operam através de agentes de IA autônomos e soluções inovadoras.
            </p>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso à automação inteligente, capacitando empresas de todos os 
                  tamanhos a otimizar seus processos e alcançar resultados extraordinários.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser a principal referência em automação inteligente no Brasil, reconhecida 
                  pela excelência técnica e impacto transformador nos negócios.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Inovação constante, transparência total, foco em resultados e compromisso 
                  inabalável com o sucesso dos nossos parceiros.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline de Marcos */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossa Jornada
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Marcos importantes que definiram nossa trajetória rumo à excelência em automação
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <milestone.icon className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-lg border border-border card-hover">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-primary">{milestone.title}</h4>
                        <span className="text-sm font-semibold text-accent">{milestone.year}</span>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossas Soluções
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforme seus processos com nossas soluções de automação inteligente. 
              Cada solução é projetada para entregar resultados mensuráveis e ROI comprovado.
            </p>
          </div>

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

      {/* Packages Section */}
      <section id="pacotes" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Pacote Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solução completa de automação inteligente com suporte dedicado e resultados garantidos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">Investimento</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <span className="font-semibold">Projeto Completo</span>
                        <span className="text-2xl font-bold text-primary">R$ 25.000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <span className="font-semibold">Manutenção Mensal</span>
                        <span className="text-2xl font-bold text-primary">R$ 1.200</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">Descontos por Indicação</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <span className="font-semibold">5% de desconto no projeto</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Para cada cliente indicado</p>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <span className="font-semibold">1 mês gratuito de manutenção</span>
                        </div>
                        <p className="text-sm text-muted-foreground">A cada 10 indicações bem-sucedidas</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="brand" size="lg" className="font-semibold px-8 py-4">
                    Solicitar Proposta
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Tecnologia de Ponta
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa stack robusta combina soluções de ponta para máxima confiabilidade e escalabilidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-card rounded-lg border border-border flex items-center justify-center mb-4 card-hover">
                  <span className="font-bold text-primary text-sm">{tech.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça como transformamos processos e geramos resultados reais para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">{caseStudy.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-accent mb-2">Desafio:</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-accent mb-2">Solução:</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-accent mb-2">Resultados:</h4>
                      <p className="text-primary font-semibold">{caseStudy.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para transformar seus processos? Fale conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(11) 99999-9999" />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} />
                  </div>
                  
                  <Button variant="brand" size="lg" className="w-full font-semibold">
                    Enviar Mensagem
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">E-mail</h4>
                  <p className="text-muted-foreground">contato@barronroyce.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Endereço</h4>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
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

export default Index;