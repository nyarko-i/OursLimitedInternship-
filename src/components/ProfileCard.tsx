import 'tailwindcss' 
import React from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  photoUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, photoUrl }) => {
  return (
    <div className="w-72 p-6 rounded-xl text-center bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={photoUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <p className="text-gray-800"><strong>Name:</strong> {name}</p>
      <p className="text-gray-800"><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default ProfileCard;
