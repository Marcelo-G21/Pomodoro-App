import TimerDisplay from './components/TimerDisplay';
import workGif from './assets/bunny-work.gif';
import breakGif from './assets/bunny-break.gif';

const PomodoroTimer = () => {
  const time = '25:00';

  return (
    <div className="flex flex-col min-h-screen bg-indigo-100">
      <div className="title-container w-full mt-8">
        <div className="flex items-center justify-center w-full">
          <div className="flex-grow h-2 bg-indigo-400 md:h-2"></div>
          <h1 className="text-4xl text-gray-800 mx-4 text-center">
            Pomodoro Timer
          </h1>
          <div className="flex-grow h-2 bg-indigo-400 md:h-2"></div>
        </div>
      </div>
        <div className="flex flex-col p-6 sm:p-8 items-center w-full pl-12 pr-12">
          <TimerDisplay workGif={workGif} breakGif={breakGif} time={time} />
      </div>
    </div>
  );
};

export default PomodoroTimer;
