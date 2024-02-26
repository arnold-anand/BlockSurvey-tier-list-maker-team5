import React from "react";
import { Link } from "react-router-dom";
import StepOne from "./StepOne";

export default function NewTieron({session}) {
  return (
    <div className="">
      <div className="flex w-full items-start p-7">
        <button className="w-[73px] h-[30px] rounded-[8px] shadow-md">
          <div className="flex items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <Link to="/">
              <div className="font-montserrat text-[14px]">Back</div>
            </Link>
          </div>
        </button>
      </div>
      <div className="h-[1px] bg-gray-200"></div>

      <div className="flex items-center justify-center space-x-20">
        <div className="w-[260px] h-[282px] shadow-md rounded-[8px] my-10 flex flex-col justify-between items-start p-5 text-left">
          <button className="text-left">
            <div>
              <div className="font-open-sans text-[18px]">Step 1</div>
              <div className="font-open-sans text-[12px] text-gray-400">
                Describe Tier List
              </div>
            </div>
          </button>
          <button className="text-left">
            <div>
              <div className="font-open-sans text-[18px]">Step 2</div>
              <div className="font-open-sans text-[12px] text-gray-400">
                Setup Tiers
              </div>
            </div>
          </button>
          <button className="text-left">
            <div>
              <div className="font-open-sans text-[18px]">Step 3</div>
              <div className="font-open-sans text-[12px] text-gray-400">
                Choose Images
              </div>
            </div>
          </button>
        </div>
        <StepOne session={session}></StepOne>
      </div>
    </div>
  );
}
