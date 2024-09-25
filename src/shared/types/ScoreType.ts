import { MissedAlphabet } from "./MissedAlphabets";

export interface ScoreType {
  scoreID?: string;
  userUUID: string;
  score?: number;
  correct: number;
  incorrect: number;
  missedAlphabet: MissedAlphabet[];
  accuracyRate: number;
}