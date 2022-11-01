import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <article className="rounded overflow-hidden">
      {children}
    </article>
  );
}
