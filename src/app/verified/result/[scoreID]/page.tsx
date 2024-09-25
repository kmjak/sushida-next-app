import { LinkTemplate } from "@/shared/utils/LinkTemplate";
import { ResultsComponent } from "./components/results";

export default function Page() {

  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-6">
      <ResultsComponent />
      <div className="flex justify-center gap-8">
        <LinkTemplate path="/verified/play" title="もう一度遊ぶ" />
        <LinkTemplate path="/verified/scores" title="スコア一覧" />
        <LinkTemplate path="/verified/ranking" title="ランキング" />
      </div>
    </div>
  );
}