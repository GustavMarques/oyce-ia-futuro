import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
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
      year: '2023',
      title: 'Primeira Automação Entregue',
      description: 'Revolucionamos o atendimento ao cliente de nosso primeiro parceiro com IA multimodal',
      icon: CheckCircle
    },
    {
      year: '2024',
      title: '2.000+ Fluxos Automatizados',
      description: 'Alcançamos a marca de mais de 2.000 processos automatizados com sucesso',
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
      title: 'Reconhecimento no Mercado',
      description: 'Consolidação como referência em automação inteligente no mercado brasileiro',
      icon: Award
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Barron Royce
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos pioneiros em automação inteligente, transformando a maneira como empresas 
              operam através de agentes de IA autônomos e soluções inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
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

            {/* Visão */}
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

            {/* Valores */}
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

          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-foreground" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline de Marcos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossa Jornada
            </h2>
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
                        <h3 className="text-xl font-bold text-primary">{milestone.title}</h3>
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
    </div>
  );
};

export default About;