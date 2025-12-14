import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  CopyIcon,
  MoveRightIcon,
  PanelLeft,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5 ">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <SearchIcon className="icon" />
            <input type="text" placeholder="Search" className="flex-1" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <ShareIcon className="icon" />
          <PlusIcon className="icon" />
          <CopyIcon className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map((v, idx) => (
            <div key={idx} className="blog-post">
              <div className="col-span-2">
                <img src={v.image} alt={v.title} />
              </div>
              <div className="content">
                <p>{v.date}</p>
                <h3>{v.title}</h3>
                <a href={v.link} target="_blank" rel="noreferrer">
                  Check out the full post{" "}
                  <MoveRightIcon className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
