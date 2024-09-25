import { LinkTemplate } from "@/shared/utils/LinkTemplate";
import { ScoresComponent } from "./components/Scores";

export default function Page() {
  return (
    <>
      <ScoresComponent />
      <div className="flex justify-center gap-8 my-5">
        <LinkTemplate path="/verified/" title="もう一度遊ぶ" />
        <LinkTemplate path="/verified/scores" title="スコア一覧" />
        <LinkTemplate path="/verified/ranking" title="ランキング" />
      </div>
    </>
  );
}