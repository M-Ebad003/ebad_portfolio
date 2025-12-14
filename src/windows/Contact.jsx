import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { InboxIcon } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/ebad.jpeg" alt="ebad" className="w-20 rounded-full" />

        <h3>Let's Connect</h3>
        <p>
          Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
        </p>
        <span className="flex items-center gap-1 cursor-text">
          <InboxIcon className="icon" />
          <a href="mailto:ebadmuhammad003@gmail.com">
            ebadmuhammad003@gmail.com
          </a>
        </span>

        <ul>
          {socials.map((v, idx) => (
            <li key={idx} style={{ backgroundColor: v?.bg }}>
              <a href={v.link} target="_blank" rel="noreferrer">
                <img src={v.icon} alt={v.text} className="w-5" />
                <p>{v.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
