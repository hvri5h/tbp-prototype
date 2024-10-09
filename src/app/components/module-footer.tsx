import Link from "next/link";

export default function ModuleFooter() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Notes</h3>
        <textarea className="w-full p-4 border border-gray-300 rounded-md bg-white h-[200px]" />
      </div>

      <div className="flex justify-between">
        <Link href="/">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
            Back to project
          </button>
        </Link>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
            Mark as complete
          </button>
        </div>
      </div>
    </div>
  );
}
