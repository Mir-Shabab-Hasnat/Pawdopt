import React from "react";

interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}

const Player: React.FC<PlayerProps> = ({ initialName, symbol, isActive }) => {
  return (
    <li className={`flex items-center justify-center w-1/2 border-2 ${isActive ? 'border-purple animate-pulse' : 'border-transparent'} p-2`}>
      <div className="text-center">
        <p className={`text-lg text-gray-200 ${isActive ? 'text-purple' : ''}`}>{initialName}</p>
        <p className={`text-2xl text-gray-200 ${isActive ? 'text-purple' : ''}`}>{symbol}</p>
      </div>
    </li>
  );
};

export default Player;
