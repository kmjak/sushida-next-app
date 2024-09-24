import { MissedAlphabet } from "./MissedAlphabets";

export interface TimeUp {
  userUUID?: string;
  accuracyRate: number;
  totalCorrect: number;
  totalIncorrect: number;
  missedAlphabet: MissedAlphabet[];
}
