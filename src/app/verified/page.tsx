import Link from "next/link";

export default function Page() {

  return (
    <div className="h-full container mx-auto py-20 flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold">Welcome to the game!</h1>
      <Link href="/verified/play">
        <button className="text-3xl py-3 px-5 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-white">start</button>
      </Link>
    </div>
  );
}