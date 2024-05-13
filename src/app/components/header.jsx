import { EnvelopeIcon } from "@heroicons/react/24/outline";

{
  EnvelopeIcon;
}
export default function Header() {
  return (
    <header className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Hi,Backend still being built!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Here is how it looks for now, test it out, if you like the concept
              get in touch! 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <a
              href="https://www.linkedin.com/in/rtwick-g-moses/"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700"
            >
              <span className="text-sm font-medium"> View LinkedIn </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="mailto: rtwick612@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-orange-600 px-5 py-3 text-white transition hover:text-gray-200 "
              type="button"
            >
              <span className="text-sm font-medium"> Email </span>
              <EnvelopeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
