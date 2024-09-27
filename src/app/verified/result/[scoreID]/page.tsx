import { VerifiedLinksTemplate } from "@/shared/utils/VerifiedLinksTemplate";
import { ResultsComponent } from "./components/results";

export default function Page() {

  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-6">
      <ResultsComponent />
      <VerifiedLinksTemplate />
    </div>
  );
}