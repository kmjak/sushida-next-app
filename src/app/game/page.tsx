"use client"
import Link from "next/link";
import { useEffect } from "react";

const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

export default function Page() {

  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetch(JWT_URL+"get", {
        method: "GET",
        credentials: 'include',
      });
      console.log(token);
    }
    fetchToken();
  }, []);

  return (
    <div className="h-full container mx-auto py-20 flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold">Welcome to the game!</h1>
      <Link href="/game/start">
        <button className="text-3xl py-3 px-5 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-white">start</button>
      </Link>
    </div>
  );
}