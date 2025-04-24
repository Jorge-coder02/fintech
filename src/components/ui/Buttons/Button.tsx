import { ReactNode } from "react";

type Props = { children: ReactNode; clases?: string };

function Button({ children, clases }: Props) {
  return (
    <button
      type="button"
      className={`px-6 py-2 rounded-md font-semibold bg-[#05a69f] text-[#fff] hover:opacity-80 ${clases}`}
    >
      {children}
    </button>
  );
}

export default Button;
