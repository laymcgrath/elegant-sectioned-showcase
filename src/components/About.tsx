
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Especialista em React, TypeScript, Node.js e tecnologias modernas de desenvolvimento web.',
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Criação de interfaces intuitivas e experiências de usuário memoráveis.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Otimização de aplicações para máxima performance e experiência do usuário.',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho em equipe eficiente e comunicação clara com stakeholders.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sou um desenvolvedor full stack com mais de 5 anos de experiência em criar 
              soluções digitais inovadoras. Minha paixão é transformar ideias em realidade 
              através de código limpo e design elegante.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Especializo-me em React, TypeScript, Node.js e design UI/UX. Acredito que a 
              melhor tecnologia é aquela que se torna invisível ao usuário, proporcionando 
              experiências fluidas e intuitivas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Projetos Concluídos</h3>
                <p className="text-3xl font-bold text-slate-700">50+</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Anos de Experiência</h3>
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
