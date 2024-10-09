import { ContentBlock, getModule } from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

interface ModulePageProps {
  params: { id: string };
}

export default async function Module({ params }: ModulePageProps) {
  const moduleData = await getModule(params.id);

  if (!moduleData) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{moduleData.title}</h1>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {moduleData.description}
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 flex items-center">
              Status
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center">
              <select
                id="status"
                name="status"
                defaultValue="Not started"
                className="block w-52 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Not started">Not started</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 flex items-center">
              Assigned to
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center">
              <select
                id="status"
                name="status"
                defaultValue="Unassigned"
                className="block w-52 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Unassigned">Unassigned</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </dd>
          </div>
        </dl>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {moduleData.instructions}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            {moduleData.contentBlocks?.map((block) => (
              <div key={block._key}>{renderContentBlock(block)}</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Notes</h3>
          <textarea className="w-full p-4 border border-gray-300 rounded-md bg-white h-[200px]" />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <Link href="/project">
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
    </div>
  );
}

function renderContentBlock(block: ContentBlock) {
  switch (block.contentType) {
    case "pdf":
      return block.pdfFile?.asset?.url ? (
        <a
          href={block.pdfFile.asset.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View PDF
        </a>
      ) : (
        <p>PDF file not available</p>
      );
    case "video":
      return block.videoUrl ? (
        <a
          href={block.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Watch Video
        </a>
      ) : (
        <p>Video URL not available</p>
      );
    case "docx":
      return block.docxFile?.asset?.url ? (
        <div className="w-full aspect-video">
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(block.docxFile.asset.url)}`}
            width="100%"
            height="100%"
            frameBorder="0"
          >
            This is an embedded{" "}
            <a target="_blank" href={block.docxFile.asset.url}>
              Microsoft Office document
            </a>{" "}
            powered by{" "}
            <a target="_blank" href="https://office.com">
              Office
            </a>
            .
          </iframe>
        </div>
      ) : (
        <p>DOCX file not available</p>
      );
    case "text":
      return block.textContent ? (
        <PortableText
          value={block.textContent}
          components={{
            block: {
              normal: ({ children }) => <p className="mb-4">{children}</p>,
            },
          }}
        />
      ) : (
        <p>Text content not available</p>
      );
    default:
      return <p>Unknown content type</p>;
  }
}
