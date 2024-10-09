import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <div className="flex flex-col gap-8">
        <Link className="text-xl underline" href="/project">
          Project prototype
        </Link>
        <Link className="text-xl underline" href="/templates">
          Module templates
        </Link>
      </div>
    </div>
  );
}
