
import { Globe, Smartphone, Database, Zap, Shield, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Globe,
      title: t('services.webDev'),
      description: t('services.webDevDesc'),
      features: ['React & TypeScript', 'Next.js', 'Tailwind CSS', 'APIs RESTful'],
    },
    {
      icon: Smartphone,
      title: t('services.mobileApps'),
      description: t('services.mobileAppsDesc'),
      features: ['React Native', 'Flutter', 'UI/UX Mobile', 'App Store Deploy'],
    },
    {
      icon: Database,
      title: t('services.backend'),
      description: t('services.backendDesc'),
      features: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      icon: Zap,
      title: t('services.optimization'),
      description: t('services.optimizationDesc'),
      features: ['Performance Audit', 'SEO', 'Core Web Vitals', 'Bundle Optimization'],
    },
    {
      icon: Shield,
      title: t('services.security'),
      description: t('services.securityDesc'),
      features: ['Authentication', 'Authorization', 'HTTPS', 'Data Protection'],
    },
    {
      icon: Settings,
      title: t('services.consulting'),
      description: t('services.consultingDesc'),
      features: ['Architecture Review', 'Code Review', 'Best Practices', 'Team Training'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('services.description')}
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
