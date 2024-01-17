import React, { useState } from 'react';


const MidNav = ({ activeTab, handleClick }) => {
  return (
    <main>
      <nav className="flex justify-center items-center space-x-10 mt-10">
        <div
          className={`cursor-pointer ${
            activeTab === 'home' ? 'text-blue-900 border-b-2 border-blue-900' : ''
          }`}
          onClick={() => handleClick('home')}
        >
          Study
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'about' ? 'text-blue-900 border-b-2 border-blue-900' : ''
          }`}
          onClick={() => handleClick('about')}
        >
          Quize
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'contact' ? 'text-blue-900 border-b-2 border-blue-900' : ''
          }`}
          onClick={() => handleClick('contact')}
        >
          Test
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'study' ? 'text-blue-900 border-b-2 border-blue-900' : ''
          }`}
          onClick={() => handleClick('study')}
        >
          Games
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === 'games' ? 'text-blue-900 border-b-2 border-blue-900' : ''
          }`}
          onClick={() => handleClick('games')}
        >
          Other
        </div>
      </nav>
    </main>
  );
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return <MidNav activeTab={activeTab} handleClick={handleClick} />;
};

export default Navbar;
