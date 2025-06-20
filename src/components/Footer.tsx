
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contato@exemplo.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Portfólio</h3>
            <p className="text-slate-300 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais 
              inovadoras e experiências memoráveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace('í', 'i'));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-slate-300">
              <p>contato@exemplo.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm mb-4 md:mb-0">
              © 2024 Portfólio. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-2 text-slate-300 text-sm">
              <span>Feito com</span>
              <Heart size={16} className="text-red-500" />
              <span>e</span>
              <span className="font-medium">React + TypeScript</span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-200 hover:scale-110 z-40"
          aria-label="Voltar ao topo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
