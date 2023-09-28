import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-white900 dark:bg-black200">
      <h1 className="text-6xl font-extrabold tracking-widest text-primaryLight dark:text-primaryDark">
        Not Found
      </h1>
      <div className="absolute rotate-12 rounded bg-accentSecondary px-2 text-sm font-semibold text-black200">
        Could not find requested resource
      </div>
      <Link
        href="/"
        className="mt-5 rounded-[562.5rem] bg-primaryLight p-4 hover:opacity-80 hover:transition-opacity dark:bg-primaryDark"
      >
        <span className="px-8 py-3 text-sm font-medium text-white900">
          Return Home
        </span>
      </Link>
    </main>
  );
}
