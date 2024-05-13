import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "signup:",
    description:
      "So for you to test it out, sign up remember the question you answered, and how you answered",
    icon: CloudArrowUpIcon,
  },
  {
    name: " Find your account:",
    description:
      "Look in the Database table and find your entry, click on the lock Icon ",
    icon: LockClosedIcon,
  },
  {
    name: "login:",
    description:
      " pick the question you choose and answer it the same way, it doesn't need to be verbatim but in the same sentiment",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                what we are trying to do.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                Remembering passwords are a pain, remembering your opinion on a
                subject is not, so we try and use that to secure an account.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <h2 className="text-lg text-gray-500  font-semibold text-center">
                  Test in 3 steps
                </h2>
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline  text-justify">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="  content-center">
            <img
              src="https://assets.materialup.com/uploads/f7fb023a-1295-4be1-999c-27103aa6a2df/preview.gif"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl shadow-orange-600  ring-1 ring-gray-400/10  "
              width={2432}
              height={1442}
            />
            <h2 className="text-lg text-gray-500 pt-10   text-center">
              Just FYI, the video is stock footage, it looked cool.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
