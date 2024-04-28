"use client";

import Image from "next/image";
import { Tabs } from "./tab";
export default function TabsDemo() {
  const tabs = [
    {
      title: "Database",
      value: "Database",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-teal-400">
          <p>Database</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Email",
      value: "Email",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-orange-400">
          <p>Email</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Messaging",
      value: "Messaging",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-blue-400">
          <p>Messaging</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "LinkedIn",
      value: "LinkedIn",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-pink-400">
          <p>LinkedIn</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "Analytics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-red-400">
          <p>Analytics</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[50rem] [perspective:1000px] relative   flex flex-col mx-auto w-screen max-w-7xl  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="p-10 ">
      <a
        className="  backdrop-blur-xl bg-white/60 hover:bg-white/30 transition ease-in-out  duration-200 grid grid-cols-1 p-10  gap-4 mx-auto lg:grid-cols-5 lg:gap-8 py-20 rounded-3xl h-screen "
        href="#"
      ></a>
    </div>
  );
};
