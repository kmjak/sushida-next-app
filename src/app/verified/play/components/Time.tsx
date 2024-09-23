import { useTimer } from "../hooks/useTimer";

export const TimeComponent = ({accuracyRate}:{accuracyRate:number}) => {
  const {
    timeLeft,
    progressBarWidth,
    barColor,
    handleTimeUp,
  } = useTimer();

  if(timeLeft === 0){
    handleTimeUp(accuracyRate);
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-5">
        {Math.ceil(timeLeft)}秒
      </h1>
      <div className="w-full max-w-lg h-2 bg-gray-200 rounded">
        <div
          className={`h-full rounded ${barColor}`}
          style={{
            width: `${progressBarWidth}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </>
  );
};