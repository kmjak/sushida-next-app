import { useRouter } from "next/navigation";
import { useTimer } from "../hooks/useTimer";
import { TimeUp } from "@/shared/types/TimeUp";
import { useJWT } from "../hooks/useJWT";
import { useEffect } from "react";


export const TimeComponent = ({
  accuracyRate,
  totalCorrect,
  totalIncorrect,
  missedAlphabet,
} : TimeUp ) => {
  const router = useRouter();
  const {
    timeLeft,
    progressBarWidth,
    barColor,
    handleTimeUp,
  } = useTimer();

  const { handleGetJWT } = useJWT();

  useEffect(() => {
    const processTimeUp = async () => {
      if(timeLeft === 0){
        const userUUID = await handleGetJWT();
        if(userUUID == null) return;
        const res = await handleTimeUp({
          userUUID,
          accuracyRate,
          totalCorrect,
          totalIncorrect,
          missedAlphabet,
        });
        router.push(`/verified/result/${res}`);
      }
    }
    processTimeUp();
  }
  ,[timeLeft])

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