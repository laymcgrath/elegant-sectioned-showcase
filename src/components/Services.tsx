
import { Globe, Smartphone, Database, Zap, Shield, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para performance.',
      features: ['React & TypeScript', 'Next.js', 'Tailwind CSS', 'APIs RESTful'],
    },
    {
      icon: Smartphone,
      title: 'Aplicações Mobile',
      description: 'Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'UI/UX Mobile', 'App Store Deploy'],
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Desenvolvimento de APIs robustas e sistemas backend escaláveis.',
      features: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      icon: Zap,
      title: 'Otimização',
      description: 'Melhoria de performance e otimização de aplicações existentes.',
      features: ['Performance Audit', 'SEO', 'Core Web Vitals', 'Bundle Optimization'],
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Implementação de medidas de segurança e boas práticas.',
      features: ['Authentication', 'Authorization', 'HTTPS', 'Data Protection'],
    },
    {
      icon: Settings,
      title: 'Consultoria',
      description: 'Consultoria técnica e arquitetural para projetos complexos.',
      features: ['Architecture Review', 'Code Review', 'Best Practices', 'Team Training'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meus Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofereço soluções completas em desenvolvimento e design, 
            desde a concepção até a implementação final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <service.icon className="w-8 h-8 text-slate-700 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
              
              <h3 className="font-bold text-xl text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
