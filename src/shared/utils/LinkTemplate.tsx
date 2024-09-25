import Link from "next/link";

export const LinkTemplate = ({ path, title }: { path: string; title: string }) => (
  <Link href={path}>
    <button className=" text-3xl py-3 px-5 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-white">{title}</button>
  </Link>
);