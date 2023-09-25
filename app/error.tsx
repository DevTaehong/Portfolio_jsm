"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-white900 dark:bg-black200">
      <h1 className="text-9xl font-extrabold tracking-widest text-primaryLight dark:text-primaryDark">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-accentSecondary px-2 text-sm font-semibold text-black200">
        Page Not Found
      </div>
      <button
        onClick={() => reset()}
        className="mt-5 rounded-[562.5rem] bg-primaryLight p-4 hover:opacity-80 hover:transition-opacity dark:bg-primaryDark"
      >
        <span className="px-8 py-3 text-sm font-medium text-white900">
          Try again
        </span>
      </button>
    </main>
  );
}
