import { LinkTemplate } from "./LinkTemplate"

export const VerifiedLinksTemplate = () => {
  return (
    <div className="flex justify-center gap-8 my-5">
    <LinkTemplate path="/verified/" title="遊ぶ" />
    <LinkTemplate path="/verified/scores" title="スコア一覧" />
    <LinkTemplate path="/verified/ranking" title="ランキング" />
  </div>
  )
}