import ModuleHeader from "@/app/components/module-header";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[800px]">
      <ModuleHeader
        title="Initial Email Example Script"
        brief="This is an example script for an initial email to a client. It is not a template and should be customised to the specific needs of the client and the project."
        step={1}
        module={1}
      />
      <div className="flex justify-center">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSFxwgL00HDgmBnJoVoxX8TEP7qGMnMpJGaTAwcPncfAKpoZ1-flrXikOGzCZnOXA/pub?embedded=true"
          className="w-[800px] aspect-[8.5/11] [box-shadow:0_0_8px_rgba(0,0,0,0.5)]"
        />
      </div>
    </main>
  );
}
