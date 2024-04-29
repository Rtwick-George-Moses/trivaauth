import Signup from "./components/signup";
import Header from "./components/header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className=" dark:bg-neutral-700 ">
      <div className="mx-auto max-w-screen-2xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10 ">
        <Hero />
        <Signup />
      </div>
      <Header />
    </div>
  );
}
