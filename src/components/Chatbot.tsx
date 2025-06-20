
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ChatInterface from './ChatInterface';

export type Language = 'pt' | 'en';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedLanguage(null);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white p-4 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-200 hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[500px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-lg text-slate-900">
                {selectedLanguage === 'pt' ? 'Assistente Virtual' : 'Virtual Assistant'}
              </h3>
              <button
                onClick={handleClose}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              {!selectedLanguage ? (
                <LanguageSelector onLanguageSelect={handleLanguageSelect} />
              ) : (
                <ChatInterface 
                  language={selectedLanguage} 
                  onClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
