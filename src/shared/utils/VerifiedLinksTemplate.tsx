import { LinkTemplate } from "./LinkTemplate"

export const VerifiedLinksTemplate = () => {
  return (
    <div className="flex justify-center my-5" style={{ gap: 10 }}>
      <LinkTemplate path="/verified/" title="遊ぶ" />
      <LinkTemplate path="/verified/scores" title="スコア一覧" />
      <LinkTemplate path="/verified/ranking" title="ランキング" />
    </div>
  )
}