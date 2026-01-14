import React from 'react';

const TranslateComponent = () => {
  // Function to change language
  const changeLanguage = (lang) => {
    document.cookie = `googtrans=/en/${lang}; path=/`;
    window.location.reload();
  };

  // Function to reset to original (English)
  const resetLanguage = () => {
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "googtrans=/en/en; path=/";
    window.location.reload();
  };

  return (
    <div className="flex gap-4">
      <button 
        onClick={() => changeLanguage('hi')}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        हिंदी (Hindi)
      </button>
      <button 
        onClick={resetLanguage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        English
      </button>
    </div>
  );
};

export default TranslateComponent;
