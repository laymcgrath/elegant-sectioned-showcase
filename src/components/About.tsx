
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: Code,
      title: t('about.development'),
      description: t('about.developmentDesc'),
    },
    {
      icon: Palette,
      title: t('about.design'),
      description: t('about.designDesc'),
    },
    {
      icon: Rocket,
      title: t('about.performance'),
      description: t('about.performanceDesc'),
    },
    {
      icon: Users,
      title: t('about.collaboration'),
      description: t('about.collaborationDesc'),
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{t('about.projectsCompleted')}</h3>
                <p className="text-3xl font-bold text-slate-700">50+</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{t('about.yearsExperience')}</h3>
                <p className="text-3xl font-bold text-slate-700">5+</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4">
                    <skill.icon className="w-8 h-8 text-slate-700 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
