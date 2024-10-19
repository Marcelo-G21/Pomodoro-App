const TimerDisplay = ({ time, workGif, breakGif }) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-80 md:-mt-20 mb-8 aspect-w-1 aspect-h-1">
      <svg className="w-full h-full" viewBox="0 0 100 100">
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
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={workGif}
          className="rounded-full w-40 h-40"
          width={160}
          height={160}
          style={{ top: '-26px', position: 'relative' }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span
          className="text-4xl font-bold text-gray-800 relative"
          style={{ top: '60px' }}
        >
          {time}
        </span>
      </div>
    </div>
  )
}

export default TimerDisplay