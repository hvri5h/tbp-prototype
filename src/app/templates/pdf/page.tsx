import PDFEmbed from "@/app/components/pdf-embed";
import ModuleHeader from "@/app/components/module-header";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[800px]">
      <ModuleHeader
        title="Prescribed Client Checklist"
        brief="A building is required to provide the client with this checklist and
          other prescribed disclosure information under the Building Act 2004 before you
          sign a contract for the building work if, a. the client requests this
          checklist and the prescribed disclosure information; or b. the
          building work is going to cost $30,000 or more (including GST)."
        step={1}
        module={1}
      />
      <PDFEmbed />
    </main>
  );
}
