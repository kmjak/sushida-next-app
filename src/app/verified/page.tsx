import Link from "next/link";

export default function Page() {

  return (
    <div className="h-full container mx-auto py-20 flex flex-col justify-center items-center gap-12">
      <Link href="/verified/play">
        <button className="text-3xl py-3 px-5 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-white">ゲーム開始</button>
      </Link>
      <div className="flex justify-center gap-12">
        <Link href="/verified/scores">
          <button className="text-2xl py-1 px-4 ransition-colors text-black border-b-2 border-black">スコア一覧</button>
        </Link>
        <Link href="/verified/ranking">
          <button className="text-2xl py-1 px-4 ransition-colors text-black border-b-2 border-black">ランキング</button>
        </Link>
      </div>
    </div>
  );
}