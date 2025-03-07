"use client";
import { MdLockOutline, MdLockOpen, MdDataArray } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Validate } from "./data";
import { ToastContainer, toast } from "react-toastify";

const array_prompt = [
  [
    { option: "Server-side rendering is underrated", value: 0.912 },
    { option: "JSX is polarizing but powerful", value: 0.914 },
    { option: "State management is a wild west", value: 0.916 },
    { option: "Function components are the future", value: 0.918 },
  ],
  [
    {
      option: "Serverless is Just Another Name for Vendor Lock-In",
      value: 0.922,
    },
    {
      option: "Microservices Are Overhyped and Often Lead to Complexity",
      value: 0.924,
    },
    {
      option: "REST is Outdated, and GraphQL is the Future of API Development",
      value: 0.926,
    },
    {
      option:
        "ORMs (Object-Relational Mapping) Are More Trouble Than They're Worth",
      value: 0.928,
    },
  ],
  [
    {
      option: "Scrum Masters Are Redundant and Serve No Real Purpose",
      value: 0.932,
    },
    { option: "Scrum Rituals Are Wasteful and Distracting", value: 0.94 },
    {
      option:
        "Scrum Encourages Short-term Thinking and Sacrifices Long-term Planning",
      value: 0.946,
    },
    {
      option: "Scrum Is Not Agile, It's Just Another Form of Waterfall",
      value: 0.958,
    },
  ],
  [
    {
      option:
        "User Testing Is Overrated and Doesn't Always Reflect Real-world Usage",
      value: 0.962,
    },
    {
      option: "Dark Patterns Are Acceptable if They Serve Business Goals",
      value: 0.914,
    },
    {
      option:
        "Design Systems Stifle Creativity and Lead to Homogenized Interfaces",
      value: 0.976,
    },
    {
      option:
        "Accessibility Shouldn't Be a Priority if the Target Doesn't Require It",
      value: 0.998,
    },
  ],
];
const array_sections = [
  { option: "Frontend", Id: 0 },
  { option: "Backend", Id: 1 },
  { option: "Scrum", Id: 2 },
  { option: "UI/UX", Id: 3 },
];

function row({ item }) {
  const [open, setOpen] = React.useState(false);
  const [category, setcategory] = React.useState(null);
  const [prompt, setPrompt] = React.useState("");
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [locked, setLocked] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const file = new Blob([item], { type: "text/plain" });
  async function submit_form(e) {
    const response = await Validate(e);
    setLocked(response);
    if (response == true) {
      handleOpen();
      toast.success("congrats you are logged in!");
    } else {
      toast.error("Did not work!");
    }
  }
  console.log(item);
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [decodeURIComponent(encodeURI(JSON.stringify(item)))],
      {
        type: "application/json;charset=utf-8;",
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = "data.json";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={downloadTxtFile}
            layout
            whileHover={{
              scale: 1.1,
            }}
            whiletap={{ scale: 0.9 }}
            className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  bg-gray-50 text-gray-500 dark:bg-gray-600 dark:text-gray-100`}
          >
            <MdDataArray />
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  `https://api.dicebear.com/8.x/thumbs/svg?seed=` +
                  item.userName
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.userName}</div>
          </div>
        </div>
      </td>
      <td>
        {item.Model}
        <br />
        <span className="badge badge-ghost badge-sm bg-amber-50 text-amber-500">
          Google
        </span>
      </td>
      <td className="">
        <button
          layout
          whileHover={{
            scale: 1.1,
          }}
          whiletap={{ scale: 0.9 }}
          onClick={handleOpen}
          className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  ${
            locked
              ? " bg-teal-50 text-teal-500 dark:bg-teal-600 dark:text-teal-100"
              : " bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100"
          }`}
        >
          {locked ? <MdLockOpen /> : <MdLockOutline />}
        </button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody>
            <div className="">
              <div className="flex  items-center justify-between mx-auto max-w-lg text-center px-5 py-2">
                <p className="p-1 text-xl font-semibold text-gray-700 ">
                  Hi, Pick your {category != null ? "Prompt" : "Category"}
                </p>

                <div className="w-auto bg-white">
                  <Select label="Select category">
                    {array_sections.map(({ option, Id }) => (
                      <Option
                        className={
                          category == Id ? "bg-teal-50 text-teal-800" : ""
                        }
                        onClick={() => {
                          setcategory(Id);
                          setPrompt("");
                        }}
                      >
                        {option}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              {category != null ? (
                array_prompt[category].map(({ option, value }) => (
                  <a onClick={() => setPrompt(value)}>
                    <div
                      className={`each flex hover:shadow select-none p-3 rounded-md border-gray-300 ${
                        prompt == value
                          ? "bg-orange-50 border-solid border-2 border-orange-200 "
                          : "bg-white"
                      } border mb-3 cursor-pointer`}
                    >
                      <div className="left">
                        <div className="header text-gray-600  ">{option}</div>
                      </div>
                      <div className="right m-auto mr-0 text-orange-700 ">
                        {prompt == value ? (
                          <CheckCircleIcon className="h-8" />
                        ) : (
                          <div className="h-8" />
                        )}
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <></>
              )}
              {category != null && prompt != "" ? (
                <div className="">
                  <div className="mx-auto max-w-lg text-center p-2">
                    <p className="p-3 text-xl font-semibold text-gray-700  ">
                      Now take a stand and make a point{" "}
                    </p>
                    <p className="bg-amber-50 py-8 px-3  rounded-xl text-gray-700 text-center">
                      {prompt
                        ? array_prompt[category].filter(
                            (item) => item.value == prompt
                          )[0].option
                        : " no prompt selected"}
                    </p>
                  </div>

                  <div
                    action="#"
                    className="mx-auto mb-0 pt-2 max-w-md space-y-4"
                  >
                    <div>
                      <div className=" ">
                        <Textarea
                          variant="outlined"
                          label="Respond to the prompt, make it unique to you."
                          className="bg-white h-10"
                          value={text}
                          onChange={({ target }) => setText(target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              className="mr-1"
              color="black"
              onClick={handleOpen}
            >
              <span>close</span>
            </Button>
            <form action={submit_form}>
              <input type="hidden" name="temp_array" value={item.temp_array} />
              <input
                type="hidden"
                name="stored_array"
                value={item.stored_array}
              />

              <input type="hidden" name="response" value={text} />
              <input type="hidden" name="value" value={prompt} />
              <Button
                variant="gradient"
                color="black"
                type="submit"
                onClick={(e) => {
                  console.log("checkingdata");
                }}
                disabled={!text}
              >
                <span>submit</span>
              </Button>
            </form>
          </DialogFooter>
        </Dialog>
      </td>
      <th>
        <div className="mb-2 flex gap-2 my-auto">
          <span className="mb-2 h-[15px]  w-10 rounded-xl bg-red-600"></span>
          <span className="mb-2 h-[15px]  w-10 rounded-xl bg-amber-600"></span>
          <span className="mb-2 h-[15px]  w-10 rounded-xl bg-teal-600"></span>
        </div>
      </th>
    </tr>
  );
}
export default function Datagrid({ data }) {
  console.log(data);
  return (
    <div className="mx-auto max-w-7xl py-20">
      <ToastContainer />
      <div className="flex items-center justify-center p-10">
        <div className="text-indigo-800 text-3xl px-5">
          <FaDatabase />
        </div>
        <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
          TriviaDatabase
        </div>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>data dump</th>
            <th>Name</th>
            <th>Embedding Model</th>
            <th>Log In</th>
            <th>Password Strength</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => row({ item }))}
          {/* row 1 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
