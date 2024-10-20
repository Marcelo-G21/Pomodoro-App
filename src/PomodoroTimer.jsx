import { useState, useEffect, useRef } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimeAdjuster from './components/TimeAdjuster';
import workGif from './assets/bunny-work.gif';
import breakGif from './assets/bunny-break.gif';
import ControlButtons from './components/ControlButtons';
import BreakSound from '../src/assets/Break.mp3';
import WorkSound from '../src/assets/Work.mp3';

const PomodoroTimer = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const workAudioRef = useRef(new Audio(WorkSound));
  const breakAudioRef = useRef(new Audio(BreakSound));

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      const newIsWorking = !isWorking;
      setIsWorking(newIsWorking);
      setTime(newIsWorking ? workTime * 60 : breakTime * 60);

      if (newIsWorking) {
        workAudioRef.current.play();
      } else {
        breakAudioRef.current.play();
      }

    } else {
      if (interval) clearInterval(interval);
    }

    

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isWorking, workTime, breakTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(workTime * 60);
    setIsWorking(true);
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const adjustTime = (amount, isWorkTime) => {
    if (!isActive) {
      if (isWorkTime) {
        setWorkTime(Math.max(1, workTime + amount));
        if (isWorking) setTime((workTime + amount) * 60);
      } else {
        setBreakTime(Math.max(1, breakTime + amount));
        if (!isWorking) setTime((breakTime + amount) * 60);
      }
    }
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
      <div className="bg-indigo-200 bg-opacity-80 p-6 sm:p-8 lg:p-12 mt-8 w-full flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col items-center w-full pl-12 pr-12">
          <div className="flex items-center justify-between w-full">
            <TimeAdjuster
              workTime={workTime}
              breakTime={breakTime}
              adjustTime={adjustTime}
              isActive={isActive}
            />
          </div>

          <TimerDisplay
            isWorking={isWorking}
            workGif={workGif}
            breakGif={breakGif}
            time={time}
            formatTime={formatTime}
            calculateProgress={calculateProgress}
          />
          <ControlButtons
            isActive={isActive}
            toggleTimer={toggleTimer}
            resetTimer={resetTimer}
          />
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
