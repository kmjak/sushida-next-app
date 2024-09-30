import { VerifiedLinksTemplate } from "@/shared/utils/VerifiedLinksTemplate";
import { RankingComponent } from "./components/ranking";

export default function Page() {
  return (
    <div className="mt-12 min-h-full flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">TOP 10 Ranking</h1>
      <RankingComponent />
      <VerifiedLinksTemplate />
    </div>
  );
}