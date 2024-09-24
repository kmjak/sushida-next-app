import { MissedAlphabet } from "./MissedAlphabets";

export interface ScoreType {
  scoreID?: string;
  userUUID: string;
  correct: number;
  incorrect: number;
  missedAlphabet: MissedAlphabet[];
  accuracyRate: number;
}