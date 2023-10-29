import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-5xl mx-auto">
      {children}
    </main>
  );
}
