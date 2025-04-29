import React from 'react';
import ProfileCard from './components/ProfileCard';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProfileCard
        name="Isaac Nyarko"
        role="Frontend Developer"
        photoUrl="https://i.pinimg.com/736x/12/dd/e9/12dde9625405bf3a5663309acc99f68f.jpg"
      />

    </div>
    
  );
};

export default App;
