"use client";
import React from "react";
import {
  Stepper,
  Step,
  Button,
  Textarea,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormStatus } from "react-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import {
  CheckCircleIcon,
  SquaresPlusIcon,
  StarIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { MdLockOutline, MdLockOpen } from "react-icons/md";
import { Convert } from "./data";

export default function Signup() {
  const updateData = Convert.bind();

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
        option:
          "REST is Outdated, and GraphQL is the Future of API Development",
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const { pending } = useFormStatus();
  const notify = () => toast.success("Submitting Data!");

  const [category, setcategory] = React.useState(null);
  const [prompt, setPrompt] = React.useState("");
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onChangeEmail = ({ target }) => {
    setEmail(target.value.replace(/\s/g, ""));
  };

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <section className="mx-auto max-w-3xl py-20 h-4/6">
      <ToastContainer />
      <div className="bg-gray-100  rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="w-full md:w-full py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center p-10">
                <div className="flex items-center  text-3xl font-bold text-true-gray-800">
                  Test the System out
                </div>
                <div className="text-indigo-800 text-3xl px-5">
                  <FaCheckCircle />
                </div>
              </div>
              <p>take a stand</p>
            </div>
            <div className="w-full py-4 px-8">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step
                  className=" bg-orange-700"
                  onClick={() => setActiveStep(0)}
                >
                  <SquaresPlusIcon className="h-5 w-5 " />
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                  <StarIcon className="h-5 w-5" />
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                  <PencilSquareIcon className="h-5 w-5" />
                </Step>
              </Stepper>
              <div className="mx-auto max-w-screen-xl h-96 px-4 py-3 sm:px-6 lg:px-8">
                {activeStep == 0 ? (
                  <div className="">
                    <div className="mx-auto max-w-lg text-center">
                      <p className="p-1 text-xl font-semibold text-gray-700 ">
                        Lets Set up your profile{" "}
                      </p>
                      <p className="text-center p-3">
                        The image is generated from the Username.
                      </p>
                      <img
                        src={
                          "https://api.dicebear.com/8.x/thumbs/svg?seed=" +
                          email
                        }
                        alt="avatar"
                        className="h-40  rounded-full mx-auto"
                      />
                      <p className="text-center p-6 text-black">
                        Enter the Email you want to Use.
                      </p>
                      <div className="flex w-2/3 mx-auto ">
                        <Input
                          type="text"
                          label="Username "
                          value={email}
                          onChange={onChangeEmail}
                          className="pr-30 bg-white"
                          containerProps={{
                            className: "min-w-0",
                          }}
                        />
                        <div className="px-1">
                          <button
                            layout
                            whileHover={{
                              scale: 1.1,
                            }}
                            whiletap={{ scale: 0.9 }}
                            onClick={(e) => console.log(e)}
                            className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  ${
                              email
                                ? " bg-teal-50 text-teal-500 dark:bg-teal-600 dark:text-teal-100"
                                : " bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100"
                            }`}
                          >
                            {email ? <MdLockOpen /> : <MdLockOutline />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activeStep == 1 ? (
                  <div className="">
                    <div className="flex  items-center justify-between mx-auto max-w-lg text-center px-5 py-2">
                      <p className="p-1 text-xl font-semibold text-gray-700 ">
                        Now Pick a {category != null ? "Prompt" : "Category"}
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
                              <div className="header text-gray-600  ">
                                {option}
                              </div>
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
                      <div></div>
                    )}
                  </div>
                ) : (
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
                )}
              </div>
              <div className="mt-7 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                  Prev
                </Button>
                {activeStep == 2 ? (
                  <form action={updateData}>
                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="response" value={text} />
                    <input type="hidden" name="value" value={prompt} />
                    <Button
                      type="submit"
                      onClick={(e) => {
                        handleNext(e);
                        notify();
                      }}
                      disabled={!(email && text) && pending}
                      className="flex items-center gap-3"
                    >
                      Submit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </Button>
                  </form>
                ) : activeStep == 1 ? (
                  <Button onClick={handleNext} disabled={!prompt}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleNext} disabled={!email}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
