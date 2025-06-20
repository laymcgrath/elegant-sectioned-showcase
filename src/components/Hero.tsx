import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-slate-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Olá, eu sou
            <span className="block text-gradient mt-2">Layze Gama</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack & Designer UI/UX apaixonado por criar experiências digitais 
            memoráveis e soluções inovadoras.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 hover:scale-105 shadow-lg">
              Ver Meu Trabalho
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all duration-200 hover:scale-105">
              Baixar CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {[{
            icon: Github,
            href: '#',
            label: 'GitHub'
          }, {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn'
          }, {
            icon: Mail,
            href: '#',
            label: 'Email'
          }].map(({
            icon: Icon,
            href,
            label
          }) => <a key={label} href={href} className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 text-slate-700 hover:text-slate-900" aria-label={label}>
                <Icon size={24} />
              </a>)}
          </div>
        </div>

        <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-slate-600" />
        </button>
      </div>
    </section>;
};
export default Hero;