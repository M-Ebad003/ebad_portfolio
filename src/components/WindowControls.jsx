import useWindowStore from "#store/window";
import React from "react";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div
        className="dot close"
        onClick={() => closeWindow(target)}
        data-tip="Close"
      />
      <div
        className="dot minimize"
        data-tip="Minimize"
        onClick={() => minimizeWindow(target)}
      />
      <div
        className="dot maximize"
        data-tip="Maximize"
        onClick={() => maximizeWindow(target)}
      />
    </div>
  );
};

export default WindowControls;
