import Link from "next/link";
import { ResultsComponent } from "./components/results";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-5/6 w-full">
      <ResultsComponent />
      <Link href="/verified/play">
        <button className="mt-8 text-3xl py-3 px-5 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-white">もう一度プレイ</button>
      </Link>
    </div>
  );
}