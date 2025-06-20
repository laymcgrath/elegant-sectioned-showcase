
import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Language } from './Chatbot';

interface ChatInterfaceProps {
  language: Language;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  schedule: string;
}

type Step = 'greeting' | 'name' | 'email' | 'phone' | 'schedule' | 'complete';

const ChatInterface = ({ language, onClose }: ChatInterfaceProps) => {
  const [step, setStep] = useState<Step>('greeting');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    schedule: ''
  });
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const texts = {
    pt: {
      greeting: 'Olá, tudo bem?',
      greetingQuestion: 'Gostaria de agendar um horário para falar comigo?',
      yesButton: 'Sim',
      nameQuestion: 'Primeiramente, me diga qual o seu nome',
      emailQuestion: 'Qual seu e-mail?',
      phoneQuestion: 'Me informe um telefone de contato',
      scheduleQuestion: 'Perfeito! Agora me diga qual o melhor dia e horário para agendarmos uma reunião',
      completion: 'Ótimo! Recebi as informações da sua preferência de dia e horário. Irei entrar em contato com você em breve para confirmar a reunião. Muito obrigada e até logo!',
      placeholder: 'Digite sua resposta...',
      send: 'Enviar'
    },
    en: {
      greeting: 'Hello, how are you?',
      greetingQuestion: 'Would you like to schedule a time to talk with me?',
      yesButton: 'Yes',
      nameQuestion: 'First, please tell me your name',
      emailQuestion: 'What is your email?',
      phoneQuestion: 'Please provide a contact phone number',
      scheduleQuestion: 'Perfect! Now tell me the best day and time to schedule our meeting',
      completion: 'Great! I have received your preferred day and time information. I will contact you soon to confirm the meeting. Thank you very much and see you soon!',
      placeholder: 'Type your answer...',
      send: 'Send'
    }
  };

  const currentTexts = texts[language];

  useEffect(() => {
    addBotMessage(currentTexts.greeting);
    setTimeout(() => {
      addBotMessage(currentTexts.greetingQuestion);
    }, 1000);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { text, isBot: true }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { text, isBot: false }]);
  };

  const handleYesClick = () => {
    addUserMessage(currentTexts.yesButton);
    setStep('name');
    setTimeout(() => {
      addBotMessage(currentTexts.nameQuestion);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    switch (step) {
      case 'name':
        setFormData(prev => ({ ...prev, name: inputValue }));
        setStep('email');
        setTimeout(() => {
          addBotMessage(currentTexts.emailQuestion);
        }, 500);
        break;
      
      case 'email':
        setFormData(prev => ({ ...prev, email: inputValue }));
        setStep('phone');
        setTimeout(() => {
          addBotMessage(currentTexts.phoneQuestion);
        }, 500);
        break;
      
      case 'phone':
        setFormData(prev => ({ ...prev, phone: inputValue }));
        setStep('schedule');
        setTimeout(() => {
          addBotMessage(currentTexts.scheduleQuestion);
        }, 500);
        break;
      
      case 'schedule':
        setFormData(prev => ({ ...prev, schedule: inputValue }));
        setStep('complete');
        setTimeout(() => {
          addBotMessage(currentTexts.completion);
          setTimeout(() => {
            onClose();
          }, 3000);
        }, 500);
        break;
    }

    setInputValue('');
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isBot
                  ? 'bg-slate-100 text-slate-900'
                  : 'bg-slate-900 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {step === 'greeting' && messages.length >= 2 && (
          <div className="flex justify-start">
            <button
              onClick={handleYesClick}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {currentTexts.yesButton}
            </button>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      {step !== 'greeting' && step !== 'complete' && (
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type={step === 'email' ? 'email' : step === 'phone' ? 'tel' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={currentTexts.placeholder}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center space-x-1"
            >
              <Send size={16} />
              <span className="hidden sm:inline">{currentTexts.send}</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
