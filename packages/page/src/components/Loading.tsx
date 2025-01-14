import { type ReactElement } from "react";

export function Loading(): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7A00]"></div>
    </div>
  );
}
