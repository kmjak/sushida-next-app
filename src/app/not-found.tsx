import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full container mx-auto py-20 flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <div className="flex gap-12 justify-center">
      <Link href="/">
        <button className="text-blue-500 text-2xl transition-all hover:text-3xl min-h-12 min-w-48 text-center">back to home</button>
      </Link>
      </div>
    </div>
  );
}