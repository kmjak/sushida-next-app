"use client"

import { useScores } from "@/hooks/useScores";
import { OptionsComponent } from "./Options";
import { ScoresListComponents } from "./ScoresList";
import { WeaknessAlphabetsComponent } from "./WeaknessAlphabets";

export const ScoresComponent = () => {

  const {
    myScores,
    setViewMode,
    viewMode,
    top3Scores,
    weaknessAlphabets,
  } = useScores();


  return (
    <div className="mb-5">
      <OptionsComponent setViewMode={setViewMode} />
      {viewMode == "all" ? (
        <ScoresListComponents myScores={myScores} />
      ) : (
        viewMode == "top3" ? (
          <ScoresListComponents myScores={top3Scores} />
        ) : (
          <WeaknessAlphabetsComponent weaknessAlphabets={weaknessAlphabets} />
        )
      )}
    </div>
  );
}