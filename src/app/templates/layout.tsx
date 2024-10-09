import ModuleFooter from "@/app/components/module-footer";

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8">
      {children}
      <ModuleFooter />
    </div>
  );
}
