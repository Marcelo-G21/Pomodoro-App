import { Play, Pause, RotateCcw } from 'lucide-react';

const ControlButtons = () => {
  return (
    <div className="space-x-4">
      <button className="px-5 py-3  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
        <Pause className="inline-block mr-2 h-5 w-5" />
        Pause
      </button>
      <button className="px-5 py-3  bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200">
        <RotateCcw className="inline-block mr-2 h-5 w-5" />
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
