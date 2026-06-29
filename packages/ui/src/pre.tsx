import { type JSX } from "react";

export function Pre({ children, className }: { children: React.ReactNode; className?: string; }): JSX.Element {
  return <pre className={className}>{children}</pre>;
}
