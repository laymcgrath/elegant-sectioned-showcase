
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
