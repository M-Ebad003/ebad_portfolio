import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { CheckIcon, FlagIcon } from "lucide-react";
import React from "react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target='terminal' />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@ebad % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map((v, idx) => (
            <li className="flex items-center" key={idx}>
              <CheckIcon className="check" size={20} />
              <h3>{v.category}</h3>
              <ul>
                {v.items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < v.items.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <CheckIcon size={20} /> 5 of 5 stacks loaded successfully (100%)
          </p>
          <p className="text-black">
            <FlagIcon size={15} fill="black" /> Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
