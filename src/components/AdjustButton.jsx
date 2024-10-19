import { Plus, Minus } from 'lucide-react';

const AdjustButton = ({ onClick, disabled, label, isSession, currentTime }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2">{label}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onClick(-1, isSession)}
          disabled={disabled}
          className="p-1 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{currentTime}</span> {/* Utiliza currentTime aquí */}
        <button
          onClick={() => onClick(1, isSession)}
          disabled={disabled}
          className="p-1 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
export default AdjustButton;
