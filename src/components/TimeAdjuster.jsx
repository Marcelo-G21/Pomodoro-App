import AdjustButton from './AdjustButton';

const TimeAdjuster = ({ workTime, breakTime, adjustTime, isActive }) => {
  const handleAdjustTime = (amount, isSession) => {
    if (isSession && workTime <= 1 && amount < 0) return; // Evita que session time baje de 1
    if (!isSession && breakTime <= 1 && amount < 0) return; // Evita que break time baje de 1
    adjustTime(amount, isSession); // Llama a la función original si las condiciones son correctas
  };
  return (
    <div className="flex justify-between items-center mb-8 w-full">
      <AdjustButton
        onClick={handleAdjustTime}
        disabled={isActive}
        label="Session length"
        isSession={true}
        currentTime={workTime}
      />
      <AdjustButton
        onClick={handleAdjustTime}
        disabled={isActive}
        label="Break length"
        isSession={false}
        currentTime={breakTime}
      />
    </div>
  );
};

export default TimeAdjuster;
