import { VerifiedLinksTemplate } from "@/shared/utils/VerifiedLinksTemplate";
import { ScoresComponent } from "./components/Scores";

export default function Page() {
  return (
    <>
      <ScoresComponent />
      <VerifiedLinksTemplate />
    </>
  );
}