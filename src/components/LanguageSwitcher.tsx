
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-all ${
          language === 'pt' 
            ? 'bg-slate-900 text-white' 
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        <span className="text-sm">🇧🇷</span>
        <span className="text-xs font-medium">PT</span>
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-all ${
          language === 'en' 
            ? 'bg-slate-900 text-white' 
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        <span className="text-sm">🇺🇸</span>
        <span className="text-xs font-medium">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
