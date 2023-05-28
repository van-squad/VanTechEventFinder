export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
