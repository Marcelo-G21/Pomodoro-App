import { useState, useEffect, useRef } from 'react';
import TimerDisplay from './components/TimerDisplay';
import workGif from './assets/bunny-work.gif';
import breakGif from './assets/bunny-break.gif';
import ControlButtons from './components/ControlButtons';

const PomodoroTimer = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [time, setTime] = useState(25 * 60);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  useEffect(() => {
    let interval = null;

    if (time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      const newIsWorking = !isWorking;
      setIsWorking(newIsWorking);
      setTime(newIsWorking ? workTime * 60 : breakTime * 60);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [time, isWorking, workTime, breakTime]);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const calculateProgress = () => {
    const totalTime = isWorking ? workTime * 60 : breakTime * 60;
    return ((totalTime - time) / totalTime) * 100;
  };

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
        <TimerDisplay
          isWorking={isWorking}
          workGif={workGif}
          breakGif={breakGif}
          time={time}
          formatTime={formatTime}
          calculateProgress={calculateProgress}
        />
        <ControlButtons />
      </div>
    </div>
  );
};

export default PomodoroTimer;
