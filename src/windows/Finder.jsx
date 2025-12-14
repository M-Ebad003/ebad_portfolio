import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import React from "react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item?.fileType === "pdf") return openWindow("resume");
    if (item?.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item?.fileType) && item?.href)
      return window.open(item?.href, "_blank");

    openWindow(`${item?.fileType}${item?.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items?.map((v, idx) => (
          <li
            className={clsx(
              v?.id === activeLocation?.id ? "active" : "not-active"
            )}
            onClick={() => setActiveLocation(v)}
            key={idx}
          >
            <img src={v.icon} alt={v.name} className="w-4" />
            <p className="text-sm font-medium truncate">{v.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <SearchIcon className="icon" />
      </div>

      <div className="bg-white h-full flex">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item, idx) => (
            <li
              key={item?.id}
              className={`${item?.position} cursor-pointer`}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
