import AdjustButton from './AdjustButton';

const TimeAdjuster = ({ workTime,
    breakTime,
    adjustTime,
    isActive, }) => {
  return (
    <div className="flex justify-between items-center mb-8 w-full">
      <AdjustButton
        onClick={adjustTime}
        disabled={isActive}
        label="Session length"
        isSession={true}
        currentTime={workTime}
      />
      <AdjustButton
        onClick={adjustTime}
        disabled={isActive}
        label="Break length"
        isSession={false}
        currentTime={breakTime}
      />
    </div>
  );
};

export default TimeAdjuster;
