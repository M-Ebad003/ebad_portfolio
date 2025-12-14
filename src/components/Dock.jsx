import { dockApps } from "#constants";
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const dockRef = useRef(null);
  const { windows, openWindow, closeWindow } = useWindowStore();

  const toggleApp = (app) => {
    if (!app?.canOpen) return;

    const window = windows[app?.id];

    if (window?.isOpen) {
      closeWindow(app?.id);
    } else {
      openWindow(app?.id);
    }
  };

  useGSAP(() => {
    const doc = dockRef.current;
    if (!doc) return;

    const icons = doc.querySelectorAll(".dock-icon");

    const animateIcon = (mouseX) => {
      const { left } = doc.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = doc.getBoundingClientRect();
      animateIcon(e.clientX - left);
    };
    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          duration: 0.3,
          ease: "power2.out",
          scale: 1,
          y: 0,
        });
      });
    };

    doc.addEventListener("mousemove", handleMouseMove);
    doc.addEventListener("mouseleave", resetIcons);

    return () => {
      doc.removeEventListener("mousemove", handleMouseMove);
      doc.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return (
    <section ref={dockRef} id="dock">
      <div className="dock-container">
        {dockApps.map((v) => (
          <div key={v?.id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={v?.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={v?.name}
              data-tooltip-delay-show={150}
              disabled={!v?.canOpen}
              onClick={() => toggleApp(v)}
            >
              <img
                src={`/images/${v?.icon}`}
                alt={v?.name}
                loading="lazy"
                className={v?.canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
