import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isAccordion, setIsAccordion] = useState(false);
  return (
    <div className="py-3">
      <button
        onClick={() => setIsAccordion(!isAccordion)}
        className="flex justify-between items-center text-left w-full"
      >
        <span className="font-normal ">{question}</span>
        {/* {isAccordion ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isAccordion && "rotate-180"}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isAccordion && "rotate-180"}`}
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out text-sm text-slate-600 ${isAccordion ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden text-left pr-5">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
