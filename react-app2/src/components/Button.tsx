import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ onClick, children }: Button) {
  return <button onClick={onClick}>{children}</button>;
}
