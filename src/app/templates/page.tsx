import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Module templates</h1>
        <Link className="text-xl underline" href="/pdf">
          Template 1 (Embedded PDF)
        </Link>
        <Link className="text-xl underline" href="/g-doc">
          Template 2 (Embedded Google Doc)
        </Link>
        <Link className="text-xl underline" href="/form">
          Template 3 (Embedded external form)
        </Link>
        {/* <Link className="text-xl underline" href="/tbp-form">
        Template 4 (TPB Form)
      </Link> */}
        <Link className="text-xl underline" href="/local">
          Template 4 (Local form)
        </Link>
        <Link className="text-xl underline" href="/video">
          Template 5 (Video embed)
        </Link>
      </div>
    </div>
  );
}
