export default function ModuleHeader({
  title,
  brief,
  step,
  module,
}: {
  title: string;
  brief: string;
  step: number;
  module: number;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center w-full">
        <h1>
          Step {step} &gt; Module {module}
        </h1>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">Brief</h3>
        <p className="text-base">{brief}</p>
      </div>
    </div>
  );
}
