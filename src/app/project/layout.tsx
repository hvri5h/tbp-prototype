export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-[800px] py-20">{children}</div>;
}
