
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    'nav.portfolio.title': 'Portfólio',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Layze Gama',
    'hero.description': 'Desenvolvedor Full Stack & Designer UI/UX apaixonado por criar experiências digitais memoráveis e soluções inovadoras.',
    'hero.viewWork': 'Ver Meu Trabalho',
    'hero.downloadCV': 'Baixar CV',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description1': 'Sou um desenvolvedor full stack com mais de 5 anos de experiência em criar soluções digitais inovadoras. Minha paixão é transformar ideias em realidade através de código limpo e design elegante.',
    'about.description2': 'Especializo-me em React, TypeScript, Node.js e design UI/UX. Acredito que a melhor tecnologia é aquela que se torna invisível ao usuário, proporcionando experiências fluidas e intuitivas.',
    'about.projectsCompleted': 'Projetos Concluídos',
    'about.yearsExperience': 'Anos de Experiência',
    'about.development': 'Desenvolvimento',
    'about.developmentDesc': 'Especialista em React, TypeScript, Node.js e tecnologias modernas de desenvolvimento web.',
    'about.design': 'Design UI/UX',
    'about.designDesc': 'Criação de interfaces intuitivas e experiências de usuário memoráveis.',
    'about.performance': 'Performance',
    'about.performanceDesc': 'Otimização de aplicações para máxima performance e experiência do usuário.',
    'about.collaboration': 'Colaboração',
    'about.collaborationDesc': 'Trabalho em equipe eficiente e comunicação clara com stakeholders.',
    
    // Services
    'services.title': 'Meus Serviços',
    'services.description': 'Ofereço soluções completas em desenvolvimento e design, desde a concepção até a implementação final.',
    'services.webDev': 'Desenvolvimento Web',
    'services.webDevDesc': 'Criação de sites e aplicações web modernas, responsivas e otimizadas para performance.',
    'services.mobileApps': 'Aplicações Mobile',
    'services.mobileAppsDesc': 'Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.',
    'services.backend': 'Backend & APIs',
    'services.backendDesc': 'Desenvolvimento de APIs robustas e sistemas backend escaláveis.',
    'services.optimization': 'Otimização',
    'services.optimizationDesc': 'Melhoria de performance e otimização de aplicações existentes.',
    'services.security': 'Segurança',
    'services.securityDesc': 'Implementação de medidas de segurança e boas práticas.',
    'services.consulting': 'Consultoria',
    'services.consultingDesc': 'Consultoria técnica e arquitetural para projetos complexos.',
    
    // Portfolio
    'portfolio.title': 'Meu Portfólio',
    'portfolio.description': 'Uma seleção dos meus projetos mais recentes e impactantes, demonstrando minhas habilidades e criatividade.',
    
    // Chatbot
    'chatbot.title': 'Assistente Virtual',
    'chatbot.welcome': 'Bem-vindo! / Welcome!',
    'chatbot.selectLanguage': 'Selecione seu idioma / Select your language',
    'chatbot.portuguese': 'Português',
    'chatbot.english': 'English',
    'chatbot.greeting.question': 'Olá, tudo bem?',
    'chatbot.schedule.question': 'Gostaria de agendar um horário para falar comigo?',
    'chatbot.yes': 'Sim',
    'chatbot.name.question': 'Primeiramente, me diga qual o seu nome',
    'chatbot.email.question': 'Qual seu e-mail?',
    'chatbot.phone.question': 'Me informe um telefone de contato',
    'chatbot.datetime.question': 'Perfeito! Agora me diga qual o melhor dia e horário para agendarmos uma reunião',
    'chatbot.final.message': 'Ótimo! Recebi as informações da sua preferência de dia e horário. Irei entrar em contato com você em breve para confirmar a reunião. Muito obrigada e até logo!',
    'chatbot.send': 'Enviar',
    'chatbot.placeholder.name': 'Digite seu nome...',
    'chatbot.placeholder.email': 'Digite seu e-mail...',
    'chatbot.placeholder.phone': 'Digite seu telefone...',
    'chatbot.placeholder.datetime': 'Digite o dia e horário...'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.portfolio.title': 'Portfolio',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Layze Gama',
    'hero.description': 'Full Stack Developer & UI/UX Designer passionate about creating memorable digital experiences and innovative solutions.',
    'hero.viewWork': 'View My Work',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.description1': 'I am a full stack developer with over 5 years of experience creating innovative digital solutions. My passion is transforming ideas into reality through clean code and elegant design.',
    'about.description2': 'I specialize in React, TypeScript, Node.js and UI/UX design. I believe the best technology is the one that becomes invisible to the user, providing smooth and intuitive experiences.',
    'about.projectsCompleted': 'Projects Completed',
    'about.yearsExperience': 'Years of Experience',
    'about.development': 'Development',
    'about.developmentDesc': 'Expert in React, TypeScript, Node.js and modern web development technologies.',
    'about.design': 'UI/UX Design',
    'about.designDesc': 'Creating intuitive interfaces and memorable user experiences.',
    'about.performance': 'Performance',
    'about.performanceDesc': 'Application optimization for maximum performance and user experience.',
    'about.collaboration': 'Collaboration',
    'about.collaborationDesc': 'Efficient teamwork and clear communication with stakeholders.',
    
    // Services
    'services.title': 'My Services',
    'services.description': 'I offer complete solutions in development and design, from conception to final implementation.',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Creation of modern, responsive websites and web applications optimized for performance.',
    'services.mobileApps': 'Mobile Applications',
    'services.mobileAppsDesc': 'Development of native and hybrid mobile apps for iOS and Android.',
    'services.backend': 'Backend & APIs',
    'services.backendDesc': 'Development of robust APIs and scalable backend systems.',
    'services.optimization': 'Optimization',
    'services.optimizationDesc': 'Performance improvement and optimization of existing applications.',
    'services.security': 'Security',
    'services.securityDesc': 'Implementation of security measures and best practices.',
    'services.consulting': 'Consulting',
    'services.consultingDesc': 'Technical and architectural consulting for complex projects.',
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.description': 'A selection of my most recent and impactful projects, showcasing my skills and creativity.',
    
    // Chatbot
    'chatbot.title': 'Virtual Assistant',
    'chatbot.welcome': 'Bem-vindo! / Welcome!',
    'chatbot.selectLanguage': 'Selecione seu idioma / Select your language',
    'chatbot.portuguese': 'Português',
    'chatbot.english': 'English',
    'chatbot.greeting.question': 'Hello, how are you?',
    'chatbot.schedule.question': 'Would you like to schedule a time to talk with me?',
    'chatbot.yes': 'Yes',
    'chatbot.name.question': 'First, please tell me your name',
    'chatbot.email.question': 'What is your email?',
    'chatbot.phone.question': 'Please provide a contact phone number',
    'chatbot.datetime.question': 'Perfect! Now tell me the best day and time to schedule our meeting',
    'chatbot.final.message': 'Great! I have received your day and time preference information. I will contact you soon to confirm the meeting. Thank you very much and see you soon!',
    'chatbot.send': 'Send',
    'chatbot.placeholder.name': 'Enter your name...',
    'chatbot.placeholder.email': 'Enter your email...',
    'chatbot.placeholder.phone': 'Enter your phone...',
    'chatbot.placeholder.datetime': 'Enter day and time...'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
