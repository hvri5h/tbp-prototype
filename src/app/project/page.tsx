import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { getStagesWithStepsAndModules } from "@/sanity/lib/queries";
import Link from "next/link";

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Project() {
  const stages = await getStagesWithStepsAndModules();

  const tabs = stages.map((stage, index) => ({
    ...stage,
    href: "#",
    current: index === 0,
  }));

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Project alpha
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Edit
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </div>
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="isolate flex -space-x-2 overflow-hidden">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Add member
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab._id}
                href="#"
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                  "flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                )}
              >
                <span
                  className={classNames(
                    tab.current
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-900",
                    "mr-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block"
                  )}
                >
                  {tab.order}
                </span>
                {tab.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div>
        {stages[0].steps.map((step, stepIndex) => (
          <ul
            key={step._id}
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl mt-8"
          >
            <div className="border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {step.title}
              </h3>
            </div>
            {step?.modules?.map((module) => (
              <li
                key={module._id}
                className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm leading-6 text-gray-900">
                      <Link href={`/project/modules/${module._id}`}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {module.title}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
