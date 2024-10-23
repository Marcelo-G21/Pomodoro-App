const TimerDisplay = ({
  isWorking,
  workGif,
  breakGif,
  time,
  formatTime,
  calculateProgress,
}) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-lg md:-mt-20 mb-8 aspect-w-1 aspect-h-1">
      <svg className="w-full h-full md:w-128 md:h-128" viewBox="0 0 100 100">
        <circle
          className="text-indigo-300"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50"
          cy="50"
        />
        <circle
          className="text-indigo-500"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50"
          cy="50"
          style={{
            strokeDasharray: `${2 * Math.PI * 48}`,
            strokeDashoffset: `${
              2 * Math.PI * 48 * (1 - calculateProgress() / 100)
            }`,
            transition: 'stroke-dashoffset 1s linear',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={isWorking ? workGif : breakGif}
          alt={isWorking ? 'Working time' : 'Break time'}
          className="rounded-full w-40 h-40 md:w-72 md:h-72"
          width={160}
          height={160}
          style={{ top: '-26px', position: 'relative' }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span
          className="text-4xl md:text-6xl md:mt-40 font-bold text-gray-800 relative"
          style={{ top: '60px' }}
        >
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
};

export default TimerDisplay;
