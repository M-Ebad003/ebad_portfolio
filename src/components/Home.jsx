import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import React from "react";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  return (
    <div id="home">
      {
        <ul>
          {projects.map((v, idx) => (
            <li
              key={idx}
              className={clsx("group folder cursor-pointer", v.windowPosition)}
              onClick={() => handleOpenProjectFinder(v)}
            >
              <img src="/images/folder.png" alt={v.name} />
              <p>{v.name}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Home;
