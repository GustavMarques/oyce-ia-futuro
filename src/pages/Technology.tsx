import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Globe, Database, Bot, Workflow } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      name: 'OpenAI',
      category: 'Inteligência Artificial',
      description: 'Modelos de linguagem avançados para processamento natural e automação inteligente',
      logo: '/api/placeholder/120/40',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Supabase',
      category: 'Backend as a Service',
      description: 'Plataforma robusta para dados em tempo real e autenticação segura',
      logo: '/api/placeholder/120/40',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'PostgreSQL',
      category: 'Banco de Dados',
      description: 'Sistema de gerenciamento de banco de dados robusto e escalável',
      logo: '/api/placeholder/120/40',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Railway',
      category: 'Infraestrutura Cloud',
      description: 'Deploy e escalabilidade automática para máxima disponibilidade',
      logo: '/api/placeholder/120/40',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Z-API',
      category: 'Integração WhatsApp',
      description: 'Conectividade oficial com WhatsApp para automação multimodal',
      logo: '/api/placeholder/120/40',
      color: 'from-green-400 to-green-500'
    },
    {
      name: 'n8n',
      category: 'Automação de Workflows',
      description: 'Plataforma de automação visual para integrar todos os seus sistemas',
      logo: '/api/placeholder/120/40',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Criptografia end-to-end, conformidade GDPR e backups automáticos garantem a proteção total dos seus dados.'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Arquitetura distribuída e cache inteligente para respostas em milissegundos, mesmo com alto volume.'
    },
    {
      icon: Globe,
      title: 'Escalabilidade Global',
      description: 'Infraestrutura cloud que escala automaticamente conforme sua demanda, suportando milhões de operações.'
    },
    {
      icon: Database,
      title: 'Dados em Tempo Real',
      description: 'Sincronização instantânea entre todos os sistemas com monitoramento e análise contínua.'
    },
    {
      icon: Bot,
      title: 'IA Adaptativa',
      description: 'Algoritmos que aprendem com cada interação, melhorando continuamente a precisão e eficiência.'
    },
    {
      icon: Workflow,
      title: 'Integração Universal',
      description: 'Conectamos com qualquer sistema através de APIs, webhooks e integrações personalizadas.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Tecnologia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nossa stack robusta combina soluções de ponta para máxima confiabilidade e escalabilidade.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as melhores tecnologias do mercado para garantir que sua automação seja 
            segura, rápida e sempre disponível.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada tecnologia foi cuidadosamente selecionada para entregar máxima performance e confiabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
                      <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Características Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefícios técnicos que fazem a diferença no desempenho das suas automações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Arquitetura Empresarial
            </h2>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground font-bold text-lg">99.9%</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Uptime Garantido</h4>
                  <p className="text-muted-foreground text-sm">Disponibilidade enterprise com redundância total</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">&lt;100ms</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Latência Ultra-baixa</h4>
                  <p className="text-muted-foreground text-sm">Respostas em tempo real para máxima eficiência</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">24/7</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Monitoramento</h4>
                  <p className="text-muted-foreground text-sm">Supervisão contínua com alertas proativos</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Nossa arquitetura foi projetada para suportar empresas de todos os tamanhos, 
              desde startups até grandes corporações, garantindo performance consistente 
              independentemente da escala de operação.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;