
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from './Chatbot';

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h4 className="font-bold text-xl text-slate-900 mb-2">
          {t('chatbot.welcome')}
        </h4>
        <p className="text-slate-600">
          {t('chatbot.selectLanguage')}
        </p>
      </div>

      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={() => onLanguageSelect('pt')}
          className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <span className="text-xl">🇧🇷</span>
          <span>{t('chatbot.portuguese')}</span>
        </button>
        
        <button
          onClick={() => onLanguageSelect('en')}
          className="w-full border-2 border-slate-900 text-slate-900 py-3 px-6 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <span className="text-xl">🇺🇸</span>
          <span>{t('chatbot.english')}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
