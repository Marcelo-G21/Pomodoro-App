import { Plus, Minus } from 'lucide-react';

const AdjustButton = ({ onClick, disabled, label, isSession, currentTime }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-sm md:text-2xl">{label}</span> {/* Cambiar tamaño de texto */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onClick(-1, isSession)}
          disabled={disabled}
          className="p-1 md:p-2 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 disabled:opacity-50"
        >
          <Minus className="h-4 w-4 md:h-8 md:w-8" /> {/* Cambiar tamaño del ícono */}
        </button>
        <span className="w-8 text-center text-base md:text-lg lg:text-2xl">{currentTime}</span> {/* Cambiar tamaño del texto */}
        <button
          onClick={() => onClick(1, isSession)}
          disabled={disabled}
          className="p-1 md:p-2 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 disabled:opacity-50"
        >
          <Plus className="h-4 w-4 md:h-8 md:w-8" /> {/* Cambiar tamaño del ícono */}
        </button>
      </div>
    </div>
  );
};

export default AdjustButton;
