import { Play, Pause, RotateCcw } from 'lucide-react';

const ControlButtons = ({ isActive, toggleTimer, resetTimer }) => {
  return (
    <div className="space-x-4 md:space-x-8">
      <button
        onClick={toggleTimer}
        className="px-5 py-3 md:px-7 md:py-5 md:text-xl bg-indigo-500  text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
      >
        {isActive ? (
          <Pause className="inline-block mr-2 h-5 w-5 md:h-7 md:w-7" />
        ) : (
          <Play className="inline-block mr-2 h-5 w-5 md:h-7 md:w-7" />
        )}
        {isActive ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={resetTimer}
        className="px-5 py-3 md:px-7 md:py-5 md:text-2xl bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200"
      >
        <RotateCcw className="inline-block mr-2 h-5 w-5 md:h-7 md:w-7" />
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
