import ModuleHeader from "@/app/components/module-header";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 max-w-[800px]">
      <ModuleHeader
        title="TPB Qualifying Questionnaire"
        brief="Fill out this questionnaire Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisi nunc tincidunt nunc, nec tincidunt nunc nunc id nunc. Sed euismod, nunc id aliquam tincidunt, nisi nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
        step={1}
        module={1}
      />
      <div className="w-full">
        <iframe
          id="JotFormIFrame-242770261018855"
          title="New Customer Registration Form"
          allowTransparency={true}
          src="https://form.jotform.com/242770261018855"
          frameBorder={0}
          style={{
            width: "100%",
          }}
        ></iframe>
      </div>
    </main>
  );
}
